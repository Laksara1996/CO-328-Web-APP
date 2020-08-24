import React, { Component } from 'react';
import { Button, Col, Label, Input, Form, FormGroup, Modal, ModalBody, ModalHeader } from 'reactstrap';

class BMICalculator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			birthDate: '',
			breed: '',
			gender: '',
			height: '',
			weight: '',
			isModalOpen: false,
			bmi: 0.0
		};
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
	}
	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}
	handleSubmit(event) {
		var bmi = (parseFloat(this.state.weight) / (parseFloat(this.state.height) / 100) ** 2).toFixed(2);
		this.setState({
			bmi: bmi
		});
		// console.log(bmi);
		this.toggleModal();
		event.preventDefault();
	}
	handleInputChange(event) {
		const target = event.target;
		const value = target.value;
		const name = target.name;

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
		const { name, breed, birthDate, gender, height, weight } = this.state;

		return (
			<div className="row row-content">
				<div className="col-12">
					<h3>BMI Calculator</h3>
				</div>
				<div className="col-12 col-md-9">
					<Form onSubmit={this.handleSubmit}>
						<FormGroup row>
							<Label htmlFor="title" md={2}>
								<strong>Your Dog's Name</strong>
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="name"
									name="name"
									placeholder="Russel"
									value={name}
									onChange={this.handleInputChange}
									required
								/>
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
								<strong>Weight</strong>
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="weight"
									name="weight"
									placeholder="Weight in kg"
									value={weight}
									onChange={this.handleInputChange}
									required
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Label htmlFor="title" md={2}>
								<strong>Height to Shoulder</strong>
							</Label>
							<Col md={10}>
								<Input
									type="text"
									id="height"
									name="height"
									placeholder="Height in cm"
									value={height}
									onChange={this.handleInputChange}
									required
								/>
							</Col>
						</FormGroup>
						<FormGroup row>
							<Col>
								<Button type="submit" color="primary" block>
									Calculate
								</Button>
							</Col>
							<Col xs={7} />
							<Col>
								<Button type="submit" color="danger" block onClick={this.props.history.goBack}>
									Cancel
								</Button>
							</Col>
						</FormGroup>
					</Form>
					<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
						<ModalHeader toggle={this.toggleModal}>BMI Result</ModalHeader>
						<ModalBody>
							{this.state.name} BMI is <br />
							<b>{this.state.bmi}</b>
						</ModalBody>
					</Modal>
				</div>
			</div>
		);
	}
}

export default BMICalculator;
