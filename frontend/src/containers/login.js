import React, { Component } from 'react';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import TitleHeader from '../components/title_header';
import VideoPlayer from '../components/video_player';

class Login extends Component {

  render() {
    return (
        <div className="navbar-header">
          <TitleHeader/>
          <div className='login-surrounding'>
            <div className='login-box'>
              <div>
              {
                (isLoggedIn()) ? ( <button className="btn btn-danger log" onClick={() => logout()}>Log out </button> ) : ( <button className="btn btn-info log" onClick={() => login()}>Log In</button> )
              }
              </div>
            </div>
          </div>
          <VideoPlayer/>
      </div>
    );
  }
}

export default Login;
