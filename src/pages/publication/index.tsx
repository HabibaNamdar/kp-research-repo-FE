import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./publication.css"; // We'll assume a new CSS file for this page

// --- Interface for Publication Data ---
interface Publication {
  title: string;
  submissionDate: string;
  status: 'Under Review' | 'Accepted' | 'Rejected';
}

// --- Sample Data ---
const publicationData: Publication[] = [
  {
    title: 'Machine Learning for Healthcare',
    submissionDate: 'Oct 20, 2025',
    status: 'Under Review',
  },
  {
    title: 'AI in Climate Change Predictions',
    submissionDate: 'Oct 19, 2025',
    status: 'Accepted',
  },
  {
    title: 'Blockchain in Research Integrity',
    submissionDate: 'Oct 12, 2025',
    status: 'Rejected',
  },
  {
    title: 'Data Visualization for Data Science',
    submissionDate: 'Oct 10, 2025',
    status: 'Rejected',
  },
];

// --- Status Badge Component (matches image styles) ---
const StatusBadge: React.FC<{ status: 'Under Review' | 'Accepted' | 'Rejected' }> = ({ status }) => {
    let color = '';
    let bgColor = '';
    
    switch (status) {
        case 'Accepted':
            color = '#198754'; // Success green
            bgColor = 'rgba(25, 135, 84, 0.1)';
            break;
        case 'Rejected':
            color = '#dc3545'; // Danger red
            bgColor = 'rgba(220, 53, 69, 0.1)';
            break;
        case 'Under Review':
        default:
            color = '#ffc107'; // Warning yellow
            bgColor = 'rgba(255, 193, 7, 0.1)';
            break;
    }

    return (
        <span 
            className="fw-semibold px-2 py-1 rounded" 
            style={{ 
                color: color, 
                backgroundColor: bgColor,
                fontSize: '0.85rem'
            }}
        >
            {status}
        </span>
    );
};

// --- Main Component ---
const Publications: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/admin_profile.jpg";
  const user = { name: "Admin" };

  // Helper function to render sidebar item styles
  const getSidebarItemStyle = (path: string) => {
    return window.location.pathname.includes(path) 
        ? { backgroundColor: "rgba(255, 255, 255, 0.2)", color: "white", borderRadius: "6px" }
        : { background: "none", color: "white" };
  };

  return (
    <div className="d-flex min-vh-100">
      {/* ===== Sidebar ===== (ADJUSTED FOR PUBLICATIONS ACTIVE STATE) */}
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
                    style={getSidebarItemStyle("/admin-dashboard")}
                >
                    <i className="bi bi-grid-fill me-3"></i> Dashboard
                </button>
            </li>

            <li className="mb-1">
                <button
                    onClick={() => navigate("/user-management")}
                    className="btn d-flex align-items-center p-2 w-100 text-start"
                    style={getSidebarItemStyle("/user-management")}
                >
                    <i className="bi bi-people-fill me-3"></i> User Management
                </button>
            </li>

            {/* Active page — Publications */}
            <li className="mb-1">
                <button 
                    onClick={() => navigate("/publications")}
                    className="btn d-flex align-items-center p-2 w-100 text-start"
                    style={{
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        border: "none",
                        color: "white",
                        borderRadius: "6px",
                    }}
                >
                    <i className="bi bi-journal-text me-3"></i> Publications
                </button>
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
        {/* Top Navbar (ADJUSTED TITLE) */}
        <nav className="navbar bg-white px-4 py-3 border-bottom">
            <div className="container-fluid p-0">
                <h5 className="mb-0 fw-semibold text-dark">Manage Publications</h5>
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

        {/* Page Content */}
        <div className="p-5" style={{ backgroundColor: '#f8f9fa' }}>
            {/* Title */}
            <h5 className="fw-semibold mb-4 text-dark">
                Review and manage submitted publications
            </h5>
            
            {/* --- Info Cards --- */}
            <div className="row g-4 mb-5">
                <div className="col-md-4">
                    <div className="card p-4 text-center border-0 shadow-sm rounded-3">
                        <h2 className="fw-bold mb-1" style={{ fontSize: '2.5rem' }}>24</h2>
                        <p className="mb-0 text-secondary">All</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-4 text-center border-0 shadow-sm rounded-3">
                        <h2 className="fw-bold mb-1" style={{ fontSize: '2.5rem' }}>06</h2>
                        <p className="mb-0 text-secondary">Under Review</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card p-4 text-center border-0 shadow-sm rounded-3">
                        <h2 className="fw-bold mb-1" style={{ fontSize: '2.5rem' }}>12</h2>
                        <p className="mb-0 text-secondary">Accepted</p>
                    </div>
                </div>
            </div>

            {/* --- Publications Table --- */}
            <div className="card shadow-sm p-0 border-0 rounded-3">
                <div className="table-responsive">
                    <table className="table align-middle mb-0">
                        <thead className="text-secondary" style={{ borderBottom: '1px solid #dee2e6' }}>
                            <tr>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Title</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Submission Date</th>
                                <th scope="col" className="fw-normal py-3" style={{ fontSize: '0.9rem' }}>Status</th>
                                <th scope="col" className="text-end fw-normal py-3" style={{ fontSize: '0.9rem' }}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {publicationData.map((pub, index) => (
                                <tr 
                                    key={pub.title} 
                                    style={{ borderTop: '1px solid #dee2e6' }} 
                                >
                                    <td className="fw-semibold py-3">{pub.title}</td>
                                    <td className="py-3">{pub.submissionDate}</td>
                                    <td className="py-3"><StatusBadge status={pub.status} /></td>
                                    <td className="text-end py-3">
                                        <button className="btn btn-light btn-sm fw-semibold" style={{ backgroundColor: '#f0f0f0', color: '#495057' }}>
                                            View
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

export default Publications;