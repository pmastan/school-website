import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Minimum 6 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    // Dummy Login
    localStorage.setItem("schoolUser", JSON.stringify(formData));

    alert("Login Successful!");

    if (formData.role === "student") {
      navigate("/student-dashboard");
    } else if (formData.role === "teacher") {
      navigate("/teacher-dashboard");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">

        <div className="login-left">

          <h1>ABC Public School</h1>

          <p>
            Welcome Back!
          </p>

          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800"
            alt="School"
          />

        </div>

        <div className="login-right">

          <h2>Login</h2>

          <form onSubmit={handleSubmit}>

            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">{errors.email}</span>
            )}

            <label>Password</label>

            <div className="password-box">

              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
              />

              <button
                type="button"
                className="show-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </button>

            </div>

            {errors.password && (
              <span className="error">{errors.password}</span>
            )}

            <label>Login As</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>

            <button className="login-btn">
              Login
            </button>

            <div className="login-links">

              <Link to="/forgot-password">
                Forgot Password?
              </Link>

              <Link to="/register">
                Register
              </Link>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default Login;