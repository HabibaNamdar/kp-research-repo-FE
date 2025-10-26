import "./search-bar.css";

export default function SearchBar() {
  return <section className="py-5" style={{ backgroundColor: '#f5f7fa' /* Light background color above the box */ }}>
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8 col-md-10">
        {/* The main white card/box with shadow and rounded corners */}
        <div className="p-4 bg-white rounded-3 shadow-sm">
          <form className="d-flex">
            
            {/* Input Group to integrate the search icon and button easily */}
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg border-0 ps-4"
                placeholder="🔍 Search by title, author or keyword"
                aria-label="Search by title, author or keyword"
                style={{ 
                  borderRadius: '0.375rem 0 0 0.375rem', /* Rounded left corner */
                  boxShadow: 'none' /* Remove default focus glow */
                }}
              />
              <button 
                className="btn btn-lg text-white" 
                type="submit"
                style={{ 
                  backgroundColor: '#115d7e', /* Dark Teal/Blue button color */
                  borderRadius: '0 0.375rem 0.375rem 0' /* Rounded right corner */
                }}>
                Search
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</section>;
}
