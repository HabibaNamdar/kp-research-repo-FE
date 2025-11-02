// import React from 'react';
// import './user-management.css';
// import { FaBell, FaSearch, FaEdit, FaEye, FaTrashAlt } from 'react-icons/fa';

// interface User {
//   name: string;
//   email: string;
//   role: string;
//   joined: string;
//   publications: number;
//   status: string;
// }

// const userData: User[] = [
//   { name: "Dr. Noor Jahan", email: "noor.jahan@example.com", role: "Admin", joined: "Oct 10, 2021", publications: 12, status: "Active" },
//   { name: "Sara Ali",    email: "sara.ali@example.com",  role: "Staff", joined: "May 2, 2022",  publications: 5,  status: "Active" },
//   { name: "John Doe",    email: "john.doe@example.com",  role: "Manager", joined: "Jan 15, 2023", publications: 7,  status: "Pending" },
//   { name: "Jane Smith",  email: "jane.smith@example.com",role: "Staff", joined: "Mar 3, 2022",   publications: 3,  status: "Inactive" },
//   { name: "Alex Brown",  email: "alex.brown@example.com",role: "Staff", joined: "Aug 8, 2020",   publications: 0,  status: "Active" }
// ];

// const UserManagement: React.FC = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar Navigation */}
//       <nav className="sidebar">
//         <ul className="sidebar__list">
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Dashboard</a></li>
//           <li className="sidebar__item sidebar__item--active">
//             <a className="sidebar__link" href="#">User Management</a>
//           </li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Publications</a></li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Analytics</a></li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Feedback/Report</a></li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Settings</a></li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Help/Support</a></li>
//           <li className="sidebar__item"><a className="sidebar__link" href="#">Logout</a></li>
//         </ul>
//       </nav>

//       {/* Main Content Area */}
//       <div className="main-content">
//         <header className="topbar">
//           <h1>User Management</h1>
//           <div className="header-icons">
//             <FaBell className="icon" title="Notifications" />
//             <img
//               className="profile-img"
//               src="https://via.placeholder.com/32"
//               alt="Admin Profile"
//             />
//           </div>
//         </header>

//         <main>
//           <p>Manage your application's users through this interface.</p>

//           {/* Search Bar */}
//           <div className="search-bar">
//             <FaSearch className="icon search-icon" />
//             <input type="text" placeholder="Search users..." />
//           </div>

//           {/* User Table */}
//           <table className="user-table">
//             <thead>
//               <tr>
//                 <th>User Name</th>
//                 <th>Email</th>
//                 <th>Role</th>
//                 <th>Joined Date</th>
//                 <th>Publications</th>
//                 <th>Status</th>
//                 <th>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {userData.map((user, idx) => (
//                 <tr key={idx}>
//                   <td>{user.name}</td>
//                   <td>{user.email}</td>
//                   <td>{user.role}</td>
//                   <td>{user.joined}</td>
//                   <td>{user.publications}</td>
//                   <td>{user.status}</td>
//                   <td>
//                     <FaEdit className="action-icon" title="Edit" />
//                     <FaEye className="action-icon" title="View" />
//                     <FaTrashAlt className="action-icon" title="Delete" />
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </main>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;






// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./user-management.css"; // Create this file for small adjustments

// const UserManagement: React.FC = () => {
//   const navigate = useNavigate();

//   const repoLogoUrl = "/logo.png";
//   const adminAvatarUrl = "/admin_profile.jpg";
//   const user = { name: "Admin" };

//   return (
//     <div className="d-flex min-vh-100">
//       {/* ===== Sidebar ===== */}
//       <nav
//         id="sidebar"
//         className="text-white p-3"
//         style={{ width: "250px", backgroundColor: "#066187" }}
//       >
//         {/* Logo & Title */}
//         <div className="text-center mb-4 border-bottom pb-3">
//           <div className="d-flex align-items-center justify-content-center mb-2">
//             <img
//               src={repoLogoUrl}
//               alt="Logo"
//               className="me-2"
//               style={{
//                 height: "30px",
//                 marginRight: "5px",
//                 filter: "invert(1) brightness(0) saturate(100) invert(100%)",
//               }}
//             />
//             <div className="fw-bold fs-6 text-start">
//               RESEARCH REPOSITORY & SCIENTIST DIRECTORY for KP
//             </div>
//           </div>
//         </div>

//         {/* Sidebar Menu */}
//         <ul className="list-unstyled sidebar-menu">
//           <li className="mb-1">
//             <button
//               onClick={() => navigate("/admin-dashboard")}
//               className="btn d-flex align-items-center p-2 text-white w-100 text-start"
//               style={{ background: "none", border: "none" }}
//             >
//               <i className="bi bi-grid-fill me-3"></i> Dashboard
//             </button>
//           </li>

