import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import logo from "./../../assets/scanchain.png";

export default function Header() {
  return (
    <header
      className={`${style["border-bottom-grey"]} position-sticky top-0 shadow`}
      style={{ background: "#030404" ,top:"0px", zIndex:"100001"}}
    >
      
      <div
        className={`${style["header-container"]} container d-flex justify-content-center`}
      >
        <NavLink to="/" className="me-4">
          <div className="d-flex gap-1">
            <img src={logo} width="50" height="50" alt="Scanchain Logo" />
            <p className="my-auto text-light">SCANCHAIN</p>
          </div>
        </NavLink>
        <div className="">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${
                isActive ? "fw-bolder text-light" : "fw-normal text-secondary"
              } me-4`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/qr-generator"
            className={({ isActive }) =>
              `${
                isActive ? "fw-bolder text-light" : "fw-normal text-secondary"
              } me-4`
            }
          >
            QR Generator
          </NavLink>
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `${
                isActive ? "fw-bolder text-light" : "fw-normal text-secondary"
              } me-4`
            }
          >
            Analytics
          </NavLink>
        </div>
      </div>
    </header>
  );
}
