// import React from "react";
// import "./user-dashboard.css";
// import {
//   FiHome,
//   FiUser,
//   FiBookmark,
//   FiBell,
//   FiBarChart2,
//   FiSettings,
//   FiHelpCircle,
//   FiLogOut,
//   FiFileText,
// } from "react-icons/fi";

// const Dashboard: React.FC = () => {
//   return (
//     <div className="dashboard-container">
//       {/* Sidebar */}
//       <aside className="sidebar">
//         <div className="logo">
//           <img src="/logo.png" alt="Logo" className="logo-img" />
//           <p>
//               RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY <br /> FOR KP
//             </p>
//         </div>
//         <ul className="menu">
//           <li className="active"><FiHome /> Dashboard</li>
//           <li><FiUser /> Home</li>
//           <li><FiBookmark /> Profile</li>
//           <li><FiBell /> Bookmark</li>
//           <li><FiBarChart2 /> Notification</li>
//           <li><FiFileText /> Analytics</li>
//           <li><FiSettings /> Settings</li>
//           <li><FiHelpCircle /> Help/Support</li>
//           <li><FiLogOut /> Logout</li>
//         </ul>
//       </aside>

//       {/* Main Content */}
//       <main className="main-content">
//         <header className="topbar">
//           <h2>Dashboard</h2>
//           <div className="user-profile">
//             <span className="bell"><FiBell /></span>
//             <span className="username">Hassan Ali</span>
//             <img src="/user-profile.png" alt="User" className="user-avatar" />
            
//           </div>
//         </header>

//         <section className="welcome-section">
//           <h3>Welcome back, Hassan Ali 👋</h3>
//           <p>Here’s a quick overview of your activity.</p>
//         </section>

//         {/* Quick Stats */}
//        <section className="quick-stats">
//   <h4 className="quick-stats-title">Quick Status</h4>
  
//   <div className="stat-box orange">
//     <span>📄</span>
//     <h4>Saved Papers</h4>
//     <p>12</p>
//   </div>
//   <div className="stat-box yellow">
//     <span>📘</span>
//     <h4>Papers Viewed</h4>
//     <p>8</p>
//   </div>
//    <div className="stat-box blue">
//     <span>⏱️</span>
//     <h4>Last Active</h4>
//     <p>2 hours ago</p>
//     </div>
//    <div className="stat-box gray">
//     <span>📅</span>
//     <h4>Joined</h4>
//     <p>Sept 2025</p>
//      </div>
//     </section>


//         {/* Activity and Recommendations */}
//         <section className="activity-section">
//           <div className="recent-activity">
//             <h4>Recent Activity</h4>
//             <ul>
//               <li>📄 You viewed <b>AI in Medical Imaging</b> on Oct 8</li>
//               <li>🔖 You bookmarked <b>Climate Change Impacts 2024</b></li>
//               <li>📚 You explored the <b>Machine Learning</b> category</li>
//             </ul>
//           </div>

//           <div className="recommended-papers">
//             <h4>Recommended Papers</h4>
//             <div className="paper-list">
//               <div className="paper-card">
//                 <h5>AI in Medical Imaging</h5>
//                 <p className="author">John Smith — 2024</p>
//                 <p>This paper explores the applications of AI in medical imaging...</p>
//                 <div className="buttons">
//                   <button className="view-btn">View Details</button>
//                   <button className="bookmark-btn">Bookmark</button>
//                 </div>
//               </div>

//               <div className="paper-card">
//                 <h5>Climate Change Impacts</h5>
//                 <p className="author">John Smith — 2024</p>
//                 <p>This study analyzes the impacts of climate change on the environment...</p>
//                 <div className="buttons">
//                   <button className="view-btn">View Details</button>
//                   <button className="bookmark-btn">Bookmark</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// // ✅ Export default so App.tsx can import it easily
// export default Dashboard;




import React from "react";
import "./user-dashboard.css";
import {
  FiHome,
  FiUser,
  FiBookmark,
  FiBell,
  FiBarChart2,
  FiSettings,
  FiHelpCircle,
  FiLogOut,
  FiFileText,
} from "react-icons/fi";

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="Logo" className="logo-img" />
          <p>
            RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY <br /> FOR KP
          </p>
        </div>
        <ul className="menu">
          <li className="active"><FiHome /> Dashboard</li>
          <li><FiUser /> Home</li>
          <li><FiBookmark /> Profile</li>
          <li><FiBell /> Bookmark</li>
          <li><FiBarChart2 /> Notification</li>
          <li><FiFileText /> Analytics</li>
          <li><FiSettings /> Settings</li>
          <li><FiHelpCircle /> Help/Support</li>
          <li><FiLogOut /> Logout</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <header className="topbar">
          <h2>Dashboard</h2>
          <div className="user-profile">
            <span className="bell"><FiBell /></span>
            <span className="username">Hassan Ali</span>
            <img src="/user-profile.png" alt="User" className="user-avatar" />
          </div>
        </header>

        <section className="welcome-section">
          <h3>Welcome back, Hassan Ali 👋</h3>
          <p>Here’s a quick overview of your activity.</p>
        </section>

        {/* Quick Stats */}
        <section className="quick-stats">
          <h4 className="quick-stats-title">Quick Status</h4>

          <div className="stat-box orange">
            <span>📄</span>
            <h4>Saved Papers</h4>
            <p>12</p>
          </div>
          <div className="stat-box yellow">
            <span>📘</span>
            <h4>Papers Viewed</h4>
            <p>8</p>
          </div>
          <div className="stat-box blue">
            <span>⏱️</span>
            <h4>Last Active</h4>
            <p>2 hours ago</p>
          </div>
          <div className="stat-box gray">
            <span>📅</span>
            <h4>Joined</h4>
            <p>Sept 2025</p>
          </div>
        </section>

        {/* Activity and Recommendations */}
        <section className="activity-section">
          <div className="recent-activity">
            <h4>Recent Activity</h4>
            <ul>
              <li>📄 You viewed <b>AI in Medical Imaging</b> on Oct 8</li>
              <li>🔖 You bookmarked <b>Climate Change Impacts 2024</b></li>
              <li>📚 You explored the <b>Machine Learning</b> category</li>
            </ul>
          </div>

          <div className="recommended-papers">
            <h4>Recommended Papers</h4>

            {/* ✅ Your requested paper list section */}
            <div className="paper-list">
              <div className="paper-card">
                <h5>AI in Medical Imaging</h5>
                <p className="author">John Smith — 2024</p>
                <p>
                  This paper explores the applications of AI in medical
                  imaging...
                </p>
                <div className="buttons">
                  <button className="view-btn">View Details</button>
                  <button className="bookmark-btn">Bookmark</button>
                </div>
              </div>

              <div className="paper-card">
                <h5>Climate Change Impacts</h5>
                <p className="author">John Smith — 2024</p>
                <p>
                  This study analyzes the impacts of climate change on the
                  environment...
                </p>
                <div className="buttons">
                  <button className="view-btn">View Details</button>
                  <button className="bookmark-btn">Bookmark</button>
                </div>
              </div>
            </div>
            {/* ✅ End of paper list */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
