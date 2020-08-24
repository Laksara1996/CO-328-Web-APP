import React from 'react';
import { Redirect } from 'react-router-dom';

class ProtectedRoute extends React.Component {
	render() {
		// console.log(Auth.getAuth());
		const Component = this.props.component;
		// const isAuthenticated = Auth.getAuth();

		const isAuthenticated = localStorage.getItem('auth') ? true : false;
		// console.log(isAuthenticated);
		return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/signin' }} />;
	}
}

export default ProtectedRoute;
