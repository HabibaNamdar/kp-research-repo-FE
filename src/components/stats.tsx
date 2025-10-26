import "./stats.css";

export default function Stats() {
  return <section className="stats text-center py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <i
                className="fas fa-users fa-3x"
                style={{ color: "#F7931E" }}
              ></i>
              <h4 className="fw-bold mt-2" style={{ color: "#000" }}>
                23M+
              </h4>
              <p>Total Users</p>
            </div>
            <div className="col-md-4">
              <i
                className="fas fa-file-alt fa-3x"
                style={{ color: "#FFC107" }}
              ></i>
              <h4 className="fw-bold mt-2" style={{ color: "#000" }}>
                109K+
              </h4>
              <p>Total Publications</p>
            </div>
            <div className="col-md-4">
              <i
                className="fas fa-id-card fa-3x"
                style={{ color: "#00A693" }}
              ></i>
              <h4 className="fw-bold mt-2" style={{ color: "#000" }}>
                80M+
              </h4>
              <p>Total Registered</p>
            </div>
          </div>
        </div>
      </section>;
}
