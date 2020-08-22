import React, { Component } from 'react';

import {
	Card,
	CardImg,
	CardText,
	CardBody,
	CardTitle,
	Breadcrumb,
	BreadcrumbItem,
	// Col,
	// Label,
	// Row,
	Button
	// Modal,
	// ModalHeader,
	// ModalBody
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

// function RenderComments({ comments, postComment, dishId }) {
// 	if (comments != null)
// 		return (
// 			<div className="col-12 col-md-5 m-1">
// 				<h4>Comments</h4>
// 				<ul className="list-unstyled">
// 					{comments.map((comment) => {
// 						return (
// 							<li key={comment.id}>
// 								<p>{comment.comment}</p>
// 								<p>
// 									-- {comment.author} ,{' '}
// 									{new Intl.DateTimeFormat('en-US', {
// 										year: 'numeric',
// 										month: 'short',
// 										day: '2-digit'
// 									}).format(new Date(Date.parse(comment.date)))}
// 								</p>
// 							</li>
// 						);
// 					})}
// 				</ul>
// 				<CommentForm petId={dishId} postComment={postComment} />
// 			</div>
// 		);
// 	else return <div />;
// }

// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !val || val.length <= len;
// const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
	constructor(props) {
		super(props);

		this.toggleModal = this.toggleModal.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);

		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
		});
	}

	handleSubmit(values) {
		this.toggleModal();
		this.props.postComment(this.props.petId, values.rating, values.author, values.comment);
	}

	render() {
		console.log(this.props.pet);
		return (
			<div>
				<Button outline onClick={this.toggleModal}>
					<span className="fa fa-pencil fa-lg" /> Submit Comment
				</Button>
				{/* <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
					<ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
					<ModalBody>
						<LocalForm onSubmit={(values) => this.handleSubmit(values)}>
							<Row className="form-group">
								<Col>
									<Label htmlFor="rating">Rating</Label>
									<Control.select model=".rating" id="rating" className="form-control">
										<option>1</option>
										<option>2</option>
										<option>3</option>
										<option>4</option>
										<option>5</option>
									</Control.select>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<Label htmlFor="author">Your Name</Label>
									<Control.text
										model=".author"
										id="author"
										name="author"
										placeholder="Your Name"
										className="form-control"
										validators={{
											required,
											minLength: minLength(3),
											maxLength: maxLength(15)
										}}
									/>
									<Errors
										className="text-danger"
										model=".yourname"
										show="touched"
										messages={{
											required: 'Required',
											minLength: 'Must be greater than 2 characters',
											maxLength: 'Must be 15 characters or less'
										}}
									/>
								</Col>
							</Row>
							<Row className="form-group">
								<Col>
									<Label htmlFor="comment">Comment</Label>
									<Control.textarea model=".comment" id="comment" rows="6" className="form-control" />
								</Col>
							</Row>
							<Button type="submit" className="bg-primary">
								Submit
							</Button>
						</LocalForm>
					</ModalBody>
				</Modal> */}
			</div>
		);
	}
}

const PetDetail = (props) => {
	console.log(props);
	return (
		<div>
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>{props.pet.name}</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>{props.pet.name.toUpperCase()}</h3>
						<hr />
					</div>
				</div>
				<div className="row">
					<RenderPet pet={props.pet} />
					{/* <RenderVaccines pet={props.pet} postVaccine={props.postVaccine} dishId={props.dish.id} /> */}
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default PetDetail;
