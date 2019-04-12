import React, { Component } from 'react';
// import logo from './logo.svg';
import $ from 'jquery';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
       <LoginPanel />
      </div>
    );
  }
}

class LoginPanel extends Component {
  
  slide = () => {
    document.getElementById("submit-button").style.animation = "slide normal 1s ease-in";
    // setTimeout(() => {
    //   document.getElementById("myForm").submit();
    // },1000);
    const username = document.getElementById("login-id").value;
    const password = document.getElementById("password-id").value;
    let dataString = {
      username,
      password,
    };
    dataString = JSON.parse(JSON.stringify(dataString));
    console.log(dataString);
    $.ajax({
      type: "GET",
      contentType: "application/json",
      url: "http://localhost:8000/login",        
      data: dataString,
      success: function(response) {              
        console.log(response);
      }
    });
  };

  render() {
    return (
      <div>
        <div id="login-container">
          <form id="myForm">
            <table>
              <tbody>
                <tr>
                  <td>Login id:</td>
                  <td><input type="text" id="login-id" /></td>
                </tr>
                <tr>
                  <td>Password:</td> 
                  <td><input type="password" id="password-id" /></td>
                </tr>
                <tr>
                  <td colSpan='2'>
                    <div id="path-button">
                      <span id="submit-button" onClick={this.slide}>Login</span>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
