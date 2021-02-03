import React from "react";
import CreateCustomerForm from "../CreateCustomerForm/CreateCustomerForm"


const SignupPage = () => {
    return (
        <div className="signup__container">
            <div className="signup">
                <figure className="signup__guest-profile">
                    <img 
                        src="/img/guest-profile.png" 
                        alt="Guest-Icon"
                        className=""
                    />
                </figure>

                <h1 className="signup__header">Create A Pizza Profile</h1>

                <p className="signup__subtitle">
                    Fill out the form below to create a Pizza Profile and take advantage
                    of these awesome benefits:  
                </p>

                <div className="signup__feature">
                    <div className="signup__feature--1">
                        <figure className="signup__feature--icon">
                            <img 
                                src="/img/guest-flag-icon.png" 
                                alt="Guest-Icon"
                                className=""
                            />
                        </figure>
                        <div className="signup__feature--text">
                            <p className="signup__feature-text--1">Easy orders and recent orders</p>
                            <p className="signup__feature-text--2">Quick access to your history.</p>
                        </div>
                    </div>

                    <div className="signup__border-right"></div>

                    <div className="signup__feature--1 signup__feature-border">
                        <figure className="signup__feature--icon signup__feature--icon-2">
                            <img 
                                src="/img/guest-card-icon.png" 
                                alt="Guest-Icon"
                                className=""
                            />
                        </figure>
                        <div className="signup__feature--text">
                            <p className="signup__feature-text--1">Saved personal info</p>
                            <p className="signup__feature-text--2">Checkout in no time flat.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="signup__form">
                <CreateCustomerForm />
            </div>
        </div>
    )
}

export default SignupPage;