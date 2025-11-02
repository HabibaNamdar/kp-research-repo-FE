import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

interface Publication {
  id: number;
  title: string;
  submissionDate: string;
  status: "Under Review" | "Accepted" | "Rejected";
  reviewFeedback: string;
}

const MyPublications: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/author-profile.png";
  const user = { name: "Prof. Khan" };

  const [publicationsData] = useState<Publication[]>([
    {
      id: 101,
      title: "Machine Learning for Healthcare",
      submissionDate: "Oct 10, 2025",
      status: "Under Review",
      reviewFeedback: "Pending first review",
    },
    {
      id: 102,
      title: "AI in Climate Change Predictions",
      submissionDate: "Sept 28, 2025",
      status: "Accepted",
      reviewFeedback: "Accepted after minor revisions",
    },
    {
      id: 103,
      title: "Data Visualization for Open Science",
      submissionDate: "Sept 15, 2025",
      status: "Rejected",
      reviewFeedback: "Needs clearer methodology",
    },
    {
      id: 104,
      title: "Blockchain Applications in Supply Chain",
      submissionDate: "Sept 12, 2025",
      status: "Under Review",
      reviewFeedback: "Awaiting initial evaluation",
    },
  ]);

  const submissionCards = [
    { label: "Total Papers", count: 12, color: "secondary", icon: "bi-journal-check" },
    { label: "Under Review", count: 3, color: "warning", icon: "bi-clock" },
    { label: "Accepted", count: 5, color: "success", icon: "bi-check-circle" },
    { label: "Rejected", count: 2, color: "danger", icon: "bi-x-circle" },
  ];

  const getStatusBadge = (status: Publication["status"]) => {
    switch (status) {
      case "Accepted":
        return <span className="badge bg-success text-white p-2 w-100">{status}</span>;
      case "Rejected":
        return <span className="badge bg-danger text-white p-2 w-100">{status}</span>;
      case "Under Review":
        return <span className="badge bg-warning text-dark p-2 w-100">{status}</span>;
      default:
        return <span className="badge bg-secondary p-2 w-100">{status}</span>;
    }
  };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* ===== Sidebar ===== */}
      <nav
        className="sidebar-bg text-white p-3"
        style={{ width: "250px", backgroundColor: "#1f2937", minHeight: "100vh" }}
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

        <ul className="list-unstyled sidebar-menu mt-3">
          <li className="mb-2">
            <button
              onClick={() => navigate("/author-dashboard")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/author-profile")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-person-fill me-3"></i> Profile
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/my-publication")}
              className="btn text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> My Publications
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/upload-paper")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-upload me-3"></i> Upload
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/author-analytics")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-2">
            <button
              onClick={() => navigate("/author/author-feedback")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>

          <li className="mt-4 pt-3 border-top border-secondary">
            <button
              onClick={() => navigate("/")}
              className="btn text-white w-100 text-start"
              style={{ background: "none" }}
            >
              <i className="bi bi-box-arrow-right me-3"></i> Logout
            </button>
          </li>
        </ul>
      </nav>

      {/* ===== Main Content ===== */}
      <div className="flex-grow-1 bg-light">
        {/* Navbar */}
        <nav className="navbar bg-white shadow-sm px-4 py-3 mb-3">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">My Publications</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <span className="fw-semibold text-dark me-2">{user.name}</span>
                <img
                  src={adminAvatarUrl}
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "38px", height: "38px" }}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* ===== My Publications Content ===== */}
        <div className="container-fluid px-5 py-4">
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h4 className="fw-semibold mb-0 text-dark">
              Manage your uploaded papers and review progress
            </h4>
            <button
              className="btn btn-success fw-bold py-2 px-4"
              onClick={() => navigate("/author/upload")}
            >
              <i className="bi bi-upload me-2"></i> Upload New Paper
            </button>
          </div>

          {/* --- Cards Section --- */}
          <div className="row mb-5 g-4">
            {submissionCards.map((card, index) => (
              <div className="col-lg-3 col-md-6" key={index}>
                <div
                  className={`card text-center border-0 shadow-sm py-4 px-3 border-start border-${card.color} border-5`}
                  style={{ minHeight: "130px" }}
                >
                  <div className="d-flex align-items-center justify-content-center mb-2">
                    <span
                      className={`badge bg-${card.color} rounded-circle p-2 me-2`}
                      style={{ fontSize: "1rem" }}
                    >
                      <i className={`bi ${card.icon}`}></i>
                    </span>
                    <h2 className="fw-bold mb-0" style={{ fontSize: "1.6rem", color: "#34495e" }}>
                      {card.count}
                    </h2>
                  </div>
                  <p className="mb-0 text-muted" style={{ fontSize: "0.95rem" }}>
                    {card.label}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* --- Search Bar --- */}
          <div className="input-group mb-5" style={{ maxWidth: "500px" }}>
            <input type="text" className="form-control" placeholder="Search by title or keyword" />
            <button className="btn btn-secondary" type="button">
              <i className="bi bi-search"></i>
            </button>
          </div>

          {/* --- Table Section --- */}
          <h5 className="fw-semibold mb-3 text-dark">Submission Overview</h5>
          <div className="card shadow-sm border-0 mb-5">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped table-hover mb-0 align-middle">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "30%" }}>Paper Title</th>
                      <th style={{ width: "15%" }}>Submission Date</th>
                      <th style={{ width: "15%" }}>Status</th>
                      <th style={{ width: "30%" }}>Review Feedback</th>
                      <th style={{ width: "10%" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {publicationsData.map((paper) => (
                      <tr key={paper.id}>
                        <td className="fw-bold">{paper.title}</td>
                        <td>{paper.submissionDate}</td>
                        <td>{getStatusBadge(paper.status)}</td>
                        <td className="text-muted fst-italic">{paper.reviewFeedback}</td>
                        <td>
                          <div className="d-flex">
                            <button className="btn btn-outline-secondary btn-sm me-2">
                              <i className="bi bi-eye"></i>
                            </button>
                            <button className="btn btn-outline-danger btn-sm">
                              <i className="bi bi-trash"></i>
                            </button>
                          </div>
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
    </div>
  );
};

export default MyPublications;
