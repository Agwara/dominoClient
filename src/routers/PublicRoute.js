import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PublicRoute = ({ component: Component, ...rest }) => {
	return (
		<Route {...rest} component={(props) => (
				<div>
					<Header history={props.history}/>
					
                    <div className="content">
                        <Component {...props}/>
						<Footer />
                    </div>
				</div>
			)}
		/>
	);	
}

export default PublicRoute;