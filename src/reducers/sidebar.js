export const sidebarReducer = (state = {open_sidebar: false}, action) => {
	switch (action.type) {
		case "OPEN_SIDEBAR": 
			return { 
                open_sidebar: true
			};
		case "CLOSE_SIDEBAR":
			return {
				open_sidebar: false
			};
		default: 
			return state;
	}
}