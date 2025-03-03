import React from "react";
import "./SignUp.css"; // Import the CSS file

function SignUp() {
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form">
        <div className="input-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>
        <div className="input-group">
          <label>Username:</label>
          <input type="text" placeholder="Choose a username" />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter a password" />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Confirm password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
