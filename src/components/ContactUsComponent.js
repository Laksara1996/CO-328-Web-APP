import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

import Footer from './FooterComponent';

class Contact extends Component {
	render() {
		return (
			<div>
				<div className="container">
					<div className="row">
						<Breadcrumb>
							<BreadcrumbItem>
								<Link to="/home">Home</Link>
							</BreadcrumbItem>
							<BreadcrumbItem active>Contact Us</BreadcrumbItem>
						</Breadcrumb>
						<div className="col-12">
							<h3>Contact Us</h3>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Contact;
