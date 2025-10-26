// import React from "react";
// import "./contact-page.css";
// import NavBar from "../../components/nav-bar";

// const Contact: React.FC = () => {
//   return (
//     <section className="contact-section py-5">
//       <div className="container">
//         {/* Heading */}
//         <div className="row mb-5 align-items-center">
//           <div className="col-lg-6 mb-4 mb-lg-0">
//             <h3 className="fw-bold mb-3">Get in Touch</h3>
//             <p className="text-secondary">
//               We’d love to hear from you! Reach out with any questions,
//               feedback, or collaboration ideas.
//             </p>
//           </div>
//           <div className="col-lg-6 text-center">
//             <iframe
//               title="Google Map"
//               className="map-frame"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.632243302467!2d67.03725377531055!3d24.841522277940577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33df8b71ab9bb%3A0x22a6e19b4d4ffcb0!2sKarachi%20Pakistan!5e0!3m2!1sen!2s!4v1714459674084!5m2!1sen!2s"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>
//         </div>

//         {/* Contact Form */}
//         <form className="contact-form mb-5">
//           <div className="row g-3">
//             <div className="col-md-6">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Full Name"
//               />
//             </div>
//             <div className="col-md-6">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email Address"
//               />
//             </div>
//             <div className="col-12">
//               <input type="text" className="form-control" placeholder="Subject" />
//             </div>
//             <div className="col-12">
//               <textarea
//                 className="form-control"
//                 placeholder="Message"
//                 rows={4}
//               ></textarea>
//             </div>
//             <div className="col-12 text-end">
//               <button type="submit" className="btn btn-primary">
//                 Send Message
//               </button>
//             </div>
//           </div>
//         </form>

//         {/* Contact Info */}
//         <div className="row contact-info">
//           <div className="col-md-6 mb-4 mb-md-0">
//             <h6 className="fw-bold mb-3">Contact Information</h6>
//             <p className="mb-1">
//               <i className="fas fa-envelope me-2"></i> info@repository.org
//             </p>
//             <p className="mb-1">
//               <i className="fas fa-phone me-2"></i> +123 456 789
//             </p>
//             <p className="mb-2 fw-bold">Follow Us</p>
//             <div className="d-flex gap-3">
//               <a href="#"><i className="fab fa-facebook-f text-dark"></i></a>
//               <a href="#"><i className="fab fa-twitter text-dark"></i></a>
//               <a href="#"><i className="fab fa-linkedin-in text-dark"></i></a>
//             </div>
//           </div>

//           <div className="col-md-6">
//             <h6 className="fw-bold mb-3">Need help with something specific?</h6>
//             <ul className="list-unstyled">
//               <li>
//                 <a href="#" className="text-primary text-decoration-none">
//                   FAQ Page
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-primary text-decoration-none">
//                   Upload Guidelines
//                 </a>
//               </li>
//               <li>
//                 <a href="#" className="text-primary text-decoration-none">
//                   Report an Issue
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>

//         {/* Footer Message */}
//         <div className="text-center mt-5">
//           <p className="text-muted small">Thanks for contacting us</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;



import React from "react";
import "./contact-page.css";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer"; // ✅ Added Footer import

const Contact: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      <section className="contact-section py-5">
        <div className="container">
          {/* Heading */}
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h3 className="fw-bold mb-3 contact-heading">Get in Touch</h3>

              <p className="text-secondary contact-paragraph">
               We’d love to hear from you! Reach out with any questions,
               feedback, or collaboration ideas.
               </p>
            </div>
            <div className="col-lg-6 text-center">
            <img
            src="/map.jpg"
           /* Replace 'rounded-3' and add the custom class 'map-image' */
           className="img-fluid shadow-lg map-image" 
           alt="Illustration of a person reading or collaborating on a research paper"
           loading="eager"
          />
          </div>

          </div>

          {/* Contact Form */}
          <form className="contact-form mb-5">
            <div className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <textarea
                  className="form-control"
                  placeholder="Message"
                  rows={4}
                ></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </form>

          {/* Contact Info */}
          <div className="row contact-info">
            <div className="col-md-6 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Contact Information</h6>
              <p className="contact-info-text mb-1">
                <i className="fas fa-envelope me-2"></i> info@repository.org
              </p>
              <p className="mb-1">
                <i className="fas fa-phone me-2"></i> +123 456 789
              </p>
              <p className="mb-2 fw-bold">Follow Us</p>
              <div className="d-flex gap-3">
                <a href="#">
                  <i className="fab fa-facebook-f text-dark"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter text-dark"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in text-dark"></i>
                </a>
              </div>
            </div>

            <div className="col-md-6">
              <h6 className="mb-3 help-heading">
                Need help with something specific?
              </h6>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    FAQ Page
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    Upload Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className="text-primary text-decoration-none">
                    Report an Issue
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Message */}
          <div className="text-center mt-5">
            <p className="thank-you-message">Thanks for contacting us</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Contact;
