import React from "react";
import { Route, Redirect } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const PrivateRoute = ({
	component: Component,
	...rest
}) => (
	<Route {...rest} component={(props) => (
			true ? (
				<div>				
					<Header history={props.history} />
                    
                    <div className="content">
                        <Component {...props}/>
						<Footer />
                    </div>
				</div>
			) : (
				<Redirect to="/create/profile" />	
			)
		)}
	/>
);

export default PrivateRoute;