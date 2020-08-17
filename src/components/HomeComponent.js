import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { Container, Button, Card, CardTitle } from 'reactstrap';

// import './DashboardStyles.css';

function RenderQuestionItem({ question }) {
	return (
		<Card>
			<Link to={`/home/${question.id}`}>
				<CardTitle heading>{question.name}</CardTitle>
			</Link>
		</Card>
	);
}

class Home extends Component {
	render() {
		console.log(this.props);
		// const questions = this.props.questions.map((question) => {
		// 	return (
		// 		<div key={question.id} className="col-12 col-md-5 m-1">
		// 			<RenderQuestionItem question={question} />
		// 		</div>
		// 	);
		// });
		return (
			<div>
				<Container>
					<div className="row row-content">
						<div className="col-12 col-xs-12 col-md-2">
							<Link to="/addpet">
								<Button color="info" block>
									Add a Pet
								</Button>
							</Link>
						</div>
					</div>
					<div className="row row-content">
						{/* {questions} */}
					</div>
				</Container>
			</div>
		);
	}
}

export default Home;
