import "./about.css";
export default function About() {
  return <section className="about py-5">
        <div className="container d-flex flex-wrap align-items-center">
          <div className="col-lg-6 pe-lg-5">
            <h3 className="fw-bold mb-3">About</h3>
            <p>
              Our Online Research Repository is a platform to make academic
              knowledge accessible to everyone. It allows researchers, students,
              and professionals to publish, share, and discover research papers
              across multiple disciplines.
            </p>
          </div>
          <div className="col-lg-6 text-center mt-4 mt-lg-0">
            <img
              src="/about.jpg"
              alt="About"
              className="img-fluid rounded-3 shadow-sm"
            />
          </div>
        </div>
      </section>;
}
