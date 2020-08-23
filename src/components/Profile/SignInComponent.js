import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import Auth from './Auth';

const paper = {
	marginTop: 50,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center'
};

const avatar = {
	margin: 1,
	backgroundColor: 'red'
};

const form = {
	width: '100%',
	marginTop: 10
};

const submit = {
	marginTop: 20,
	backgroundColor: 'lightblue',
	color: 'black'
};

const INITIAL_STATE = {
	email: '',
	password: '',
	error: null
};
class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}
	onSubmit = (event) => {
		const signinUser = {
			email: this.state.email,
			password: this.state.password
		};
		fetch('http://localhost:4000/api/users/signin', {
			method: 'POST',
			body: JSON.stringify(signinUser),
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'same-origin'
		}).then(
			(response) => {
				if (response.ok) {
					console.log('sign in user');
					Auth.authenticate();
					this.props.history.push('/home');
				} else {
					var error = new Error('Error ' + response.status + ': ' + response.statusText);
					error.response = response;
					console.log('error occured', error);
					this.setState({ error: error });
				}
			},
			(error) => {
				throw error;
			}
		);
		event.preventDefault();
	};
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value });
	};
	render() {
		const { email, password, error } = this.state;
		const isInvalid = password === '' || email === '';
		return (
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<div style={paper}>
					<Avatar style={avatar}>
						<LockOutlinedIcon />
					</Avatar>
					<Typography component="h1" variant="h5">
						Sign in
					</Typography>
					<form onSubmit={this.onSubmit} style={form}>
						<TextField
							name="email"
							value={email}
							onChange={this.onChange}
							type="text"
							placeholder="Email Address"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							autoComplete="email"
							autoFocus
						/>
						<TextField
							name="password"
							value={password}
							onChange={this.onChange}
							type="password"
							placeholder="Password"
							variant="outlined"
							margin="normal"
							required
							fullWidth
							autoComplete="email"
							autoFocus
						/>
						<Button disabled={isInvalid} type="submit" fullWidth variant="contained" style={submit}>
							Sign In
						</Button>
						<Grid item>
							<Link to="/signup" variant="body2">
								<div style={{ marginTop: 20 }}>Don't have an account? Sign Up</div>
							</Link>
						</Grid>
						{error && <p>{error.message}</p>}
					</form>
				</div>
			</Container>
		);
	}
}
export default withRouter(SignIn);
