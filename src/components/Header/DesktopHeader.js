import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DesktopHeader = (props) => {

	const goToCheckoutPage = () => {
		props.history.push("/checkout")
	}

	return (
		<header className="header desktop-header">
			<div className="desktop-header__container">
				<ul className="desktop-header__nav">
					<li className="desktop-header__nav-item">
						<Link className="desktop-header__nav-link" to="/">Logo</Link>
					</li>
					<li className="desktop-header__nav-item">
						<Link className="desktop-header__nav-link" to="select-order-type">Order Online</Link>
					</li>
					<li className="desktop-header__nav-item">
						<Link className="desktop-header__nav-link" to="/menu">Menu</Link>
					</li>
					{/* <li className="desktop-header__nav-item">
						<Link className="desktop-header__nav-link" to="#">Deals</Link>
					</li> */}
					<li className="desktop-header__nav-item">
						<Link className="desktop-header__nav-link" to="/tracker">Tracker</Link>
					</li>
					<li className="desktop-header__nav-item dropdown">
						<div className="dropdown__hover">
							<p className="desktop-header__nav-link">HELP</p>
							<FontAwesomeIcon className="help-angle-down" icon="angle-down" />
						</div>
						<div className="dropdown__menu">
							<Link to="/contact-us" className="dropdown__link">Contact Us</Link>
							<Link to="/faq" className="dropdown__link">FAQs</Link>
						</div>
					</li>
				</ul>

				<div className="desktop-header__other-section">
					{
						true ? 
						<Link to="/login" className="desktop-header__signin--container">
							<FontAwesomeIcon className="desktop-header__signin--font" icon="user" />
							<p className="desktop-header__signin--text">Sign in</p>
						</Link> :
						<div className="desktop-header__profile dropdown">
							<div className="desktop-header__sub-profile dropdown__hover">
								<p className="desktop-header__profile--text">My Account</p>
								<FontAwesomeIcon className="help-angle-down" icon="angle-down" />
							</div>
							<div className="dropdown__menu">
								<Link className="dropdown__link" to="#">Hi Agwara</Link>
								<Link className="dropdown__link" to="#">
									<FontAwesomeIcon className="dropdown__font-icon" icon="user" />
									My Profile
								</Link>
								<Link className="dropdown__link" to="#">
									<FontAwesomeIcon className="dropdown__font-icon" icon="briefcase" />
									My Orders
								</Link>
								<Link className="dropdown__link" to="#">
									<FontAwesomeIcon className="dropdown__font-icon" icon="wallet" />
									My Wallet
								</Link>
								<Link className="dropdown__link" to="#">
									<FontAwesomeIcon className="dropdown__font-icon" icon="home" />
									My Address
								</Link>
								<Link className="dropdown__link" to="#">
									<FontAwesomeIcon className="dropdown__font-icon" icon="sign-out-alt" />
									Logout
								</Link>
							</div>	
						</div>
					}
					<div onClick={goToCheckoutPage} className="cart-section">
						<div className="cart-sub">
							<FontAwesomeIcon className="cart-icon" icon="shopping-cart" />
							<div className="cart-item-count">
								<p className="cart-item-num">15</p>
							</div>
						</div>
						<p className="cart-text">Cart</p>
					</div>
				</div>
			</div>

		</header>
	)
};

export default DesktopHeader;