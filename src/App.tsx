// import React from 'react';
// import logo from './logo.svg';
// // import './App.css';

// import LandingPage from './pages/landing-page';


// function App() {
//   return (
//     <div>
//       <LandingPage/>
//     </div>
//   );
// }

// export default App;


// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse"; // ✅ Added Browse Publications page

// function App() {
//   return (
//     <Routes>
//       {/* Home Page */}
//       <Route path="/" element={<LandingPage />} />

//       {/* Browse Publications Page */}
//       <Route path="/browse" element={<Browse />} />

//       {/* About Us Page */}
//       <Route path="/about" element={<About />} />

//       {/* Contact Page */}
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse";
// import Index from "./pages/featured-publication"; // ✅ Correct path (matches your folder)

// function App() {
//   return (
//     <Routes>
//       {/* Home / Landing Page */}
//       <Route path="/" element={<LandingPage />} />

//       {/* Browse Publications Page */}
//       <Route path="/browse" element={<Browse />} />

//       {/* Featured Publications (View Details) Page */}
//       <Route path="/featured" element={<Index />} />

//       {/* About Us Page */}
//       <Route path="/about" element={<About />} />

//       {/* Contact Page */}
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;



// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse";
// import Index from "./pages/featured-publication";
// import KeyFeaturePage from "./pages/key-featured"; // ✅ Key Features Page
// import FieldPage from "./pages/field"; // ✅ Explore By Field Page

// function App() {
//   return (
//     <Routes>
//       {/* 🏠 Home / Landing Page */}
//       <Route path="/" element={<LandingPage />} />

//       {/* 🔍 Browse Publications */}
//       <Route path="/browse" element={<Browse />} />

//       {/* 🌟 Featured Publications */}
//       <Route path="/featured" element={<Index />} />

//       {/* ⚙️ Key Features */}
//       <Route path="/key-features" element={<KeyFeaturePage />} />

//       {/* 🧭 Explore By Field (Full Page View) */}
//       <Route path="/explore-fields" element={<FieldPage />} />

//       {/* ℹ️ About Us */}
//       <Route path="/about" element={<About />} />

//       {/* ✉️ Contact */}
//       <Route path="/contact" element={<Contact />} />
//     </Routes>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // 🧾 Page Imports
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse";
// import Index from "./pages/featured-publication";
// import KeyFeaturePage from "./pages/key-featured";
// import FieldPage from "./pages/field";

// // 🔐 Auth & Dashboards
// import SignUp from "./pages/sign-up";  // ✅ correct
//              // ✅ Sign Up
// import Login from "./pages/login";               // ✅ Login
// import AdminDashboard from "./pages/admin-dashboard";     // 👑 Admin Dashboard
// import ProfessorDashboard from "./pages/author-dashboard"; // 🧑‍🏫 Publisher Dashboard
// import UserDashboard from "./pages/user-dashboard";       // 👤 User Dashboard

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* 🏠 Home */}
//         <Route path="/" element={<LandingPage />} />

//         {/* 🔍 Browse */}
//         <Route path="/browse" element={<Browse />} />

//         {/* 🌟 Featured Publications */}
//         <Route path="/featured" element={<Index />} />

//         {/* ⚙️ Key Features */}
//         <Route path="/key-features" element={<KeyFeaturePage />} />

//         {/* 🧭 Explore by Field */}
//         <Route path="/explore-fields" element={<FieldPage />} />

//         {/* ℹ️ About */}
//         <Route path="/about" element={<About />} />

//         {/* ✉️ Contact */}
//         <Route path="/contact" element={<Contact />} />

//         {/* 📝 Sign Up */}
//         <Route path="/signup" element={<SignUp />} />

//         {/* 🔐 Login */}
//         <Route path="/login" element={<Login />} />

//         {/* 👑 Admin Dashboard */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         {/* 🧑‍🏫 Publisher Dashboard */}
//         <Route path="/publisher-dashboard" element={<ProfessorDashboard />} />

//         {/* 👤 User Dashboard */}
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;



// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// // 🏠 Main Pages
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse";
// import FeaturedPublication from "./pages/featured-publication";
// import KeyFeaturePage from "./pages/key-featured";
// import FieldPage from "./pages/field";

// // 🔐 Authentication Pages
// import SignUp from "./pages/sign-up";
// import Login from "./pages/login";

// // 👑 Dashboards
// import AdminDashboard from "./pages/admin-dashboard";
// import AuthorDashboard from "./pages/author-dashboard"; // renamed for consistency
// import UserDashboard from "./pages/user-dashboard";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         {/* 🏠 Landing Page */}
//         <Route path="/" element={<LandingPage />} />

//         {/* 🔍 Browse */}
//         <Route path="/browse" element={<Browse />} />

//         {/* 🌟 Featured Publications */}
//         <Route path="/featured" element={<FeaturedPublication />} />

//         {/* ⚙️ Key Features */}
//         <Route path="/key-features" element={<KeyFeaturePage />} />

//         {/* 🧭 Explore by Field */}
//         <Route path="/explore-fields" element={<FieldPage />} />

