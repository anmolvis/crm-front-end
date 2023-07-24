import React from "react";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LinkIcon from "@mui/icons-material/Link";
import ReceiptIcon from "@mui/icons-material/Receipt";
import LogoutIcon from "@mui/icons-material/Logout";

// CSS
import "./NavBar.scss";
import { Logo } from "../../../../Images";

const height = window.innerHeight - 141;

const NavBar = () => {
  return (
    <div className="navigation-bar">
      <div className="logo-section">
        <img src={Logo} alt="compnay-logo" />
      </div>

      <div className="menu-items" style={{ height: height }}>
        <div className="sections">
          <h3>Admin Section</h3>
          <Link to="/dashboard">
            <div className="menu-item-image">
              <DashboardIcon fontSize="inherit" />
            </div>
            <div className="menu-item-text">
              <p>Dashboard</p>
            </div>
          </Link>
        </div>
        <div className="sections">
          <h3>Employee Section</h3>
          <Link to="/payment-links">
            <div className="menu-item-image">
              <LinkIcon fontSize="inherit" />
            </div>
            <div className="menu-item-text">
              <p>Payment Links</p>
            </div>
          </Link>
          <Link to="/transactions">
            <div className="menu-item-image">
              <ReceiptIcon fontSize="inherit" />
            </div>
            <div className="menu-item-text">
              <p>Transactions</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="menu-logout">
        <button>
          <LogoutIcon /> Logout
        </button>
      </div>
    </div>
  );
};

export default NavBar;
