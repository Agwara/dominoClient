import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { close_sidebar } from "../../actions/sidebar";
import { Link } from "react-router-dom"

const SidebarNav = (props) => {
    const toggle_sidebar_off = () => {
		props.close_sidebar()
    }
    return  (
        <div className="sidebar__nav--container">
            <p className="sidebar__settings-text">Menu Bar</p>
            <ul className="sidebar__nav">
                <Link onClick={toggle_sidebar_off} to="/select-order-type" className="sidebar__nav--item sidebar__nav--item--1">
                    <p className="sidebar__nav--item-text">Order Online</p>
                    <FontAwesomeIcon className="sidebar__nav--icon" icon="angle-right" />
                </Link>
                {/* <Link onClick={toggle_sidebar_off} to="/" className="sidebar__nav--item sidebar__nav--item--2">
                    <p className="sidebar__nav--item-text">Deals</p>
                    <FontAwesomeIcon className="sidebar__nav--icon" icon="angle-right" />
                </Link> */}
                <Link onClick={toggle_sidebar_off} to="/menu" className="sidebar__nav--item sidebar__nav--item--3">
                    <p className="sidebar__nav--item-text">Menu</p>
                    <FontAwesomeIcon className="sidebar__nav--icon" icon="angle-right" />
                </Link>
                <Link onClick={toggle_sidebar_off} to="/" className="sidebar__nav--item sidebar__nav--item--4">
                    <p className="sidebar__nav--item-text">Tracker</p>
                    <FontAwesomeIcon className="sidebar__nav--icon" icon="angle-right" />
                </Link>
            </ul>
    
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
	close_sidebar: () => dispatch(close_sidebar())
});

export default connect(undefined, mapDispatchToProps)(SidebarNav);