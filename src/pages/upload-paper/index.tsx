import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const UploadPaper: React.FC = () => {
  const navigate = useNavigate();

  // Dummy URLs and user data for the navigation bar
  const repoLogoUrl = "/logo.png"; // Placeholder
  const adminAvatarUrl = "/author-profile.png"; // Placeholder for Prof. Khan
  const user = { name: "Prof. Khan" };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      {/* ===== Sidebar (User's Provided Structure, Highlight Upload) ===== */}
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
              onClick={() => navigate("/author/author-profile")}
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
            {/* Highlighted section for Upload */}
            <button
              onClick={() => navigate("/author/upload-paper")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start bg-secondary bg-opacity-50 rounded"
              style={{ border: "none" }} 
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
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
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
              <i className="bi bi-question-circle-fill me-3"></i> Help / Support
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

      {/* ===== Main Content (Upload Your Research Paper) ===== */}
      <div className="flex-grow-1 bg-light">
        
        {/* Navbar (User's Provided Structure, updated title and user name) */}
        <nav className="navbar bg-white shadow-sm px-4">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">Upload Your Research Paper</h5>
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

        {/* ===== Upload Form Content Section (Matching Uploads.png) ===== */}
        <div className="container-fluid py-4 px-4">
          
          <div className="d-flex justify-content-between align-items-center mb-4">
            <p className="text-secondary mb-0">
              Share your work with the research community. Fill out the details below to publish your paper
            </p>
            <button 
              className="btn btn-success fw-bold py-2 px-3"
              onClick={() => navigate("/author/upload")}
            >
              <i className="bi bi-plus-lg me-2"></i> Upload New Paper
            </button>
          </div>

          <form className="bg-white p-4 shadow-sm rounded">
            
            {/* Paper Title */}
            <div className="mb-4">
              <label htmlFor="paperTitle" className="form-label fw-bold">Paper Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="paperTitle" 
                placeholder="Enter the title of your paper" 
              />
            </div>
            
            {/* Abstract */}
            <div className="mb-4">
              <label htmlFor="abstract" className="form-label fw-bold">Abstract</label>
              <textarea 
                className="form-control" 
                id="abstract" 
                rows={4} 
                placeholder="Summarize the main points of your research"
              ></textarea>
            </div>

            {/* Author */}
            <div className="mb-4">
              <label htmlFor="author" className="form-label fw-bold">Author</label>
              <input 
                type="text" 
                className="form-control" 
                id="author" 
                placeholder="James Wilson" 
              />
            </div>

            {/* Keywords */}
            <div className="mb-4">
              <label htmlFor="keywords" className="form-label fw-bold">Keywords</label>
              <input 
                type="text" 
                className="form-control" 
                id="keywords" 
                placeholder="Add relevant keywords" 
              />
            </div>

            {/* Category */}
            <div className="mb-4">
              <label htmlFor="category" className="form-label fw-bold">Category</label>
              <select className="form-select" id="category">
                <option value="">Select category</option>
                <option value="ml">Machine Learning</option>
                <option value="data_vis">Data Visualization</option>
                <option value="blockchain">Blockchain</option>
                <option value="healthcare">Healthcare</option>
              </select>
            </div>
            
            {/* Upload File (PDF only) */}
            <div className="mb-4 pt-3">
              <label className="form-label fw-bold">Upload File (PDF only)</label>
              <div 
                className="border-dashed text-center p-5 rounded mt-2" 
                style={{ border: '2px dashed #ced4da', backgroundColor: '#f8f9fa' }}
              >
                <i className="bi bi-cloud-upload display-4 text-secondary"></i>
                <p className="mt-2 text-secondary mb-0">Drag and drop or click to upload</p>
                <small className="text-muted">Max 10 MB</small>
              </div>
            </div>

            {/* Thumbnail (optional) - Using a simple input for React */}
            <div className="mb-5">
              <label className="form-label fw-bold">Thumbnail (optional)</label>
              <div className="d-flex align-items-center">
                <input 
                  type="file" 
                  className="form-control me-3" 
                  style={{ width: '120px' }}
                  // This is a simplified way to match the visual. 
                  // In a real app, this would be a custom file input.
                />
                <span className="text-muted">No file chosen</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="d-flex gap-3">
              <button type="submit" className="btn btn-primary fw-bold px-4">Publish Paper</button>
              <button type="button" className="btn btn-outline-secondary px-4">Save as Draft</button>
              <button type="reset" className="btn btn-outline-danger px-4">Reset Form</button>
            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default UploadPaper;