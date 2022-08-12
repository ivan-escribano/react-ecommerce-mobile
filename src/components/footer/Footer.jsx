import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer class=" text-center text-white mt-2">
      <div class="container p-4 pb-0">
        <section class="mb-4">
          <a
            class="btn btn-dark btn-floating m-1 icon-fb"
            href="#!"
            role="button"
          >
            <i class="fab fa-facebook-f"></i>
          </a>

          <a
            class="btn btn-dark btn-floating m-1 icon-twitter"
            href="#!"
            role="button"
          >
            <i class="fab fa-twitter"></i>
          </a>

          <a
            class="btn btn-dark btn-floating m-1 icon-google"
            href="#!"
            role="button"
          >
            <i class="fab fa-google"></i>
          </a>

          <a
            class="btn  btn-dark btn-floating m-1 icon-ig"
            href="#!"
            role="button"
          >
            <i class="fab fa-instagram"></i>
          </a>

          <a
            class="btn btn-dark  btn-floating m-1 icon-link"
            href="#!"
            role="button"
          >
            <i class="fab fa-linkedin-in"></i>
          </a>

          <a
            class="btn btn-dark btn-floating m-1 icon-git"
            href="#!"
            role="button"
          >
            <i class="fab fa-github"></i>
          </a>
        </section>
      </div>

      <div class="text-center p-3 footer2">
        © 2022 Copyright : Mr. Iván Escribano
      </div>
    </footer>
  );
};

export default Footer;
