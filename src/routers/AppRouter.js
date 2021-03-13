import React from "react";
import {BrowserRouter as Router, Switch} from "react-router-dom";


import ContactUsPage from "../components/ContactUsPage/ContactUsPage"
import CheckoutPage from "../components/CheckoutPage/Checkoutpage";
import CustomerProfile from "../components/CustomerProfile/CustomerProfile";
import FAQsPage from "../components/FAQsPage/FAQsPage";
import HomePage from "../components/HomePage/HomePage";
import Login from "../components/LoginForm/LoginForm";
import Menu from "../components/Menu/Menu";
import MenuItemPage from "../components/MenuItemPage/MenuItemPage"
import SelectOrderType from "../components/SelectOrderType/SelectOrderType";
import SignupPage from "../components/SignupPage/SignupPage";
import TrackerPage from "../components/TrackerPage/TrackerPage";


import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
const AppRouter = () => (
    <Router>
        <Switch>
            <PublicRoute exact path="/" component={HomePage} />

            <PublicRoute exact path="/checkout" component={CheckoutPage} />

            <PublicRoute exact path="/contact-us" component={ContactUsPage} />

            <PublicRoute exact path="/faq" component={FAQsPage} />

            <PublicRoute exact path="/login" component={Login} />

            <PublicRoute exact path="/menu" component={Menu} />

            <PublicRoute exact path="/menu/:id" component={MenuItemPage} />

            <PublicRoute exact path="/select-order-type" component={SelectOrderType} />

            <PublicRoute exact path="/signup" component={SignupPage} />

            <PublicRoute exact path="/tracker" component={TrackerPage} />

            <PrivateRoute path="/customer/profile" component={CustomerProfile} />
        </Switch>
    </Router>
)

export default AppRouter;