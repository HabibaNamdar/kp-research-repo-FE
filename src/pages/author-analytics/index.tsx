import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// --- Chart Placeholder Component ---
const AnalyticsChartPlaceholder: React.FC = () => {
  const dataPoints = [0, 50, 220, 240, 260, 300, 410, 300, 350, 380, 250, 280];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

  return (
    <div className="card shadow-sm p-4 border-0 mt-4">
      <div style={{ position: "relative", height: "300px" }}>
        <svg width="100%" height="100%" viewBox="0 0 1000 300" preserveAspectRatio="none">
          {[800, 600, 400, 200, 0].map((yValue, index) => (
            <g key={index}>
              <line
                x1="50"
                y1={300 - (yValue / 800) * 250}
                x2="1000"
                y2={300 - (yValue / 800) * 250}
                stroke="#e9ecef"
                strokeWidth="1"
              />
              <text
                x="40"
                y={300 - (yValue / 800) * 250 + 5}
                fontSize="14"
                fill="#6c757d"
                textAnchor="end"
              >
                {yValue}
              </text>
            </g>
          ))}
          <polyline
            fill="none"
            stroke="#0d6efd"
            strokeWidth="3"
            points={dataPoints
              .map((value, index) => `${50 + index * (950 / 11)},${300 - (value / 800) * 250}`)
              .join(" ")}
          />
          {labels.map((label, index) => (
            <text
              key={index}
              x={50 + index * (950 / 11)}
              y="290"
              fontSize="14"
              fill="#6c757d"
              textAnchor="middle"
            >
              {label}
            </text>
          ))}
          <line x1="50" y1="275" x2="1000" y2="275" stroke="#343a40" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
};

// --- Main Analytics Page ---
const AuthorAnalytics: React.FC = () => {
  const navigate = useNavigate();
  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/author-profile.png";
  const user = { name: "Prof. Khan" };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-4"
        style={{ width: "260px", backgroundColor: "#1f2937", minHeight: "100vh" }}
      >
        <div className="text-center mb-5 border-bottom pb-3">
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

        <ul className="list-unstyled sidebar-menu">
          <li className="mb-3">
            <button
              onClick={() => navigate("/author-dashboard")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>
          <li className="mb-3">
            <button
              onClick={() => navigate("/author/author-profile")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-person-fill me-3"></i> Profile
            </button>
          </li>
          <li className="mb-3">
            <button
              onClick={() => navigate("/author/my-publication")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> My Publications
            </button>
          </li>
          <li className="mb-3">
            <button
              onClick={() => navigate("/author/upload-paper")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-upload me-3"></i> Upload
            </button>
          </li>
          {/* <li className="mb-3">
            <button
              onClick={() => navigate("/author/notification")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bell-fill me-3"></i> Notification
            </button>
          </li> */}
          <li className="mb-3">
            <button
              onClick={() => navigate("/author/author-analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-3">
            <button
              onClick={() => navigate("/author/author-feedback")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="i bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>
          {/* <li className="mb-3">
            <button
              onClick={() => navigate("/author/feedback")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li> */}
          <li className="mt-5 pt-3 border-top border-secondary">
            <button
              onClick={() => navigate("/")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-box-arrow-right me-3"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== Main Content ===== */}
      <div className="flex-grow-1 bg-light p-4">
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4 mb-4 rounded-3">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">Analytics</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-4 text-secondary"></i>
              <div className="d-flex align-items-center">
                <span className="fw-semibold text-dark me-3">{user.name}</span>
                <img
                  src={adminAvatarUrl}
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* ===== Analytics Section ===== */}
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <p className="text-secondary mb-0 fw-bold fs-5">
              Track the performance of your publications
            </p>
            <button
              className="btn btn-success fw-bold py-2 px-3"
              onClick={() => navigate("/author/upload")}
            >
              <i className="bi bi-plus-lg me-2"></i> Upload New Paper
            </button>
          </div>

          {/* Filter Controls */}
          <div className="row mb-5 gx-4">
            <div className="col-md-3">
              <select className="form-select shadow-sm p-3 border-0">
                <option>All Publications</option>
                <option>Machine Learning for Healthcare</option>
                <option>AI in Climate Change Predictions</option>
              </select>
            </div>
            <div className="col-md-3">
              <input
                type="text"
                className="form-control shadow-sm p-3 border-0"
                value="Jan 2023 - Dec 2023"
                readOnly
              />
            </div>
          </div>

          {/* --- Section Title ABOVE Chart --- */}
          <h5 className="fw-bold mb-4 text-dark">Views per Publication</h5>
          <AnalyticsChartPlaceholder />
        </div>
      </div>
    </div>
  );
};

export default AuthorAnalytics;
