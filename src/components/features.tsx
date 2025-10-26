
// import "./features.css";
// export default function Features() {
//   return <section className="featured py-5 bg-light">
//         <div className="container">
//           <h3 className="fw-bold mb-4 text-left" style={{ color: "#000" }}>
//             Featured Publications
//           </h3>

//           <div className="row g-4">
//             {[
//               {
//                 img: "publication1.jpg",
//                 title: "Machine Learning for Natural Language Processing",
//                 author: "Dr. Bilal Ahmed",
//                 category: "AI",
//                 posted: "1 day ago",
//               },
//               {
//                 img: "publication2.jpg",
//                 title: "The Impact of Social Media on Youth Behavior",
//                 author: "Maria Khan",
//                 category: "Social Sciences",
//                 posted: "5 days ago",
//               },
//               {
//                 img: "publication3.jpg",
//                 title: "Climate Change and Sustainable Development",
//                 author: "Dr. Ayesha Khan",
//                 category: "Environmental Studies",
//                 posted: "2 weeks ago",
//               },
//               {
//                 img: "publication4.jpg",
//                 title: "Advancements in Quantum Computing",
//                 author: "Dr. Hassan Raza",
//                 category: "Physics, CS",
//                 posted: "3 days ago",
//               },
//               {
//                 img: "publication5.jpg",
//                 title: "Artificial Intelligence in Healthcare",
//                 author: "Dr. Sarah Ahmed",
//                 category: "CS, Medicine",
//                 posted: "1 week ago",
//               },
//               {
//                 img: "publication6.jpg",
//                 title: "Blockchain Technology for Secure Transactions",
//                 author: "Ali Khan",
//                 category: "IT",
//                 posted: "6 days ago",
//               },
//             ].map((pub, i) => (
//               <div className="col-md-4" key={i}>
//                 <div className="card h-100 shadow-sm">
//                   <img
//                     src={`/${pub.img}`}
//                     className="card-img-top"
//                     alt={pub.title}
//                   />
//                   <div className="card-body">
//                     <h6 className="fw-bold">{pub.title}</h6>
//                     <p className="small text-muted mb-1">
//                       2023 | Author: {pub.author}
//                     </p>
//                     <p className="small text-muted">
//                       Category: {pub.category} | Posted {pub.posted}
//                     </p>
//                     <a href="#" className="btn btn-sm btn-success mt-2">
//                       Download PDF
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>;
// }



// import "./features.css";

// const publications = [
//   {
//     img: "publication1.jpg",
//     title: "Machine Learning for Natural Language Processing",
//     year: "2023",
//     author: "Dr. Bilal Ahmed",
//     category: "Artificial Intelligence",
//     posted: "1 day ago",
//   },
//   {
//     img: "publication2.jpg",
//     title: "The Impact of Social Media on Youth Behavior",
//     year: "2022",
//     author: "Maria Khan",
//     category: "Social Sciences",
//     posted: "5 days ago",
//   },
//   {
//     img: "publication3.jpg",
//     title: "Climate Change and Sustainable Development",
//     year: "2021",
//     author: "Dr. Ayesha Malik",
//     category: "Environmental Studies",
//     posted: "2 weeks ago",
//   },
//   {
//     img: "publication4.jpg",
//     title: "Advancements in Quantum Computing",
//     year: "2023",
//     author: "Dr. Hassan Raza",
//     category: "Physics, Computer Science",
//     posted: "3 days ago",
//   },
//   {
//     img: "publication5.jpg",
//     title: "Artificial Intelligence in Healthcare",
//     year: "2023",
//     author: "Dr. Sarah Ahmed",
//     category: "Computer Science, Medicine",
//     posted: "1 week ago",
//   },
//   {
//     img: "publication6.jpg",
//     title: "Blockchain Technology for Secure Transactions",
//     year: "2022",
//     author: "Prof. Ali Khan",
//     category: "Information Technology",
//     posted: "6 days ago",
//   },
// ];

// export default function Features() {
//   return (
//     <section className="featured py-5 bg-light">
//       <div className="container">
//         <h3 className="fw-bold mb-4 text-left" style={{ color: "#000" }}>
//           Featured Publications
//         </h3>

//         <div className="row g-4 mb-5">
//           {publications.map((pub, i) => (
//             <div className="col-lg-4 col-md-6" key={i}>
//               <div className="card h-100 shadow-sm">
//                 <img
//                   src={`/${pub.img}`}
//                   className="card-img-top"
//                   alt={pub.title}
//                 />
//                 <div className="card-body">
//                   <h6 className="fw-bold">{pub.title}</h6>
//                   <p className="small text-muted mb-1">
//                     {pub.year} | Author: {pub.author}
//                   </p>
//                   <p className="small text-muted mb-3">
//                     Category: {pub.category} | Posted {pub.posted}
//                   </p>

