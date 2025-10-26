// export default function Field() {
//   return <section className="explore py-5 bg-light">
//         <div className="container">
//           <h3 className="fw-bold mb-4 text-left">Explore by Field</h3>
//           <p
//             className="lead text-secondary mb-5"
//             style={{
//               fontFamily: "Inter, sans-serif",
//               fontWeight: 400,
//               fontSize: "20px",
//               lineHeight: "100%", // 100% of 20px is 20px
//               letterSpacing: "0",
//             }}
//           >
//             Discover popular research areas and dive into topics that interest
//             you most.
//           </p>
//           <div className="row g-4 justify-content-center text-center">
//             {[
//               {
//                 img: "field1.jpg",
//                 title: "Life Sciences",
//                 desc: "Explore genetics and modern technology.",
//                 width: 58.27,
//                 height: 66.13,
//               },
//               {
//                 img: "field2.jpg",
//                 title: "Computer Science",
//                 desc: "AI, Software, and Innovation.",
//                 width: 72,
//                 height: 58,
//               },
//               {
//                 img: "field3.jpg",
//                 title: "Engineering",
//                 desc: "Cutting-edge system designs and innovations.",
//                 width: 69.35,
//                 height: 57,
//               },
//               {
//                 img: "field4.jpg",
//                 title: "Medicine & Health",
//                 desc: "Research advancing global healthcare.",
//                 width: 58,
//                 height: 58,
//               },
//               {
//                 img: "field5.jpg",
//                 title: "Environmental Science",
//                 desc: "Learn about sustainability and climate research.",
//                 width: 64,
//                 height: 57,
//               },
//               {
//                 img: "field6.jpg",
//                 title: "Social Sciences",
//                 desc: "Understand human behavior and society.",
//                 width: 63,
//                 height: 58,
//               },
//             ].map((field, i) => (
//               <div className="col-md-4 col-sm-6" key={i}>
//                 <div className="card h-100 text-center shadow-sm border-0 rounded-3 p-3">
//                   <img
//                     src={`/${field.img}`}
//                     className="mx-auto"
//                     alt={field.title}
//                     style={{
//                       width: `${field.width}px`,
//                       height: `${field.height}px`,
//                       objectFit: "cover",
//                       marginBottom: "10px",
//                     }}
//                   />
//                   <div className="card-body">
//                     <h6 className="fw-bold text-dark">{field.title}</h6>
//                     <p className="small text-muted mb-1">{field.desc}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-5">
//           <a href="#" className="text-dark text-decoration-none fw-bold">
//             View All Categories <span className="ms-1">&rsaquo;</span>
//           </a>
//         </div>
//         </div>
//       </section>;
// }




import { Link } from "react-router-dom";

export default function Field() {
  return (
    <section className="explore py-5 bg-light">
      <div className="container">
        <h3 className="fw-bold mb-4 text-left">Explore by Field</h3>
        <p
          className="lead text-secondary mb-5"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "20px",
            lineHeight: "100%",
            letterSpacing: "0",
          }}
        >
          Discover popular research areas and dive into topics that interest
          you most.
        </p>

        <div className="row g-4 justify-content-center text-center">
          {[
            {
              img: "field1.jpg",
              title: "Life Sciences",
              desc: "Explore genetics and modern technology.",
              width: 58.27,
              height: 66.13,
            },
            {
              img: "field2.jpg",
              title: "Computer Science",
              desc: "AI, Software, and Innovation.",
              width: 72,
              height: 58,
            },
            {
              img: "field3.jpg",
              title: "Engineering",
              desc: "Cutting-edge system designs and innovations.",
              width: 69.35,
              height: 57,
            },
            {
              img: "field4.jpg",
              title: "Medicine & Health",
              desc: "Research advancing global healthcare.",
              width: 58,
              height: 58,
            },
            {
              img: "field5.jpg",
              title: "Environmental Science",
              desc: "Learn about sustainability and climate research.",
              width: 64,
              height: 57,
            },
            {
              img: "field6.jpg",
              title: "Social Sciences",
              desc: "Understand human behavior and society.",
              width: 63,
              height: 58,
            },
          ].map((field, i) => (
            <div className="col-md-4 col-sm-6" key={i}>
              <div className="card h-100 text-center shadow-sm border-0 rounded-3 p-3">
                <img
                  src={`/${field.img}`}
                  className="mx-auto"
                  alt={field.title}
                  style={{
                    width: `${field.width}px`,
                    height: `${field.height}px`,
                    objectFit: "cover",
                    marginBottom: "10px",
                  }}
                />
                <div className="card-body">
                  <h6 className="fw-bold text-dark">{field.title}</h6>
                  <p className="small text-muted mb-1">{field.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ Use Link to navigate to full page */}
        <div className="text-center mt-5">
          <Link
            to="/explore-fields"
            className="text-dark text-decoration-none fw-bold"
          >
            View All Categories <span className="ms-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
