import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './Profile/SignInComponent';
import SignUp from './Profile/SignUpComponent';

import Home from './HomeComponent';
import AddPet from './AddPetComponent';
import BMICalculator from './BMICalculatorComponent';
import PetDetail from './PetDetailsComponent';
// import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import About from './AboutComponent';

import { baseUrl } from '../shared/baseUrl';
import ProtectedRoute from './ProtectedRoute';

// import Public from '../shared/public';
// import Private from '../shared/private';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pets: [],
			auth: false
		};
	}
	updateAuthState = (event) => {
		this.setState({ auth: !this.state.auth });
	};

	componentDidMount() {
		fetch(baseUrl + 'get/').then((response) => response.json()).then((data) => {
			// console.log(data)
			this.setState({
				pets: data
			});
		});
	}

	render() {
		console.log(this.state.pets);

		const HomePage = () => {
			return <Home pets={this.state.pets} />;
		};

		const PetWithId = ({ match }) => {
			// console.log(match.params.petId);
			// console.log(this.state.pets[0]._id);
			//console.log(this.state.pets.filter((pet) => pet._id === match.params.petId)[0])
			return (
				<PetDetail
					pet={this.state.pets.filter((pet) => pet._id === match.params.petId)[0]}
					// isLoading={this.props.dishes.isLoading}
					// errMess={this.props.dishes.errMess}
					// comments={this.props.comments.comments.filter(
					// 	(comment) => comment.dishId === parseInt(match.params.dishId, 10)
					// )}
					// commentsErrMess={this.props.comments.errMess}
					// postComment={this.props.postComment}
				/>
			);
		};

		// const ProtectedRoutePage = () => {
		// 	return <ProtectedRoute auth={this.state.auth} />;
		// };

		const SignInPage = () => {
			return (
				<SignIn
				// updateAuth={this.updateAuthState}
				// auth={this.state.auth}
				/>
			);
		};

		const SignUpPage = () => {
			return (
				<SignUp
				// updateAuth={this.updateAuthState}
				// auth={this.state.auth}
				/>
			);
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/signin" component={SignInPage} />
					<Route exact path="/signup" component={SignUpPage} />
					<ProtectedRoute exact path="/home" component={HomePage} />
					<ProtectedRoute exact path="/add_pet" component={AddPet} />
					<Route exact path="/bmi_calculator" component={BMICalculator} />
					<ProtectedRoute path="/home/:petId" component={PetWithId} />
					<ProtectedRoute component={HomePage} />
				</Switch>
				{/* <Footer /> */}
			</div>
		);
	}
}

export default Main;
