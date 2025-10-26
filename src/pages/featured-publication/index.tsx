
// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Footer from "../../components/footer";
// import "./featured-publication.css";

// interface Publication {
//   id: number;
//   title: string;
//   year: string;
//   author: string;
//   category: string;
//   posted: string;
//   image: string;
// }

// const publications: Publication[] = [
//   {
//     id: 1,
//     title: "Machine Learning for Natural Language Processing",
//     year: "2023",
//     author: "Dr. Bilal Ahmed",
//     category: "Artificial Intelligence",
//     posted: "1 day ago",
//     image: "/images/pub1.jpg",
//   },
//   {
//     id: 2,
//     title: "The Impact of Social Media on Youth Behavior",
//     year: "2022",
//     author: "Maria Khan",
//     category: "Social Sciences",
//     posted: "5 days ago",
//     image: "/images/pub2.jpg",
//   },
//   {
//     id: 3,
//     title: "Climate Change and Sustainable Development",
//     year: "2021",
//     author: "Dr. Ayesha Malik",
//     category: "Environmental Studies",
//     posted: "2 weeks ago",
//     image: "/images/pub3.jpg",
//   },
//   {
//     id: 4,
//     title: "Deep Learning for Medical Diagnostics",
//     year: "2024",
//     author: "Dr. Sara Iqbal",
//     category: "Health Informatics",
//     posted: "3 days ago",
//     image: "/images/pub4.jpg",
//   },
//   {
//     id: 5,
//     title: "Renewable Energy Systems and Optimization",
//     year: "2022",
//     author: "Usman Ali",
//     category: "Energy Research",
//     posted: "1 week ago",
//     image: "/images/pub5.jpg",
//   },
//   {
//     id: 6,
//     title: "AI in Education and Learning Systems",
//     year: "2023",
//     author: "Fatima Noor",
//     category: "Artificial Intelligence",
//     posted: "4 days ago",
//     image: "/images/pub6.jpg",
//   },
//   {
//     id: 7,
//     title: "Blockchain Applications in Finance",
//     year: "2023",
//     author: "Hamza Tariq",
//     category: "FinTech",
//     posted: "2 days ago",
//     image: "/images/pub7.jpg",
//   },
//   {
//     id: 8,
//     title: "Cybersecurity Threats in Modern Networks",
//     year: "2024",
//     author: "Dr. Ali Hassan",
//     category: "Information Security",
//     posted: "6 days ago",
//     image: "/images/pub8.jpg",
//   },
//   {
//     id: 9,
//     title: "Big Data Analytics for Smart Cities",
//     year: "2022",
//     author: "Ayesha Ahmed",
//     category: "Data Science",
//     posted: "3 weeks ago",
//     image: "/images/pub9.jpg",
//   },
//   {
//     id: 10,
//     title: "Virtual Reality in Education",
//     year: "2021",
//     author: "Dr. Umar Zia",
//     category: "Technology in Education",
//     posted: "1 month ago",
//     image: "/images/pub10.jpg",
//   },
//   {
//     id: 11,
//     title: "Cloud Computing Trends in 2025",
//     year: "2025",
//     author: "Bilal Khan",
//     category: "Cloud Technology",
//     posted: "2 days ago",
//     image: "/images/pub11.jpg",
//   },
//   {
//     id: 12,
//     title: "Augmented Reality in Architecture",
//     year: "2024",
//     author: "Hira Javed",
//     category: "Architecture & Design",
//     posted: "1 week ago",
//     image: "/images/pub12.jpg",
//   },
//   {
//     id: 13,
//     title: "Autonomous Vehicles and Road Safety",
//     year: "2023",
//     author: "Dr. Kamran Siddiqui",
//     category: "Automotive Engineering",
//     posted: "3 days ago",
//     image: "/images/pub13.jpg",
//   },
//   {
//     id: 14,
//     title: "Data Privacy and Ethical AI",
//     year: "2022",
//     author: "Rabia Noor",
//     category: "Ethics in Tech",
//     posted: "2 weeks ago",
//     image: "/images/pub14.jpg",
//   },
//   {
//     id: 15,
//     title: "Natural Disaster Prediction Systems",
//     year: "2023",
//     author: "Dr. Salman Qureshi",
//     category: "Earth Sciences",
//     posted: "4 days ago",
//     image: "/images/pub15.jpg",
//   },
//   {
//     id: 16,
//     title: "Human-Computer Interaction in UX Design",
//     year: "2024",
//     author: "Iqra Saeed",
//     category: "Human-Computer Interaction",
//     posted: "5 days ago",
//     image: "/images/pub16.jpg",
//   },
//   {
//     id: 17,
//     title: "Internet of Things in Smart Homes",
//     year: "2025",
//     author: "Waseem Raza",
//     category: "IoT Systems",
//     posted: "3 days ago",
//     image: "/images/pub17.jpg",
//   },
//   {
//     id: 18,
//     title: "Quantum Computing and Future Technologies",
//     year: "2025",
//     author: "Dr. Nadia Rehman",
//     category: "Quantum Research",
//     posted: "1 day ago",
//     image: "/images/pub18.jpg",
//   },
// ];

