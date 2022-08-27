import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className=" text-center text-white mt-2">
      <div className="container p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-dark btn-floating m-1 icon-fb"
            href="#!"
            role="button"
          >
            <i className="fab fa-facebook-f"></i>
          </a>

          <a
            className="btn btn-dark btn-floating m-1 icon-twitter"
            href="#!"
            role="button"
          >
            <i className="fab fa-twitter"></i>
          </a>

          <a
            className="btn btn-dark btn-floating m-1 icon-google"
            href="#!"
            role="button"
          >
            <i className="fab fa-google"></i>
          </a>

          <a
            className="btn  btn-dark btn-floating m-1 icon-ig"
            href="#!"
            role="button"
          >
            <i className="fab fa-instagram"></i>
          </a>

          <a
            className="btn btn-dark  btn-floating m-1 icon-link"
            href="#!"
            role="button"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>

          <a
            className="btn btn-dark btn-floating m-1 icon-git"
            href="#!"
            role="button"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 footer2">
        © 2022 Copyright : Mr. Iván Escribano
      </div>
    </footer>
  );
};

export default Footer;
