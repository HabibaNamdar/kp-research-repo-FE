// import React, { useState } from "react";
// import "./signup.css";

// export interface SignUpFormProps {
//   onSubmit?: (data: any) => void;
//   onClose?: () => void; // ✅ Added for popup close
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <form className="signup-form" onSubmit={handleSubmit}>
//       {/* ✅ Close button for popup */}
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

//       <h3 className="text-center mb-4">Sign Up</h3>

//       <div className="mb-3">
//         <label htmlFor="name">Full Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="password">Password</label>
//         <input
//           type="password"
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       <div className="mb-3">
//         <label htmlFor="role">Role</label>
//         <select
//           id="role"
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="form-select"
//           required
//         >
//           {/* <option value="">Select role</option> */}
//           <option value="admin">Admin</option>
//           <option value="user">Users</option>
//           <option value="publication">Publication</option>
//         </select>
//       </div>

//       <button type="submit" className="btn btn-primary w-100 mt-2">
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignUpForm;



// import React, { useState } from "react";
// import "./signup.css";

// export interface SignUpFormProps {
//   onSubmit?: (data: any) => void;
//   onClose?: () => void;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     // Resetting default role to an empty string or the first option's value
//     role: "Reader / Visitor", // Set a default value to avoid the 'Select Role' option being submitted
//   });
//   // State for the new "Terms and conditions" checkbox
//   const [agreedToTerms, setAgreedToTerms] = useState(false);
//   const [showPassword, setShowPassword] = useState(false); // State for password visibility

//   const handleChange = (
//     // Update type to include HTMLSelectElement for the dropdown
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setAgreedToTerms(e.target.checked);
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!agreedToTerms) {
//       alert("You must agree to the Terms and Conditions.");
//       return;
//     }
//     // Pass agreedToTerms along with the form data if needed
//     onSubmit?.({ ...formData, agreedToTerms });
//   };

//   return (
//     // Add a container class for the popup style (e.g., 'signup-modal-box')
//     <div className="signup-modal-box">
//       <form className="signup-form" onSubmit={handleSubmit}>

//         <h3 className="mb-4 fw-bold">Sign Up</h3>

//         {/* --- Name Field --- */}
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Full Name"
//             required
//           />
//         </div>

//         {/* --- Email Field --- */}
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Email Address"
//             required
//           />
//         </div>

//         {/* --- Password Field with Visibility Toggle --- */}
//         <div className="mb-3 password-container">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input
//             type={showPassword ? "text" : "password"} // Dynamic type
//             id="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             className="form-control"
//             placeholder="Enter Password"
//             required
//           />
//           <button
//             type="button"
//             className="password-toggle"
//             onClick={() => setShowPassword(prev => !prev)}
//             aria-label={showPassword ? "Hide password" : "Show password"}
//           >
//             {showPassword ? "👁️" : "👁️"} 
//           </button>
//         </div>

//         {/* ✅ Role using Select Dropdown (Updated) */}
//         <div className="mb-3">
//           <label htmlFor="role" className="form-label">Role</label>
//           <select
//             id="role"
//             name="role"
//             value={formData.role}
//             onChange={handleChange}
//             className="form-select" // Use Bootstrap class for select
//             required
//           >
//             <option value="select role ">Select Role</option>
//             <option value="admin">Admin</option>
//             <option value="publication">Publication</option>
//             <option value="user">User</option>
//           </select>
//         </div>
        
//         {/* --- Terms and conditions Checkbox --- */}
//         <div className="mb-3 form-check terms-checkbox-container">
//           <input
//             type="checkbox"
//             className="form-check-input"
//             id="terms-conditions"
//             checked={agreedToTerms}
//             onChange={handleCheckboxChange}
//           />
//           <label className="form-check-label" htmlFor="terms-conditions">
//             Agree with **Terms and conditions**
//           </label>
//         </div>

//         {/* --- Sign Up Button --- */}
//         <button type="submit" className="btn btn-custom-signup w-100 mt-2">
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpForm;




// import React, { useState } from "react";
// import "./signup.css";

// export interface SignUpFormProps {
//   onSubmit?: (data: any) => void;
//   onClose?: () => void;
// }

// const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onClose }) => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     role: "",
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
//   ) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (onSubmit) {
//       onSubmit(formData);
//     }
//   };

//   return (
//     <form className="signup-form position-relative" onSubmit={handleSubmit}>
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

//       <h3 className="text-center mb-4">Sign Up</h3>

//       {/* Full Name */}
//       <div className="mb-3">
//         <label htmlFor="name">Full Name</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       {/* Email */}
//       <div className="mb-3">
//         <label htmlFor="email">Email</label>
//         <input
//           type="email"
//           id="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           className="form-control"
//           required
//         />
//       </div>

//       {/* Password with Eye Icon */}
//       <div className="mb-3 position-relative">
//         <label htmlFor="password">Password</label>
//         <input
//           type={showPassword ? "text" : "password"}
//           id="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           className="form-control pe-5"
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

//       {/* Role */}
//       <div className="mb-3">
//         <label htmlFor="role">Role</label>
//         <select
//           id="role"
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//           className="form-select"
//           required
//         >
//           <option value="">Select role</option>
//           <option value="admin">Admin</option>
//           <option value="user">User</option>
//           <option value="publication">Publication</option>
//         </select>
//       </div>

//       {/* Submit Button */}
//       <button type="submit" className="btn btn-primary w-100 mt-2">
//         Sign Up
//       </button>
//     </form>
//   );
// };

// export default SignUpForm;




import React, { useState } from "react";
import "./signup.css";

export interface SignUpFormProps {
  onSubmit?: (data: any) => void;
  onClose?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onSubmit, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Save user to localStorage
    localStorage.setItem("userData", JSON.stringify(formData));

    if (onSubmit) {
      onSubmit(formData);
    }

    alert("Signup successful! You can now log in.");
  };

  return (
    <form className="signup-form position-relative" onSubmit={handleSubmit}>
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

      <h3 className="text-center mb-4">Sign Up</h3>

      <div className="mb-3">
        <label htmlFor="name">Full Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="form-control"
          required
        />
      </div>

      <div className="mb-3 position-relative">
        <label htmlFor="password">Password</label>
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="form-control pe-5"
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

      <div className="mb-3">
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="form-select"
          required
        >
          <option value="">Select role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="author">Author</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-100 mt-2">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