// const Index: React.FC = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="container my-5">
//         <h3 className="fw-bold mb-4">Featured Publications</h3>

//         <div className="row g-4">
//           {publications.map((pub) => (
//             <div className="col-md-4" key={pub.id}>
//               <div className="card shadow-sm h-100">
//                 <img
//                   src={pub.image}
//                   className="card-img-top"
//                   alt={pub.title}
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h6 className="fw-bold">{pub.title}</h6>
//                   <p className="mb-1">
//                     {pub.year} | <strong>Author:</strong> {pub.author}
//                   </p>
//                   <p className="mb-1">
//                     <strong>Category:</strong> {pub.category}
//                   </p>
//                   <p className="text-muted mb-3">Posted {pub.posted}</p>
//                   <button className="btn btn-success btn-sm w-100">
//                     Download PDF
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Index;



// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Footer from "../../components/footer";
// import "./featured-publication.css";

// interface Publication {
//   id: number;
//   title: string;
//   year: string;
//   author: string;
//   category: string;
//   posted: string;
//   image: string;
// }

// const publications: Publication[] = [
//   {
//     id: 1,
//     title: "Machine Learning for Natural Language Processing",
//     year: "2023",
//     author: "Dr. Bilal Ahmed",
//     category: "Artificial Intelligence",
//     posted: "1 day ago",
//     image: "/images/pub1.jpg",
//   },
//   {
//     id: 2,
//     title: "The Impact of Social Media on Youth Behavior",
//     year: "2022",
//     author: "Maria Khan",
//     category: "Social Sciences",
//     posted: "5 days ago",
//     image: "/images/pub2.jpg",
//   },
//   {
//     id: 3,
//     title: "Climate Change and Sustainable Development",
//     year: "2021",
//     author: "Dr. Ayesha Malik",
//     category: "Environmental Studies",
//     posted: "2 weeks ago",
//     image: "/images/pub3.jpg",
//   },
//   // ... (rest of your publications data)
//   {
//     id: 4,
//     title: "Deep Learning for Medical Diagnostics",
//     year: "2024",
//     author: "Dr. Sara Iqbal",
//     category: "Health Informatics",
//     posted: "3 days ago",
//     image: "/images/pub4.jpg",
//   },
//   {
//     id: 5,
//     title: "Renewable Energy Systems and Optimization",
//     year: "2022",
//     author: "Usman Ali",
//     category: "Energy Research",
//     posted: "1 week ago",
//     image: "/images/pub5.jpg",
//   },
//   {
//     id: 6,
//     title: "AI in Education and Learning Systems",
//     year: "2023",
//     author: "Fatima Noor",
//     category: "Artificial Intelligence",
//     posted: "4 days ago",
//     image: "/images/pub6.jpg",
//   },
//   {
//     id: 7,
//     title: "Blockchain Applications in Finance",
//     year: "2023",
//     author: "Hamza Tariq",
//     category: "FinTech",
//     posted: "2 days ago",
//     image: "/images/pub7.jpg",
//   },
//   {
//     id: 8,
//     title: "Cybersecurity Threats in Modern Networks",
//     year: "2024",
//     author: "Dr. Ali Hassan",
//     category: "Information Security",
//     posted: "6 days ago",
//     image: "/images/pub8.jpg",
//   },
//   {
//     id: 9,
//     title: "Big Data Analytics for Smart Cities",
//     year: "2022",
//     author: "Ayesha Ahmed",
//     category: "Data Science",
//     posted: "3 weeks ago",
//     image: "/images/pub9.jpg",
//   },
//   {
//     id: 10,
//     title: "Virtual Reality in Education",
//     year: "2021",
//     author: "Dr. Umar Zia",
//     category: "Technology in Education",
//     posted: "1 month ago",
//     image: "/images/pub10.jpg",
//   },
//   {
//     id: 11,
//     title: "Cloud Computing Trends in 2025",
//     year: "2025",
//     author: "Bilal Khan",
//     category: "Cloud Technology",
//     posted: "2 days ago",
//     image: "/images/pub11.jpg",
//   },
//   {
//     id: 12,
//     title: "Augmented Reality in Architecture",
//     year: "2024",
//     author: "Hira Javed",
//     category: "Architecture & Design",
//     posted: "1 week ago",
//     image: "/images/pub12.jpg",
//   },
//   {
//     id: 13,
//     title: "Autonomous Vehicles and Road Safety",
//     year: "2023",
//     author: "Dr. Kamran Siddiqui",
//     category: "Automotive Engineering",
//     posted: "3 days ago",
//     image: "/images/pub13.jpg",
//   },
//   {
//     id: 14,
//     title: "Data Privacy and Ethical AI",
//     year: "2022",
//     author: "Rabia Noor",
//     category: "Ethics in Tech",
//     posted: "2 weeks ago",
//     image: "/images/pub14.jpg",
//   },
//   {
//     id: 15,
//     title: "Natural Disaster Prediction Systems",
//     year: "2023",
//     author: "Dr. Salman Qureshi",
//     category: "Earth Sciences",
//     posted: "4 days ago",
//     image: "/images/pub15.jpg",
//   },
//   {
//     id: 16,
//     title: "Human-Computer Interaction in UX Design",
//     year: "2024",
//     author: "Iqra Saeed",
//     category: "Human-Computer Interaction",
//     posted: "5 days ago",
//     image: "/images/pub16.jpg",
//   },
//   {
//     id: 17,
//     title: "Internet of Things in Smart Homes",
//     year: "2025",
//     author: "Waseem Raza",
//     category: "IoT Systems",
//     posted: "3 days ago",
//     image: "/images/pub17.jpg",
//   },
//   {
//     id: 18,
//     title: "Quantum Computing and Future Technologies",
//     year: "2025",
//     author: "Dr. Nadia Rehman",
//     category: "Quantum Research",
//     posted: "1 day ago",
//     image: "/images/pub18.jpg",
//   },
// ];

