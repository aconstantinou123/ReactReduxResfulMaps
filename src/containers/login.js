import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';

class Login extends Component {

  render() {
    return (
        <div className="navbar-header">
          <div>
            {
             ( isLoggedIn() ) ? <Link to="/home">Home</Link> :  ''
            }
          </div>
          <div>
           {
             (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
           }
          </div>
      </div>
    );
  }
}

export default Login;
