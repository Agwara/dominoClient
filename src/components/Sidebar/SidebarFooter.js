import React from "react";
import { connect } from "react-redux"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { close_sidebar } from "../../actions/sidebar";

const SidebarFooter = (props) => {

    const toggle_sidebar_off = () => {
        props.close_sidebar()
    }

    return (
        <div className="sidebar__footer-container">
            <Link onClick={toggle_sidebar_off} className="sidebar__footer--link" to="#">
                <FontAwesomeIcon className="sidebar__settings-icon" icon="phone" /> 
                <p className="sidebar__footer--link-text" >Contact Us</p>
            </Link>
    
            {
                true ?
                <Link onClick={toggle_sidebar_off} className="sidebar__footer--link" to="/">
                    <FontAwesomeIcon className="sidebar__settings-icon" icon="sign-out-alt" /> 
                    <p className="sidebar__footer--link-text" >Logout</p>
                </Link> : ""
            }
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
	close_sidebar: () => dispatch(close_sidebar())
});

export default connect(undefined, mapDispatchToProps)(SidebarFooter);