// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css"; // ✅ Import custom CSS

// const Login: React.FC = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Basic validation
//     if (!email || !password) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     // Retrieve saved role from sign-up
//     const storedRole = localStorage.getItem("userRole");

//     if (!storedRole) {
//       alert("No role found! Please sign up first.");
//       navigate("/signup");
//       return;
//     }

//     // Redirect based on role
//     if (storedRole === "admin") {
//       navigate("/admin-dashboard");
//     } else if (storedRole === "publisher") {
//       navigate("/publisher-dashboard");
//     } else {
//       navigate("/user-dashboard");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login to Your Account</h2>
//         <form onSubmit={handleLogin}>
//           {/* Email */}
//           <div className="mb-4">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Login Button */}
//           <button type="submit">Login</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./login.css";

// const Login: React.FC = () => {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (role: string) => {
//     if (!email || !password) {
//       alert("Please fill in all fields!");
//       return;
//     }

//     // Save role temporarily (optional)
//     localStorage.setItem("userRole", role);

//     // Redirect based on role
//     if (role === "admin") {
//       navigate("/admin-dashboard");
//     } else {
//       navigate("/user-dashboard");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-card">
//         <h2>Login to Your Account</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           {/* Email */}
//           <div className="mb-4">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>

//           {/* Password */}
//           <div className="mb-4">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>

//           {/* Buttons */}
//           <div className="login-buttons">
//             <button
//               type="button"
//               className="btn btn-primary w-100 mb-2"
//               onClick={() => handleLogin("user")}
//             >
//               Login as Author / User
//             </button>

//             <button
//               type="button"
//               className="btn btn-secondary w-100"
//               onClick={() => handleLogin("admin")}
//             >
//               Login as Admin
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // ✅ Common login handler
  const handleLogin = (role: string) => {
    if (!email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Optional: Save role and email in localStorage
    localStorage.setItem("userRole", role);
    localStorage.setItem("userEmail", email);

    // ✅ Redirect based on role
    if (role === "admin") {
      navigate("/admin-dashboard");
    } else if (role === "author") {
      navigate("/author-dashboard");
    } else {
      navigate("/user-dashboard");
    }
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="login-card p-4 shadow-lg rounded-4" style={{ width: "400px", background: "white" }}>
        <h2 className="text-center mb-4 fw-bold">Login to Your Account</h2>

        <form onSubmit={(e) => e.preventDefault()}>
          {/* Email Field */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
            />
          </div>

          {/* Buttons */}
          <div className="login-buttons">
            <button
              type="button"
              className="btn btn-primary w-100 mb-2"
              onClick={() => handleLogin("author")}
            >
              Login as Author
            </button>

            <button
              type="button"
              className="btn btn-primary w-100 mb-2"
              onClick={() => handleLogin("author")}
            >
              Login as user
            </button>

            <button
              type="button"
              className="btn btn-secondary w-100"
              onClick={() => handleLogin("admin")}
            >
              Login as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
