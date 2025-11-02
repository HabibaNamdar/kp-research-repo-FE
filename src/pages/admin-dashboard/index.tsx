// import React from "react";
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   PieChart,
//   Pie,
//   Cell,
//   Legend,
// } from "recharts";
// import {
//   Home,
//   Users,
//   FileText,
//   BarChart3,
//   MessageSquare,
//   Settings,
//   HelpCircle,
//   LogOut,
//   Bell,
// } from "lucide-react";

// const AdminDashboard: React.FC = () => {
//   // Sample data for charts
//   const publicationData = [
//     { name: "Jan", publications: 60 },
//     { name: "Feb", publications: 80 },
//     { name: "Mar", publications: 70 },
//     { name: "Apr", publications: 90 },
//     { name: "May", publications: 110 },
//     { name: "Jun", publications: 85 },
//     { name: "Jul", publications: 55 },
//   ];

//   const categoryData = [
//     { name: "Information Technology", value: 45 },
//     { name: "Medicine", value: 30 },
//     { name: "Environmental Science", value: 25 },
//   ];

//   const COLORS = ["#00707A", "#00B3B3", "#F7931E"];

//   return (
//     <div className="flex min-h-screen bg-gray-50">
//       {/* Sidebar */}
//       <aside className="w-64 bg-[#004d66] text-white flex flex-col">
//         <div className="p-6 font-bold text-lg leading-tight">
//           RESEARCH REPOSITORY <br /> & SCIENTIST DIRECTORY <br /> FOR KP
//         </div>
//         <nav className="flex-1 px-4 space-y-3">
//           <div className="flex items-center space-x-3 bg-[#006b80] px-3 py-2 rounded-md">
//             <Home size={18} /> <span>Dashboard</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <Users size={18} /> <span>User Management</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <FileText size={18} /> <span>Publications</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <BarChart3 size={18} /> <span>Analytics</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <MessageSquare size={18} /> <span>Feedback / Report</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <Settings size={18} /> <span>Settings</span>
//           </div>
//           <div className="flex items-center space-x-3 hover:bg-[#006b80] px-3 py-2 rounded-md cursor-pointer">
//             <HelpCircle size={18} /> <span>Help/Support</span>
//           </div>
//         </nav>
//         <div className="px-4 py-3 border-t border-gray-500 flex items-center space-x-3 cursor-pointer hover:bg-[#006b80] rounded-md">
//           <LogOut size={18} /> <span>Logout</span>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         {/* Header */}
//         <div className="flex justify-between items-center mb-6 bg-white shadow-sm p-4 rounded-md">
//           <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
//           <div className="flex items-center space-x-4">
//             <Bell className="text-gray-600 cursor-pointer" />
//             <div className="flex items-center space-x-2">
//               <img
//                 src="/admin-avatar.jpg"
//                 alt="Admin"
//                 className="w-8 h-8 rounded-full border"
//               />
//               <span className="font-medium text-gray-700">Admin</span>
//             </div>
//           </div>
//         </div>

//         {/* Welcome Section */}
//         <div className="mb-6">
//           <h2 className="text-2xl font-semibold text-gray-800">
//             Welcome back, Admin
//           </h2>
//           <p className="text-gray-600">
//             Overview of repository activity and performance
//           </p>
//         </div>

//         {/* Stats Cards */}
//         <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mb-8">
//           {[
//             { title: "Total Publications", value: "2,430" },
//             { title: "Pending Approvals", value: "32" },
//             { title: "Total Downloads", value: "12,480" },
//             { title: "Active Authors", value: "156" },
//             { title: "New User Today", value: "25" },
//             { title: "Reports/Issues", value: "4" },
//           ].map((stat, i) => (
//             <div
//               key={i}
//               className="bg-white p-4 rounded-md shadow-sm text-center border"
//             >
//               <h3 className="text-2xl font-semibold text-gray-800">
//                 {stat.value}
//               </h3>
//               <p className="text-sm text-gray-600">{stat.title}</p>
//             </div>
//           ))}
//         </div>

//         {/* Charts Section */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//           {/* Publications per Month */}
//           <div className="bg-white p-4 rounded-md shadow-sm border">
//             <h3 className="font-semibold text-gray-800 mb-3">
//               Publications per Month
//             </h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={publicationData}>
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="publications" fill="#00707A" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Top Categories */}
//           <div className="bg-white p-4 rounded-md shadow-sm border">
//             <h3 className="font-semibold text-gray-800 mb-3">Top Categories</h3>
//             <ResponsiveContainer width="100%" height={250}>
//               <PieChart>
//                 <Pie
//                   data={categoryData}
//                   dataKey="value"
//                   nameKey="name"
//                   cx="50%"
//                   cy="50%"
//                   outerRadius={80}
//                   label
//                 >
//                   {categoryData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//                 <Legend />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Recent Publications Table */}
//         <div className="bg-white p-4 rounded-md shadow-sm border">
//           <h3 className="font-semibold text-gray-800 mb-3">Recent Publications</h3>
//           <table className="w-full text-left border-collapse">
//             <thead>
//               <tr className="border-b">
//                 <th className="py-2 px-3">Publication Title</th>
//                 <th className="py-2 px-3">Author</th>
//                 <th className="py-2 px-3">Status</th>
//                 <th className="py-2 px-3">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className="border-b">
//                 <td className="py-2 px-3">AI In Healthcare</td>
//                 <td className="py-2 px-3">Dr. Noor</td>
//                 <td className="py-2 px-3 text-yellow-600">Pending</td>
//                 <td className="py-2 px-3">Oct 13, 2025</td>
//               </tr>
//               <tr>
//                 <td className="py-2 px-3">Climate Policy Trends</td>
//                 <td className="py-2 px-3">Dr. Ahmed</td>
//                 <td className="py-2 px-3 text-green-600">Approved</td>
//                 <td className="py-2 px-3">Oct 12, 2025</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React from 'react';
// import './dashboard.css'; // Assuming you'll define custom styles here
// import {
//     FaTachometerAlt, FaUsers, FaBook, FaChartBar, 
//     FaCommentDots, FaCog, FaQuestionCircle, FaSignOutAlt, 
//     FaBell, FaDownload, FaUserEdit, FaExclamationTriangle
// } from 'react-icons/fa'; // Using react-icons for convenience

