import React, { Component } from "react";
import "./App.css";
import ReactDom from "react-dom";
import GoogleLogin from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pasos</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2> Login with Google </h2>
        <GoogleLogin
        clientId="131807459563-1re3hrvm5dsv90jo04arhkth4lfra1pg.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />,
      </div>
    );
  }
}

export default App;
