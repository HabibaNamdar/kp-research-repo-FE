import "./footer.css";
export default function Footer() {
  return <footer
        className="footer text-white py-4"
        style={{ backgroundColor: "#135c7a" }}
      >
        <div className="container">
          <div className="row">
            {/* Quick Links */}
            <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Quick Links</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Browse
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Upload Research
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Authors
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div className="col-md-4 col-lg-3 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Resources</h6>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Help Center
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block mb-1"
                  >
                    Open Access Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white text-decoration-none d-block"
                  >
                    Privacy & Terms
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-md-4 col-lg-6 mb-4 mb-md-0">
              <h6 className="fw-bold mb-3">Contact</h6>
              <p className="text-white mb-1">Email: info@repository.org</p>
              <p className="text-white mb-3">Phone: +123 456 789</p>

              <h6 className="fw-bold mb-2">Follow Us</h6>
              <div className="d-flex align-items-center">
                <a href="#" className="text-white me-3">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#" className="text-white me-3">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Separator */}
          <hr className="my-4 border-light" />

          {/* Call to Action */}
          <div className="text-center pb-2">
            <p className="fw-bold mb-0">
              Start sharing your research today. Join now!
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="text-center small text-white-50 pt-2 pb-2">
            <p className="mb-0">
              Copyright © 2025{" "}
              <span className="text-white">Research Repository</span>
              <a href="#" className="text-white-50 text-decoration-none ms-3">
                Terms & Condition
              </a>
              <a href="#" className="text-white-50 text-decoration-none ms-3">
                privacy Policy
              </a>
            </p>
          </div>
        </div>
      </footer>;
}
