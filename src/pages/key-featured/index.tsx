// import React from "react";
// import NavBar from "../../components/nav-bar"; // Assuming this path is correct
// import Footer from "../../components/footer"; // Assuming this path is correct
// import "./featured-publication.css"; // For any specific page styles

// // Define the structure for a single feature item
// interface FeatureItem {
//   iconClass: string;
//   color: string;
//   title: string;
//   desc: string;
// }

// // Data array for all 12 key features, with icons and colors extracted from the image
// const keyFeaturesData: FeatureItem[] = [
//   // Row 1
//   {
//     iconClass: "bi bi-search", // Represents the magnifying glass
//     color: "#f7931e", // Orange from image
//     title: "Easy Search & Filter",
//     desc: "Find relevant research papers with smart search and advanced options.",
//   },
//   {
//     iconClass: "bi bi-box", // Represents the box/stack of papers, using 'bi-box' as closest visual match
//     color: "#4cd964", // Green from image
//     title: "Easy Search & Filter", // Duplicated title as in the image
//     desc: "A simple and secure way to share your research with the academic community.",
//   },
//   {
//     iconClass: "bi bi-download", // Represents the download icon
//     color: "#ffc107", // Yellow from image
//     title: "Downloads & Citation Stats",
//     desc: "Easily downloadable with citation insights at a glance.",
//   },
//   {
//     iconClass: "bi bi-globe", // Represents the globe icon
//     color: "#007bff", // Blue from image
//     title: "Open Access for Everyone",
//     desc: "Access a wide range of research papers across multiple disciplines.",
//   },

//   // Row 2
//   {
//     iconClass: "bi bi-file-earmark-arrow-down", // Represents the download/save PDFs icon
//     color: "#007bff", // Blue from image
//     title: "Downloads & Save PDFs",
//     desc: "Instant access to downloadable, high-quality PDFs.",
//   },
//   {
//     iconClass: "bi bi-book", // Represents the comprehensive library icon
//     color: "#4cd964", // Green from image
//     title: "Comprehensive Library",
//     desc: "Access a vast database of publication from multiple disciplines.",
//   },
//   {
//     iconClass: "bi bi-person", // Represents the author profile icon
//     color: "#ffc107", // Yellow from image
//     title: "Author Profiles",
//     desc: "View detailed author information and publication history.",
//   },
//   {
//     iconClass: "bi bi-chat-left-text-fill", // Represents the feedback/reviews icon
//     color: "#007bff", // Blue from image
//     title: "Feedback & Reviews",
//     desc: "Share your thoughts and rate publications.",
//   },

//   // Row 3
//   {
//     iconClass: "bi bi-lightbulb-fill", // Represents the trending topics icon
//     color: "#f7931e", // Orange from image
//     title: "Trending Topics",
//     desc: "Find relevant research papers with smart search and advanced options.",
//   },
//   {
//     iconClass: "bi bi-bell-fill", // Represents the notifications icon
//     color: "#4cd964", // Green from image
//     title: "Notifications & Alerts",
//     desc: "Stay updated on new publications or category updates.",
//   },
//   {
//     iconClass: "bi bi-graph-up", // Represents the citation insights icon
//     color: "#ffc107", // Yellow from image
//     title: "Citation Insights",
//     desc: "View and track citation metrics and impact scores.",
//   },
//   {
//     iconClass: "bi bi-lock-fill", // Represents the secure & reliable icon
//     color: "#007bff", // Blue from image
//     title: "Secure & Reliable Platform",
//     desc: "Access a wide range of research papers across multiple disciplines.",
//   },
// ];

// // Renamed the component to KeyFeaturePage
// const KeyFeaturePage: React.FC = () => {
//   return (
//     <>
//       <NavBar /> {/* Your Navbar component */}

//       {/* Main content area for Key Features */}
//       <section className="features py-5" style={{ backgroundColor: "#f1f6fb" }}>
//         <div className="container">
//           {/* Key Features Header */}
//           <h3 className="fw-bold mb-5" style={{ textAlign: "left" }}>
//             Key Features
//           </h3>

//           {/* Features Grid */}
//           <div className="row g-4">
//             {keyFeaturesData.map((feature, index) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
//                 <div className="feature-box p-4 shadow-sm bg-white h-100 rounded-3 text-center">
//                   <i
//                     className={`bi ${feature.iconClass} fa-3x mb-3`} // bi for Bootstrap Icons, fa-3x for size
//                     style={{ color: feature.color, fontSize: '3rem' }} // Ensure large icon size
//                   ></i>
//                   <h6 className="fw-bold">{feature.title}</h6>
//                   <p className="text-muted">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* "Find out more" link */}
//           <div className="text-center mt-5">
//             <a href="#" className="text-dark text-decoration-none fw-bold">
//               Find out more <span className="ms-1">&rsaquo;</span>
//             </a>
//           </div>
//         </div>
//       </section>

