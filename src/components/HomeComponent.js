import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Button, Card, CardTitle, CardSubtitle } from 'reactstrap';

import './HomeStyle.css';
import Footer from './FooterComponent';

// import { baseUrl } from '../shared/baseUrl';

class RenderPet extends Component {
	handleDelete(id) {
		// console.log('http://localhost:4000/api/pets/removepet/' + id);
		fetch('http://localhost:4000/api/pets/removepet/' + id, {
			method: 'DELETE'
		}).then(
			(response) => {
				if (response.ok) {
					// window.location.reload(false);
					// this.props.history.push('/home');
					window.location = '/home';
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					// console.log('error occured', error);
					this.setState({ error: error });
				}
			},
			(error) => {
				throw error;
			}
		);
	}
	render() {
		return (
			<Card>
				<Link to={`/home/${this.props.pet._id}`}>
					<CardTitle heading>{this.props.pet.name}</CardTitle>
					<CardSubtitle>{this.props.pet.breed}</CardSubtitle>
				</Link>
				<Button type="submit" color="danger" block onClick={this.handleDelete.bind(this,this.props.pet._id)}>
					Delete
				</Button>
			</Card>
		);
	}
}

class Home extends Component {
	render() {
		// console.log(this.props);
		const pets = this.props.pets.map((pet) => {
			return (
				<div key={pet.id} className="col-12 col-md-5 m-1">
					<RenderPet pet={pet} />
				</div>
			);
		});
		return (
			<div>
				<Container>
					<div className="row row-content">
						<div className="col-12 col-xs-12 col-md-2">
							<Link to="/add_pet">
								<Button color="info" block>
									Add a Pet
								</Button>
							</Link>
						</div>
					</div>
					<div className="row row-content">{pets}</div>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default Home;
