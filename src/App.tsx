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



import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing-page";
import Contact from "./pages/contact";
import About from "./pages/about";
import Browse from "./pages/Browse";
import Index from "./pages/featured-publication";
import KeyFeaturePage from "./pages/key-featured"; // ✅ Key Features Page
import FieldPage from "./pages/field"; // ✅ Explore By Field Page

function App() {
  return (
    <Routes>
      {/* 🏠 Home / Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* 🔍 Browse Publications */}
      <Route path="/browse" element={<Browse />} />

      {/* 🌟 Featured Publications */}
      <Route path="/featured" element={<Index />} />

      {/* ⚙️ Key Features */}
      <Route path="/key-features" element={<KeyFeaturePage />} />

      {/* 🧭 Explore By Field (Full Page View) */}
      <Route path="/explore-fields" element={<FieldPage />} />

      {/* ℹ️ About Us */}
      <Route path="/about" element={<About />} />

      {/* ✉️ Contact */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
