import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Auth from './Profile/Auth';

class Footer extends Component {
	render() {
		// console.log(Auth.getAuth());
		if (Auth.getAuth()) {
			return (
				<div className="footer">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-4 offset-1 col-sm-2">
								<h5>Links</h5>
								<ul className="list-unstyled">
									<li>
										<Link to="/home">Home</Link>
									</li>
									<li>
										<Link to="/aboutus">About Us</Link>
									</li>
									<li>
										<Link to="/menu">BMI Calculator</Link>
									</li>
									<li>
										<Link to="/contactus">Contact Us</Link>
									</li>
								</ul>
							</div>

							<div className="col-12 col-sm-4 align-self-center">
								<div className="text-center">
									<a className="btn btn-social-icon btn-google" href="http://google.com/+">
										<i className="fa fa-google-plus" />
									</a>
									<a
										className="btn btn-social-icon btn-facebook"
										href="http://www.facebook.com/profile.php?id="
									>
										<i className="fa fa-facebook" />
									</a>
									<a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
										<i className="fa fa-linkedin" />
									</a>
									<a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
										<i className="fa fa-twitter" />
									</a>
									<a className="btn btn-social-icon btn-google" href="http://youtube.com/">
										<i className="fa fa-youtube" />
									</a>
									<a className="btn btn-social-icon" href="mailto:">
										<i className="fa fa-envelope-o" />
									</a>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-auto">
								<p>© Copyright 2020 CO 328 Group 18</p>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			return (
				<div className="footer">
					<div className="container">
						<div className="row justify-content-center">
							<div className="col-12 col-sm-4 align-self-center">
								<div className="text-center">
									<a className="btn btn-social-icon btn-google" href="http://google.com/+">
										<i className="fa fa-google-plus" />
									</a>
									<a
										className="btn btn-social-icon btn-facebook"
										href="http://www.facebook.com/profile.php?id="
									>
										<i className="fa fa-facebook" />
									</a>
									<a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/">
										<i className="fa fa-linkedin" />
									</a>
									<a className="btn btn-social-icon btn-twitter" href="http://twitter.com/">
										<i className="fa fa-twitter" />
									</a>
									<a className="btn btn-social-icon btn-google" href="http://youtube.com/">
										<i className="fa fa-youtube" />
									</a>
									<a className="btn btn-social-icon" href="mailto:">
										<i className="fa fa-envelope-o" />
									</a>
								</div>
							</div>
						</div>
						<div className="row justify-content-center">
							<div className="col-auto">
								<p>© Copyright 2020 CO 328 Group 18</p>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Footer;
