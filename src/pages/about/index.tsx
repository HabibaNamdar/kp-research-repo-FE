import React from "react";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import "./about-page.css";

const About: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* About Section */}
      <section className="about-section py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="fw-bold mb-3">About</h2>
              <p className="text-secondary">
                Our Online Research Repository is a digital platform designed to
                make academic knowledge accessible to everyone. It allows
                researchers, students, and professionals to publish, share, and
                discover research papers across multiple disciplines.
              </p>
            </div>
            <div className="col-lg-6 text-center">
              <img
                src="/about-banner.jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="About us illustration"
                loading="eager"
              />
            </div>
          </div>

          {/* Mission Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <img
                src="/mission.jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="Team in meeting"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <h5 className="fw-bold">Our Mission</h5>
              <p className="text-secondary">
                To make academic research accessible to everyone. We aim to
                simplify how research is shared, discovered, and cited, helping
                authors gain visibility and readers find trusted knowledge
                efficiently.
              </p>
            </div>
          </div>

          {/* Vision Section */}
          <div className="row align-items-center mb-5">
            <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
              <img
                src="/vision.jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="Vision lens photo"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6 order-lg-1">
              <h5 className="fw-bold">Our Vision</h5>
              <p className="text-secondary">
                We envision a world where research is open, connected, and
                impactful — where every discovery reaches the people who can use
                it to make a difference.
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-5">
            <h4 className="fw-bold mb-4">Meet Our Team</h4>
            <div className="row justify-content-center g-4">
              <div className="col-md-3">
                <img
                  src="/team1.jpg"
                  alt="Jane Williams"
                  className="rounded-circle mb-3 shadow-sm"
                  width="120"
                  height="120"
                />
                <h6 className="fw-bold">Jane Williams</h6>
                <p className="text-muted small">Founder & CEO</p>
              </div>
              <div className="col-md-3">
                <img
                  src="/team2.jpg"
                  alt="Emily Parker"
                  className="rounded-circle mb-3 shadow-sm"
                  width="120"
                  height="120"
                />
                <h6 className="fw-bold">Emily Parker</h6>
                <p className="text-muted small">Community Manager</p>
              </div>
              <div className="col-md-3">
                <img
                  src="/team3.jpg"
                  alt="Anna Brown"
                  className="rounded-circle mb-3 shadow-sm"
                  width="120"
                  height="120"
                />
                <h6 className="fw-bold">Anna Brown</h6>
                <p className="text-muted small">Technical Lead</p>
              </div>
            </div>
          </div>

          {/* Join Section */}
          <div className="text-center join-section py-4">
            <h4 className="fw-bold mb-3">Join Our Community</h4>
            <p className="text-secondary mb-4">
              Be part of a global network of researchers, authors, and readers
              who believe in open knowledge and collaboration. Share your work,
              connect with peers, and explore new ideas together.
            </p>
            <button className="btn btn-custom-color px-4">Join Now</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default About;