// const Index: React.FC = () => {
//   return (
//     <>
//       <NavBar />
//       <div className="container my-5">
//         <h3 className="fw-bold mb-4">Featured Publications</h3>

//         <div className="row g-4">
//           {publications.map((pub) => (
//             <div className="col-md-4" key={pub.id}>
//               <div className="card shadow-sm h-100">
//                 <img
//                   src={pub.image}
//                   className="card-img-top"
//                   alt={pub.title}
//                   style={{ height: "180px", objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h6 className="fw-bold">{pub.title}</h6>
//                   <p className="small text-muted mb-1">
//                     {pub.year} | Author: {pub.author}
//                   </p>
//                   <p className="small text-muted mb-1">
//                     Category: {pub.category}
//                   </p>
//                   <p className="small text-muted mb-3">Posted {pub.posted}</p>

//                   {/* START OF CORRECTION: Download button and icon side-by-side on the right */}
//                   <div className="d-flex justify-content-end align-items-center mt-3">
//                     {/* Download PDF Button */}
//                     <a href="#" className="btn btn-sm btn-success me-2">
//                         Download PDF
//                     </a>
                    
//                     {/* Bookmark Icon Button (Outlined, Correct Color) */}
//                     <button className="btn btn-sm btn-link p-0" style={{ lineHeight: 1 }}>
//                         <svg 
//                             xmlns="http://www.w3.org/2000/svg" 
//                             width="24" 
//                             height="28" 
//                             fill="transparent" 
//                             stroke="#94A3B8" // Outline color from image
//                             strokeWidth="1.5" 
//                             className="bi bi-bookmark" 
//                             viewBox="0 0 16 16"
//                         >
//                             {/* This path is for the filled bookmark, but it will appear outlined with the stroke/fill properties */}
//                             <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1z"/>
//                         </svg>
//                     </button>
//                   </div>
//                   {/* END OF CORRECTION */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         {/* ADDING THE "Find out more" LINK FROM THE IMAGE */}
//         <div className="text-center mt-5">
//           <a href="#" className="text-dark text-decoration-none fw-bold">
//             Find out more <span className="ms-1">&rsaquo;</span>
//           </a>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Index;



import React from "react";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import "./featured-publication.css";

interface Publication {
  id: number;
  title: string;
  year: string;
  author: string;
  category: string;
  posted: string;
  image: string;
}

