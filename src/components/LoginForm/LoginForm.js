import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class LoginForm extends React.Component {
	constructor(props) {
		super(props)
		
		this.state = {
			email: "",
			password: "",
			error: ""
		}
	}
	
	onEmailChange = (e) => {
		const email = e.target.value;
		this.setState(() => ({ email }));
	};
	
	onPasswordChange = (e) => {
		const password = e.target.value;
		this.setState(() => ({ password }));
	}
	
	render () {
		return (
			<div className="login-form__container">
				<form className="login-form__content">
					<h1 className="login-form__header">Sign In To Your Pizza Profile</h1>
					<div className="login-form__create-link">
						<p className="login-form__create-text--1">Don't have one?</p>
						<Link to="/signup" className="login-form__create-text--2">
							<p className="login-form__create-text--3">Create One</p>
							<FontAwesomeIcon className="login-form__create-font" icon="caret-right" />
						</Link>
					</div>
					<input 
						type="email"
						placeholder="Email"
						required
						autoFocus
						className="login-form__input"
						value={this.state.email}
						onChange={this.onEmailChange}
					/>
					<input
						type="password"
						placeholder="Password"
						className="login-form__input"
						value={this.state.password}
						onChange={this.onPasswordChange}
						required
					/>

					<button className="login-form__btn">Login</button>

					<Link to="#" className="login-form__forgot-password">Forgot Password?</Link>
				</form>
			</div>
		)
	};
};

export default LoginForm;