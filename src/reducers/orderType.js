// Order Type Reducer
const orderTypeDefaultState = "delivery"

export const orderTypeReducer = (state = orderTypeDefaultState, action) => {
    switch (action.type) {
        case "SET_ORDER_TYPE":
            return action.text;
        
        default: 
            return state;
    }
};