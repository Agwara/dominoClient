import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TermsOfUse from "../TermsOfUse/TermsOfUse";

class CreateCustomerForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            confirmEmail: "",
            phone: "",
            password: "",
            confirmPassword: ""
        }
    }

    onFirstNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ firstName: name }));
    };
    
    onLastNameChange = (e) => {
		const name = e.target.value;
		this.setState(() => ({ lastName: name }));
    };

    onEmailChange = (e) => {
		const email = e.target.value;
        this.setState(() => ({ email }));
    };

    onConfirmEmailChange = (e) => {
		const confirmEmail = e.target.value;
        this.setState(() => ({ confirmEmail }));
    }
    
    onPhoneChange = (e) => {
		const phone = e.target.value;
		this.setState(() => ({ phone }));
    };
    
    onPasswordChange = (e) => {
        const password = e.target.value;
        this.setState(() => ({ password }))
    };

    onConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        this.setState(() => ({ confirmPassword }));
    };

    onShowTermsClick = (e) => {
        let component = document.getElementById("terms-of-use");
        component.style.display = "flex";
    }
    
    render () {
        return (
            <form className="customer-form">
                <div className="customer-form__group">
                    <label htmlFor="firstName" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">First Name:</p>
                    </label>
                    <input 
                        id="firstName"
                        type="text"
                        placeholder="First Name"
                        className="customer-form__input"
                        value={this.state.firstName}
                        onChange={this.onFirstNameChange}
                        required
                        autoFocus
                    />
                </div>

                <div className="customer-form__group">
                    <label htmlFor="lastName" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Last Name:</p>
                    </label>
                    <input 
                        id="lastName"
                        type="text"
                        placeholder="Last Name"
                        className="customer-form__input"
                        value={this.state.lastName}
                        onChange={this.onLastNameChange}
                        required
                    />
                </div>

                <div className="customer-form__group">
                    <label htmlFor="email" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Email Address:</p>
                    </label>
                    <input 
                        id="email"
                        type="email"
                        placeholder="Email"
                        className="customer-form__input"
                        value={this.state.email}
                        onChange={this.onEmailChange}
                        required
                    />
                </div>

                <div className="customer-form__group">
                    <label htmlFor="confirmEmail" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Confirm Email Address:</p>
                    </label>
                    <input 
                        id="confirmEmail"
                        type="email"
                        placeholder="Confirm Email Address"
                        className="customer-form__input"
                        value={this.state.confirmEmail}
                        onChange={this.onConfirmEmailChange}
                        required
                    />
                </div>

                <div className="customer-form__group customer-form__more-margin">
                    <label htmlFor="phoneNumber" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Primary Phone Number:</p>
                    </label>
                    <input 
                        id="phoneNumber"
                        type="text"
                        placeholder="Phone"
                        className="customer-form__input"
                        value={this.state.phone}
                        onChange={this.onPhoneChange}
                        required
                    />
                </div>

                <div className="customer-form__group">
                    <label htmlFor="password" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Password:</p>
                    </label>
                    <input 
                        id="password"
                        type="password"
                        placeholder="Password"
                        className="customer-form__input"
                        value={this.state.password}
                        onChange={this.onPasswordChange}
                        required
                    />
                </div>

                <div className="customer-form__group">
                    <label htmlFor="confirmPassword" className="customer-form__label">
                        <FontAwesomeIcon className="customer-form__label-font" icon="star" />
                        <p className="customer-form__label-text">Confirm Password:</p>
                    </label>
                    <input 
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm Password"
                        className="customer-form__input"
                        value={this.state.confirmPassword}
                        onChange={this.onConfirmPasswordChange}
                        required
                    />
                </div>

                <div className="customer-form__notification">
                    <div className="customer-form__password-hint">
                        <p className="customer-form__password-hint--main">Heads up!</p>
                        <p className="customer-form__password-hint--sub">Use at least 8 characters.</p>
                    </div>

                    <div className="customer-form__email-notify">
                        <input
                            type="checkbox" 
                            className="customer-form__email-notify--input"
                            onChange={() => ""}
                        />
                        <p className="customer-form__email-notify--text" >
                            Yes. I would like to receive e-mail offers from Agwara's Pizza
                        </p>
                    </div>
                </div>

                <div className="customer-form__btn-container">
                    <button className="customer-form__btn">Create Your Profile</button>
                </div>

                <div className="customer-form__terms-condition">
                    <p className="customer-form__terms-condition--text-1">By creating a profile you agree to our </p>
                    <p className="customer-form__terms-condition--text-2" onClick={this.onShowTermsClick}>Terms of use</p>
                    <p className="customer-form__terms-condition--text-3"> and that you are at least 13 years old.</p>
                </div>

                <div id="terms-of-use" className="terms-of-use__container">
                    <TermsOfUse />
                </div>

                <div className="customer-form__indicator">
                    <FontAwesomeIcon className="customer-form__indicator--star" icon="star" />
                    <p className="customer-form__indicator--text">Indicates field required.</p>
                </div>
            </form>
        )
    }
}

export default CreateCustomerForm;