//       <Footer /> {/* Your Footer component */}
//     </>
//   );
// };

// // Export the renamed component
// export default KeyFeaturePage;



// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Footer from "../../components/footer";
// import "./featured-publication.css";

// interface FeatureItem {
//   iconClass: string;
//   color: string;
//   title: string;
//   desc: string;
// }

// const keyFeaturesData: FeatureItem[] = [
//   {
//     iconClass: "bi bi-search",
//     color: "#f7931e",
//     title: "Easy Search & Filter",
//     desc: "Find relevant research papers with smart search and advanced options.",
//   },
//   {
//     iconClass: "bi bi-box",
//     color: "#4cd964",
//     title: "Simple Upload",
//     desc: "A simple and secure way to share your research with the academic community.",
//   },
//   {
//     iconClass: "bi bi-download",
//     color: "#ffc107",
//     title: "Downloads & Citation Stats",
//     desc: "Easily downloadable with citation insights at a glance.",
//   },
//   {
//     iconClass: "bi bi-globe",
//     color: "#007bff",
//     title: "Open Access for Everyone",
//     desc: "Access a wide range of research papers across multiple disciplines.",
//   },
//   {
//     iconClass: "bi bi-file-earmark-arrow-down",
//     color: "#007bff",
//     title: "Downloads & Save PDFs",
//     desc: "Instant access to downloadable, high-quality PDFs.",
//   },
//   {
//     iconClass: "bi bi-book",
//     color: "#4cd964",
//     title: "Comprehensive Library",
//     desc: "Access a vast database of publications from multiple disciplines.",
//   },
//   {
//     iconClass: "bi bi-person",
//     color: "#ffc107",
//     title: "Author Profiles",
//     desc: "View detailed author information and publication history.",
//   },
//   {
//     iconClass: "bi bi-chat-left-text-fill",
//     color: "#007bff",
//     title: "Feedback & Reviews",
//     desc: "Share your thoughts and rate publications.",
//   },
//   {
//     iconClass: "bi bi-lightbulb-fill",
//     color: "#f7931e",
//     title: "Trending Topics",
//     desc: "Explore the latest research trends and innovations.",
//   },
//   {
//     iconClass: "bi bi-bell-fill",
//     color: "#4cd964",
//     title: "Notifications & Alerts",
//     desc: "Stay updated on new publications or category updates.",
//   },
//   {
//     iconClass: "bi bi-graph-up",
//     color: "#ffc107",
//     title: "Citation Insights",
//     desc: "View and track citation metrics and impact scores.",
//   },
//   {
//     iconClass: "bi bi-lock-fill",
//     color: "#007bff",
//     title: "Secure & Reliable Platform",
//     desc: "Enjoy a safe, secure, and user-friendly research experience.",
//   },
// ];

// const KeyFeaturePage: React.FC = () => {
//   return (
//     <>
//       <NavBar />

//       <section className="features py-5" style={{ backgroundColor: "#f1f6fb" }}>
//         <div className="container">
//           <h3 className="fw-bold mb-5" style={{ textAlign: "left" }}>
//             Key Features
//           </h3>

//           <div className="row g-4">
//             {keyFeaturesData.map((feature, index) => (
//               <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
//                 <div className="feature-box p-4 shadow-sm bg-white h-100 rounded-3 text-center">
//                   <i
//                     className={`bi ${feature.iconClass} fa-3x mb-3`}
//                     style={{ color: feature.color, fontSize: "3rem" }}
//                   ></i>
//                   <h6 className="fw-bold">{feature.title}</h6>
//                   <p className="text-muted">{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </>
//   );
// };

// export default KeyFeaturePage;



// "use client";

// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Footer from "../../components/footer";
// import "./key-featured.css";

// // ✅ Correct, type-safe imports for react-icons
// import { 
//   FaSearch, 
//   FaDownload, 
//   FaGlobe, 
//   FaFilePdf, 
//   FaBook, 
//   FaUser, 
//   FaComments, 
//   FaLightbulb, 
//   FaBell, 
//   FaChartBar, 
//   FaLock 
// } from "react-icons/fa";

// interface Feature {
//   icon: React.ReactElement;
//   title: string;
//   desc: string;
// }

