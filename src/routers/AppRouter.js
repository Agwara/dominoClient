import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";


import CheckoutPage from "../components/CheckoutPage/Checkoutpage";
import CustomerProfile from "../components/CustomerProfile/CustomerProfile";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LoginForm/LoginForm";
import Menu from "../components/Menu/Menu";
import SelectOrderType from "../components/SelectOrderType/SelectOrderType";
import SignupPage from "../components/SignupPage/SignupPage";


import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

const AppRouter = () => (
    <Router>
        <Switch>
            <PublicRoute exact path="/" component={HomePage} />

            <PublicRoute exact path="/checkout" component={CheckoutPage} />

            <PublicRoute exact path="/login" component={Login} />

            <PublicRoute exact path="/menu" component={Menu} />

            <PublicRoute exact path="/select-order-type" component={SelectOrderType} />

            <PublicRoute exact path="/signup" component={SignupPage} />

            <PrivateRoute path="/customer/profile" component={CustomerProfile} />
        </Switch>
    </Router>
)

export default AppRouter;