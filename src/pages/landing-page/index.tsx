// import React from "react";
// import NavBar from "../../components/nav-bar";
// import Hero from "../../components/hero";
// import SearchBar from "../../components/search-bar";
// import "./landing-page.css";
// import Stats from "../../components/stats";
// import Features from "../../components/features";
// import KeyFeature from "../../components/key-feature";
// import Field from "../../components/field";
// import About from "../../components/about";
// import Section from "../../components/section";
// import Footer from "../../components/footer";

// const LandingPage: React.FC = () => {
//   return (
//     <>
//       {/* Navbar */}
//       <NavBar />

//       {/* Hero Section */}
//       <Hero />

//       {/* Search Bar */}
//       <SearchBar />

//       {/* Stats Section */}
//       <Stats />

//       {/* Featured Publications */}
//       <Features />

//       {/* Key Features */}
//       <KeyFeature />

//       {/* Explore by Field */}
//       <Field />

//       {/* About */}
//       <About />

//       {/* Join Section */}
//       <Section />

//       {/* Footer */}
//       <Footer />
//     </>
//   );
// };

// export default LandingPage;



// import React, { useState } from "react";
// import NavBar from "../../components/nav-bar";
// import Hero from "../../components/hero";
// import SearchBar from "../../components/search-bar";
// import "./landing-page.css";
// import Stats from "../../components/stats";
// import Features from "../../components/features";
// import KeyFeature from "../../components/key-feature";
// import Field from "../../components/field";
// import About from "../../components/about";
// import Section from "../../components/section";
// import Footer from "../../components/footer";
// import SignUpForm from "../sign-up/form";




// const LandingPage: React.FC = () => {
//   const [showSignUp, setShowSignUp] = useState(false);

//   return (
//     <>
//       {/* Navbar with signup toggle */}
//       <NavBar onSignUpClick={() => setShowSignUp(true)} />

//       {/* Hero Section */}
//       <Hero />

//       {/* Search Bar */}
//       <SearchBar />

//       {/* Stats Section */}
//       <Stats />

//       {/* Featured Publications */}
//       <Features />

//       {/* Key Features */}
//       <KeyFeature />

//       {/* Explore by Field */}
//       <Field />

//       {/* About */}
//       <About />

//       {/* Join Section */}
//       <Section />

//       {/* Footer */}
//       <Footer />

//       {/* SignUp Popup */}
//       {showSignUp && (
//         <div className="signup-overlay" onClick={() => setShowSignUp(false)}>
//           <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
//             <SignUpForm onClose={() => setShowSignUp(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LandingPage;


// import React, { useState } from "react";
// import NavBar from "../../components/nav-bar";
// import Hero from "../../components/hero";
// import SearchBar from "../../components/search-bar";
// import "./landing-page.css";
// import Stats from "../../components/stats";
// import Features from "../../components/features";
// import KeyFeature from "../../components/key-feature";
// import Field from "../../components/field";
// import About from "../../components/about";
// import Section from "../../components/section";
// import Footer from "../../components/footer";

// import SignUpForm from "../sign-up/form";
// import LoginForm from "../login/form";


// const LandingPage: React.FC = () => {
//   const [showSignUp, setShowSignUp] = useState(false);
//   const [showLogin, setShowLogin] = useState(false);

//   return (
//     <>
//       {/* Navbar with signup & login toggle */}
//       <NavBar
//         onSignUpClick={() => {
//           setShowSignUp(true);
//           setShowLogin(false);
//         }}
//         onLoginClick={() => {
//           setShowLogin(true);
//           setShowSignUp(false);
//         }}
//       />

//       {/* Main content */}
//       <Hero />
//       <SearchBar />
//       <Stats />
//       <Features />
//       <KeyFeature />
//       <Field />
//       <About />
//       <Section />
//       <Footer />

//       {/* SignUp Popup */}
//       {showSignUp && (
//         <div className="signup-overlay" onClick={() => setShowSignUp(false)}>
//           <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
//             <SignUpForm onClose={() => setShowSignUp(false)} />
//           </div>
//         </div>
//       )}

//       {/* Login Popup */}
//       {showLogin && (
//         <div className="signup-overlay" onClick={() => setShowLogin(false)}>
//           <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
//             <LoginForm onClose={() => setShowLogin(false)} />
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default LandingPage;



import React, { useState } from "react";
import NavBar from "../../components/nav-bar";
import Hero from "../../components/hero";
import SearchBar from "../../components/search-bar";
import Stats from "../../components/stats";
import Features from "../../components/features";
import KeyFeature from "../../components/key-feature";
import Field from "../../components/field";
import About from "../../components/about";
import Section from "../../components/section";
import Footer from "../../components/footer";

import SignUpForm from "../sign-up/form";
import LoginForm from "../login/form";
import "./landing-page.css";

const LandingPage: React.FC = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleSignUpSubmit = (data: any) => {
    console.log("SignUp Data:", data);
    alert("Signup successful! Please log in now.");
    setShowSignUp(false);
    setShowLogin(true); // ✅ Auto-switch to Login popup after signup
  };

  return (
    <>
      <NavBar
        onSignUpClick={() => {
          setShowSignUp(true);
          setShowLogin(false);
        }}
        onLoginClick={() => {
          setShowLogin(true);
          setShowSignUp(false);
        }}
      />

      <Hero />
      <SearchBar />
      <Stats />
      <Features />
      <KeyFeature />
      <Field />
      <About />
      <Section />
      <Footer />

      {/* ✅ SignUp Popup */}
      {showSignUp && (
        <div className="signup-overlay" onClick={() => setShowSignUp(false)}>
          <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
            <SignUpForm
              onSubmit={handleSignUpSubmit}
              onClose={() => setShowSignUp(false)}
            />
          </div>
        </div>
      )}

      {/* ✅ Login Popup */}
      {showLogin && (
        <div className="signup-overlay" onClick={() => setShowLogin(false)}>
          <div className="signup-popup" onClick={(e) => e.stopPropagation()}>
            <LoginForm onClose={() => setShowLogin(false)} />
          </div>
        </div>
      )}
    </>
  );
};

export default LandingPage;
