
// import './nav-bar.css';
// export default function NavBar() {
//   return <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
//   <div className="container">
//     <a className="navbar-brand d-flex align-items-center" href="#">
//       <img src="/logo.png" alt="Logo" width="45" className="me-2" />
//       <a href="#" className="text-decoration-none text-dark">
//   <h5 className="mb-0 fw-bold">Research Repository</h5>
//   {/* The additional text from the image, styled to be part of the header/logo area */}
//   <p className="small mb-0 fw-bold" style={{ lineHeight: '1.1', marginTop: '2px' }}>
//     & SCIENTIST DIRECTORY<br />
//     FOR KP
//   </p>
// </a>
//     </a>
//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarNav"
//     >
//       <span className="navbar-toggler-icon"></span>
//     </button>
//     <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
//       <ul className="navbar-nav align-items-center">
//         <li className="nav-item"><a href="#" className="nav-link active">Home</a></li>
//         <li className="nav-item"><a href="#" className="nav-link">Browse</a></li>
//         <li className="nav-item"><a href="#" className="nav-link">Upload</a></li>
//         <li className="nav-item"><a href="#" className="nav-link">About Us</a></li>
//         <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
//         <li className="nav-item ms-3">
//           <a href="#" className="btn btn-custom text-white">Login</a>
//         </li>
//         <li className="nav-item ms-2">
//           <a href="#" className="btn btn-custom text-white">Sign Up</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>;
// }



// import { Link } from "react-router-dom";
// import "./nav-bar.css";

// export default function NavBar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
//       <div className="container">
//         <Link className="navbar-brand d-flex align-items-center" to="/">
//           <img src="/logo.png" alt="Logo" width="45" className="me-2" />
//           <div className="text-dark text-decoration-none">
//             <h5 className="mb-0 fw-bold">Research Repository</h5>
//             <p
//               className="small mb-0 fw-bold"
//               style={{ lineHeight: "1.1", marginTop: "2px" }}
//             >
//               & SCIENTIST DIRECTORY
//               <br />
//               FOR KP
//             </p>
//           </div>
//         </Link>

//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNav"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div
//           className="collapse navbar-collapse justify-content-end"
//           id="navbarNav"
//         >
//           <ul className="navbar-nav align-items-center">
//             <li className="nav-item">
//               <Link className="nav-link " to="/">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/browse">
//                 Browse
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/upload">
//                 Upload
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/about">
//                 About Us
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link className="nav-link" to="/contact">
//                 Contact
//               </Link>
//             </li>
//             <li className="nav-item ms-3">
//               <Link className="btn btn-custom text-white" to="/login">
//                 Login
//               </Link>
//             </li>
//             <li className="nav-item ms-2">
//               <Link className="btn btn-custom text-white" to="/signup">
//                 Sign Up
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }



import { NavLink } from "react-router-dom";
import "./nav-bar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand d-flex align-items-center" to="/">
          <img src="/logo.png" alt="Logo" width="45" className="me-2" />
          <div className="text-dark text-decoration-none">
            <h5 className="mb-0 fw-bold">Research Repository</h5>
            <p
              className="small mb-0 fw-bold"
              style={{ lineHeight: "1.1", marginTop: "2px" }}
            >
              & SCIENTIST DIRECTORY
              <br />
              FOR KP
            </p>
          </div>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/browse"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Browse
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/upload"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Upload
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active-link" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item ms-3">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive ? "btn btn-custom text-white active-btn" : "btn btn-custom text-white"
                }
              >
                Login
              </NavLink>
            </li>
            <li className="nav-item ms-2">
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "btn btn-custom text-white active-btn" : "btn btn-custom text-white"
                }
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
