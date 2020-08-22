import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {
	render() {
		return (
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
		);
	}
}

export default Contact;
