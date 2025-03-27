import React, { useState } from "react";

const Registration = () => {
  const [data, setData] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password } = data;

    try {
      const res = await fetch("http://localhost:3001/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        throw new Error("Failed to register. Please try again.");
      }

      const result = await res.json();
      console.log("Success:", result);
      alert("Registration successful!");
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div>
      <form onSubmit={sendData}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
          <div className="form-text">
            We'll never share your name with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={data.email}
            onChange={handleChange}
          />
          <div className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            value={data.password}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
