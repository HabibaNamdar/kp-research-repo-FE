// import "./key-feature.css";
// export default function KeyFeature() {
//   return <section className="features py-5" style={{ backgroundColor: "#f1f6fb" }}>
//         <div className="container text-center">
//           <h3 className="fw-bold mb-4 text-left" style={{ textAlign: "left" }}>
//             Key Features
//           </h3>

//           <div className="row g-4">
//             {[
//               {
//                 icon: "fa-search",
//                 color: "#f7931e",
//                 title: "Easy Search & Filter",
//                 desc: "Find relevant research papers with smart search and advanced options.",
//               },
//               {
//                 icon: "fa-upload",
//                 color: "#00a693",
//                 title: "Simple Upload",
//                 desc: "A simple and secure way to share your research with the academic community.",
//               },
//               {
//                 icon: "fa-download",
//                 color: "#ffc107",
//                 title: "Downloads & Citation Stats",
//                 desc: "Easily downloadable with citation insights at a glance.",
//               },
//               {
//                 icon: "fa-globe",
//                 color: "#007bff",
//                 title: "Open Access for Everyone",
//                 desc: "Access a wide range of research papers across multiple disciplines.",
//               },
//             ].map((f, i) => (
//               <div className="col-md-3" key={i}>
//                 <div className="feature-box p-4 shadow-sm bg-white h-100 rounded-3">
//                   <i
//                     className={`fas ${f.icon} fa-2x mb-3`}
//                     style={{ color: f.color }}
//                   ></i>
//                   <h6 className="fw-bold">{f.title}</h6>
//                   <p>{f.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="text-center mt-5">
//           <a href="#" className="text-dark text-decoration-none fw-bold">
//             Find out more <span className="ms-1">&rsaquo;</span>
//           </a>
//         </div>
//         </div>
//       </section>;
// }



import { Link } from "react-router-dom";
import "./key-feature.css";

export default function KeyFeature() {
  return (
    <section className="features py-5" style={{ backgroundColor: "#f1f6fb" }}>
      <div className="container text-center">
        <h3 className="fw-bold mb-4 text-left" style={{ textAlign: "left" }}>
          Key Features
        </h3>

        <div className="row g-4">
          {[
            {
              icon: "fa-search",
              color: "#f7931e",
              title: "Easy Search & Filter",
              desc: "Find relevant research papers with smart search and advanced options.",
            },
            {
              icon: "fa-upload",
              color: "#00a693",
              title: "Simple Upload",
              desc: "A simple and secure way to share your research with the academic community.",
            },
            {
              icon: "fa-download",
              color: "#ffc107",
              title: "Downloads & Citation Stats",
              desc: "Easily downloadable with citation insights at a glance.",
            },
            {
              icon: "fa-globe",
              color: "#007bff",
              title: "Open Access for Everyone",
              desc: "Access a wide range of research papers across multiple disciplines.",
            },
          ].map((f, i) => (
            <div className="col-md-3" key={i}>
              <div className="feature-box p-4 shadow-sm bg-white h-100 rounded-3">
                <i
                  className={`fas ${f.icon} fa-2x mb-3`}
                  style={{ color: f.color }}
                ></i>
                <h6 className="fw-bold">{f.title}</h6>
                <p>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ✅ React Router Link to Key Feature Page */}
        <div className="text-center mt-5">
          <Link
            to="/key-features"
            className="text-dark text-decoration-none fw-bold"
          >
            Find out more <span className="ms-1">&rsaquo;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
