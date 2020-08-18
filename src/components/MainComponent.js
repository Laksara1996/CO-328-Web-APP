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

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			auth: false
		};
	}
	updateAuthState = (event) => {
		this.setState({ auth: !this.state.auth });
	};
	render() {
		// console.log(this.state.auth);
		const HomePage = () => {
			return (
				<Home
					auth={this.state.auth}
					// dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
					// dishesLoading={this.props.dishes.isLoading}
					// dishesErrMess={this.props.dishes.errMess}
					// promotions={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
					// promosLoading={this.props.promotions.isLoading}
					// promosErrMess={this.props.promotions.errMess}
					// leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
					// leaderLoading={this.props.leaders.isLoading}
					// leaderErrMess={this.props.leaders.errMess}
				/>
			);
		};

		const PetWithId = ({ match }) => {
			return (
				<PetDetail
					pet={this.state.pets.pets.filter((pet) => pet.id === parseInt(match.params.pets, 10))[0]}
					// isLoading={this.props.dishes.isLoading}
					// errMess={this.props.dishes.errMess}
					// comments={this.props.comments.comments.filter(
					// 	(comment) => comment.dishId === parseInt(match.params.dishId, 10)
					// )}
					// commentsErrMess={this.props.comments.errMess}
					postComment={this.props.postComment}
				/>
			);
		};

		const SignInPage = () => {
			return (
				<SignIn
					updateAuth={this.updateAuthState}
					// auth={this.state.auth}
				/>
			);
		};

		const SignUpPage = () => {
			return (
				<SignUp
					updateAuth={this.updateAuthState}
					// auth={this.state.auth}
				/>
			);
		};
		return (
			<div>
				<Header auth={this.state.auth} updateAuth={this.updateAuthState} />
				<Switch>
					<Route exact path="/signin" component={SignInPage} />
					<Route exact path="/signup" component={SignUpPage} />
					<Route exact path="/home" component={HomePage} />
					<Route exact path="/add_pet" component={AddPet} />
					<Route exact path="/bmi_calculator" component={BMICalculator} />
					<Route path="/home/:petId" component={PetWithId} />
					<Redirect to="/home" />
				</Switch>
				<Footer auth={this.state.auth} />
			</div>
		);
	}
}

export default Main;
