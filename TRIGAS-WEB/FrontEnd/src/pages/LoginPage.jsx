import "../assets/css/login.css";
import logo from "../assets/logos/black.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State for error messages
  const navigate = useNavigate();

  // Static credentials
  const staticUsername = "admin";
  const staticPassword = "123";

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form from submitting automatically

    // Validation: Check if fields are empty
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }

    // Validation: Check if credentials are correct
    if (username === staticUsername && password === staticPassword) {
      setError(""); // Clear error message
      navigate("/dashboard"); // Redirect to dashboard if credentials are correct
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container-flude log-area">
      <div className="container row log-area-sub">
        <div className="log-sub1 col-md-6 col-sm-12">
          <img src={logo} alt="Logo" />
        </div>
        <div className="log-sub2 col-md-6 col-sm-12">
          <div className="mb-4">
            <h1>
              Welcome To{" "}
              <span className="log-color">
                <TypeAnimation
                  sequence={["TRIGAS", 1000, ""]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
          </div>
          <form onSubmit={handleLogin}>
            <div className="mb-2">
              <label className="form-label">
                <h6>Username</h6>
              </label>
              <input
                type="text"
                style={{ width: "328px" }}
                className="form-control"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">
                <h6>Password</h6>
              </label>
              <input
                type="password"
                style={{ width: "328px" }}
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>} {/* Display error message */}
            <h6 className="mb-4" style={{ width: "328px" }}>
              Forgot Password?
            </h6>
            <button type="submit" className="btn btn-dark" style={{ width: "328px" }}>
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