// // --- Component Imports ---
// // In a real app, these would be in separate files (e.g., Header.tsx, Sidebar.tsx)
// // For this single index.tsx file, I'll define them inline or before the main export.

// // --- Data Mockup ---
// const mockStats = {
//     totalPublications: 2430,
//     pendingApprovals: 32,
//     totalDownloads: 12480,
//     activeAuthors: 156,
//     newUserToday: 25,
//     reportsIssues: 4,
// };

// const mockTableData = [
//     { title: "AI In Healthcare", author: "Dr. Noor", status: "Pending", date: "Oct 13, 2025" },
//     { title: "Climate Policy Trends", author: "Dr. Ahmed", status: "Approved", date: "Oct 12, 2025" },
//     // Add more data as needed
// ];

// // ----------------------------------------------------------------------
// // 1. Sidebar Component
// // ----------------------------------------------------------------------

// interface SidebarItemProps {
//     icon: React.ReactElement;
//     label: string;
//     isActive: boolean;
// }

// const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive }) => (
//     <div className={`sidebar-item ${isActive ? 'active' : ''}`}>
//         {icon}
//         <span>{label}</span>
//     </div>
// );

// const Sidebar: React.FC = () => {
//     // Define the logo path based on your prompt's instruction
//     const logoPath = "/assets/logo/research_repository_logo.png"; 

//     return (
//         <div className="sidebar-container">
//             <div className="logo-section">
//                 <img 
//                     src="/logo.png"
//                     alt="Research Repository Logo" 
//                     className="logo-img" 
//                 />
//                 <div className="logo-text">
//                     RESEARCH REPOSITORY & SCIENTIST DIRECTORY FOR KP
//                     <br />
//                     {/* <span className="subtitle">SCIENTIST DIRECTORY FOR KP</span> */}
//                 </div>
//             </div>
//             <div className="menu-section">
//                 <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" isActive={true} />
//                 <SidebarItem icon={<FaUsers />} label="User Management" isActive={false} />
//                 <SidebarItem icon={<FaBook />} label="Publications" isActive={false} />
//                 <SidebarItem icon={<FaChartBar />} label="Analytics" isActive={false} />
//                 <SidebarItem icon={<FaCommentDots />} label="Feedback / Report" isActive={false} />
//                 <SidebarItem icon={<FaCog />} label="Settings" isActive={false} />
//                 <SidebarItem icon={<FaQuestionCircle />} label="Help/Support" isActive={false} />
//                 <SidebarItem icon={<FaSignOutAlt />} label="Logout" isActive={false} />
//             </div>
//         </div>
//     );
// };

// // ----------------------------------------------------------------------
// // 2. Header Component
// // ----------------------------------------------------------------------

// const Header: React.FC = () => {
//     return (
//         <header className="dashboard-header">
//             <h2>Dashboard</h2>
//             <div className="header-user-info">
//                 <FaBell className="icon-bell" />
//                 <span className="user-name">Admin</span>
//                 <img 
//                     src="/admin_profile.jpg" // Placeholder profile image path
//                     alt="Admin Profile" 
//                     className="profile-img" 
//                 />
//             </div>
//         </header>
//     );
// };

// // ----------------------------------------------------------------------
// // 3. StatsCards Component
// // ----------------------------------------------------------------------

// interface StatCardProps {
//     value: number | string;
//     label: string;
//     type: 'publications' | 'pending' | 'downloads' | 'authors' | 'new_users' | 'reports';
// }

// const StatCard: React.FC<StatCardProps> = ({ value, label, type }) => {
//     let icon: React.ReactElement;
//     let className: string = 'stat-card';

//     // Assigning icons based on type (optional, but good practice)
//     switch (type) {
//         case 'publications': icon = <FaBook />; break;
//         case 'pending': icon = <FaUserEdit />; className += ' pending'; break;
//         case 'downloads': icon = <FaDownload />; break;
//         case 'authors': icon = <FaUsers />; break;
//         case 'new_users': icon = <FaUserEdit />; break;
//         case 'reports': icon = <FaExclamationTriangle />; className += ' reports'; break;
//         default: icon = <FaTachometerAlt />;
//     }

//     return (
//         <div className={className}>
//             <div className="stat-value">{value.toLocaleString()}</div>
//             <div className="stat-label">{label}</div>
//         </div>
//     );
// };

