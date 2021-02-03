// Product Reducer
const productReducerDefaultState = [];

export const productReducer = (state = productReducerDefaultState, action) => {
	switch (action.type) {
		case "ADD_PRODUCT":
			return [
				...state,
				action.product
			];
			
		case "SET_PRODUCTS": 
			return action.products;
		
		case "EDIT_PRODUCT":
			return state.map((product) => {
				if (product._id === action._id) {
					return {
						...product,
						...action.updates
					};
				} else {
					return product;
				}
			});	

		case "REMOVE_PRODUCT":
			return state.filter((product) => product._id !== action._id);	
			
		default:
			return state;	
	}
}