//           {/* Active page — User Management */}
//           <li className="mb-1">
//             <button
//               onClick={() => navigate("/user-management")}
//               className="btn d-flex align-items-center p-2 w-100 text-start"
//               style={{
//                 backgroundColor: "rgba(255, 255, 255, 0.2)",
//                 border: "none",
//                 color: "white",
//                 borderRadius: "6px",
//               }}
//             >
//               <i className="bi bi-people-fill me-3"></i> User Management
//             </button>
//           </li>

//           <li className="mb-1">
//             <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
//               <i className="bi bi-journal-text me-3"></i> Publications
//             </a>
//           </li>
//           <li className="mb-1">
//             <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
//               <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
//             </a>
//           </li>
//           <li className="mb-1">
//             <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
//               <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
//             </a>
//           </li>
//           <li className="mb-1">
//             <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
//               <i className="bi bi-gear-fill me-3"></i> Settings
//             </a>
//           </li>
//           <li className="mb-1">
//             <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
//               <i className="bi bi-question-circle-fill me-3"></i> Help/Support
//             </a>
//           </li>

//           {/* Logout */}
//           <li className="mt-4 pt-3 border-top border-secondary">
//             <button
//               onClick={() => navigate("/login")}
//               className="btn d-flex align-items-center p-2 text-white w-100 text-start"
//               style={{ background: "none", border: "none" }}
//             >
//               <i className="bi bi-box-arrow-right me-3"></i> Logout
//             </button>
//           </li>
//         </ul>
//       </nav>

//       {/* ===== Main Content ===== */}
//       <div className="flex-grow-1 bg-light">
//         {/* Top Navbar */}
//         <nav className="navbar bg-white shadow-sm px-4">
//           <div className="container-fluid p-0">
//             <h5 className="mb-0 fw-bold">User Management</h5>
//             <div className="d-flex align-items-center">
//               <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
//               <div className="d-flex align-items-center">
//                 <img
//                   src={adminAvatarUrl}
//                   alt="Admin"
//                   className="rounded-circle me-2"
//                   style={{ width: "38px", height: "38px" }}
//                 />
//                 <span className="fw-semibold text-dark">{user.name}</span>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* Page Content */}
//         <div className="p-4">
//           <h4 className="fw-bold mb-4">Manage Registered Users</h4>
//           <div className="card p-4 shadow-sm">
//             <p>
//               This is the <strong>User Management</strong> section where the admin can
//               view, edit, or delete users.
//             </p>
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>#</th>
//                   <th>Name</th>
//                   <th>Email</th>
//                   <th>Role</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr>
//                   <td>1</td>
//                   <td>John Doe</td>
//                   <td>john@example.com</td>
//                   <td>Author</td>
//                   <td>
//                     <button className="btn btn-sm btn-primary me-2">Edit</button>
//                     <button className="btn btn-sm btn-danger">Delete</button>
//                   </td>
//                 </tr>
//                 <tr>
//                   <td>2</td>
//                   <td>Sarah Khan</td>
//                   <td>sarah@example.com</td>
//                   <td>User</td>
//                   <td>
//                     <button className="btn btn-sm btn-primary me-2">Edit</button>
//                     <button className="btn btn-sm btn-danger">Delete</button>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserManagement;



import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./user-management.css"; // We will add necessary CSS rules here

// --- Interface for User Data ---
interface User {
  userName: string;
  email: string;
  role: string;
  joinedDate: string;
  publications: number | string;
  status: 'Active' | 'Pending';
}

// --- Sample Data ---
const userData: User[] = [
  {
    userName: 'Dr. Noor',
    email: 'noor@uni.edu',
    role: 'Author',
    joinedDate: 'Oct 10, 2025',
    publications: 12,
    status: 'Active',
  },
  {
    userName: 'Sara Ali',
    email: 'sara@gmai.com',
    role: 'Registered User',
    joinedDate: 'Sep 28, 2025',
    publications: '-',
    status: 'Active',
  },
  {
    userName: 'M. Khan',
    email: 'mkhan@uni.edu',
    role: 'Author',
    joinedDate: 'Sep 18, 2025',
    publications: 8,
    status: 'Pending',
  },
  {
    userName: 'Ahmed Raza',
    email: 'ahmed@vidit.org',
    role: 'Author',
    joinedDate: 'Sep 1, 2025',
    publications: '-',
    status: 'Active',
  },
];

// --- Status Badge Component ---
const StatusBadge: React.FC<{ status: 'Active' | 'Pending' }> = ({ status }) => {
    const textColor = status === 'Active' ? '#198754' : '#ffc107'; // Green or Yellow
    const bgColor = status === 'Active' ? 'rgba(25, 135, 84, 0.1)' : 'rgba(255, 193, 7, 0.1)'; // Light background
    
    return (
        <span 
            className="fw-semibold px-2 py-1 rounded" 
            style={{ 
                color: textColor, 
                backgroundColor: bgColor,
                fontSize: '0.85rem'
            }}
        >
            {status}
        </span>
    );
};

