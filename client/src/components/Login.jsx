import React, { useState } from "react";
import "../styles/login.css";

// login function to send to API / backend
async function loginUser(credentials, setMessage) {
  try {
    const response = await fetch(
      "http://localhost:3002/api/user-routes/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
      localStorage.clear()
      localStorage.setItem("token", JSON.stringify(data));
      window.location.href = "/"
    } else if (response.status === 401) {
      setMessage("Incorrect username or password");
    }
  } catch (err) {
    setMessage("An error occurred while logging in. ")
  }
}

export const Login = () => {
  // useState to capture email / password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // handleSubmit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    await loginUser(
      {
        email: email,
        password: password,
      },
      setMessage
    );
  };

  return (
    // all info goes in here
    <div className="auth-form-container bottom-div">
      <header className="flex justify-between">
        <h1 className="right-align ml-3">
          Welcome<span className="bold">Back</span>
        </h1>
        <p>{message}</p>
      </header>

      <form className="column-right" onSubmit={handleSubmit}>
        <input className="mr-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          id="email"
          name="email"
        />

        <input className="mr-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />

        <button id="login" type="submit">Login</button>
        <button
        className="text-base mr-3 mb-1 register-button"
        onClick={() => (window.location.href = "/register")}
      >
        Don't have an account? Register here.
      </button>
      </form>

      
    </div>
  );
};
