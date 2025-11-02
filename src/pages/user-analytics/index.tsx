import React from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import "./user-analytics.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const UserAnalytics: React.FC = () => {
  const navigate = useNavigate();

  const userAvatarUrl = "/user-profile.png";
  const repoLogoUrl = "/logo.png"; // ✅ Added logo
  const user = { name: "Hassan Ali" };

  // Mock data
  const analyticsStats = {
    papersViewed: 30,
    downloads: 5,
    avgReadTime: "7m",
    papersBookmarked: 8,
  };

  const mostViewedPapers = [
    {
      title: "Advances in Cardiovascular Imaging",
      author: "Ayesha Iqbal",
      category: "Healthcare",
      lastViewed: "2 days ago",
    },
    {
      title: "Neural Networks in Image Recognition",
      author: "Sarah Khan",
      category: "AI",
      lastViewed: "1 week ago",
    },
    {
      title: "Organic Synthesis Techniques",
      author: "Ahmed Iqbal",
      category: "Chemistry",
      lastViewed: "1 week ago",
    },
    {
      title: "Ethical Considerations in Business Data",
      author: "Hassan Ali",
      category: "Business",
      lastViewed: "2 weeks ago",
    },
  ];

  // Charts data
  const papersViewedData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Views",
        data: [2, 4, 3, 6, 5, 8, 7],
        borderColor: "#007bff",
        backgroundColor: "rgba(0,123,255,0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  const papersViewedOptions = {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } },
  };

  const categoryData = {
    labels: ["Healthcare", "AI", "Business", "Chemistry"],
    datasets: [
      {
        data: [40, 25, 20, 15],
        backgroundColor: ["#007bff", "#28a745", "#ffc107", "#6c757d"],
        hoverBackgroundColor: ["#0056b3", "#1e7e34", "#e0a800", "#5a6268"],
      },
    ],
  };

  const categoryOptions = {
    responsive: true,
    cutout: "70%",
    plugins: { legend: { display: false } },
  };

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
        {/* ✅ Added logo section */}
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
              onClick={() => navigate("/user/bookmarks")}
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
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>
          <li className="mb-2">
            <a href="#" className="d-flex align-items-center p-2 text-white text-decoration-none">
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
            <h5 className="mb-0 fw-bold">Analytics</h5>
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

        {/* ===== Page Content ===== */}
        <div className="p-4">
          <p className="mb-4" style={{ fontSize: "18px", color: "black", fontWeight: 500 }}>
            See your activity and engagement with research papers
          </p>

          {/* Quick Stats */}
          <section className="quick-stats mb-5">
            <h5 className="fw-semibold mb-3 text-dark">Quick Status</h5>
            <div className="d-flex flex-wrap gap-4">
              {[
                ["Papers Viewed", analyticsStats.papersViewed, "text-primary"],
                ["Downloads", analyticsStats.downloads, "text-success"],
                ["Avg Read Time", analyticsStats.avgReadTime, "text-warning"],
                ["Bookmarked", analyticsStats.papersBookmarked, "text-info"],
              ].map(([label, value, color], i) => (
                <div
                  key={i}
                  className="card p-3 border-0 shadow-sm text-center flex-fill"
                  style={{
                    minWidth: "220px",
                    height: "120px",
                    border: "1px solid #dee2e6",
                  }}
                >
                  <h3 className={`fw-bold mb-1 ${color}`}>{value}</h3>
                  <span className="text-muted small">{label}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Charts Section */}
          <section className="charts-section mb-5 row g-4">
            <div className="col-lg-7">
              <div className="card p-4 border-0 shadow-sm h-100">
                <h5 className="fw-semibold mb-3">Papers Viewed</h5>
                <div style={{ height: "250px" }}>
                  <Line data={papersViewedData} options={papersViewedOptions} />
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="card p-4 border-0 shadow-sm h-100">
                <h5 className="fw-semibold mb-3">Top Categories</h5>
                <div className="d-flex align-items-center justify-content-center">
                  <div style={{ width: "160px", height: "160px" }}>
                    <Doughnut data={categoryData} options={categoryOptions} />
                  </div>
                  <ul className="list-unstyled mb-0 ms-4 small">
                    <li>
                      <i className="bi bi-circle-fill text-primary me-2"></i>
                      Healthcare
                    </li>
                    <li>
                      <i className="bi bi-circle-fill text-success me-2"></i>AI
                    </li>
                    <li>
                      <i className="bi bi-circle-fill text-warning me-2"></i>
                      Chemistry
                    </li>
                    <li>
                      <i className="bi bi-circle-fill text-secondary me-2"></i>
                      Business
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Most Viewed Papers */}
          <section className="most-viewed-papers">
            <h5 className="fw-semibold mb-3 text-dark">Most Viewed Papers</h5>
            <div className="card p-4 border-0 shadow-sm">
              <table className="table align-middle mb-0">
                <thead>
                  <tr>
                    <th className="text-secondary" style={{ width: "40%" }}>
                      Title
                    </th>
                    <th className="text-secondary" style={{ width: "25%" }}>
                      Author
                    </th>
                    <th className="text-secondary" style={{ width: "15%" }}>
                      Category
                    </th>
                    <th className="text-secondary" style={{ width: "20%" }}>
                      Last Viewed
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {mostViewedPapers.map((paper, i) => (
                    <tr key={i}>
                      <td className="fw-semibold text-dark">{paper.title}</td>
                      <td>{paper.author}</td>
                      <td>{paper.category}</td>
                      <td>{paper.lastViewed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default UserAnalytics;
