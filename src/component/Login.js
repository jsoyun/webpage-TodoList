import React from "react";
import { Route, Link } from "react-router-dom";
import Submit from "./Submit";
// import CreateAccount from "./CreateAccount";

const Login = () => {
  return (
    <div className="login-page">
      <div className="form">
        <form class="login-form">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button>
            <Link to="/login/submit">기다렸어 어서와😎</Link>
          </button>
          <p class="message">
            Not registered?{" "}
            <p>
              <Link to="/CreateAccount">Create an account</Link>
            </p>
          </p>
        </form>
      </div>
      <Route path="/login/submit" component={Submit} />
      {/* <Route path="/CreateAccount" component={CreateAccount} /> */}
    </div>
  );
};

export default Login;
