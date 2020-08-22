import React, { Component } from 'react';
import { Button, Col, Label, Input, Form, FormGroup, CustomInput } from 'reactstrap';

import { baseUrl } from '../shared/baseUrl';
import Footer from './FooterComponent';
import { withRouter } from 'react-router-dom';

class AddPet extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			birthDate: '',
			breed: '',
			gender: '',
			isSprayed: ''
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	handleSubmit(event) {
		const newPet = {
			name: this.state.name,
			breed: this.state.breed,
			gender: this.state.gender,
			dateofbirth: this.state.birthDate,
			isneutralized: this.state.isSprayed
		};
		fetch(baseUrl + 'addpet', {
			method: 'POST',
			body: JSON.stringify(newPet),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin'
		}).then(
			(response) => {
				if (response.ok) {
					console.log('add a pet');
					this.props.history.push('/home');
					// return response;
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					console.log('error occured', error);
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		);
		event.preventDefault();
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		// alert(name,event.target)
		// console.log(name, event.target.value);
		// console.log(this.state);

		this.setState({
			[name]: value
		});
	}
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};

	onBodyChange = (event) => {
		this.setState({ body: event });
	};

	handleDelete(i) {
		const tags = this.state.tags.slice(0);
		tags.splice(i, 1);
		this.setState({ tags });
	}

	handleAddition(tag) {
		const tags = [].concat(this.state.tags, tag);
		this.setState({ tags });
	}
	render() {
		const { name, breed, birthDate, gender } = this.state;

		return (
			<div>
				<div className="row row-content">
					<div className="col-12">
						<h3>Add a Pet</h3>
					</div>
					<div className="col-12 col-md-9">
						<Form onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Pet Name</strong>
								</Label>
								<Col md={10}>
									<Input
										type="text"
										id="name"
										name="name"
										placeholder="Russel"
										value={name}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Breed</strong>
								</Label>
								<Col md={10}>
									<Input
										type="select"
										name="breed"
										id="breed"
										value={breed}
										onChange={this.handleInputChange}
									>
										<option>Golden Retriever</option>
										<option>German Shepherd</option>
										<option>Dobermann</option>
										<option>Other</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Gender</strong>
								</Label>
								<Col md={10}>
									<Input
										type="select"
										name="gender"
										id="gender"
										value={gender}
										onChange={this.handleInputChange}
									>
										<option>Male</option>
										<option>Female</option>
									</Input>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>BirthDate</strong>
								</Label>
								<Col md={10}>
									<Input
										type="date"
										name="birthDate"
										id="birthDate"
										placeholder="date placeholder"
										value={birthDate}
										onChange={this.handleInputChange}
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Sprayed/Neutralized</strong>
								</Label>
								<Col md={10}>
									<div>
										<CustomInput
											type="radio"
											id="sprayed"
											name="isSprayed"
											label="Sprayed"
											value={true}
											onChange={this.handleInputChange}
										/>
										<CustomInput
											type="radio"
											id="neutralized"
											name="isSprayed"
											label="Neutralized"
											value={false}
											onChange={this.handleInputChange}
										/>
									</div>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Add a Pet
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default withRouter(AddPet);
