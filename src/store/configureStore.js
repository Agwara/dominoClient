import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
// import { createLogger } from "redux-logger";
import promise from "redux-promise";

import { productReducer } from "../reducers/products";
import { sidebarReducer } from "../reducers/sidebar";
import { orderTypeReducer } from "../reducers/orderType"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const logger = createLogger();

const middlewares = [thunk, promise]

const configureStore = () => {
	const store = createStore(
		combineReducers({
			products: productReducer,
			sidebar: sidebarReducer,
			orderType: orderTypeReducer
		}),
		composeEnhancers(applyMiddleware(...middlewares))
	);
	return store;
};

export default configureStore;