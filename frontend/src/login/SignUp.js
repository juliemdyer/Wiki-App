import React from 'react';
import * as actions from './Login.actions';
import * as ReactRedux from 'react-redux';

class SignUp extends React.Component {

    render() {
        return (
            <div>
                {this.props.loggedIn ?
                    <div>
                        <img alt="flamingos" className="flamingo" src="/flamingo.png"></img>
                        <h3 className="welcome">You're logged in {this.props.username}!</h3>
                    </div> :

                    <div className="form">
                        <h3 className="welcome">Please create an account.</h3>
                        <div className="form-details">
                            Username: <input onChange={(event) => this.props.userTyping(event)} type="text" />
                            Email: <input onChange={(event) => this.props.emailTyping(event)} type="text" />
                            Password: <input onChange={(event) => this.props.passwordTyping(event)} type="password" />
                            <button className="btn btn-info" onClick={()=> this.props.createAccount(this.props.email, this.props.password, this.props.username)}>Create Account</button>
                        </div>
                    </div>}
            </div>
        )
    }
}

const SignUpContainer = ReactRedux.connect(
    state => state.login,
    actions
)(SignUp);

export default SignUpContainer;