// const StatsCards: React.FC = () => (
//     <div className="stats-grid">
//         <StatCard value={mockStats.totalPublications} label="Total Publications" type="publications" />
//         <StatCard value={mockStats.pendingApprovals} label="Pending Approvals" type="pending" />
//         <StatCard value={mockStats.totalDownloads} label="Total Downloads" type="downloads" />
//         <StatCard value={mockStats.activeAuthors} label="Active Authors" type="authors" />
//         <StatCard value={mockStats.newUserToday} label="New User Today" type="new_users" />
//         <StatCard value={mockStats.reportsIssues} label="Reports/Issues" type="reports" />
//     </div>
// );

// // ----------------------------------------------------------------------
// // 4. ChartsAndTable Components
// // ----------------------------------------------------------------------

// // --- Placeholder for the Bar Chart ---
// const PublicationsChart: React.FC = () => (
//     <div className="chart-box chart-bar-container">
//         <h4>Publications per Month</h4>
//         {/* Placeholder for a charting library component (e.g., Nivo, Chart.js) */}
//         <div className="chart-placeholder">
//             {/*  */}
//             <p>Bar Chart Visualization placeholder (Jan-July data)</p>
//             <div className="bar-chart-mock">
//                 <div style={{ height: '70%' }}>Jan</div>
//                 <div style={{ height: '90%' }}>Feb</div>
//                 <div style={{ height: '60%' }}>Mar</div>
//                 <div style={{ height: '95%' }}>Apr</div>
//                 <div style={{ height: '100%' }}>May</div>
//                 <div style={{ height: '35%' }}>Jun</div>
//                 <div style={{ height: '50%' }}>Jul</div>
//             </div>
//         </div>
//     </div>
// );

// // --- Placeholder for the Donut Chart ---
// const CategoriesChart: React.FC = () => (
//     <div className="chart-box chart-donut-container">
//         <h4>Top Categories</h4>
//         {/* Placeholder for a charting library component (e.g., Nivo, Chart.js) */}
//         <div className="chart-placeholder donut-content">
//             {/*  */}
//             <div className="donut-chart-mock"></div>
//             <div className="category-list">
//                 <p><span className="dot info-tech"></span> Information Technology</p>
//                 <p><span className="dot medicine"></span> Medicine</p>
//                 <p><span className="dot env-science"></span> Environmental Science</p>
//                 {/* Add more categories */}
//             </div>
//         </div>
//     </div>
// );

// // --- Recent Publications Table ---
// const RecentPublicationsTable: React.FC = () => (
//     <div className="table-box">
//         <table className="publications-table">
//             <thead>
//                 <tr>
//                     <th>Publication Tile</th>
//                     <th>Author</th>
//                     <th>Status</th>
//                     <th>Date</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {mockTableData.map((item, index) => (
//                     <tr key={index}>
//                         <td>{item.title}</td>
//                         <td>{item.author}</td>
//                         <td className={`status-${item.status.toLowerCase()}`}>{item.status}</td>
//                         <td>{item.date}</td>
//                     </tr>
//                 ))}
//             </tbody>
//         </table>
//     </div>
// );

// // ----------------------------------------------------------------------
// // 5. Main Dashboard Layout Component
// // ----------------------------------------------------------------------

// const DashboardPage: React.FC = () => {
//     return (
//         <div className="app-layout">
//             <Sidebar />
//             <main className="main-content">
//                 <Header />
//                 <div className="dashboard-body">
//                     <div className="welcome-section">
//                         <h1>Welcome back, **Admin**</h1>
//                         <p>Overview of repository activity and performance</p>
//                     </div>

//                     <StatsCards />

//                     <div className="charts-section">
//                         <PublicationsChart />
//                         <CategoriesChart />
//                     </div>

//                     <div className="table-section">
//                         <RecentPublicationsTable />
//                     </div>
//                 </div>
//             </main>
//         </div>
//     );
// };

// export default DashboardPage;






// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./dashboard.css"; // Custom styling for colors, sidebar active state, etc.

// const AdminDashboard: React.FC = () => {
//   useEffect(() => {
//     // Dynamically load Bootstrap JS (for dropdown/collapse) and Chart.js
//     const loadScript = (src: string, onLoad?: () => void) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.async = true;
//       if (onLoad) script.onload = onLoad;
//       document.body.appendChild(script);
//       return script;
//     };

//     const bootstrapScript = loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//     );
//     const chartScript = loadScript(
//       "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",
//       () => {
//         // @ts-ignore
//         const Chart = window.Chart;
//         if (Chart) {
//           const ctxBar = document.getElementById(
//             "barChart"
//           ) as HTMLCanvasElement;
//           const ctxDonut = document.getElementById(
//             "donutChart"
//           ) as HTMLCanvasElement;

//           // Bar Chart: Publications per Month (Data adjusted for visual match)
//           new Chart(ctxBar, {
//             type: "bar",
//             data: {
//               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//               datasets: [
//                 {
//                   label: "Publications",
//                   data: [80, 100, 60, 95, 120, 75, 55],
//                   backgroundColor: "#2E7BD6", // Primary blue color
//                   borderRadius: 6,
//                 },
//               ],
//             },
//             options: {
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 y: { beginAtZero: true, max: 120 },
//                 x: { grid: { display: false } },
//               },
//               plugins: { legend: { display: false } },
//             },
//           });

//           // Donut Chart: Top Categories (Colors matched to the visual)
//           new Chart(ctxDonut, {
//             type: "doughnut",
//             data: {
//               labels: ["Information Technology", "Medicine", "Environmental Science", "Other"],
//               datasets: [
//                 {
//                   data: [40, 30, 20, 10], 
//                   backgroundColor: ["#007BFF", "#1FB48A", "#F4A261", "#E9ECEF"], // Blue, Green, Orange, Grey
//                   hoverOffset: 4,
//                 },
//               ],
//             },
//             options: {
//               responsive: true,
//               maintainAspectRatio: false,
//               cutout: "80%",
//               plugins: { legend: { display: false } },
//             },
//           });
//         }
//       }
//     );

