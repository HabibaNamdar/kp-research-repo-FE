import React from "react";
import NavBar from "../../components/nav-bar";
import Hero from "../../components/hero";
import SearchBar from "../../components/search-bar";
import "./landing-page.css";
import Stats from "../../components/stats";
import Features from "../../components/features";
import KeyFeature from "../../components/key-feature";
import Field from "../../components/field";
import About from "../../components/about";
import Section from "../../components/section";
import Footer from "../../components/footer";

const LandingPage: React.FC = () => {
  return (
    <>
      {/* Navbar */}
      <NavBar />

      {/* Hero Section */}
      <Hero />

      {/* Search Bar */}
      <SearchBar />

      {/* Stats Section */}
      <Stats />

      {/* Featured Publications */}
      <Features />

      {/* Key Features */}
      <KeyFeature />

      {/* Explore by Field */}
      <Field />

      {/* About */}
      <About />

      {/* Join Section */}
      <Section />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage;