// const features: Feature[] = [
//   {
//     icon: <FaSearch className="icon" />,
//     title: "Easy Search & Filter",
//     desc: "Find relevant research papers with smart search and advanced options.",
//   },
//   {
//     icon: <FaDownload className="icon" />,
//     title: "Secure Sharing",
//     desc: "A simple and secure way to share your research with the academic community.",
//   },
//   {
//     icon: <FaDownload className="icon" />,
//     title: "Downloads & Citation Stats",
//     desc: "Easily downloadable with citation insights at a glance.",
//   },
//   {
//     icon: <FaGlobe className="icon" />,
//     title: "Open Access for Everyone",
//     desc: "Access a wide range of research papers across multiple disciplines.",
//   },
//   {
//     icon: <FaFilePdf className="icon" />,
//     title: "Downloads & Save PDFs",
//     desc: "Instant access to downloadable, high-quality PDFs.",
//   },
//   {
//     icon: <FaBook className="icon" />,
//     title: "Comprehensive Library",
//     desc: "Access a vast database of publications from multiple disciplines.",
//   },
//   {
//     icon: <FaUser className="icon" />,
//     title: "Author Profiles",
//     desc: "View detailed author information and publication history.",
//   },
//   {
//     icon: <FaComments className="icon" />,
//     title: "Feedback & Reviews",
//     desc: "Share your thoughts and rate publications.",
//   },
//   {
//     icon: <FaLightbulb className="icon" />,
//     title: "Trending Topics",
//     desc: "Find relevant research papers with smart search and advanced options.",
//   },
//   {
//     icon: <FaBell className="icon" />,
//     title: "Notifications & Alerts",
//     desc: "Stay updated on new publications or category updates.",
//   },
//   {
//     icon: <FaChartBar className="icon" />,
//     title: "Citation Insights",
//     desc: "View and track citation metrics and impact scores.",
//   },
//   {
//     icon: <FaLock className="icon" />,
//     title: "Secure & Reliable Platform",
//     desc: "Access a wide range of research papers across multiple disciplines.",
//   },
// ];

// const KeyFeatured: React.FC = () => {
//   return (
//     <>
//       <NavBar />
//       <section className="features-section">
//         <h2 className="section-title">Key Features</h2>
//         <div className="features-grid">
//           {features.map((item, index) => (
//             <div key={index} className="feature-card">
//               {item.icon}
//               <h3>{item.title}</h3>
//               <p>{item.desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>
//       <Footer />
//     </>
//   );
// };

// export default KeyFeatured;


"use client";

import React from "react";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import "./key-featured.css";

import {
  FaSearch,
  FaDownload,
  FaGlobe,
  FaFilePdf,
  FaBook,
  FaUser,
  FaComments,
  FaLightbulb,
  FaBell,
  FaChartBar,
  FaLock,
  FaShareAlt,
} from "react-icons/fa";

interface Feature {
  icon: React.ReactElement;
  title: string;
  desc: string;
}

const features: Feature[] = [
  {
    icon: <FaSearch className="icon" style={{ color: "#F7931E" }} />,
    title: "Easy Search & Filter",
    desc: "Find relevant research papers with smart search and advanced options.",
  },
  {
    icon: <FaShareAlt className="icon" style={{ color: "#4CD964" }} />,
    title: "Secure Sharing",
    desc: "A simple and secure way to share your research with the academic community.",
  },
  {
    icon: <FaDownload className="icon" style={{ color: "#FFC107" }} />,
    title: "Downloads & Citation Stats",
    desc: "Easily downloadable with citation insights at a glance.",
  },
  {
    icon: <FaGlobe className="icon" style={{ color: "#007BFF" }} />,
    title: "Open Access for Everyone",
    desc: "Access a wide range of research papers across multiple disciplines.",
  },
  {
    icon: <FaFilePdf className="icon" style={{ color: "#FF5722" }} />,
    title: "Downloads & Save PDFs",
    desc: "Instant access to downloadable, high-quality PDFs.",
  },
  {
    icon: <FaBook className="icon" style={{ color: "#8BC34A" }} />,
    title: "Comprehensive Library",
    desc: "Access a vast database of publications from multiple disciplines.",
  },
  {
    icon: <FaUser className="icon" style={{ color: "#FFC107" }} />,
    title: "Author Profiles",
    desc: "View detailed author information and publication history.",
  },
  {
    icon: <FaComments className="icon" style={{ color: "#007BFF" }} />,
    title: "Feedback & Reviews",
    desc: "Share your thoughts and rate publications.",
  },
  {
    icon: <FaLightbulb className="icon" style={{ color: "#F7931E" }} />,
    title: "Trending Topics",
    desc: "Explore the latest research trends and innovations.",
  },
  {
    icon: <FaBell className="icon" style={{ color: "#4CD964" }} />,
    title: "Notifications & Alerts",
    desc: "Stay updated on new publications or category updates.",
  },
  {
    icon: <FaChartBar className="icon" style={{ color: "#FFC107" }} />,
    title: "Citation Insights",
    desc: "View and track citation metrics and impact scores.",
  },
  {
    icon: <FaLock className="icon" style={{ color: "#007BFF" }} />,
    title: "Secure & Reliable Platform",
    desc: "Enjoy a safe, secure, and user-friendly research experience.",
  },
];

const KeyFeatured: React.FC = () => {
  return (
    <>
      <NavBar />
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="row g-4">
            {features.map((item, index) => (
              <div
                key={index}
                className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex"
              >
                <div className="feature-card p-4 shadow-sm bg-white text-center rounded-3 w-100">
                  {item.icon}
                  <h5 className="fw-bold mt-3">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default KeyFeatured;