//         {/* ℹ️ About */}
//         <Route path="/about" element={<About />} />

//         {/* ✉️ Contact */}
//         <Route path="/contact" element={<Contact />} />

//         {/* 📝 Sign Up */}
//         <Route path="/signup" element={<SignUp />} />

//         {/* 🔐 Login */}
//         <Route path="/login" element={<Login />} />

//         {/* 👑 Admin Dashboard */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />

//         {/* 🧑‍🏫 Author Dashboard */}
//         <Route path="/author-dashboard" element={<AuthorDashboard />} />

//         {/* 👤 User Dashboard */}
//         <Route path="/user-dashboard" element={<UserDashboard />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;




// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// // 🏠 Main Pages
// import LandingPage from "./pages/landing-page";
// import Contact from "./pages/contact";
// import About from "./pages/about";
// import Browse from "./pages/Browse"; // ✅ lowercase “browse” (match folder name)
// import FeaturedPublication from "./pages/featured-publication";
// import KeyFeaturePage from "./pages/key-featured";
// import FieldPage from "./pages/field";

// // 🔐 Authentication Pages
// import SignUp from "./pages/sign-up";
// import Login from "./pages/login";

// // 👑 Dashboards
// import AdminDashboard from "./pages/admin-dashboard";
// import AuthorDashboard from "./pages/author-dashboard";
// import UserDashboard from "./pages/user-dashboard";

// // 👥 Admin Subpages
// import UserManagement from "./pages/user-management/index"; // ✅ Added

// const App: React.FC = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* 🏠 Landing Page */}
//         <Route path="/" element={<LandingPage />} />

//         {/* 🔍 Browse */}
//         <Route path="/browse" element={<Browse />} />

//         {/* 🌟 Featured Publications */}
//         <Route path="/featured" element={<FeaturedPublication />} />

//         {/* ⚙️ Key Features */}
//         <Route path="/key-features" element={<KeyFeaturePage />} />

//         {/* 🧭 Explore by Field */}
//         <Route path="/explore-fields" element={<FieldPage />} />

//         {/* ℹ️ About */}
//         <Route path="/about" element={<About />} />

//         {/* ✉️ Contact */}
//         <Route path="/contact" element={<Contact />} />

//         {/* 📝 Sign Up */}
//         <Route path="/signup" element={<SignUp />} />

//         {/* 🔐 Login */}
//         <Route path="/login" element={<Login />} />

//         {/* 👑 Dashboards */}
//         <Route path="/admin-dashboard" element={<AdminDashboard />} />
//         <Route path="/author-dashboard" element={<AuthorDashboard />} />
//         <Route path="/user-dashboard" element={<UserDashboard />} />

//         {/* 👥 Admin Subpages */}
//         <Route path="/admin/user-management" element={<UserManagement />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// 🏠 Main Pages
import LandingPage from "./pages/landing-page";
import Contact from "./pages/contact";
import About from "./pages/about";
import Browse from "./pages/Browse"; // ✅ lowercase “browse” (match folder name)
import FeaturedPublication from "./pages/featured-publication";
import KeyFeaturePage from "./pages/key-featured";
import FieldPage from "./pages/field";

// 🔐 Authentication Pages
import SignUp from "./pages/sign-up";
import Login from "./pages/login";

// 👑 Dashboards
import AdminDashboard from "./pages/admin-dashboard";
import AuthorDashboard from "./pages/author-dashboard";
import UserDashboard from "./pages/user-dashboard";

// 👥 Admin Subpages
import UserManagement from "./pages/user-management";
import AdminPublications from "./pages/publication/index";
import AdminAnalytics from "./pages/analytics/index";
import AdminFeedback from "./pages/feedback/index"; // ✅ ADD THIS IMPORT


const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* 🏠 Landing Page */}
        <Route path="/" element={<LandingPage />} />

        {/* 🔍 Browse */}
        <Route path="/browse" element={<Browse />} />

        {/* 🌟 Featured Publications */}
        <Route path="/featured" element={<FeaturedPublication />} />

        {/* ⚙️ Key Features */}
        <Route path="/key-features" element={<KeyFeaturePage />} />

        {/* 🧭 Explore by Field */}
        <Route path="/explore-fields" element={<FieldPage />} />

        {/* ℹ️ About */}
        <Route path="/about" element={<About />} />

        {/* ✉️ Contact */}
        <Route path="/contact" element={<Contact />} />

        {/* 📝 Sign Up */}
        <Route path="/signup" element={<SignUp />} />

        {/* 🔐 Login */}
        <Route path="/login" element={<Login />} />

        {/* 👑 Dashboards */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/author-dashboard" element={<AuthorDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} />
        

        {/* 👥 Admin Subpages */}
        <Route path="/admin/user-management" element={<UserManagement />} />
        <Route path="/admin/publication" element={<AdminPublications />} /> {/* ✅ NEW */}
         <Route path="/admin/analytics" element={<AdminAnalytics />} /> {/* ✅ FIXED */}
         <Route path="/admin/feedback" element={<AdminFeedback />} /> {/* ✅ FIXED */}
      </Routes>
    </Router>
  );
};

export default App;
