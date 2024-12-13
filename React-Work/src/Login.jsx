import React, { useState } from "react";

const Login = ({ loginData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const verification = (e) => {
    e.preventDefault();
    if (loginData.email === email && loginData.password === password)
      alert("Valid User");
    else alert("Invalid User");
  };

  return (
    <div>
      <form>
        <div class="form-group">
          <h2>LOG IN</h2>
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <small id="emailHelp" class="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary" onClick={verification}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
