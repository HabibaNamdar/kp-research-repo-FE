import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const ProfessorDashboard: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/author-profile.png";
  const user = { name: "Prof. Khan" };

  const papers = [
    { title: "Machine Learning for Healthcare", views: 300, citations: 20, date: "Oct 8, 2025" },
    { title: "AI in Climate Change Predictions", views: 400, citations: 35, date: "Oct 7, 2025" },
    { title: "Blockchain in Research Integrity", views: 250, citations: 15, date: "Oct 5, 2025" },
    { title: "Data Visualization for Data Science", views: 250, citations: 12, date: "Oct 2, 2025" },
  ];

  const DashboardContent = () => (
    <div className="p-5"> {/* Increased padding for breathing room */}
      {/* Welcome Section */}
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h2 className="fw-bold">
            Welcome back, <span className="text-dark">Saif Khan</span> 👋
          </h2>
          <p className="text-secondary">Here’s a quick overview of your activity.</p>
        </div>
        <button className="btn btn-success fw-bold px-4 py-2" onClick={() => navigate("/author/upload")}>
          <i className="bi bi-plus-lg me-2"></i> Upload New Paper
        </button>
      </div>

      {/* Stats Section */}
      <div className="row mb-5 g-4 px-2">
        <div className="col-md-3">
          <div className="card shadow-sm p-4 border-0 h-100" style={{ border: "1px solid #dee2e6" }}>
            <h3 className="fw-bold mb-1">1,250</h3>
            <p className="text-muted mb-0">Total Views</p>
          </div>
        </div>

        <div className="col-md-3">
          <div className="card shadow-sm p-4 border-0 h-100" style={{ border: "1px solid #dee2e6" }}>
            <h3 className="fw-bold mb-1">82</h3>
            <p className="text-muted mb-0">Total Citations</p>
          </div>
        </div>
      </div>

      {/* Recent Activity / Most Viewed Papers Table */}
      <div className="card shadow-sm border-0 mt-4">
        <div className="card-body p-4">
          {/* Header with spacing */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="fw-semibold text-muted mb-0" style={{ fontSize: "0.95rem" }}>
              Recent Activity
            </p>
            <select className="form-select w-auto form-select-sm" style={{ fontSize: "0.9rem" }}>
              <option>Last week</option>
              <option>Last month</option>
              <option>Last 3 months</option>
            </select>
          </div>

          <h5 className="fw-bold mb-3">Most Viewed Papers</h5>
          <div className="table-responsive">
            <table className="table table-striped table-hover mb-0 align-middle">
              <thead className="table-light">
                <tr>
                  <th style={{ width: "40%" }}>Title</th>
                  <th style={{ width: "20%" }}>Views</th>
                  <th style={{ width: "20%" }}>Citations</th>
                  <th style={{ width: "20%" }}>Date</th>
                </tr>
              </thead>
              <tbody>
                {papers.map((paper, i) => (
                  <tr key={i}>
                    <td className="fw-semibold">{paper.title}</td>
                    <td>{paper.views}</td>
                    <td>{paper.citations}</td>
                    <td>{paper.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{
          width: "250px",
          backgroundColor: "#1f2937",
          minHeight: "100vh",
        }}
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
          <li className="mb-2">
            <button
              onClick={() => navigate("/author-dashboard")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/author-profile")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi bi-person-fill me-3"></i> Profile
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/my-publication")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> My Publications
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/upload-paper")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-upload me-3"></i> Upload
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/author-analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/author-feedback")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
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
      <div
        className="flex-grow-1 bg-light"
        style={{ paddingLeft: "30px", paddingRight: "30px" }} // Extra space between sidebar and content
      >
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4 mb-4">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">Author Dashboard</h5>
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

        {/* Dashboard Content */}
        <DashboardContent />
      </div>
    </div>
  );
};

export default ProfessorDashboard;
