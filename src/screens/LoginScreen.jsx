import React, { useState } from "react";
import "../styles/Login.css";
import SignUpScreen from "./SignUpScreen";

function Login() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
          alt="Logo"
        />
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign in
        </button>
        <div className="loginScreen__gradient"></div>
      </div>

      <div className="loginScreen__body">
        {signIn ? (
          <SignUpScreen />
        ) : (
          <>
            <h1>Unlimited films, TV programms and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" id="" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStartedButton"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
