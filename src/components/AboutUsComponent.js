import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Footer from './FooterComponent';

function About(props) {
	return (
		<div>
			<div className="container">
				<div className="row">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/home">Home</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>About Us</BreadcrumbItem>
					</Breadcrumb>
					<div className="col-12">
						<h3>About Us</h3>
						<hr />
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default About;
