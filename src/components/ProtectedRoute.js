import React from 'react';
import { Redirect } from 'react-router-dom';

import Auth from './Profile/Auth';

class ProtectedRoute extends React.Component {
	render() {
		console.log(Auth.getAuth());
		const Component = this.props.component;
		const isAuthenticated = Auth.getAuth();

		return isAuthenticated ? <Component /> : <Redirect to={{ pathname: '/signin' }} />;
	}
}

export default ProtectedRoute;
