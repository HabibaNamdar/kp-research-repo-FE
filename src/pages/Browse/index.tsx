// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Footer from "../../components/footer";
// import "./browse-page.css";

// const Browse: React.FC = () => {
//   return (
//     <>
//       <NavBar />
//       <section className="browse-section py-5">
//         <div className="container">
//           <h2 className="fw-bold mb-4">Browse Publications</h2>

//           {/* Search Bar */}
//           <div className="search-bar mb-4 custom-search-bar">
//          <div className="input-group">
//            <input
//             type="text"
//             className="form-control" 
//             placeholder="Search by title, author, or keyword"
//             aria-label="Search by title, author, or keyword"
//             />
//           <span className="input-group-text">
//             <i className="fas fa-search"></i> 
//         </span>
//          </div>
//          </div>

//           {/* Filters */}
//           <div className="row mb-5">
//             <div className="col-md-4 mb-3 mb-md-0">
//               <label className="form-label contact-label">Contact</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Computer Science"
//               />
//             </div>
//             <div className="col-md-4 mb-3 mb-md-0">
//         <label className="form-label year-label">Publication Year</label>
//          <select className="form-select">
//           <option value="">Select Year</option>
//         <option value="2025">2025</option>
//           <option value="2024">2024</option>
//            <option value="2023">2023</option>
//               <option value="2022">2022</option>
//            <option value="2021">2021</option>
//               </select>
//                      </div>

//             <div className="col-md-4">
//               <label className="form-label author-label">Author</label>
//               <input type="text" className="form-control" placeholder="Author" />
//             </div>
//           </div>

//           {/* Publications Grid */}
//           <div className="row g-4">
//             {[
//               {
//                 img: "/pub1.jpg",
//                 title: "Deep Learning Applications in Medical Imaging",
//                 author: "Dr. Sarah Khan",
//                 tags: ["Machine Learning", "Diagnostics"],
//               },
//               {
//                 img: "/pub2.jpg",
//                 title: "Advances in Robotics Surgery Techniques",
//                 author: "Ayesha Iqbal",
//                 tags: ["Natural Language Processing"],
//               },
//               {
//                 img: "/pub3.jpg",
//                 title: "Improving Access to Healthcare Through AI",
//                 author: "Dr. Ahmed Ali",
//                 tags: ["Healthcare"],
//               },
//               {
//                 img: "/pub4.jpg",
//                 title: "Advances in Robotics Surgery Techniques",
//                 author: "Dr. Ahmed Ali",
//                 tags: ["Healthcare", "ML", "AI"],
//               },
//               {
//                 img: "/pub5.jpg",
//                 title: "Water and Air Quality Monitoring",
//                 author: "Dr. Ahmed Ali",
//                 tags: ["Healthcare"],
//               },
//               {
//                 img: "/pub6.jpg",
//                 title: "Advances in Robotics Surgery Techniques",
//                 author: "Dr. Ahmed Ali",
//                 tags: ["Healthcare", "ML"],
//               },
//             ].map((pub, index) => (
//               <div className="col-md-6 col-lg-4" key={index}>
//                 <div className="card publication-card shadow-sm border-0">
//                   <img
//                     src={pub.img}
//                     className="card-img-top"
//                     alt={pub.title}
//                     loading="lazy"
//                   />
//                   <div className="card-body">
//                     <h6 className="fw-bold">{pub.title}</h6>
//                     <p className="text-muted small mb-2">{pub.author}</p>
//                     <div className="mb-3">
//                       {pub.tags.map((tag, i) => (
//                         <span key={i} className="badge bg-light text-dark me-1">
//                           {tag}
//                         </span>
//                       ))}
//                     </div>
//                     <div className="text-end">
//                 <button className="btn btn-primary btn-sm">
//                   View Details
//                 </button>
//                    </div>

//                   </div>
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

// export default Browse;



import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import "./browse-page.css";

const Browse: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/featured"); // 👈 navigate to the Featured Publications page
  };

  return (
    <>
      <NavBar />
      <section className="browse-section py-5">
        <div className="container">
          <h2 className="fw-bold mb-4">Browse Publications</h2>

          {/* Search Bar */}
          <div className="search-bar mb-4 custom-search-bar">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search by title, author, or keyword"
                aria-label="Search by title, author, or keyword"
              />
              <span className="input-group-text">
                <i className="fas fa-search"></i>
              </span>
            </div>
          </div>

          {/* Filters */}
          <div className="row mb-5">
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label contact-label">Contact</label>
              <input
                type="text"
                className="form-control"
                placeholder="Computer Science"
              />
            </div>
            <div className="col-md-4 mb-3 mb-md-0">
              <label className="form-label year-label">Publication Year</label>
              <select className="form-select">
                <option value="">Select Year</option>
                <option value="2025">2025</option>
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
              </select>
            </div>

            <div className="col-md-4">
              <label className="form-label author-label">Author</label>
              <input type="text" className="form-control" placeholder="Author" />
            </div>
          </div>

          {/* Publications Grid */}
          <div className="row g-4">
            {[
              {
                img: "/pub1.jpg",
                title: "Deep Learning Applications in Medical Imaging",
                author: "Dr. Sarah Khan",
                tags: ["Machine Learning", "Diagnostics"],
              },
              {
                img: "/pub2.jpg",
                title: "Advances in Robotics Surgery Techniques",
                author: "Ayesha Iqbal",
                tags: ["Natural Language Processing"],
              },
              {
                img: "/pub3.jpg",
                title: "Improving Access to Healthcare Through AI",
                author: "Dr. Ahmed Ali",
                tags: ["Healthcare"],
              },
              {
                img: "/pub4.jpg",
                title: "Water and Air Quality Monitoring",
                author: "Dr. Ahmed Ali",
                tags: ["Healthcare"],
              },
              {
                img: "/pub5.jpg",
                title: "Advances in Robotics Surgery Techniques",
                author: "Dr. Ahmed Ali",
                tags: ["AI", "ML"],
              },
            ].map((pub, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="card publication-card shadow-sm border-0">
                  <img
                    src={pub.img}
                    className="card-img-top"
                    alt={pub.title}
                    loading="lazy"
                  />
                  <div className="card-body">
                    <h6 className="fw-bold">{pub.title}</h6>
                    <p className="text-muted small mb-2">{pub.author}</p>
                    <div className="mb-3">
                      {pub.tags.map((tag, i) => (
                        <span key={i} className="badge bg-light text-dark me-1">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="text-end">
                      <button
                        className="btn btn-primary btn-sm"
                        onClick={handleViewDetails}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
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

export default Browse;
