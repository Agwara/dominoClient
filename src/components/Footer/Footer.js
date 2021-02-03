import React from "react";
import { Link } from "react-router-dom";
import facebook from "../../svg/facebook.svg";
import twitter from "../../svg/twitter.svg";

const Footer = () => {

	return (
		<div className="footer">
			<div className="footer__content">
				<ul className="footer__nav-list">
					<li className="footer__nav-item">
						<Link to="#" className="footer__nav-link">International</Link>
					</li>
					<li className="footer__nav-item footer__center">
						<Link to="#" className="footer__nav-link">About Pizza</Link>
					</li>
					<li className="footer__nav-item">
						<Link to="#" className="footer__nav-link">FAQ</Link>
					</li>
					<li className="footer__nav-item footer__center">
						<Link to="#" className="footer__nav-link footer__center">Contact Us</Link>
					</li>
				</ul>

				<div className="footer__promo">
					<div className="footer__fonts">
						<img className="footer__facebook" src={facebook} alt="FacebookImage"></img>
	
						<img className="footer__twitter" src={twitter} alt="FacebookImage"></img>
					</div>


					<figure className="footer__image">
               			<img 
							src="/img/interswitch.png" 
							alt="Interswitch"
							className="gallery--img"
                		/>
            		</figure>
				</div>

				<div className="footer__legal">
					<p className="footer__legal-text">
						Delivery Guarantee: A minimum order of N3000 is required to qualify for free delivery.
						FREE delivery applies to predetermined areas around each Agwara’s outlet. Please ask your
						closest Agwara’s Pizza outlet if you fall within their specified delivery area. Our Delivery
						Experts are not penalized for late deliveries.
					</p>
					<p className="footer__legal-text">
						The hours of operation may vary by store. Valid for the Delivery Service and Carry-Out of Agwara's
						Pizza Nigeria stores. Agwara's Pizza reserves the right to make unannounced price changes. Our 
						delivery experts provide change up to N7500. Please note that checks or bank transfers, are not 
						accepted as payment method. The data provided by customers will be included in the user and promotional
						database, owned by Nnaemeka N Uti Ltd. Prices include VAT & other Taxes.
					</p>
				</div>
			</div>
		</div>
	)
};

export default Footer;