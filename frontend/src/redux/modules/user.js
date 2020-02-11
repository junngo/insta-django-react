// imports

// actions
const SAVE_TOKEN = "SAVE_TOKEN";
const LOGOUT = "LOGOUT";

// action creators
function logout() {
    return {
        type: LOGOUT
    }
}

function saveToken(token) {
    return {
        type: SAVE_TOKEN,
        token
    };
}



// API actions
function createAccount(username, password, email) {
    return function(dispatch) {
        fetch("/rest-auth/registration/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password1: password,
                password2: password,
                email
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    };
}

function facebookLogin(access_token) {
    return function(dispatch) {
        fetch("/users/login/facebook/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
            access_token
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                localStorage.setItem("jwt", json.token);
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    };
}

function usernameLogin(username, password) {
    return function(dispatch) {
        fetch("/rest-auth/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(saveToken(json.token));
            }
        })
        .catch(err => console.log(err));
    };
}

// initial state
const initialState = {
    isLoggedIn: localStorage.getItem("jwt") ? true : false
};

// reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SAVE_TOKEN:
            return applySetToken(state, action);
        case LOGOUT:
            return applyLogout(state, action);
        default:
            return state;
    }
}

// reducer functions
function applySetToken(state, action) {
    const { token } = action;
    return {
        ...state,
        isLoggedIn: true,
        token: token
    };
}

function applyLogout(state, action) {
    return {
        isLoggedIn: false
    }
}

// exports
const actionCreators = {
    facebookLogin,
    usernameLogin,
    createAccount,
    logout
};

export { actionCreators };

// export reducer by default

export default reducer;
