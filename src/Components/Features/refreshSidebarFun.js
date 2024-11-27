const initialState = {
    sidebarRefresh: false,
};

const sidebarReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'REFRESH_SIDEBAR':
            return {
                ...state,
                sidebarRefresh: !state.sidebarRefresh, // Alterne l'état pour forcer un rafraîchissement
            };
        default:
            return state;
    }
};

export default sidebarReducer;
