import React from 'react';
import * as actions from './Login.actions';
import * as ReactRedux from 'react-redux';

class Login extends React.Component {

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <div>
                        <img alt="flamingos" className="flamingo" src="/flamingo.png"></img>
                        <h3 className="welcome">Thanks for logging in {this.props.username}!</h3>
                    </div> :
                    <div className="form">
                        <h3 className="welcome">Please Login.</h3>
                        <div className="form-details">
                            Email: <input onChange={(event) => this.props.emailTyping(event)} type="text" />
                            Password: <input onChange={(event) => this.props.passwordTyping(event)} type="password" />
                            <button className="btn btn-info" onClick={()=> this.props.loginButton(this.props.email, this.props.password)}>Login</button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const LoginContainer = ReactRedux.connect(
    state => state.login,
    actions
)(Login);

export default LoginContainer;
