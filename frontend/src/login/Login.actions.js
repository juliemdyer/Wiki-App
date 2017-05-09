import $ from 'jquery';

function pageError(resp) {
    let error = (resp && resp.responseJSON && resp.responseJSON.message) || 'Something went wrong!';
    return { type: 'page-error', error: error };
}

export function loginButton(email, password) {
    let asyncAction = function(dispatch) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/api/login',
            contentType: 'application/json',
            data: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(data => dispatch({
            type: 'successfulLogin',
            payload: data
        }))
        .catch(resp => dispatch(pageError(resp)))
    }
    return asyncAction;
}

// Create account button click
export function createAccount(email, password, username) {
    let asyncAction = function(dispatch) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:4000/api/signup',
            contentType: 'application/json',
            data: JSON.stringify({
                email: email,
                password: password,
                username: username
            })
        })
        .then(username => dispatch({
            type: 'successfulLogin',
            payload: username
        }))
        .catch(resp => dispatch(pageError(resp)))
    }
    return asyncAction;
}

export function userTyping(event) {
    return {
        type: 'userTyping',
        username: event.target.value
    };
}

export function emailTyping(event) {
    return {
        type: 'emailTyping',
        email: event.target.value
    };
}

export function passwordTyping(event) {
    return {
        type: 'passwordTyping',
        password: event.target.value
    }
}
