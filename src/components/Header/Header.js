import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.png";
import notificationImg from "../../images/notification.png";
import profileImg from "../../images/profile.png";

export default function Header() {
  return (
    <div className="sticky-top">
      <nav className="navbar navbar-light bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="" />
          </Link>
          <form className="d-flex">
            <input
              className="form-control me-3"
              style={{ width: "400px" }}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
          <div>
            <img className="mx-5" src={notificationImg} alt="" />
            <img src={profileImg} alt="" />
            <span>
              <i>Shipon</i>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
}