//     return () => {
//       document.body.removeChild(bootstrapScript);
//       document.body.removeChild(chartScript);
//     };
//   }, []);

//   // --- Consistent URL Definitions ---
//   const repoLogoUrl = "/logo.png";// Consistent placeholder for logo
  
//    const user = { name: "Admin" };
//   const adminAvatarUrl = "/admin_profile.jpg"; // Consistent placeholder for admin avatar

//   // User data

//   // List of sidebar links based on the image
//   const sidebarLinks = [
//     { icon: "bi-grid-fill", label: "Dashboard", active: true },
//     { icon: "bi-people-fill", label: "User Management", active: false },
//     { icon: "bi-journal-text", label: "Publications", active: false },
//     { icon: "bi-bar-chart-line-fill", label: "Analytics", active: false },
//     { icon: "bi-chat-left-text-fill", label: "Feedback / Report", active: false },
//     { icon: "bi-gear-fill", label: "Settings", active: false },
//     { icon: "bi-question-circle-fill", label: "Help/Support", active: false },
//     { icon: "bi-box-arrow-right", label: "Logout", active: false },
//   ];

//   // List of stats cards
//   const stats = [
//     { label: "Total Publications", number: 2430, color: "#2E7BD6" },
//     { label: "Pending Approvals", number: 32, color: "#FFC107" },
//     { label: "Total Downloads", number: 12480, color: "#1FB48A" },
//     { label: "Active Authors", number: 156, color: "#2E7BD6" },
//     { label: "New User Today", number: 25, color: "#F4A261" },
//     { label: "Reports/Issues", number: 4, color: "#DC3545" },
//   ];

//   // Table data for recent publications
//   const recentPublications = [
//     { title: "AI In Healthcare", author: "Dr. Noor", status: "Pending", date: "Oct 13, 2025" },
//     { title: "Climate Policy Trends", author: "Dr. Ahmed", status: "Approved", date: "Oct 12, 2025" },
//     // Add more rows if needed
//   ];

//   return (
//     <div className="d-flex min-vh-100">
//       {/* ===== Sidebar (Left Panel) - Uses sidebar-bg for #066187 and #FFFFFF text ===== */}
//       <nav id="sidebar" className="sidebar-bg text-white p-3" style={{ width: "250px" }}>
//         <div className="text-center mb-4 border-bottom pb-3">
//           {/* Logo/Title Area */}
//           <div className="d-flex align-items-center justify-content-center mb-2">
            
//             <img 
//                 src={repoLogoUrl} // <--- CORRECTED: Using repoLogoUrl
//                 alt="Logo" 
//                 className="me-2" 
//                 style={{ height: '30px', marginRight: '5px' }} 
//             />
            
//             {/* The icon is kept as an alternative/fallback design */}
//             {/* <i className="bi bi-box-fill me-2 fs-5"></i> */}
            
//             <div className="fw-bold fs-6 text-start">
//               RESEARCH REPOSITORY
//               <br />
//               {/* Added custom styling for text to ensure white color is applied */}
//               <small className="fs-8 text-uppercase" style={{ color: '#FFFFFF99' }}>&amp; SCIENTIST DIRECTORY</small>
//             </div>
//           </div>
//         </div>

//         <ul className="list-unstyled sidebar-menu">
//           {sidebarLinks.slice(0, 7).map((link, i) => (
//             <li key={i} className="mb-1">
//               <a
//                 href="#"
//                 className={`d-flex align-items-center p-2 rounded text-decoration-none ${
//                   link.active ? "active-link" : ""
//                 }`}
//               >
//                 <i className={`bi ${link.icon} me-3`}></i>
//                 {link.label}
//               </a>
//             </li>
//           ))}
//           {/* Logout Separator and Link */}
//           <li className="mt-4 pt-3 border-top border-secondary">
//             <a
//               href="#"
//               className="d-flex align-items-center p-2 rounded text-decoration-none"
//             >
//               <i className="bi bi-box-arrow-right me-3"></i>
//               Logout
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* ===== Page Content (Right Panel) ===== */}
//       <div className="flex-grow-1 bg-light">
//         {/* ===== Navbar (Header) ===== */}
//         <nav className="navbar bg-white shadow-sm px-4">
//           <div className="container-fluid p-0">
//             <h5 className="mb-0 fw-bold">Dashboard</h5>
//             <div className="d-flex align-items-center">
//               <i
//                 className="bi bi-bell fs-5 me-3 text-secondary"
//                 style={{ cursor: "pointer" }}
//               ></i>
//               <div className="d-flex align-items-center">
//                 <img
//                   src={adminAvatarUrl} // <--- CORRECTED: Using adminAvatarUrl
//                   alt="Admin"
//                   className="rounded-circle me-2"
//                   style={{ width: "38px", height: "38px" }}
//                 />
//                 <span className="me-2 fw-semibold text-dark">{user.name}</span>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* ===== Dashboard Content (Main Area) ===== */}
//         <main className="p-4">
//           <h4 className="fw-normal mb-1">Welcome back, {user.name}</h4>
//           <p className="text-muted mb-4 small">
//             Overview of repository activity and performance
//           </p>

