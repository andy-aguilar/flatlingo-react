

const usersReducer = (state= {}, action) => {
    switch(action.type){
        case "LOGIN_USER":
            return {...state, currentUser: action.user};
        default:
            return state;
    }
    
};

export default usersReducer;