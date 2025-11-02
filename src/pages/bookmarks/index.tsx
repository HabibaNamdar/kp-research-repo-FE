import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./bookmarks.css"; // Custom styling

const UserBookmark: React.FC = () => {
  const navigate = useNavigate();

  // Placeholder data
  const repoLogoUrl = "/logo.png";
  const userAvatarUrl = "/user-profile.png";
  const user = { name: "Hassan Ali" };

  // Mock data for bookmarked papers
  const bookmarkedPapers = [
    {
      id: 1,
      title: "Understanding Climate Change Effects on Urban Air Quality",
      author: "Dr. Sarah Khan",
      institute: "University of Peshawar",
      tags: ["Environment", "Data Analysis"],
    },
    {
      id: 2,
      title: "Comprehensive Review of Renewable Energy Sources",
      author: "Ahmed Raza",
      institute: "Lahore University of Management Sciences",
      tags: ["Renewable Energy"],
    },
    {
      id: 3,
      title: "The Role of Artificial Intelligence in Modern Healthcare",
      author: "Ali Noor",
      institute: "Massachusetts Institute of Technology",
      tags: ["Artificial Intelligence", "Healthcare"],
    },
    {
      id: 4,
      title: "Impacts of Deforestation on Widespread Biodiversity Loss",
      author: "Hira Malik",
      institute: "Quaid-i-Azam University",
      tags: ["Ecology", "Environment"],
    },
  ];

  // Remove bookmark mock
  const handleRemoveBookmark = (paperId: number) => {
    console.log(`Removing bookmark for paper ID: ${paperId}`);
  };

  return (
    <div className="d-flex">
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{ width: "250px", minHeight: "100vh", backgroundColor: "#1f2937" }}
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
              onClick={() => navigate("/user-dashboard")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
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
              onClick={() => navigate("/user/bookmarks")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white active-menu"
              style={{ border: "none" }}
            >
              <i className="bi bi-bookmark-fill me-3"></i> Bookmark
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/notification")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bell-fill me-3"></i> Notification
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/analytics")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>
          <li className="mb-2">
            <button
              onClick={() => navigate("/user/feedback")}
              className="btn d-flex align-items-center p-2 w-100 text-start text-white"
              style={{ border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>
          <li className="mb-2">
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
            <h5 className="mb-0 fw-bold">
              My Bookmarked Papers ({bookmarkedPapers.length} saved)
            </h5>
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

        {/* ===== Bookmarked Papers List ===== */}
        <div className="p-4">
          {bookmarkedPapers.map((paper) => (
            <div
              key={paper.id}
              className="card p-4 mb-3 border-0 shadow-sm"
              style={{ borderRadius: "12px" }}
            >
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="fw-bold text-primary mb-2">{paper.title}</h5>
                  <p className="text-muted mb-1 small">
                    <strong>{paper.author}</strong> • {paper.institute}
                  </p>
                  <p className="small text-secondary mb-0">
                    {paper.tags.join(" • ")}
                  </p>
                </div>
                <div className="d-flex flex-column align-items-end gap-2">
                  <button className="btn btn-primary btn-sm">View Paper</button>
                  <button
                    className="btn btn-light btn-sm text-secondary border"
                    onClick={() => handleRemoveBookmark(paper.id)}
                  >
                    Remove Bookmark
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserBookmark;
