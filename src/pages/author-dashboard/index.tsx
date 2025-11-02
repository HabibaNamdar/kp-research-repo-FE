import React from "react";
import {
  Home,
  User,
  FileText,
  Upload,
  Bell,
  BarChart3,
  MessageSquare,
  Settings,
  HelpCircle,
  LogOut,
  Plus,
} from "lucide-react";
import "./author-dashboard.css";

const ProfessorDashboard: React.FC = () => {
  const papers = [
    {
      title: "Machine Learning for Healthcare",
      views: 300,
      citations: 20,
      date: "Oct 8, 2025",
    },
    {
      title: "AI in Climate Change Predictions",
      views: 400,
      citations: 35,
      date: "Oct 7, 2025",
    },
    {
      title: "Blockchain in Research Integrity",
      views: 250,
      citations: 15,
      date: "Oct 5, 2025",
    },
    {
      title: "Data Visualization for Data Science",
      views: 250,
      citations: 12,
      date: "Oct 2, 2025",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="sidebar-title">
           <img src="/logo.png" alt="Book Icon" className="icon" />

            <p>
              RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY <br /> FOR KP
            </p>
          </div>
        </div>
        <nav className="nav-links">
          <div className="nav-item active">
            <Home size={18} /> <span>Dashboard</span>
          </div>
          <div className="nav-item">
            <User size={18} /> <span>Profile</span>
          </div>
          <div className="nav-item">
            <FileText size={18} /> <span>My Publications</span>
          </div>
          <div className="nav-item">
            <Upload size={18} /> <span>Upload</span>
          </div>
          <div className="nav-item">
            <Bell size={18} /> <span>Notification</span>
          </div>
          <div className="nav-item">
            <BarChart3 size={18} /> <span>Analytics</span>
          </div>
          <div className="nav-item">
            <MessageSquare size={18} /> <span>Feedback / Report</span>
          </div>
          <div className="nav-item">
            <Settings size={18} /> <span>Settings</span>
          </div>
          <div className="nav-item">
            <HelpCircle size={18} /> <span>Help/Support</span>
          </div>
        </nav>

        <div className="nav-item logout">
          <LogOut size={18} /> <span>Logout</span>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Bar */}
        <div className="topbar">
          <h2>Dashboard</h2>
          <div className="profile">
            <Bell className="bell-icon" />
            <div className="profile-info">
              <img
                src="/author-profile.png"
                alt="profile"
                className="avatar"
              />
              <span>Prof. Khan</span>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <h2>
              Welcome back, <span className="name">Saif Khan</span> 👋
            </h2>
            <p>Here’s a quick overview of your activity.</p>
          </div>
          <button className="upload-btn">
            <Plus size={16} />
            Upload New Paper
          </button>
        </section>

        {/* Stats */}
        <section className="stats">
          <div className="stat-card">
            <h3>1,250</h3>
            <p>Total Views</p>
          </div>
          <div className="stat-card">
            <h3>82</h3>
            <p>Total Citation</p>
          </div>
        </section>

        {/* Recent Activity */}
        {/* Recent Activity */}
{/* Recent Activity */}
{/* Recent Activity */}
<section className="recent-activity">
  <div className="recent-header">
    <h4>Recent Activity</h4>
    <select>
      <option>Last week</option>
      <option>Last month</option>
      <option>Last 3 months</option>
    </select>
  </div>

  <div className="activity-card">
    <div className="activity-header">
      <h3>Most Viewed Papers</h3>
    </div>

    <table className="activity-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Views</th>
          <th>Citations</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {papers.map((paper, i) => (
          <tr key={i}>
            <td>{paper.title}</td>
            <td>{paper.views}</td>
            <td>{paper.citations}</td>
            <td>{paper.date}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</section>



      </main>
    </div>
  );
};

export default ProfessorDashboard;
