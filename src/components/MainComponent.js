import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from './Profile/SignInComponent';
import SignUp from './Profile/SignUpComponent';

import Home from './HomeComponent';
import AddPet from './AddPetComponent';
import BMICalculator from './BMICalculatorComponent';
import PetDetail from './PetDetailsComponent';
import Contact from './ContactUsComponent';
import Header from './HeaderComponent';
import About from './AboutUsComponent';

import { baseUrl } from '../shared/baseUrl';
import ProtectedRoute from './ProtectedRoute';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pets: [],
			vaccines: [],
			auth: false
		};
	}
	updateAuthState = () => {
		this.setState({ auth: !this.state.auth });
	};

	componentDidMount() {
		fetch(baseUrl + 'get/').then((response) => response.json()).then((data) => {
			this.setState({
				pets: data
			});
		});
	}

	render() {
		// console.log(this.state.pets);

		const HomePage = () => {
			return <Home pets={this.state.pets} />;
		};

		const PetWithId = ({ match }) => {
			// console.log(match);
			// console.log();
			return <PetDetail pet={this.state.pets.filter((pet) => pet._id === match.params.petId)[0]} />;
		};

		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<ProtectedRoute exact path="/home" component={HomePage} />
					<ProtectedRoute exact path="/add_pet" component={AddPet} />
					<Route exact path="/bmi_calculator" component={BMICalculator} />
					<Route path="/home/:petId" component={PetWithId} />
					<ProtectedRoute exact path="/aboutus" component={About} />
					<ProtectedRoute exact path="/contactus" component={Contact} />
					<ProtectedRoute component={HomePage} />
				</Switch>
			</div>
		);
	}
}

export default Main;
