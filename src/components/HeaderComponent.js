import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Button } from 'reactstrap';
import { NavLink, withRouter } from 'react-router-dom';

import Logo from '../assests/logo.png';

import Auth from './Profile/Auth'

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	handleLogin(event) {
		this.toggleModal();
		alert(
			'Username: ' +
				this.username.value +
				' Password: ' +
				this.password.value +
				' Remember: ' +
				this.remember.checked
		);
		event.preventDefault();
	}

	onClick = () => {
		Auth.signout();
		this.props.history.push('/signin');
	}

	render() {
		if (Auth.getAuth()) {
			return (
				<React.Fragment>
					<Navbar dark expand="md">
						<div className="container">
							<NavbarToggler onClick={this.toggleNav} />
							<NavbarBrand className="mr-auto" href="/">
								<img src={Logo} height="30" width="41" alt="Pawz" />
							</NavbarBrand>
							<Collapse isOpen={this.state.isNavOpen} navbar>
								<Nav navbar>
									<NavItem>
										<NavLink className="nav-link" to="/home">
											<span className="fa fa-home fag-lg">Home</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/aboutus">
											<span className="fa fa-info fag-lg">About Us</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/bmi_calculator">
											<span className="fa fa-calculator fag-lg">BMI Calculator</span>
										</NavLink>
									</NavItem>
									<NavItem>
										<NavLink className="nav-link" to="/contactus">
											<span className="fa fa-address-card fag-lg">Contact Us</span>
										</NavLink>
									</NavItem>
								</Nav>
								<Nav className="ml-auto" navbar>
									<NavItem>
										<Button outline onClick={this.onClick}>
											<span className="fa fa-sign-out fa-lg" /> Log out
										</Button>
									</NavItem>
								</Nav>
							</Collapse>
						</div>
					</Navbar>
					<Jumbotron>
						<div className="container">
							<div className="row row-header">
								<div className="col-12 col-sm-6">
									<h1>Pawz</h1>
									<p>Health Care Web App For Pets</p>
								</div>
							</div>
						</div>
					</Jumbotron>
				</React.Fragment>
			);
		} else {
			return (
				<React.Fragment>
					<Navbar dark expand="md">
						<div className="container">
							<NavbarToggler onClick={this.toggleNav} />
							<NavbarBrand className="mr-auto" href="/">
								<img src={Logo} height="30" width="41" alt="Ristorante Con Fusion" />
							</NavbarBrand>
							<Collapse isOpen={this.state.isNavOpen} navbar>
								<Nav navbar>
									<NavItem>
										<NavLink className="nav-link" to="/bmi_calculator">
											<span className="fa fa-calculator fag-lg">BMI Calculator</span>
										</NavLink>
									</NavItem>
									{/* <NavItem>
										<NavLink className="nav-link" to="/signup">
											<span className="fa fa-sign-in fag-lg">Sign Up</span>
										</NavLink>
									</NavItem> */}
								</Nav>
							</Collapse>
						</div>
					</Navbar>
				</React.Fragment>
			);
		}
	}
}

export default withRouter(Header);
