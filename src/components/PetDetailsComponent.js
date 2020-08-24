import React, { Component } from 'react';

import {
	Card,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	Col,
	Label,
	Form,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
	FormGroup,
	Input
} from 'reactstrap';
import { Link } from 'react-router-dom';

import Footer from './FooterComponent';

function RenderPet({ pet }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<Card>
				{/* <CardImg top src={dish.image} alt={dish.name} /> */}
				<CardBody>
					<CardTitle>
						<b>Pet's Name : </b>
						{pet.name}
					</CardTitle>
					<CardTitle>
						<b>Pet's Breed : </b>
						{pet.breed}
					</CardTitle>
					<CardTitle>
						<b>Pet gender : </b>
						{pet.gender}
					</CardTitle>
					<CardText>
						{pet.name} was born on {pet.dateofbirth.substring(0, 10)}
					</CardText>
					<CardText>
						{pet.name} is {pet.isneutralized ? 'neutralized' : 'not neutralized'}
					</CardText>
				</CardBody>
			</Card>
		</div>
	);
}

class RenderVaccines extends Component {
	handleDelete(id) {
		// console.log('http://localhost:4000/api/medications/removemedication/' + id);
		fetch('http://localhost:4000/api/medications/removemedication/' + id, {
			method: 'DELETE'
		}).then(
			(response) => {
				if (response.ok) {
					// window.location.reload(false);
					// this.props.history.push('/home');
					// window.location = '/home/' + ;
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
		if (this.props.vaccines != null)
			return (
				<div className="col-12 col-md-5 m-1">
					{/* <h4>Vaccines</h4> */}

					{/* <CardImg top src={dish.image} alt={dish.name} /> */}

					<ul className="list-unstyled">
						{this.props.vaccines.map((vaccine) => {
							// console.log(vaccine)
							return (
								<li key={vaccine.id}>
									<Card>
										<CardBody>
											<CardTitle>
												<b>Vaccine Name : </b>
												{vaccine.name}
											</CardTitle>
											<CardTitle>
												<b>Vaccine Type : </b>
												{vaccine.type}
											</CardTitle>
											<CardTitle>
												<b>Vaccine Dose : </b>
												{vaccine.dose}
											</CardTitle>
											<CardTitle>
												<b>Vaccine Give Date : </b>
												{vaccine.givenDate.substring(0, 10)}
											</CardTitle>
											<CardTitle>
												<b>Vaccine Next Date : </b>
												{vaccine.nextDate.substring(0, 10)}
											</CardTitle>
										</CardBody>
										<Button
											type="submit"
											color="danger"
											block
											onClick={this.handleDelete.bind(this, vaccine._id)}
										>
											Delete
										</Button>
									</Card>
								</li>
							);
						})}
					</ul>
					<VaccineForm petId={this.props.petId} />
				</div>
			);
		else return <div />;
	}
}

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;

class VaccineForm extends Component {
	constructor(props) {
		super(props);

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			name: '',
			dose: '',
			type: '',
			givenDate: '',
			nextDate: '',
			isNavOpen: false,
			isModalOpen: false
		};
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;
		// console.log(name);
		this.setState({
			[name]: value
		});
	}

	handleSubmit(event) {
		this.toggleModal();
		// console.log(this.state);
		const newVaccine = {
			name: this.state.name,
			pet: this.props.petId,
			dose: this.state.dose,
			type: this.state.type,
			givenDate: this.state.givenDate,
			nextDate: this.state.nextDate
		};
		fetch('http://localhost:4000/api/medications/addmedication', {
			method: 'POST',
			body: JSON.stringify(newVaccine),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin'
		}).then(
			(response) => {
				if (response.ok) {
					// console.log('add a vaccine');
					// this.props.history.push('/home');
					// window.location.reload(false);
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					// console.log('error occured', error);
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		);
		event.preventDefault();
	}

	render() {
		const { name, type, dose, givenDate, nextDate } = this.state;
		// console.log(this.props.pet);
		return (
			<div>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg" /> Add a Vaccine
				</Button>
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Add a Vaccine</ModalHeader>
					<ModalBody>
						<Form onSubmit={this.handleSubmit}>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Vaccine Name</strong>
								</Label>
								<Col md={10}>
									<Input
										type="text"
										id="name"
										name="name"
										placeholder="A1H"
										value={name}
										onChange={this.handleInputChange}
										required
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Dose</strong>
								</Label>
								<Col md={10}>
									<Input
										type="text"
										id="dose"
										name="dose"
										placeholder="2mg"
										value={dose}
										onChange={this.handleInputChange}
										required
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Type</strong>
								</Label>
								<Col md={10}>
									<Input
										type="text"
										id="type"
										name="type"
										placeholder="Oral"
										value={type}
										onChange={this.handleInputChange}
										required
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Given Date</strong>
								</Label>
								<Col md={10}>
									<Input
										type="date"
										name="givenDate"
										id="givenDate"
										placeholder="date placeholder"
										value={givenDate}
										onChange={this.handleInputChange}
										required
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Label htmlFor="title" md={2}>
									<strong>Next Date</strong>
								</Label>
								<Col md={10}>
									<Input
										type="date"
										name="nextDate"
										id="nextDate"
										placeholder="date placeholder"
										value={nextDate}
										onChange={this.handleInputChange}
										required
									/>
								</Col>
							</FormGroup>
							<FormGroup row>
								<Col md={{ size: 10, offset: 2 }}>
									<Button type="submit" color="primary">
										Add a Vaccine
									</Button>
								</Col>
							</FormGroup>
						</Form>
					</ModalBody>
				</Modal>
			</div>
		);
	}
}

class PetDetail extends Component {
	constructor(props) {
		super(props);

		this.state = {
			vaccines: []
		};
	}
	componentDidMount() {
		// console.log('http://localhost:4000/api/medications/getmedlistbypetid/' + this.props.pet._id);
		fetch('http://localhost:4000/api/medications/getmedlistbypetid/' + this.props.pet._id)
			// fetch('http://localhost:4000/api/medications/getmedlistbypetid/5f420bd2cf9028441867b72f')
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					vaccines: data
				});
			});
	}
	render() {
		// console.log(this.state);

		return (
			<div>
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/home">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>{this.props.pet.name}</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>{this.props.pet.name.toUpperCase()}</h3>
							<hr />
						</div>
					</div>
					<div className="row">
						<RenderPet pet={this.props.pet} />
						<RenderVaccines
							vaccines={this.state.vaccines}
							postVaccine={this.props.postVaccine}
							petId={this.props.pet._id}
						/>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default PetDetail;
