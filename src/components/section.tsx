
import "./section.css";
export default function Section() {
  return <section className="join bg-light py-5">
        <div className="container d-flex flex-wrap align-items-center">
          <div className="col-lg-6 text-center mb-4 mb-lg-0">
            <img
              src="/join.jpg"
              alt="Join"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <h4 className="fw-bold mb-3">Join Our Research Community</h4>
            <p>
              Be part of a growing network of authors, reviewers, and readers
              who make research accessible to everyone.
            </p>
            <a href="#" className="btn btn-success">
              Join Now
            </a>
          </div>
        </div>
      </section>;
}