//           {/* === Stats Cards (3 per row) === */}
//           <div className="row g-3 mb-4">
//             {stats.slice(0, 3).map((stat, i) => ( // First row: 3 cards
//               <div className="col-lg-4 col-md-6" key={i}>
//                 <div className="card text-center p-3 shadow-sm border-0 h-100">
//                   <h4 className="fw-bold mb-0 text-dark">{stat.number.toLocaleString()}</h4>
//                   <small className="text-muted">{stat.label}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="row g-3 mb-4">
//             {stats.slice(3).map((stat, i) => ( // Second row: Remaining 3 cards
//               <div className="col-lg-4 col-md-6" key={i}>
//                 <div className="card text-center p-3 shadow-sm border-0 h-100">
//                   <h4 className="fw-bold mb-0 text-dark">{stat.number.toLocaleString()}</h4>
//                   <small className="text-muted">{stat.label}</small>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* === Charts and Categories (Aligned horizontally) === */}
//           <div className="row g-4 mb-4 align-items-stretch">
//             <div className="col-lg-7 d-flex">
//               <div className="card p-3 shadow-sm border-0 w-100">
//                 <h6 className="card-title fw-semibold mb-3">Publications per Month</h6>
//                 <div style={{ height: "200px" }}>
//                   <canvas id="barChart"></canvas>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 d-flex">
//               <div className="card p-3 shadow-sm border-0 w-100 d-flex flex-column">
//                 <h6 className="card-title fw-semibold mb-3">Top Categories</h6>
//                 <div className="d-flex justify-content-between align-items-center flex-grow-1">
//                     <div style={{ maxWidth: "50%", height: "100%" }}>
//                         <canvas id="donutChart"></canvas>
//                     </div>
//                     <div className="category-labels ps-3">
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#007BFF' }}></span> Information Technology
//                         </p>
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#1FB48A' }}></span> Medicine
//                         </p>
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#F4A261' }}></span> Environmental Science
//                         </p>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* === Recent Publications Table (Corrected with Title) === */}
//           <h5 className="fw-bold mt-4 mb-3">Most Viewed Papers</h5>
//           <div className="card p-0 shadow-sm border-0">
//             <div className="table-responsive">
//               <table className="table table-striped table-hover mb-0">
//                 <thead>
//                   <tr>
//                     <th className="fw-bold border-top-0 py-3">Publication Title</th>
//                     <th className="fw-bold border-top-0 py-3">Author</th>
//                     <th className="fw-bold border-top-0 py-3">Status</th>
//                     <th className="fw-bold border-top-0 py-3">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentPublications.map((pub, i) => (
//                     <tr key={i}>
//                       <td className="py-2">{pub.title}</td>
//                       <td className="py-2">{pub.author}</td>
//                       <td className="py-2">
//                         <span className={`badge text-white ${pub.status === 'Approved' ? 'bg-success' : 'bg-warning'}`}>
//                             {pub.status}
//                         </span>
//                       </td>
//                       <td className="py-2">{pub.date}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



// import React, { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import "./dashboard.css"; // Custom styling for colors, sidebar active state, etc.

// const AdminDashboard: React.FC = () => {
//   useEffect(() => {
//     // Dynamically load Bootstrap JS (for dropdown/collapse) and Chart.js
//     const loadScript = (src: string, onLoad?: () => void) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.async = true;
//       if (onLoad) script.onload = onLoad;
//       document.body.appendChild(script);
//       return script;
//     };

//     const bootstrapScript = loadScript(
//       "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
//     );
//     const chartScript = loadScript(
//       "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",
//       () => {
//         // @ts-ignore
//         const Chart = window.Chart;
//         if (Chart) {
//           const ctxBar = document.getElementById(
//             "barChart"
//           ) as HTMLCanvasElement;
//           const ctxDonut = document.getElementById(
//             "donutChart"
//           ) as HTMLCanvasElement;

//           // Bar Chart: Publications per Month (Data adjusted for visual match)
//           new Chart(ctxBar, {
//             type: "bar",
//             data: {
//               labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
//               datasets: [
//                 {
//                   label: "Publications",
//                   data: [80, 100, 60, 95, 120, 75, 55],
//                   backgroundColor: "#2E7BD6", // Primary blue color
//                   borderRadius: 6,
//                 },
//               ],
//             },
//             options: {
//               responsive: true,
//               maintainAspectRatio: false,
//               scales: {
//                 y: { beginAtZero: true, max: 120 },
//                 x: { grid: { display: false } },
//               },
//               plugins: { legend: { display: false } },
//             },
//           });

//           // Donut Chart: Top Categories (Colors matched to the visual)
//           new Chart(ctxDonut, {
//             type: "doughnut",
//             data: {
//               labels: ["Information Technology", "Medicine", "Environmental Science", "Other"],
//               datasets: [
//                 {
//                   data: [40, 30, 20, 10], 
//                   backgroundColor: ["#007BFF", "#1FB48A", "#F4A261", "#E9ECEF"], // Blue, Green, Orange, Grey
//                   hoverOffset: 4,
//                 },
//               ],
//             },
//             options: {
//               responsive: true,
//               maintainAspectRatio: false,
//               cutout: "80%",
//               plugins: { legend: { display: false } },
//             },
//           });
//         }
//       }
//     );

//     return () => {
//       document.body.removeChild(bootstrapScript);
//       document.body.removeChild(chartScript);
//     };
//   }, []);

