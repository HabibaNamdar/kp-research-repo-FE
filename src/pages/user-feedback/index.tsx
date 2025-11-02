import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AuthorFeedback: React.FC = () => {
  const navigate = useNavigate();

  const userAvatarUrl = "/author-profile.png";
  const repoLogoUrl = "/logo.png"; // ✅ Add your logo path here
  const user = { name: "Prof. Khan" };

  return (
    <div className="d-flex">
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="text-white p-3"
        style={{
          width: "250px",
          minHeight: "100vh",
          backgroundColor: "#066187",
        }}
      >
        {/* ✅ Logo & Title Section */}
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

        <ul className="list-unstyled sidebar-menu">
          <li className="mb-2">
            <button
              onClick={() => navigate("/user-dashboard")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/author/home")}
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
              onClick={() => navigate("/user/bookmarks")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bookmark-fill me-3"></i> Bookmark
            </button>
          </li>
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
              className="btn d-flex align-items-center p-2 w-100 text-start text-white active-menu"
              style={{
                border: "none",
                backgroundColor: "#0a7fb8",
                borderRadius: "6px",
              }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>
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
            <h5 className="mb-0 fw-bold">Feedback / Report</h5>
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

        {/* ===== Feedback Form ===== */}
        <div className="container-fluid py-4 px-4">
          <h2 className="fw-bold mb-3">Submit Feedback or Report an Issue</h2>
          <p className="text-secondary mb-5">
            Share your suggestions, report problems, or request assistance from the admin team.
          </p>

          <div className="d-flex justify-content-center">
            <div
              className="bg-white p-4 shadow-sm rounded"
              style={{ maxWidth: "700px", width: "100%" }}
            >
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
                  className="btn fw-bold text-white px-4 py-2"
                  style={{ backgroundColor: "#066187", border: "none" }}
                >
                  Submit Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthorFeedback;
