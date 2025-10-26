"use client";

import React from "react";
import NavBar from "../../components/nav-bar";
import Footer from "../../components/footer";
import "./field-page.css";
import {
  FaLeaf,
  FaLaptopCode,
  FaCogs,
  FaHeartbeat,
  FaFlask,
  FaUsers,
  FaAtom,
  FaDna,
  FaDatabase,
  FaRobot,
  FaBolt,
  FaPalette,
} from "react-icons/fa";

const fields = [
  {
    icon: <FaDna />,
    title: "Life Sciences",
    desc: "Explore genetics and modern technology.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Computer Science",
    desc: "Dive into AI, software, and data-driven innovation.",
  },
  {
    icon: <FaCogs />,
    title: "Engineering",
    desc: "Discover systems and cutting-edge design.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Medicine & Health",
    desc: "Read research advancing global healthcare.",
  },
  {
    icon: <FaLeaf />,
    title: "Environmental Science",
    desc: "Learn about sustainability and theoretical discoveries.",
  },
  {
    icon: <FaUsers />,
    title: "Social Sciences",
    desc: "Understand human behavior and society.",
  },
  {
    icon: <FaAtom />,
    title: "Physics",
    desc: "Investigate matter, motion, and the universe.",
  },
  {
    icon: <FaFlask />,
    title: "Biotechnology",
    desc: "Learn how biology meets technology.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Science",
    desc: "Discover systems and cutting-edge design.",
  },
  {
    icon: <FaRobot />,
    title: "Artificial Intelligence",
    desc: "Discover innovations in machine automation.",
  },
  {
    icon: <FaBolt />,
    title: "Renewable Energy",
    desc: "Learn about sustainability and clean energy.",
  },
  {
    icon: <FaPalette />,
    title: "Visual Arts & Media",
    desc: "Explore creativity through visual stories and media.",
  },
];

const ExploreByField: React.FC = () => {
  return (
    <>
      <NavBar />
      <section className="explore-section">
        <div className="container">
          <h2 className="section-title">Explore by Field</h2>
          <p className="section-subtitle">
            Discover popular research areas and dive into topics that interest you most.
          </p>

          <div className="row g-4">
            {fields.map((field, index) => (
              <div
                className="col-lg-4 col-md-6 col-sm-12 d-flex"
                key={index}
              >
                <div className="explore-card p-4 bg-white text-center rounded-4 shadow-sm w-100">
                  <div className="icon mb-3">{field.icon}</div>
                  <h5 className="fw-bold">{field.title}</h5>
                  <p className="text-muted small">{field.desc}</p>
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

export default ExploreByField;
