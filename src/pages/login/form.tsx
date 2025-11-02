// import React, { useState } from "react";
// import "./login.css";

// export interface LoginFormProps {
//   onClose?: () => void;
//   onLogin?: (data: any) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onLogin?.(formData);
//   };

//   return (
//     <form className="login-form position-relative" onSubmit={handleSubmit}>
//       {/* ✅ Close button */}
//       {onClose && (
//         <button
//           type="button"
//           className="btn-close"
//           aria-label="Close"
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "15px",
//             background: "transparent",
//             border: "none",
//             fontSize: "1.5rem",
//             cursor: "pointer",
//           }}
//         >
//           ×
//         </button>
//       )}

//       <h3 className="text-center mb-4 fw-bold">Login</h3>

//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className="form-control"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           className="form-control"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <a href="#" style={{ fontSize: "0.9rem" }}>Forgot password?</a>
//       </div>

//       <button type="submit" className="btn btn-primary w-100">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;




// import React, { useState } from "react";
// import "./login.css";

// export interface LoginFormProps {
//   onClose?: () => void;
//   onLogin?: (data: any) => void;
// }

// const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     onLogin?.(formData);
//   };

//   return (
//     <form className="login-form position-relative" onSubmit={handleSubmit}>
//       {/* ✅ Close button */}
//       {onClose && (
//         <button
//           type="button"
//           className="btn-close"
//           aria-label="Close"
//           onClick={onClose}
//           style={{
//             position: "absolute",
//             top: "10px",
//             right: "15px",
//             background: "transparent",
//             border: "none",
//             fontSize: "1.5rem",
//             cursor: "pointer",
//           }}
//         >
//           ×
//         </button>
//       )}

//       <h3 className="text-center mb-4 fw-bold">Login</h3>

//       {/* Email Field */}
//       <div className="mb-3">
//         <label htmlFor="email" className="form-label">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           className="form-control"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </div>

//       {/* Password Field with Eye Icon */}
//       <div className="mb-3 position-relative">
//         <label htmlFor="password" className="form-label">Password</label>
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           name="password"
//           className="form-control pe-5"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <span
//           onClick={() => setShowPassword(!showPassword)}
//           style={{
//             position: "absolute",
//             right: "10px",
//             top: "38px",
//             cursor: "pointer",
//             color: "#555",
//             userSelect: "none",
//           }}
//         >
//           {showPassword ? "👁️" : "👁️‍🗨️"}
//         </span>
//       </div>

//       {/* Forgot Password */}
//       <div className="d-flex justify-content-between align-items-center mb-3">
//         <a href="#" style={{ fontSize: "0.9rem" }}>Forgot password?</a>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="btn btn-primary w-100">
//         Login
//       </button>
//     </form>
//   );
// };

// export default LoginForm;




import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export interface LoginFormProps {
  onClose?: () => void;
  onLogin?: (data: any, role: string) => void; // Added role
}

const LoginForm: React.FC<LoginFormProps> = ({ onClose, onLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent, role: string) => {
    e.preventDefault();
    onLogin?.(formData, role);

    if(role =='user'){
      navigate("/user-dashboard");
    }
    else if(role == 'admin'){
      navigate("/admin-dashboard")
    }
    else if(role == 'author'){
      navigate("/author-dashboard")
    }
  };

  return (
    <form className="login-form position-relative">
      {/* ✅ Close button */}
      {onClose && (
        <button
          type="button"
          className="btn-close"
          aria-label="Close"
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "15px",
            background: "transparent",
            border: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      )}

      <h3 className="text-center mb-4 fw-bold">Login</h3>

      {/* Email Field */}
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      {/* Password Field */}
      <div className="mb-3 position-relative">
        <label htmlFor="password" className="form-label">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          className="form-control pe-5"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: "absolute",
            right: "10px",
            top: "38px",
            cursor: "pointer",
            color: "#555",
            userSelect: "none",
          }}
        >
          {showPassword ? "👁️" : "👁️‍🗨️"}
        </span>
      </div>

      {/* Forgot Password */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <a href="#" style={{ fontSize: "0.9rem" }}>Forgot password?</a>
      </div>

      {/* Login Buttons */}
      <div className="login-buttons">
        <button
          type="submit"
          className="btn btn-primary w-100 mb-2"
          onClick={(e) => handleSubmit(e, "author")}
        >
          Login as Author 
        </button>

        <button
          type="submit"
          className="btn btn-harmony w-100 mb-2"
          onClick={(e) => handleSubmit(e, "user")}
        >
          Login as user 
        </button>

        <button
          type="submit"
          className="btn btn-secondary w-100"
          onClick={(e) => handleSubmit(e, "admin")}
        >
          Login as Admin
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
