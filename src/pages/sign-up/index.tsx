// import React from "react";
// import { useNavigate } from "react-router-dom";

// import SignUpForm from "./form";
// import "./signup.css";

// interface SignUpProps {
//   onSubmit?: (data: any) => void;
// }

// const SignUp: React.FC<SignUpProps> = ({ onSubmit }) => {
//   const navigate = useNavigate();

//   const handleSignUp = (data: any) => {
//     console.log("Sign up data:", data);

//     // Save user role to localStorage
//     if (data.role) {
//       localStorage.setItem("userRole", data.role);
//     }

//     // If a parent provided an onSubmit handler, call it
//     if (onSubmit) {
//       onSubmit(data);
//     }

//     // Redirect user to login page after successful signup
//     navigate("/login");
//   };

//   return (
//     <div className="signup-page container py-5">
//       <h2 className="text-center mb-4">Create an Account</h2>
//       <SignUpForm onSubmit={handleSignUp} />
//     </div>
//   );
// };

// export default SignUp;



// 


import React from "react";
import { useNavigate } from "react-router-dom";
import SignUpForm from "./form";

const SignUpPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSignUp = (data: any) => {
    console.log("User signed up:", data);

    // ✅ Save user in localStorage
    localStorage.setItem("user", JSON.stringify(data));

    alert("Signup successful! Please login now.");
    navigate("/login");
  };

  return (
    <div className="signup-page d-flex justify-content-center align-items-center vh-100">
      <SignUpForm onSubmit={handleSignUp} />
    </div>
  );
};

export default SignUpPage;