//   // --- Consistent URL Definitions ---
//   // CORRECTED: Using /logo.png as specified
//   const repoLogoUrl = "/logo.png"; 
//   const user = { name: "Admin" };
//   // CORRECTED: Using /admin_profile.jpg as specified
//   const adminAvatarUrl = "/admin_profile.jpg"; 

//   // List of sidebar links based on the image
//   const sidebarLinks = [
//     { icon: "bi-grid-fill", label: "Dashboard", active: true },
//     { icon: "bi-people-fill", label: "User Management", active: false },
//     { icon: "bi-journal-text", label: "Publications", active: false },
//     { icon: "bi-bar-chart-line-fill", label: "Analytics", active: false },
//     { icon: "bi-chat-left-text-fill", label: "Feedback / Report", active: false },
//     { icon: "bi-gear-fill", label: "Settings", active: false },
//     { icon: "bi-question-circle-fill", label: "Help/Support", active: false },
//     { icon: "bi-box-arrow-right", label: "Logout", active: false },
//   ];

//   // List of stats cards
//   const stats = [
//     { label: "Total Publications", number: 2430, color: "#2E7BD6" },
//     { label: "Pending Approvals", number: 32, color: "#FFC107" },
//     { label: "Total Downloads", number: 12480, color: "#1FB48A" },
//     { label: "Active Authors", number: 156, color: "#2E7BD6" },
//     { label: "New User Today", number: 25, color: "#F4A261" },
//     { label: "Reports/Issues", number: 4, color: "#DC3545" },
//   ];

//   // Table data for recent publications
//   const recentPublications = [
//     { title: "AI In Healthcare", author: "Dr. Noor", status: "Pending", date: "Oct 13, 2025" },
//     { title: "Climate Policy Trends", author: "Dr. Ahmed", status: "Approved", date: "Oct 12, 2025" },
//     // Add more rows if needed
//   ];

//   return (
//     <div className="d-flex min-vh-100">
//       {/* ===== Sidebar (Left Panel) - Uses sidebar-bg for #066187 and #FFFFFF text ===== */}
//       <nav id="sidebar" className="sidebar-bg text-white p-3" style={{ width: "250px" }}>
//         <div className="text-center mb-4 border-bottom pb-3">
//           {/* Logo/Title Area */}
//           <div className="d-flex align-items-center justify-content-center mb-2">
            
//             <img 
//                 src={repoLogoUrl} // <--- Uses the local path /logo.png
//                 alt="Logo" 
//                 className="me-2" 
//                 style={{ height: '30px', marginRight: '5px', filter: 'invert(1) brightness(0) saturate(100) invert(100%)' }} // Added filter to make the black logo appear white against the dark sidebar
//             />
            
//             <div className="fw-bold fs-6 text-start">
//               RESEARCH REPOSITORY & SCIENTIST DIRECTORY for KP
//               <br />
//               {/* Added custom styling for text to ensure white color is applied */}
//               {/* <small className="fs-8 text-uppercase" style={{ color: '#FFFFFF99' }}>&amp; SCIENTIST DIRECTORY</small> */}
//             </div>
//           </div>
//         </div>

//         <ul className="list-unstyled sidebar-menu">
//           {sidebarLinks.slice(0, 7).map((link, i) => (
//             <li key={i} className="mb-1">
//               <a
//                 href="#"
//                 className={`d-flex align-items-center p-2 rounded text-decoration-none ${
//                   link.active ? "active-link" : ""
//                 }`}
//               >
//                 <i className={`bi ${link.icon} me-3`}></i>
//                 {link.label}
//               </a>
//             </li>
//           ))}
//           {/* Logout Separator and Link */}
//           <li className="mt-4 pt-3 border-top border-secondary">
//             <a
//               href="#"
//               className="d-flex align-items-center p-2 rounded text-decoration-none"
//             >
//               <i className="bi bi-box-arrow-right me-3"></i>
//               Logout
//             </a>
//           </li>
//         </ul>
//       </nav>

//       {/* ===== Page Content (Right Panel) ===== */}
//       <div className="flex-grow-1 bg-light">
//         {/* ===== Navbar (Header) ===== */}
//         <nav className="navbar bg-white shadow-sm px-4">
//           <div className="container-fluid p-0">
//             <h5 className="mb-0 fw-bold">Dashboard</h5>
//             <div className="d-flex align-items-center">
//               <i
//                 className="bi bi-bell fs-5 me-3 text-secondary"
//                 style={{ cursor: "pointer" }}
//               ></i>
//               <div className="d-flex align-items-center">
//                 <img
//                   src={adminAvatarUrl} // <--- Uses the local path /admin_profile.jpg
//                   alt="Admin"
//                   className="rounded-circle me-2"
//                   style={{ width: "38px", height: "38px" }}
//                 />
//                 <span className="me-2 fw-semibold text-dark">{user.name}</span>
//               </div>
//             </div>
//           </div>
//         </nav>

//         {/* ===== Dashboard Content (Main Area) ===== */}
//         <main className="p-4">
//           <h4 className="fw-normal mb-1">Welcome back, {user.name}</h4>
//           <p className="text-muted mb-4 small">
//             Overview of repository activity and performance
//           </p>

