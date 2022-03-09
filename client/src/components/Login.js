import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const history = useHistory()
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
            username,
            password 
        }),
      })
        .then((r) => r.json())
        .then((user) => {
          localStorage.setItem("user", user.id)
          if (Number.isInteger(user.id)) {
            history.push('/homepage')
          } else {
            setErrorMessage("Invalid username or password")
          }
        })
    }
  
    return (
      <article>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <NavLink to="/signup" className="link-text">
            Sign up   
        </NavLink>
        <h1>{errorMessage}</h1>
      </article>
    );
}

export default Login;