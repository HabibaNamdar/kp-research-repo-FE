import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AuthorFeedback: React.FC = () => {
  const navigate = useNavigate();

  const repoLogoUrl = "/logo.png"; // Placeholder
  const adminAvatarUrl = "/author-profile.png"; // Placeholder
  const user = { name: "Prof. Khan" };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
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

        <ul className="list-unstyled sidebar-menu">
          <li className="mb-1">
            <button
              onClick={() => navigate("/author-dashboard")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/authorprofile")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-person-fill me-3"></i> Profile
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/my-publication")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> My Publications
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/upload-paper")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-upload me-3"></i> Upload
            </button>
          </li>

          {/* <li className="mb-1">
            <button
              onClick={() => navigate("/author/notification")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bell-fill me-3"></i> Notification
            </button>
          </li> */}

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/author-analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>

          <li className="mb-1">
            <button
              onClick={() => navigate("/author/author-feedback")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>

          {/* <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>

          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-question-circle-fill me-3"></i> Help/Support
            </a>
          </li> */}

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
            <h5 className="mb-0 fw-bold">Feedback / Report</h5>
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

        {/* ===== Feedback Form ===== */}
        <div className="container-fluid py-4 px-4">
          <h2 className="fw-bold mb-3">Submit Feedback or Report an Issue</h2>
          <p className="text-secondary mb-5">
            Share your suggestions, report problems, or request assistance from the admin team
          </p>

          <div className="d-flex justify-content-center">
            <div className="bg-white p-4 shadow-sm rounded" style={{ maxWidth: "700px", width: "100%" }}>
              {/* Feedback Type */}
              <div className="row mb-4 align-items-center">
                <div className="col-md-3">
                  <label htmlFor="feedbackType" className="form-label mb-0">
                    <strong>Feedback Type</strong>
                  </label>
                </div>
                <div className="col-md-9">
                  <select className="form-select" id="feedbackType">
                    <option>Bug Report</option>
                    <option>Suggestion</option>
                    <option>General Feedback</option>
                    <option>Technical Issue</option>
                  </select>
                </div>
              </div>

              {/* Subject */}
              <div className="row mb-4 align-items-center">
                <div className="col-md-3">
                  <label htmlFor="subject" className="form-label mb-0">
                    <strong>Subject</strong>
                  </label>
                </div>
                <div className="col-md-9">
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="e.g., Error on the Upload page"
                  />
                </div>
              </div>

              {/* Description */}
              <div className="row mb-5">
                <div className="col-md-3">
                  <label htmlFor="description" className="form-label mt-2">
                    <strong>Description</strong>
                  </label>
                </div>
                <div className="col-md-9">
                  <textarea
                    className="form-control"
                    id="description"
                    rows={6}
                    placeholder="Provide a detailed description of the issue or your suggestion..."
                  ></textarea>
                </div>
              </div>

              {/* Attach File + Submit */}
              <div className="d-flex flex-column align-items-start">
                <button type="button" className="btn btn-outline-secondary mb-3">
                  <i className="bi bi-paperclip me-2"></i> Attach File
                </button>

                <button
                  type="button"
                  className="btn btn-info text-white fw-bold px-4 py-2"
                  style={{ backgroundColor: "#0d6efd", border: "none" }}
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> {/* ✅ closes .flex-grow-1 */}
    </div>   
  );
};

export default AuthorFeedback;
