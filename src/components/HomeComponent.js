import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import {
	Container,
	Button
	//   Card,
	//    CardTitle
} from 'reactstrap';

import './HomeStyle.css';
//import SignIn from './Profile/SignInComponent';

// function RenderPet({ pet }) {
// 	return (
// 		<Card>
// 			<Link to={`/home/${pet.id}`}>
// 				<CardTitle heading>{pet.name}</CardTitle>
// 			</Link>
// 		</Card>
// 	);
// }

class Home extends Component {
	render() {
		// console.log(this.props);
		// const pets = this.props.pets.map((pet) => {
		// 	return (
		// 		<div key={pet.id} className="col-12 col-md-5 m-1">
		// 			<RenderPet pet={pet} />
		// 		</div>
		// 	);
		// });
		// console.log(this.props.auth);
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
					<div className="row row-content">{/* {pets} */}</div>
				</Container>
			</div>
		);
	}
}

export default Home;
