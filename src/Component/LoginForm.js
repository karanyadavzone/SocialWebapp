import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform login logic here
    // You can make an API call or implement your own login logic

    console.log("Login form submitted");
    console.log("Email:", email);
    console.log("Password:", password);

    // Clear the form fields
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Link className="nav-link" to="/home">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
