import React from "react";
import style from "./style.module.scss";

export default function Footer() {
  return (
    <footer
      className={`${style["border-bottom-grey"]} ${style["footer-container"]} shadow text-light w-100`}
    >
      <p>
        @{new Date().getFullYear()} | Created By Rabdeep Singh Kharbanda
      </p>
    </footer>
  );
}
