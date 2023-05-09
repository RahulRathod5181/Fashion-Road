import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/adminDashboard" className="navbar-brand">
            Dashboard
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/adminAddProduct"
                className="nav-link active"
                aria-current="page"
              >
                Add Product
              </Link>
              <Link
                to="/adminProduct"
                className="nav-link active"
                aria-current="page"
              >
                Product List
              </Link>
              {/* <Link to="/users" className="nav-link active" aria-current="page" >
                Users
              </Link>
              <Link to="/orders" className="nav-link active" aria-current="page" >
                Orders
              </Link> */}
              <Link to="/" className="nav-link active" aria-current="page">
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default AdminNavbar;