const UserManagement: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/admin_profile.jpg";
  const user = { name: "Admin" };

  return (
    <div className="d-flex min-vh-100">
      {/* ===== Sidebar ===== (CORRECT - NO CHANGE) */}
      <nav
        id="sidebar"
        className="text-white p-3"
        style={{ width: "250px", backgroundColor: "#066187" }}
      >
        {/* Logo & Title */}
        <div className="text-center mb-4 border-bottom pb-3">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <img
              src={repoLogoUrl}
              alt="Logo"
              className="me-2"
              style={{
                height: "30px",
                marginRight: "5px",
                filter: "invert(1) brightness(0) saturate(100) invert(100%)",
              }}
            />
            <div className="fw-bold fs-6 text-start">
              RESEARCH REPOSITORY & SCIENTIST DIRECTORY for KP
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <ul className="list-unstyled sidebar-menu">
          <li className="mb-1">
            <button
              onClick={() => navigate("/admin-dashboard")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>

          {/* Active page — User Management */}
          <li className="mb-1">
            <button
              onClick={() => navigate("/user-management")}
              className="btn d-flex align-items-center p-2 w-100 text-start"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                border: "none",
                color: "white",
                borderRadius: "6px",
              }}
            >
              <i className="bi bi-people-fill me-3"></i> User Management
            </button>
          </li>

          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-journal-text me-3"></i> Publications
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-question-circle-fill me-3"></i> Help/Support
            </a>
          </li>

          {/* Logout */}
          <li className="mt-4 pt-3 border-top border-secondary">
            <button
              onClick={() => navigate("/login")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-box-arrow-right me-3"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== Main Content Area ===== */}
      <div className="flex-grow-1 bg-white">
        {/* Top Navbar */}
        <nav className="navbar bg-white px-4 py-3 border-bottom">
            <div className="container-fluid p-0">
                <h5 className="mb-0 fw-semibold text-dark">User Management</h5>
                <div className="d-flex align-items-center">
                    <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
                    <span className="me-2 fw-semibold text-dark">{user.name}</span>
                    <img
                        src={adminAvatarUrl}
                        alt="Admin"
                        className="rounded-circle"
                        style={{ width: "38px", height: "38px" }}
                    />
                </div>
            </div>
        </nav>

        {/* Page Content (UPDATED to match the image) */}
        <div className="p-5" style={{ backgroundColor: '#f8f9fa' }}> {/* Light background */}
            {/* Title */}
            <h5 className="fw-semibold mb-4 text-dark">
                Overview and control of all registered users within the system
            </h5>
            
            {/* Search Bar */}
            <div className="input-group mb-5" style={{ maxWidth: '750px' }}>
                <input
                    type="text"
                    className="form-control rounded-pill p-3 shadow-sm border-0"
                    placeholder="Search by title or keyword"
                    style={{ 
                        borderRadius: '0.5rem !important',
                        paddingRight: '4rem', 
                        height: '50px',
                    }}
                />
                <button 
                    className="btn border-0" 
                    type="button" 
                    style={{ 
                        position: 'absolute', 
                        right: '10px', 
                        top: '50%',
                        transform: 'translateY(-50%)',
                        zIndex: 5, 
                        backgroundColor: 'transparent'
                    }}
                >
                    <i className="bi bi-search fs-5 text-secondary"></i>
                </button>
            </div>
            
            {/* Users Table Card */}
            <div className="card shadow-sm p-0 border-0 rounded-3">
                <div className="table-responsive">
                    <table className="table align-middle mb-0" style={{ borderCollapse: 'separate' }}>
                        <thead className="text-secondary" style={{ borderBottom: 'none' }}>
                            <tr>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>User Name</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Email</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Role</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Joined Date</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Publications</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Status</th>
                                <th scope="col" className="text-end fw-normal py-3" style={{ fontSize: '0.9rem' }}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr 
                                    key={user.email} 
                                    className={index % 2 === 1 ? 'bg-light' : ''} // Alternating row color (light grey for every other row)
                                    style={{ borderTop: '1px solid #dee2e6' }} // Row separator line
                                >
                                    <td className="fw-semibold py-3" style={{ color: '#212529' }}>{user.userName}</td>
                                    <td className="py-3" style={{ color: '#007bff' }}>{user.email}</td>
                                    <td className="py-3">{user.role}</td>
                                    <td className="py-3">{user.joinedDate}</td>
                                    <td className="py-3">{user.publications}</td>
                                    <td className="py-3"><StatusBadge status={user.status} /></td>
                                    <td className="text-end py-3">
                                        <button className="btn btn-sm p-1 me-1" title="Edit" style={{ color: '#495057' }}>
                                            <i className="bi bi-pencil"></i>
                                        </button>
                                        <button className="btn btn-sm p-1 me-1" title="View" style={{ color: '#495057' }}>
                                            <i className="bi bi-eye"></i>
                                        </button>
                                        <button className="btn btn-sm p-1" title="Delete" style={{ color: '#495057' }}>
                                            <i className="bi bi-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;