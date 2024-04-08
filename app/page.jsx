import Script from "next/script";
import LoginPage from "./login/page";
import HomePage from "./home/page";
import AboutPage from "./about/page";

export default function Home() {
  return (
    <>
      <div className="page-wrapper">
        {/* Cursor */}
        <div className="cursor" />
        <div className="cursor-follower" />
        {/* Cursor End */}
        {/* Preloader */}
        {/* <div className="loader-wrap">
          <div className="preloader">
            <div className="preloader-close">x</div>
            <div id="handle-preloader" className="handle-preloader">
              <div className="animation-preloader">
                <div className="txt-loading">
                  <span data-text-preloader="L" className="letters-loading">
                    L
                  </span>
                  <span data-text-preloader="O" className="letters-loading">
                    O
                  </span>
                  <span data-text-preloader="A" className="letters-loading">
                    A
                  </span>
                  <span data-text-preloader="D" className="letters-loading">
                    D
                  </span>
                  <span data-text-preloader="I" className="letters-loading">
                    I
                  </span>
                  <span data-text-preloader="N" className="letters-loading">
                    N
                  </span>
                  <span data-text-preloader="G" className="letters-loading">
                    G
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Preloader End */}

        {/* <LoginPage /> */}
        <HomePage />
        {/* <AboutPage /> */}
        {/* Main Footer */}
        <footer className="main-footer">
          <div
            className="footer_pattern"
            style={{
              backgroundImage: "url(images/background/footer-pattern.png)",
            }}
          />
          <div className="auto-container">
            <div className="inner-container">
              <div className="widgets-section"></div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="auto-container">
              <div className="inner-container d-flex justify-content-between align-items-center flex-wrap">
                <div className="footer-logo">
                  <a href="/home">
                    <img src="images/logo.svg" alt="" title="" />
                  </a>
                </div>
                <div className="footer-copyright">
                  © 2024 <a href="/home">Braine.</a> All rights reserved.
                </div>
                {/* Social Box */}
                <div className="footer-social_box">
                  <a href="https://facebook.com/">
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                  <a href="https://twitter.com/">
                    <i className="fa-brands fa-twitter" />
                  </a>
                  <a href="https://youtube.com/">
                    <i className="fa-brands fa-youtube" />
                  </a>
                  <a href="https://instagram.com/">
                    <i className="fa-brands fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      <Script src="js/jquery.js"></Script>
      <Script src="js/popper.min.js"></Script>
      <Script src="js/bootstrap.min.js"></Script>
      <Script src="js/appear.js"></Script>
      <Script src="js/parallax.min.js"></Script>
      <Script src="js/tilt.jquery.min.js"></Script>
      <Script src="js/jquery.paroller.min.js"></Script>
      <Script src="js/wow.js"></Script>
      <Script src="js/swiper.min.js"></Script>
      <Script src="js/backtotop.js"></Script>
      <Script src="js/odometer.js"></Script>
      <Script src="js/parallax-scroll.js"></Script>

      <Script src="js/gsap.min.js"></Script>
      <Script src="js/SplitText.min.js"></Script>
      <Script src="js/ScrollTrigger.min.js"></Script>
      <Script src="js/ScrollToPlugin.min.js"></Script>
      <Script src="js/ScrollSmoother.min.js"></Script>

      <Script src="js/touchspin.js"></Script>
      <Script src="js/jquery.marquee.min.js"></Script>
      <Script src="js/magnific-popup.min.js"></Script>
      <Script src="js/nav-tool.js"></Script>
      <Script src="js/jquery-ui.js"></Script>
      <Script src="js/element-in-view.js"></Script>
      <Script src="js/script.js"></Script>
    </>
  );
}
