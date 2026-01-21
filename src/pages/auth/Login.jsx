import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // 🔹 Get registered users from localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // 🔹 Find user with matching email & password
    const foundUser = users.find(
      (u) => u.email === email && u.password === password
    );

    // 🔹 If not registered or wrong credentials
    if (!foundUser) {
      alert("Invalid email or password");
      return;
    }

    // 🔹 Save logged in user
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));

    // 🔹 Role based navigation
    if (foundUser.role === "user") {
      navigate("/user");
    } else if (foundUser.role === "agent") {
      navigate("/agent");
    } else if (foundUser.role === "admin") {
      navigate("/admin");
    } else if (foundUser.role === "superadmin") {
      navigate("/superadmin");
    } else {
      alert("Role not recognized");
    }
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email ID"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div className="options">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>

            <a href="/forgot-password" className="forgot">
              Forgot Password?
            </a>
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <p>
          Don&apos;t have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}