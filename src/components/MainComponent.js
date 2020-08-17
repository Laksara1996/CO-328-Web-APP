import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import SignIn from './Profile/SignInComponent';
import SignUp from './Profile/SignUpComponent';

import Home from './HomeComponent';
import AddPet from './AddPetComponent'
import BMICalculator from './BMICalculatorComponent'
// import Contact from './ContactComponent';
// import Menu from './MenuComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
// import DishDetail from './DishdetailComponent';
// import About from './AboutComponent';

class Main extends Component {
	constructor(props) {
		super(props);

		this.state = {
			auth: true
		};
	}
	render() {
		// const HomePage = () => {
		// 	return (
		// 		<Home
		// 			dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
		// 			dishesLoading={this.props.dishes.isLoading}
		// 			dishesErrMess={this.props.dishes.errMess}
		// 			promotions={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
		// 			promosLoading={this.props.promotions.isLoading}
		// 			promosErrMess={this.props.promotions.errMess}
		// 			leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
		// 			leaderLoading={this.props.leaders.isLoading}
		// 			leaderErrMess={this.props.leaders.errMess}
		// 		/>
		// 	);
		// };

		// const DishWithId = ({ match }) => {
		// 	return (
		// 		<DishDetail
		// 			dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
		// 			isLoading={this.props.dishes.isLoading}
		// 			errMess={this.props.dishes.errMess}
		// 			comments={this.props.comments.comments.filter(
		// 				(comment) => comment.dishId === parseInt(match.params.dishId, 10)
		// 			)}
		// 			commentsErrMess={this.props.comments.errMess}
		// 			postComment={this.props.postComment}
		// 		/>
		// 	);
		// };

		return (
			<div>
				<Header auth={this.state.auth} />
				<Switch>
					<Route exact path="/signin" component={SignIn} />
					<Route exact path="/signup" component={SignUp} />
					<Route exact path="/home" component={Home} />
					<Route exact path="/add_pet" component={AddPet} />
					<Route exact path="/bmi_calculator" component={BMICalculator} />
					{/* <Route path="/home" component={HomePage} />
					<Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />} />
					<Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
					<Route path="/menu/:dishId" component={DishWithId} />
					<Route
						exact
						path="/contactus"
						component={() => (
							<Contact
								resetFeedbackForm={this.props.resetFeedbackForm}
								postFeedback={this.props.postFeedback}
							/>
						)}
					/> */}
					<Redirect to="/home" />
				</Switch>
				<Footer />
			</div>
		);
	}
}

export default Main;
