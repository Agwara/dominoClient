import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { open_sidebar, close_sidebar } from "../../actions/sidebar";
import Sidebar from "../Sidebar/Sidebar";

const MobileHeader = (props) => {

	const toggle_sidebar_on = () => {
		props.open_sidebar()
	}

	const toggle_sidebar_off = () => {
		props.close_sidebar()
	}

	return (
		<div className="header mobile-header">
			<input 
				type="checkbox" 
				className="sidebar__checkbox" 
				checked={props.open_sidebar_state.open_sidebar}
				onChange={() => ""}
			/>
			<Sidebar />

			<div className="mobile-header__menu-container">

				{
					(props.open_sidebar_state.open_sidebar) ? <FontAwesomeIcon 
						onClick={toggle_sidebar_off}
						className="mobile-header__times" 
						icon="times" /> : 	<FontAwesomeIcon 
						onClick={toggle_sidebar_on}
						className="mobile-header__bars" 
						icon="bars" />
				}
			</div>	

			<div onClick={toggle_sidebar_off}>
				<Link to="/" className="mobile-header__logo">LOGO</Link>
			</div>

			<div className="mobile-header__cart-section">
				<div className="mobile-header__cart-sub">
					<FontAwesomeIcon className="mobile-header__cart-icon" icon="shopping-cart" />
					<div className="mobile-header__cart-item-count">
						<p className="mobile-header__cart-item-num">10</p>
					</div>
				</div>
				<p className="mobile-header__cart-text">Cart</p>
			</div>


		</div>
	)
};

const mapStateToProps = (state) => ({
	open_sidebar_state: state.sidebar,
})


const mapDispatchToProps = (dispatch) => ({
	open_sidebar: () => dispatch(open_sidebar()),
	close_sidebar: () => dispatch(close_sidebar())
});


export default connect(mapStateToProps, mapDispatchToProps)(MobileHeader);