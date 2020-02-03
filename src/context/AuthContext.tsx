import createDataContext from './createDataContext';

const authReducer = (state, action) => {
    switch (action.type) {    
        default:
            return state;
    }
}

const signup = (dispatch) => ({ email, password }) => {
// make api request 
}
const signin = (dispatch) => ({ email, password }) => {
    // Try to signin
    // Handle success by updating state
    // Handle failure by showing error message (somehow)
}
const signout = (dispatch) => () => {
    // singout
}
export const { Provider, Context } = createDataContext(
    authReducer, 
    {
        signin, 
        signout
    }, 
    {
        isSignedIn: false
    }
);