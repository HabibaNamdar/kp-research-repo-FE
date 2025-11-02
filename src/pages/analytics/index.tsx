import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./analytics.css";

const AdminAnalytics: React.FC = () => {
  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/admin_profile.jpg";
  const user = { name: "Admin" };

  const navigate = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="d-flex" style={{ height: "100vh" }}>
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{ width: "250px" }}
      >
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

          <li className="mb-1">
            <button
              onClick={() => navigate("/admin/user-management")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-people-fill me-3"></i> User Management
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/admin/publication")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> Publication
            </button>
          </li>

          {/* Analytics Active */}
          <li className="mb-1">
            <button
              onClick={() => navigate("/admin/analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start active-sidebar-link"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-1">
            <a
              href="#"
              className="d-flex align-items-center p-2 rounded text-decoration-none text-white"
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </a>
          </li>

          <li className="mb-1">
            <a
              href="#"
              className="d-flex align-items-center p-2 rounded text-decoration-none text-white"
            >
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>

          <li className="mb-1">
            <a
              href="#"
              className="d-flex align-items-center p-2 rounded text-decoration-none text-white"
            >
              <i className="bi bi-question-circle-fill me-3"></i> Help/Support
            </a>
          </li>

          <li className="mt-4 pt-3 border-top border-secondary">
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
      <div className="flex-grow-1 bg-light">
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">Analytics Dashboard</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <img
                  src={adminAvatarUrl}
                  alt="Admin"
                  className="rounded-circle me-2"
                  style={{ width: "38px", height: "38px" }}
                />
                <span className="fw-semibold text-dark">{user.name}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* ===== Analytics Content ===== */}
        <div className="container-fluid p-4">
          {/* ✅ Added H2 below navbar */}
          {/* ✅ Updated paragraph below navbar */}
<p
  className="fw-semibold mb-4"
  style={{
    fontSize: "20px",
    color: "#000", // black text
  }}
>
  Insight into your author and content performance
</p>


          {/* ===== Cards ===== */}
          <div className="row g-4 mb-20">
            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h3 className="text-primary fw-bold">24</h3>
                <p className="text-muted mb-0">Publications</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h3 className="text-primary fw-bold">1,450</h3>
                <p className="text-muted mb-0">Reads</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card shadow-sm border-0 p-3 text-center">
                <h3 className="text-primary fw-bold">275</h3>
                <p className="text-muted mb-0">Citations</p>
              </div>
            </div>
          </div>

          {/* ===== Chart Section ===== */}
          <div className="card shadow-sm border-0 p-4 rounded-lg">
            <h5 className="fw-semibold mb-5">Reads Over Time</h5>
            <div className="ratio ratio-21x9">
              <svg viewBox="0 0 800 350" className="w-100" style={{ overflow: "visible" }}>
                {[0, 200, 400, 600].map((y) => (
                  <React.Fragment key={y}>
                    <line
                      x1="50"
                      y1={300 - y / 2}
                      x2="780"
                      y2={300 - y / 2}
                      stroke="#e0e0e0"
                      strokeDasharray="3 3"
                    />
                    <text
                      x="30"
                      y={305 - y / 2}
                      fontSize="14"
                      fill="#6b7280"
                      textAnchor="end"
                    >
                      {y}
                    </text>
                  </React.Fragment>
                ))}

                <line x1="50" y1="300" x2="780" y2="300" stroke="#ccc" />
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"].map((month, index) => (
                  <text
                    key={month}
                    x={50 + index * 105}
                    y="325"
                    fontSize="14"
                    fill="#6b7280"
                    textAnchor="middle"
                  >
                    {month}
                  </text>
                ))}

                <path
                  d="M 50 280 L 155 270 L 260 100 L 365 180 L 470 50 L 575 220 L 680 100 L 780 250"
                  fill="none"
                  stroke="#007bff"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;