const publications: Publication[] = [
  {
    id: 1,
    title: "Machine Learning for Natural Language Processing",
    year: "2023",
    author: "Dr. Bilal Ahmed",
    category: "Artificial Intelligence",
    posted: "1 day ago",
    image: "/images/pub1.jpg",
  },
  {
    id: 2,
    title: "The Impact of Social Media on Youth Behavior",
    year: "2022",
    author: "Maria Khan",
    category: "Social Sciences",
    posted: "5 days ago",
    image: "/images/pub2.jpg",
  },
  {
    id: 3,
    title: "Climate Change and Sustainable Development",
    year: "2021",
    author: "Dr. Ayesha Malik",
    category: "Environmental Studies",
    posted: "2 weeks ago",
    image: "/images/pub3.jpg",
  },
  {
    id: 4,
    title: "Deep Learning for Medical Diagnostics",
    year: "2024",
    author: "Dr. Sara Iqbal",
    category: "Health Informatics",
    posted: "3 days ago",
    image: "/images/pub4.jpg",
  },
  {
    id: 5,
    title: "Renewable Energy Systems and Optimization",
    year: "2022",
    author: "Usman Ali",
    category: "Energy Research",
    posted: "1 week ago",
    image: "/images/pub5.jpg",
  },
  {
    id: 6,
    title: "AI in Education and Learning Systems",
    year: "2023",
    author: "Fatima Noor",
    category: "Artificial Intelligence",
    posted: "4 days ago",
    image: "/images/pub6.jpg",
  },
  {
    id: 7,
    title: "Blockchain Applications in Finance",
    year: "2023",
    author: "Hamza Tariq",
    category: "FinTech",
    posted: "2 days ago",
    image: "/images/pub7.jpg",
  },
  {
    id: 8,
    title: "Cybersecurity Threats in Modern Networks",
    year: "2024",
    author: "Dr. Ali Hassan",
    category: "Information Security",
    posted: "6 days ago",
    image: "/images/pub8.jpg",
  },
  {
    id: 9,
    title: "Big Data Analytics for Smart Cities",
    year: "2022",
    author: "Ayesha Ahmed",
    category: "Data Science",
    posted: "3 weeks ago",
    image: "/images/pub9.jpg",
  },
  {
    id: 10,
    title: "Virtual Reality in Education",
    year: "2021",
    author: "Dr. Umar Zia",
    category: "Technology in Education",
    posted: "1 month ago",
    image: "/images/pub10.jpg",
  },
  {
    id: 11,
    title: "Cloud Computing Trends in 2025",
    year: "2025",
    author: "Bilal Khan",
    category: "Cloud Technology",
    posted: "2 days ago",
    image: "/images/pub11.jpg",
  },
  {
    id: 12,
    title: "Augmented Reality in Architecture",
    year: "2024",
    author: "Hira Javed",
    category: "Architecture & Design",
    posted: "1 week ago",
    image: "/images/pub12.jpg",
  },
  {
    id: 13,
    title: "Autonomous Vehicles and Road Safety",
    year: "2023",
    author: "Dr. Kamran Siddiqui",
    category: "Automotive Engineering",
    posted: "3 days ago",
    image: "/images/pub13.jpg",
  },
  {
    id: 14,
    title: "Data Privacy and Ethical AI",
    year: "2022",
    author: "Rabia Noor",
    category: "Ethics in Tech",
    posted: "2 weeks ago",
    image: "/images/pub14.jpg",
  },
  {
    id: 15,
    title: "Natural Disaster Prediction Systems",
    year: "2023",
    author: "Dr. Salman Qureshi",
    category: "Earth Sciences",
    posted: "4 days ago",
    image: "/images/pub15.jpg",
  },
  {
    id: 16,
    title: "Human-Computer Interaction in UX Design",
    year: "2024",
    author: "Iqra Saeed",
    category: "Human-Computer Interaction",
    posted: "5 days ago",
    image: "/images/pub16.jpg",
  },
  {
    id: 17,
    title: "Internet of Things in Smart Homes",
    year: "2025",
    author: "Waseem Raza",
    category: "IoT Systems",
    posted: "3 days ago",
    image: "/images/pub17.jpg",
  },
  {
    id: 18,
    title: "Quantum Computing and Future Technologies",
    year: "2025",
    author: "Dr. Nadia Rehman",
    category: "Quantum Research",
    posted: "1 day ago",
    image: "/images/pub18.jpg",
  },
];

const Index: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container my-5">
        <h3 className="fw-bold mb-4">Featured Publications</h3>

        <div className="row g-4">
          {publications.map((pub) => (
            <div className="col-md-4" key={pub.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={pub.image}
                  className="card-img-top"
                  alt={pub.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h6 className="fw-bold">{pub.title}</h6>
                  <p className="small text-muted mb-1">
                    {pub.year} | Author: {pub.author}
                  </p>
                  <p className="small text-muted mb-1">
                    Category: {pub.category}
                  </p>
                  <p className="small text-muted mb-3">Posted {pub.posted}</p>

                  {/* ✅ Download & Bookmark section */}
                  <div className="d-flex justify-content-end align-items-center mt-3">
                    <a href="#" className="btn btn-sm btn-success me-2">
                      Download PDF
                    </a>

                    <button className="btn btn-sm btn-link p-0" style={{ lineHeight: 1 }}>
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
      </div>
      <Footer />
    </>
  );
};

export default Index;