//           {/* === Stats Cards (3 per row) === */}
//           <div className="row g-3 mb-4">
//             {stats.slice(0, 3).map((stat, i) => ( // First row: 3 cards
//               <div className="col-lg-4 col-md-6" key={i}>
//                 <div className="card text-center p-3 shadow-sm border-0 h-100">
//                   <h4 className="fw-bold mb-0 text-dark">{stat.number.toLocaleString()}</h4>
//                   <small className="text-muted">{stat.label}</small>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="row g-3 mb-4">
//             {stats.slice(3).map((stat, i) => ( // Second row: Remaining 3 cards
//               <div className="col-lg-4 col-md-6" key={i}>
//                 <div className="card text-center p-3 shadow-sm border-0 h-100">
//                   <h4 className="fw-bold mb-0 text-dark">{stat.number.toLocaleString()}</h4>
//                   <small className="text-muted">{stat.label}</small>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* === Charts and Categories (Aligned horizontally) === */}
//           <div className="row g-4 mb-4 align-items-stretch">
//             <div className="col-lg-7 d-flex">
//               <div className="card p-3 shadow-sm border-0 w-100">
//                 <h6 className="card-title fw-semibold mb-3">Publications per Month</h6>
//                 <div style={{ height: "200px" }}>
//                   <canvas id="barChart"></canvas>
//                 </div>
//               </div>
//             </div>
//             <div className="col-lg-5 d-flex">
//               <div className="card p-3 shadow-sm border-0 w-100 d-flex flex-column">
//                 <h6 className="card-title fw-semibold mb-3">Top Categories</h6>
//                 <div className="d-flex justify-content-between align-items-center flex-grow-1">
//                     <div style={{ maxWidth: "50%", height: "100%" }}>
//                         <canvas id="donutChart"></canvas>
//                     </div>
//                     <div className="category-labels ps-3">
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#007BFF' }}></span> Information Technology
//                         </p>
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#1FB48A' }}></span> Medicine
//                         </p>
//                         <p className="mb-1 fw-normal d-flex align-items-center">
//                             <span className="legend-dot me-2" style={{ backgroundColor: '#F4A261' }}></span> Environmental Science
//                         </p>
//                     </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* === Recent Publications Table (Corrected with Title) === */}
//           <h5 className="fw-bold mt-4 mb-3">Most Viewed Papers</h5>
//           <div className="card p-0 shadow-sm border-0">
//             <div className="table-responsive">
//               <table className="table table-striped table-hover mb-0">
//                 <thead>
//                   <tr>
//                     <th className="fw-bold border-top-0 py-3">Publication Title</th>
//                     <th className="fw-bold border-top-0 py-3">Author</th>
//                     <th className="fw-bold border-top-0 py-3">Status</th>
//                     <th className="fw-bold border-top-0 py-3">Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {recentPublications.map((pub, i) => (
//                     <tr key={i}>
//                       <td className="py-2">{pub.title}</td>
//                       <td className="py-2">{pub.author}</td>
//                       <td className="py-2">
//                         <span className={`badge text-white ${pub.status === 'Approved' ? 'bg-success' : 'bg-warning'}`}>
//                             {pub.status}
//                         </span>
//                       </td>
//                       <td className="py-2">{pub.date}</td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;



import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboard.css";

const AdminDashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loadScript = (src: string, onLoad?: () => void) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      if (onLoad) script.onload = onLoad;
      document.body.appendChild(script);
      return script;
    };

    const bootstrapScript = loadScript(
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
    );
    const chartScript = loadScript(
      "https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js",
      () => {
        // @ts-ignore
        const Chart = window.Chart;
        if (Chart) {
          const ctxBar = document.getElementById("barChart") as HTMLCanvasElement;
          const ctxDonut = document.getElementById("donutChart") as HTMLCanvasElement;

          new Chart(ctxBar, {
            type: "bar",
            data: {
              labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
              datasets: [
                {
                  label: "Publications",
                  data: [80, 100, 60, 95, 120, 75, 55],
                  backgroundColor: "#2E7BD6",
                  borderRadius: 6,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              scales: {
                y: { beginAtZero: true, max: 120 },
                x: { grid: { display: false } },
              },
              plugins: { legend: { display: false } },
            },
          });

          new Chart(ctxDonut, {
            type: "doughnut",
            data: {
              labels: [
                "Information Technology",
                "Medicine",
                "Environmental Science",
                "Other",
              ],
              datasets: [
                {
                  data: [40, 30, 20, 10],
                  backgroundColor: ["#007BFF", "#1FB48A", "#F4A261", "#E9ECEF"],
                  hoverOffset: 4,
                },
              ],
            },
            options: {
              responsive: true,
              maintainAspectRatio: false,
              cutout: "80%",
              plugins: { legend: { display: false } },
            },
          });
        }
      }
    );

    return () => {
      document.body.removeChild(bootstrapScript);
      document.body.removeChild(chartScript);
    };
  }, []);

  const repoLogoUrl = "/logo.png";
  const adminAvatarUrl = "/admin_profile.jpg";
  const user = { name: "Admin" };

  const stats = [
    { label: "Total Publications", number: 2430 },
    { label: "Pending Approvals", number: 32 },
    { label: "Total Downloads", number: 12480 },
    { label: "Active Authors", number: 156 },
    { label: "New User Today", number: 25 },
    { label: "Reports/Issues", number: 4 },
  ];

  const recentPublications = [
    {
      title: "AI In Healthcare",
      author: "Dr. Noor",
      status: "Pending",
      date: "Oct 13, 2025",
    },
    {
      title: "Climate Policy Trends",
      author: "Dr. Ahmed",
      status: "Approved",
      date: "Oct 12, 2025",
    },
  ];

  return (
    <div className="d-flex min-vh-100">
      {/* ===== Sidebar ===== */}
      <nav
        id="sidebar"
        className="sidebar-bg text-white p-3"
        style={{ width: "250px" }}
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
                filter:
                  "invert(1) brightness(0) saturate(100) invert(100%)",
              }}
            />
            <div className="fw-bold fs-6 text-start">
              RESEARCH REPOSITORY & SCIENTIST DIRECTORY for KP
            </div>
          </div>
        </div>

        <ul className="list-unstyled sidebar-menu">
          {/* Dashboard */}
          <li className="mb-1">
            <button
              onClick={() => navigate("/admin")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-grid-fill me-3"></i> Dashboard
            </button>
          </li>

          {/* ✅ User Management link */}
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
            {/* <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none text-white">
              <i className="bi bi-journal-text me-3"></i> Publications
            </a> */}

             <button
              onClick={() => navigate("/admin/publication")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-journal-text me-3"></i> Publication
            </button>
          </li>
          <li className="mb-1">
            {/* <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none text-white">
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </a> */}
            <button
              onClick={() => navigate("/admin/analytics")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-bar-chart-line-fill me-3"></i> Analytics
            </button>
          </li>
          <li className="mb-1">
            {/* <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none text-white">
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </a> */}
            <button
              onClick={() => navigate("/admin/feedback")}
              className="btn d-flex align-items-center p-2 text-white w-100 text-start"
              style={{ background: "none", border: "none" }}
            >
              <i className="bi bi-chat-left-text-fill me-3"></i> Feedback / Report
            </button>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none text-white">
              <i className="bi bi-gear-fill me-3"></i> Settings
            </a>
          </li>
          <li className="mb-1">
            <a href="#" className="d-flex align-items-center p-2 rounded text-decoration-none text-white">
              <i className="bi bi-question-circle-fill me-3"></i> Help/Support
            </a>
          </li>

          {/* Logout */}
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
            <h5 className="mb-0 fw-bold">Dashboard</h5>
            <div className="d-flex align-items-center">
              <i className="bi bi-bell fs-5 me-3 text-secondary"></i>
              <div className="d-flex align-items-center">
                <img
                  src={adminAvatarUrl}
                  alt="Admin"
                  className="rounded-circle me-2"
                  style={{ width: "38px", height: "38px" }}
                />
                <span className="fw-semibold text-dark">{user.name}</span>
              </div>
            </div>
          </div>
        </nav>

        {/* Dashboard Content */}
        <main className="p-4">
          <h4 className="fw-normal mb-1">Welcome back, {user.name}</h4>
          <p className="text-muted mb-4 small">
            Overview of repository activity and performance
          </p>

          <div className="row g-3 mb-4">
            {stats.slice(0, 3).map((stat, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card text-center p-3 shadow-sm border-0 h-100">
                  <h4 className="fw-bold mb-0 text-dark">
                    {stat.number.toLocaleString()}
                  </h4>
                  <small className="text-muted">{stat.label}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-3 mb-4">
            {stats.slice(3).map((stat, i) => (
              <div className="col-lg-4 col-md-6" key={i}>
                <div className="card text-center p-3 shadow-sm border-0 h-100">
                  <h4 className="fw-bold mb-0 text-dark">
                    {stat.number.toLocaleString()}
                  </h4>
                  <small className="text-muted">{stat.label}</small>
                </div>
              </div>
            ))}
          </div>

          <div className="row g-4 mb-4 align-items-stretch">
            <div className="col-lg-7 d-flex">
              <div className="card p-3 shadow-sm border-0 w-100">
                <h6 className="card-title fw-semibold mb-3">
                  Publications per Month
                </h6>
                <div style={{ height: "200px" }}>
                  <canvas id="barChart"></canvas>
                </div>
              </div>
            </div>
            <div className="col-lg-5 d-flex">
              <div className="card p-3 shadow-sm border-0 w-100">
                <h6 className="card-title fw-semibold mb-3">Top Categories</h6>
                <div className="d-flex justify-content-between align-items-center">
                  <div style={{ maxWidth: "50%", height: "100%" }}>
                    <canvas id="donutChart"></canvas>
                  </div>
                  <div className="category-labels ps-3">
                    <p className="mb-1">
                      <span
                        className="legend-dot me-2"
                        style={{ backgroundColor: "#007BFF" }}
                      ></span>
                      Information Technology
                    </p>
                    <p className="mb-1">
                      <span
                        className="legend-dot me-2"
                        style={{ backgroundColor: "#1FB48A" }}
                      ></span>
                      Medicine
                    </p>
                    <p className="mb-1">
                      <span
                        className="legend-dot me-2"
                        style={{ backgroundColor: "#F4A261" }}
                      ></span>
                      Environmental Science
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Publications */}
          <h5 className="fw-bold mt-4 mb-3">Most Viewed Papers</h5>
          <div className="card p-0 shadow-sm border-0">
            <div className="table-responsive">
              <table className="table table-striped table-hover mb-0">
                <thead>
                  <tr>
                    <th>Publication Title</th>
                    <th>Author</th>
                    <th>Status</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentPublications.map((pub, i) => (
                    <tr key={i}>
                      <td>{pub.title}</td>
                      <td>{pub.author}</td>
                      <td>
                        <span
                          className={`badge text-white ${
                            pub.status === "Approved" ? "bg-success" : "bg-warning"
                          }`}
                        >
                          {pub.status}
                        </span>
                      </td>
                      <td>{pub.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
