import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file

function SignUp() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // function to get name
  function getInfo(event) {
    event.preventDefault(); // Prevents page reload
    console.log("Name:", name);
    console.log("Username:", username);
    console.log("Password:", password);
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
          <input type="password" placeholder="Confirm password" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
