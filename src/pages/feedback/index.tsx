import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const FeedbackReport: React.FC = () => {
  const navigate = useNavigate();

  // Dummy logo and admin image
  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/admin_profile.jpg";
  const user = { name: "Admin" };

  // **UPDATED feedbackData to match the image structure and content**
  const [feedbackData, setFeedbackData] = useState([
    {
      id: 1,
      user: "Dr. Noor",
      type: "Feedback",
      publication: "Healthcare",
      reportsFeedback: "Excellent interface but needs faster approval time.",
      date: "Oct 10, 2025",
      status: "Resolved", // Setting status based on the card logic (24 All, 4 Pending, 6 Resolved)
    },
    {
      id: 2,
      user: "Dr. Noor",
      type: "Report",
      publication: "Machine Learning in Education",
      reportsFeedback: "Broken PDF link.",
      date: "Oct 10, 2025",
      status: "Pending",
    },
    {
      id: 3,
      user: "Dr. Noor",
      type: "Suggestion",
      publication: "Healthcare",
      reportsFeedback: "Add citation export to BibTeX.",
      date: "Oct 10, 2025",
      status: "Pending",
    },
    {
      id: 4,
      user: "Dr. Noor",
      type: "Complaint",
      publication: "Data Science",
      reportsFeedback: "Duplicate submission detected.",
      date: "Oct 10, 2025",
      status: "Resolved",
    },
    {
      id: 5,
      user: "Dr. Noor",
      type: "Report",
      publication: "Data Science",
      reportsFeedback: "Issue with the login process",
      date: "Oct 10, 2025",
      status: "Pending",
    },
  ]);

  // **The image implies a simple count, so we'll calculate them based on the dummy data for consistency.**
  const allCount = feedbackData.length;
  // NOTE: The image shows 24 All, 04 Pending, 06 Resolved. My dummy data only has 5.
  // I will use static values from the image for the count displays, but calculate pending/resolved from the *dummy* data for the table rendering logic.

  const getStatusBadge = (status: string) => {
    // This function is no longer needed since the image doesn't show status badges in the table,
    // but the original code had it, so I'll keep a placeholder if you decide to use it later.
    return <span>{status}</span>;
  };

  // --- Summary Card Calculation ---
  const pendingCount = feedbackData.filter(
    (item) => item.status === "Pending"
  ).length;
  const resolvedCount = feedbackData.filter(
    (item) => item.status === "Resolved"
  ).length;

  // Since the image has static numbers, we'll override the calculated counts
  // to match the visual (24, 04, 06) for the cards.
  const cardData = [
    { label: "All", count: 24, className: "" },
    { label: "Pending", count: 4, className: "" },
    { label: "Resolved", count: 6, className: "" },
  ];
  
  // A small adjustment to the dummy data to ensure it aligns with the card counts
  // for the purpose of a fully dynamic view, but for a visual match, we stick to the cardData above.

  return (
    <div className="d-flex">
      {/* ===== Sidebar (Correct as per user request) ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{ width: "250px", backgroundColor: "#2c3e50", minHeight: "100vh" }}
      >
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
              <i className="bi bi-journal-text me-3"></i> publications
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/admin/analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/admin/feedback-report")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>

          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>

          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-question-circle-fill me-3"></i> Help / Support
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
        {/* Navbar (Correct as per user request) */}
        <nav className="navbar bg-white shadow-sm px-4">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">Feedback / Report</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <span className="fw-semibold text-dark me-2">{user.name}</span>
                <img
                  src={adminAvatarUrl}
                  alt="Admin"
                  className="rounded-circle"
                  style={{ width: "38px", height: "38px" }}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* ===== Feedback Table Section - CORRECTED CODE BELOW ===== */}
        <div className="container-fluid py-4 px-4">
          {/* Title as per image */}
          <h4 className="fw-semibold mb-4">Review and manage submitted publications</h4>

          {/* --- Summary Cards --- */}
          <div className="row mb-5">
            {cardData.map((card, index) => (
              <div className="col-lg-4 col-md-6 mb-3" key={index}>
                <div className="card text-center border-0 shadow-sm p-3">
                  <h2 className="fw-bold mb-0" style={{ fontSize: "2.5rem" }}>
                    {card.count < 10 ? `0${card.count}` : card.count}
                  </h2>
                  <p className="mb-0 text-muted">{card.label}</p>
                </div>
              </div>
            ))}
          </div>

          {/* --- Feedback Table --- */}
          <div className="card shadow-sm border-0">
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table table-striped table-hover mb-0">
                  <thead className="table-light">
                    <tr>
                      <th style={{ width: "15%" }}>User</th>
                      <th style={{ width: "10%" }}>Type</th>
                      <th style={{ width: "20%" }}>Publication</th>
                      <th style={{ width: "40%" }}>Reports/Feedback</th>
                      <th style={{ width: "10%" }}>Date</th>
                      <th style={{ width: "5%" }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedbackData.map((report) => (
                      <tr key={report.id}>
                        <td>{report.user}</td>
                        <td>{report.type}</td>
                        <td>{report.publication}</td>
                        {/* The reports/feedback cell content is wrapped in quotes in the image */}
                        <td>
                          <span className="text-secondary fst-italic">
                            "{report.reportsFeedback}"
                          </span>
                        </td>
                        <td>{report.date}</td>
                        <td>
                          {/* Button is simpler in the image - just "View" */}
                          <button
                            className="btn btn-sm btn-outline-secondary"
                            // A proper action would be here
                            onClick={() => console.log(`Viewing report ${report.id}`)}
                          >
                            View
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Note: Footer with count is removed to match the image precisely. */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReport;