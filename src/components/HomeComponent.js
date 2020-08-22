import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Button, Card, CardTitle, CardSubtitle } from 'reactstrap';

import './HomeStyle.css';
import Footer from './FooterComponent';

import { baseUrl } from '../shared/baseUrl';

function RenderPet({ pet }) {
	return (
		<Card>
			<Link to={`/home/${pet._id}`}>
				<CardTitle heading>{pet.name}</CardTitle>
				<CardSubtitle>{pet.breed}</CardSubtitle>
			</Link>
			<Button type="submit" color="danger" block onClick={handleDelete(pet._id)}>
				Delete
			</Button>
		</Card>
	);
}

function handleDelete(id) {
	console.log(id);
	fetch(baseUrl + 'removepet/' + id, {
		method: 'DELETE'
	})
		.then((res) => res.text())
		.then((res) => console.log(res));
}

class Home extends Component {
	render() {
		console.log(this.props);
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
