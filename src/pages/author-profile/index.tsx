import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const AuthorProfile: React.FC = () => {
  const navigate = useNavigate();

  // Dummy URLs and user data
  const repoLogoUrl = "/logo.png"; // Placeholder
  const authorAvatarUrl = "/author-profile.png"; // Placeholder for Prof. Khan
  const user = { name: "Prof. Khan" };

  return (
    <div className="d-flex" style={{ minHeight: "100vh" }}>
      
      {/* ===== Sidebar (Author View, Highlight Profile) ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{ width: "400px", backgroundColor: "#1f2937", minHeight: "100vh" }}
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
            {/* Highlighted section for Profile */}
            <button
              onClick={() => navigate("/author/author-profile")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start **bg-secondary bg-opacity-50 rounded**"
              style={{ border: "none" }}
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
          </li> */}

          {/* <li className="mb-1">
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

      {/* ===== Main Content (Profile Edit) ===== */}
      <div className="flex-grow-1 bg-light">
        
        {/* Navbar (Updated Title) */}
        <nav className="navbar bg-white shadow-sm px-4">
          <div className="container-fluid p-0">
            <h5 className="mb-0 fw-bold">My Profile</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <span className="fw-semibold text-dark me-2">{user.name}</span>
                <img
                  src={authorAvatarUrl}
                  alt="User Avatar"
                  className="rounded-circle"
                  style={{ width: "38px", height: "38px" }}
                />
              </div>
            </div>
          </div>
        </nav>

        {/* ===== Profile Edit Form Content Section ===== */}
        <div className="container-fluid py-4 px-4">
          
          <h2 className="fw-bold mb-2">Edit Profile</h2>
          <p className="text-secondary mb-4">
            Update your personal information and account details.
          </p>

          <div className="card shadow-sm p-4 border-0">
            
            {/* Profile Avatar Section */}
            <div className="d-flex align-items-center mb-5">
              <img
                src={authorAvatarUrl}
                alt="Profile Avatar"
                className="rounded-circle border border-primary border-3"
                style={{ width: "80px", height: "80px", objectFit: 'cover' }}
              />
              <button className="btn btn-sm btn-outline-secondary ms-4">
                Change Picture
              </button>
            </div>
            
            {/* Profile Information Grid */}
            <div className="row g-4">
              
              {/* First Name */}
              <div className="col-md-6">
                <label htmlFor="firstName" className="form-label">**First Name**</label>
                <input type="text" className="form-control" id="firstName" defaultValue="Prof." placeholder="Enter First Name" />
              </div>

              {/* Last Name */}
              <div className="col-md-6">
                <label htmlFor="lastName" className="form-label">**Last Name**</label>
                <input type="text" className="form-control" id="lastName" defaultValue="Khan" placeholder="Enter Last Name" />
              </div>
              
              {/* Email Address */}
              <div className="col-md-6">
                <label htmlFor="emailAddress" className="form-label">**Email Address**</label>
                <input type="email" className="form-control" id="emailAddress" defaultValue="xyz@gmail.com" placeholder="xyz@gmail.com" />
              </div>
              
              {/* Contact Number */}
              <div className="col-md-6">
                <label htmlFor="contactNumber" className="form-label">Contact Number</label>
                <input type="tel" className="form-control" id="contactNumber" defaultValue="+92 300 4567821" placeholder="+92 300 4567821" />
              </div>
              
              {/* Country */}
              <div className="col-md-6">
                <label htmlFor="country" className="form-label">**Country**</label>
                <input type="text" className="form-control" id="country" defaultValue="Pakistan" placeholder="Country" />
              </div>
              
              {/* City */}
              <div className="col-md-6">
                <label htmlFor="city" className="form-label">**City**</label>
                <input type="text" className="form-control" id="city" defaultValue="Peshawar" placeholder="City" />
              </div>
              
              {/* Institute */}
              <div className="col-md-6">
                <label htmlFor="institute" className="form-label">**Institute**</label>
                <input type="text" className="form-control" id="institute" defaultValue="University/ college/ organization" placeholder="University/ college/ organization" />
              </div>
              
              {/* Department */}
              <div className="col-md-3">
                <label htmlFor="department" className="form-label">**Department**</label>
                <input type="text" className="form-control" id="department" defaultValue="Social Sciences" placeholder="Department" />
              </div>
              
              {/* Designation / Title */}
              <div className="col-md-3">
                <label htmlFor="designation" className="form-label">**Designation / Title**</label>
                <input type="text" className="form-control" id="designation" defaultValue="Associate Professor" placeholder="Associate Professor" />
              </div>
              
              {/* ORCID ID */}
              <div className="col-md-6">
                <label htmlFor="orcid" className="form-label">**ORCID ID**</label>
                <input type="text" className="form-control" id="orcid" defaultValue="0000-0002-7854-1234" placeholder="0000-0002-7854-1234" />
              </div>
              
              {/* Bio/About */}
              <div className="col-md-6">
                <label htmlFor="bio" className="form-label">**Bio/About**</label>
                <textarea className="form-control" id="bio" rows={1} placeholder="About Me"></textarea>
              </div>

            </div> {/* End Profile Information Grid */}
            
            {/* The first Save/Cancel button group is removed here to consolidate at the bottom */}
            
          </div> {/* End Profile Card */}
          
          {/* ===== Password Update Section ===== */}
          <div className="mt-4 pt-3">
             {/* The Update Password button is now styled as per the image's first occurrence */}
             <button type="button" className="btn btn-outline-secondary mb-4 px-4 py-2">
                Update Password
             </button>

             <div className="card shadow-sm p-4 border-0" style={{ maxWidth: '500px' }}>
                <div className="row g-4">
                  {/* Current Password */}
                  <div className="col-12">
                      <label htmlFor="currentPassword" className="form-label">**Current Password**</label>
                      <input type="password" className="form-control" id="currentPassword" placeholder="Password" />
                  </div>
                  {/* New Password */}
                  <div className="col-12">
                      <label htmlFor="newPassword" className="form-label">**New Password**</label>
                      <input type="password" className="form-control" id="newPassword" placeholder="Password" />
                  </div>
                  {/* Confirm New Password */}
                  <div className="col-12">
                      <label htmlFor="confirmPassword" className="form-label">**Confirm New Password**</label>
                      <input type="password" className="form-control" id="confirmPassword" placeholder="Password" />
                  </div>
                </div>

                {/* Password Update Button Group - This is the ONLY Save/Cancel area that remains. */}
                {/* <div className="d-flex justify-content-end mt-4 pt-3 border-top right">
                    <button type="button" className="btn btn-light text-secondary me-3">
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-info text-white fw-bold" style={{ backgroundColor: '#0d6efd', border: 'none' }}>
                        Save Changes
                    </button>
                </div> */}
             </div>
             <div className="d-flex justify-content-end mt-4 pt-3 border-top right">
                    <button type="button" className="btn btn-light text-secondary me-3">
                        Cancel
                    </button>
                    <button type="submit" className="btn btn-info text-white fw-bold" style={{ backgroundColor: '#0d6efd', border: 'none' }}>
                        Save Changes
                    </button>
                </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;