//                   {/* Download PDF and Bookmark Icon (ALIGNED RIGHT) */}
//                   <div className="d-flex justify-content-end align-items-center">
//                     <a href="#" className="btn btn-sm btn-success me-2"> 
//                       Download PDF
//                     </a>
//                     {/* Bookmark Icon */}
//                     <button className="btn btn-sm btn-link p-0" style={{ lineHeight: 1 }}>
//           <svg 
//          xmlns="http://www.w3.org/2000/svg" 
//         width="24" 
//         height="28" 
//          fill="transparent" // Make the inside transparent/white
//         stroke="#94A3B8" // Apply the outline color
//        strokeWidth="1.5" // Adjust stroke thickness as needed (e.g., 1.5px)
//        className="bi bi-bookmark" 
//        viewBox="0 0 16 16"
//        >
//        {/* This path is for the filled bookmark. For a true outline, 
//         Bootstrap Icons provides the correct path for 'bi-bookmark'.
//         However, if you must use this path, setting fill to transparent and adding stroke works.*/}
//        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
//      </svg>
//     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Find out more link (Centered as per image) */}
//         <div className="text-center">
//           <a href="#" className="text-dark text-decoration-none fw-bold">
//             Find out more <span className="ms-1">&rsaquo;</span>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }


import { Link } from "react-router-dom";
import "./features.css";

const publications = [
  {
    img: "publication1.jpg",
    title: "Machine Learning for Natural Language Processing",
    year: "2023",
    author: "Dr. Bilal Ahmed",
    category: "Artificial Intelligence",
    posted: "1 day ago",
  },
  {
    img: "publication2.jpg",
    title: "The Impact of Social Media on Youth Behavior",
    year: "2022",
    author: "Maria Khan",
    category: "Social Sciences",
    posted: "5 days ago",
  },
  {
    img: "publication3.jpg",
    title: "Climate Change and Sustainable Development",
    year: "2021",
    author: "Dr. Ayesha Malik",
    category: "Environmental Studies",
    posted: "2 weeks ago",
  },
  {
    img: "publication4.jpg",
    title: "Advancements in Quantum Computing",
    year: "2023",
    author: "Dr. Hassan Raza",
    category: "Physics, Computer Science",
    posted: "3 days ago",
  },
  {
    img: "publication5.jpg",
    title: "Artificial Intelligence in Healthcare",
    year: "2023",
    author: "Dr. Sarah Ahmed",
    category: "Computer Science, Medicine",
    posted: "1 week ago",
  },
  {
    img: "publication6.jpg",
    title: "Blockchain Technology for Secure Transactions",
    year: "2022",
    author: "Prof. Ali Khan",
    category: "Information Technology",
    posted: "6 days ago",
  },
];

export default function Features() {
  return (
    <section className="featured py-5 bg-light">
      <div className="container">
        <h3 className="fw-bold mb-4 text-left" style={{ color: "#000" }}>
          Featured Publications
        </h3>

        {/* Publication Cards */}
        <div className="row g-4 mb-5">
          {publications.map((pub, i) => (
            <div className="col-lg-4 col-md-6" key={i}>
              <div className="card h-100 shadow-sm">
                <img
                  src={`/${pub.img}`}
                  className="card-img-top"
                  alt={pub.title}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{pub.title}</h6>
                  <p className="small text-muted mb-1">
                    {pub.year} | Author: {pub.author}
                  </p>
                  <p className="small text-muted mb-3">
                    Category: {pub.category} | Posted {pub.posted}
                  </p>

                  {/* Download PDF and Bookmark Icon */}
                  <div className="d-flex justify-content-end align-items-center">
                    <a href="#" className="btn btn-sm btn-success me-2">
                      Download PDF
                    </a>

                    {/* Bookmark Icon */}
                    <button
                      className="btn btn-sm btn-link p-0"
                      style={{ lineHeight: 1 }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="28"
                        fill="transparent"
                        stroke="#94A3B8"
                        strokeWidth="1.5"
                        className="bi bi-bookmark"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Find Out More (React Router Link) */}
        <div className="text-center mt-4">
          <Link
            to="/featured"
            className="text-dark text-decoration-none fw-bold"
          >
            Find out more <span className="ms-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
