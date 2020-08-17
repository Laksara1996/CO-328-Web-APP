import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, Modal } from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../assests/logo.png';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isNavOpen: false,
			isModalOpen: false
		};
		this.toggleNav = this.toggleNav.bind(this);
		this.toggleModal = this.toggleModal.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
	}

	toggleNav() {
		this.setState({
			isNavOpen: !this.state.isNavOpen
		});
	}

	toggleModal() {
		this.setState({
			isModalOpen: !this.state.isModalOpen
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

	render() {
		console.log(this.props);
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
									<NavLink className="nav-link" to="/home">
										<span className="fa fa-home fag-lg">Home</span>
									</NavLink>
								</NavItem>
								<NavItem>
									<NavLink className="nav-link" to="/aboutus">
										<span className="fa fa-info fag-lg">About Us</span>
									</NavLink>
								</NavItem>
								{/* <NavItem>
									<NavLink className="nav-link" to="/menu">
										<span className="fa fa-list fag-lg">Menu</span>
									</NavLink>
								</NavItem> */}
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
									{!this.props.auth ? (
										<NavItem>
											<NavLink className="nav-link" to="/signin">
												<span className="fa fa-sign-in fag-lg">Sign In</span>
											</NavLink>
										</NavItem>
									) : (
										<NavItem>
											<NavLink className="nav-link" to="/signin">
												<span className="fa fa-sign-out fag-lg">Sign Out</span>
											</NavLink>
										</NavItem>
									)}
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
				<Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} />
			</React.Fragment>
		);
	}
}

export default Header;
