import React from "react";
import "./SignIn.css";

function SignIn() {
  return (
    <div className="signin-container">
      <h1>Sign In</h1>
      <p>
        Username: <input type="text" />
      </p>
      <p>
        Password: <input type="text" />
      </p>
      <button>Log In</button>
    </div>
  );
}

export default SignIn;
