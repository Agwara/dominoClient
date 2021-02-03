import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { close_sidebar } from "../../actions/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarHeader = (props) => {

    const toggle_sidebar_off = () => {
		props.close_sidebar()
    }

    if (false) {
        return (
            <div className="sidebar__login-signup">
                <Link onClick={toggle_sidebar_off} to="/login" className="sidebar__login-signup--btn">Login</Link>
                <Link onClick={toggle_sidebar_off} to="/signup" className="sidebar__login-signup--btn">Signup</Link>
            </div> 
        )
    } else {
        return (
            <div className="sidebar__customer--menu">
                <div className="sidebar__customer--info">
                    <div className="sidebar__customer--init">
                        A
                    </div>
                    <div className="sidebar__customer--details">
                        <p className="sidebar__customer--name">Agwara Nnaemeka</p>
                        <p className="sidebar__customer--email">nnaemekaagwara@gmail.com</p>
                    </div>
                </div>

                <div className="sidebar__settings">
                    <p className="sidebar__settings-text">Account Settings</p>
                    <ul className="sidebar__settings-list">
                        <li className="sidebar__settings-item sidebar__settings-item--1">
                            <FontAwesomeIcon className="sidebar__settings-icon" icon="user" />
                            <p className="sidebar__settings-item--text">My Profile</p>
                        </li>
                        <li className="sidebar__settings-item sidebar__settings-item--2">
                            <FontAwesomeIcon className="sidebar__settings-icon" icon="briefcase" />
							<p className="sidebar__settings-item--text">My Orders</p>
                        </li>
                        <li className="sidebar__settings-item sidebar__settings-item--3">
                            <FontAwesomeIcon className="sidebar__settings-icon" icon="wallet" />
							<p className="sidebar__settings-item--text">My Wallet</p>
                        </li>
                        <li className="sidebar__settings-item sidebar__settings-item--4">
                            <FontAwesomeIcon className="sidebar__settings-icon" icon="home" />
							<p className="sidebar__settings-item--text">My Address</p>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
	close_sidebar: () => dispatch(close_sidebar())
});

export default connect(undefined, mapDispatchToProps)(SidebarHeader);