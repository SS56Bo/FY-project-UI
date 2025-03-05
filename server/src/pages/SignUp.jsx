import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignUp.css"; // Import the CSS file

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [ConfirmPW, setConfirmPW] = useState("");
  const [error, setError] = useState("");

  // function to get name
  function getInfo(event) {
    event.preventDefault(); // Prevents page reload

    if (password != ConfirmPW) {
      setError("Password do not match!");
      alert(error);
      return;
    }

    setError("");
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Password:", password);
    alert("Sign Up successful!");
  }

  // return function
  return (
    <div className="signup-container">
      <h1>Sign Up</h1>
      <form className="signup-form" onSubmit={getInfo}>
        <div className="input-group">
          <label>Full Name:</label>
          <input
            type="text"
            placeholder="Enter your full name"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Username:</label>
          <input
            type="text"
            placeholder="Choose a username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter a password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            placeholder="Confirm password"
            onChange={(e) => setConfirmPW(e.target.value)}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <p>
        Have an existing account? <Link to="/signin">Sign In</Link>{" "}
      </p>
    </div>
  );
}

export default SignUp;
