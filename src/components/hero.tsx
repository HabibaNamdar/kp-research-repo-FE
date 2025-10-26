import "./hero.css"

export default function Hero() {
  return (
    // Increase padding and ensure the section is visually distinct
    <section className="hero py-5" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        {/* Use d-flex and align-items-center to vertically align content */}
        <div className="row align-items-center">
          
          {/* Left Column: Text Content and Call-to-Action Buttons */}
          <div className="col-lg-6 order-2 order-lg-1">
            {/* Larger, more impactful heading */}
            <h1 className="mb-4 hero-heading">
            Discover & Share Research Papers Online
         </h1>
            
            {/* Paragraph Text with slightly larger size */}
            <p className="lead hero-subheading mb-5">
          An open repository for research to publish and access knowledge freely.
      </p>
            
            {/* Primary Button: Browse Publications (Custom Sizing) */}
<a href="#" className="btn text-white" 
    style={{ 
        backgroundColor: '#115d7e',
        borderRadius: '5px', // Added to match the radius of the second button
        padding: '10px',     // Set padding to 10px to match the second button
        marginRight: '1rem'  // Replaces me-3 class for consistency with inline style
    }}>
    Browse Publications
</a>

{/* Secondary Button: Upload Paper (Custom Sizing) */}
<a 
    href="#" 
    className="btn text-white" 
    style={{
        backgroundColor: '#F68212',
        border: 'none',
        borderRadius: '5px',
        padding: '10px',
    }}>
    Upload Paper
</a>
          </div>
          
          {/* Right Column: Image */}
          <div className="col-lg-6 text-center order-1 order-lg-2 mt-4 mt-lg-0">
            <img
              src="/hero.jpg"
              className="img-fluid rounded-3 shadow-lg" // Added shadow-lg for more depth
              alt="Illustration of a person reading or collaborating on a research paper"
              loading="eager" // Important for above-the-fold image
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}