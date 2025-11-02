import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./user-dashboard.css";

const UserDashboard: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png";
  const userAvatarUrl = "/user-profile.png";
  const user = { name: "Hassan Ali" };

  return (
    <div className="d-flex">
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{
          width: "260px",
          backgroundColor: "#0f4a71",
          minHeight: "100vh",
        }}
      >
        {/* Logo Section */}
        <div className="text-center mb-4 border-bottom pb-3">
          <div className="d-flex align-items-center justify-content-center mb-2">
            <img
              src={repoLogoUrl}
              alt="Logo"
              className="me-2"
              style={{
                height: "30px",
                filter: "invert(1) brightness(0) saturate(100) invert(100%)",
              }}
            />
            <div className="fw-bold fs-6 text-start lh-sm">
              RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY for KP
            </div>
          </div>
        </div>

        {/* Sidebar Menu */}
        <ul className="list-unstyled sidebar-menu">
          <li className="mb-2">
            <button
              onClick={() => navigate("/user-dashboard")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white active-menu"
              style={{ border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/home")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-house-door-fill me-3"></i> Home
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/user-profile")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-person-fill me-3"></i> Profile
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/user-bookmarks")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bookmark-fill me-3"></i> Bookmark
            </button>
          </li>
          {/* <li className="mb-2">
            <button
              onClick={() => navigate("/user/notification")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bell-fill me-3"></i> Notification
            </button>
          </li> */}
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/user-analytics")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/user-feedback")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>
          {/* <li className="mb-2">
            <a
              href="#"
              className="d-flex align-items-center p-2 text-white text-decoration-none"
            >
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="d-flex align-items-center p-2 text-white text-decoration-none"
            >
              <i className="bi bi-question-circle-fill me-3"></i> Help/Support
            </a>
          </li> */}
          <li className="mt-4 pt-3 border-top border-secondary">
            <button
              onClick={() => navigate("/")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-box-arrow-right me-3"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== Main Content ===== */}
      <div className="flex-grow-1 bg-light">
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4 py-3 border-bottom mb-4">
          <div className="container-fluid p-0 d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">Dashboard</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <img
                  src={userAvatarUrl}
                  alt="User"
                  className="rounded-circle me-2"
                  style={{ width: "38px", height: "38px" }}
                />
                <span className="fw-semibold text-dark">{user.name}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* ===== Dashboard Content ===== */}
        <div className="p-5">
          {/* Welcome Section */}
          <section className="welcome-section mb-5">
            <h3 className="fw-bold mb-2">
              Welcome back, {user.name} <span>👋</span>
            </h3>
            <p className="text-secondary mb-0" style={{ fontSize: "18px" }}>
              Here’s a quick overview of your activity.
            </p>
          </section>

          {/* Quick Stats */}
          <section className="quick-stats mb-5">
            <h5 className="fw-semibold mb-4">Quick Stats</h5>
            <div className="row g-4">
              {[
                { icon: "bi-file-earmark-text-fill", title: "Saved Papers", value: "12" },
                { icon: "bi-book-fill", title: "Papers Viewed", value: "8" },
                { icon: "bi-clock-fill", title: "Last Active", value: "2 hours ago" },
                { icon: "bi-calendar-fill", title: "Joined", value: "Sept 2025" },
              ].map((stat, i) => (
                <div className="col-md-3" key={i}>
                  <div className="card shadow-sm border-0 p-4 text-center h-100">
                    <i className={`bi ${stat.icon} text-warning fs-3 mb-2`}></i>
                    <h6 className="fw-semibold">{stat.title}</h6>
                    <p className="mb-0 fs-5 fw-bold">{stat.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Activity and Recommended Papers */}
          <section className="activity-section">
            <div className="row g-4">
              {/* Recent Activity */}
              <div className="col-md-6">
                <div className="card shadow-sm border-0 p-4 h-100">
                  <h5 className="fw-semibold text-dark mb-3">Recent Activity</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="mb-3">
                      <i className="bi bi-file-earmark-text-fill text-warning me-2"></i>
                      You viewed <b>AI in Medical Imaging</b> on Oct 8
                    </li>
                    <li className="mb-3">
                      <i className="bi bi-bookmark-fill text-warning me-2"></i>
                      You bookmarked <b>Climate Change Impacts 2024</b>
                    </li>
                    <li>
                      <i className="bi bi-journal-text text-warning me-2"></i>
                      You explored the <b>Machine Learning</b> category
                    </li>
                  </ul>
                </div>
              </div>

              {/* Recommended Papers */}
              <div className="col-md-6">
                <div className="card shadow-sm border-0 p-4 h-100">
                  <h5 className="fw-semibold text-dark mb-3">Recommended Papers</h5>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="paper-card p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div>
                          <h6 className="fw-semibold">AI in Medical Imaging</h6>
                          <p className="mb-1 text-secondary small">
                            John Smith — 2024
                          </p>
                          <p className="small text-muted">
                            This paper explores the applications of AI in medical imaging...
                          </p>
                        </div>
                        <button className="btn btn-primary btn-sm align-self-start">
                          View Details
                        </button>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="paper-card p-3 border rounded bg-white shadow-sm h-100 d-flex flex-column justify-content-between">
                        <div>
                          <h6 className="fw-semibold">Climate Change Impacts</h6>
                          <p className="mb-1 text-secondary small">
                            Sarah Johnson — 2024
                          </p>
                          <p className="small text-muted">
                            This study analyzes the impacts of climate change...
                          </p>
                        </div>
                        <button className="btn btn-primary btn-sm align-self-start">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
