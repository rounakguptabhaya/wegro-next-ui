const ResetPassawordPage = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Page Title */}
        <section className="page-title">
          <div
            className="page-title-icon"
            style={{
              backgroundImage: "url(images/icons/page-title_icon-1.png)",
            }}
          />
          <div
            className="page-title-icon-two"
            style={{
              backgroundImage: "url(images/icons/page-title_icon-2.png)",
            }}
          />
          <div
            className="page-title-shadow"
            style={{
              backgroundImage: "url(images/background/page-title-1.png)",
            }}
          />
          <div
            className="page-title-shadow_two"
            style={{
              backgroundImage: "url(images/background/page-title-2.png)",
            }}
          />
          <div className="auto-container">
            <h2>Reset password</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Reset password</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Register One */}
        <section className="register-one">
          <div className="auto-container">
            <div className="inner-container">
              <h3>Reset password</h3>
              <div className="text">
                Your email address will not be published.
              </div>
              {/* Register Form */}
              <div className="register-form">
                <form method="post" action="/contact">
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="email"
                      name="text"
                      placeholder=""
                      required=""
                    />
                  </div>
                  <div className="form-group">
                    {/* Button Box */}
                    <button
                      type="submit"
                      className="btn-style-one submit-btn template-btn"
                    >
                      <span className="btn-wrap">
                        <span className="text-one">Submit now</span>
                        <span className="text-two">Submit now</span>
                      </span>
                    </button>
                  </div>
                  <div className="form-group">
                    <div className="creat-account">
                      Back to <a href="/login">login</a>
                    </div>
                  </div>
                </form>
              </div>
              {/* End Default Form */}
            </div>
          </div>
        </section>
        {/* End Register One */}
        {/* CTA One */}
        <section className="cta-one style-two">
          <div
            className="cta-one_shadow"
            style={{
              backgroundImage: "url(images/background/cta-shadow.png)",
            }}
          />
          <div className="auto-container">
            <div className="inner-container">
              <div
                className="cta-icon_one"
                style={{
                  backgroundImage: "url(images/icons/cta-icon-1.png)",
                }}
              />
              <div
                className="cta-icon_two"
                style={{
                  backgroundImage: "url(images/icons/cta-icon-2.png)",
                }}
              />
              <div className="cta-one_card">
                <img src="images/icons/cta-card.png" alt="" />
              </div>
              <div className="row clearfix">
                {/* Column */}
                <div className="cta-one_title-column col-lg-6 col-md-12 col-sm-12">
                  <div className="cta-one_title-outer">
                    <h2 className="cta-one_title">
                      Craft your next great <span>content now.</span>
                    </h2>
                    <div className="cta-one_button">
                      <a href="/about" className="template-btn btn-style-three">
                        <span className="btn-wrap">
                          <span className="text-one">Get started free</span>
                          <span className="text-two">Get started free</span>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="cta-one_image-column col-lg-6 col-md-12 col-sm-12">
                  <div className="cta-one_image-outer">
                    <div className="cta-one_cards">
                      <img src="images/icons/cta-cards.png" alt="" />
                    </div>
                    <div className="image">
                      <img src="images/resource/cta.png" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End CTA One */}
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
              {/* Widgets Section */}
              <div className="widgets-section">
                <div className="row clearfix">
                  {/* Big Column */}
                  <div className="big-column col-lg-5 col-md-12 col-sm-12">
                    <div className="footer-newsletter">
                      <h5 className="footer-title">Newsletter</h5>
                      <div className="footer-newsletter_text">
                        Lorem ipsum dolor sit amet consectetur adipiscing vitae
                        mattis tellus. Nullam quis mattis.
                      </div>
                      <div className="newsletter-box">
                        <form method="post" action="/contact">
                          <div className="form-group">
                            <span className="icon fa-regular fa-envelope fa-fw" />
                            <input
                              type="email"
                              name="search-field"
                              defaultValue=""
                              placeholder="Enter your mail"
                              required=""
                            />
                            <button
                              type="submit"
                              className="template-btn btn-style-one"
                            >
                              <span className="btn-wrap">
                                <span className="text-one">Subscribe</span>
                                <span className="text-two">Subscribe</span>
                              </span>
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* Big Column */}
                  <div className="big-column col-lg-7 col-md-12 col-sm-12">
                    <div className="footer-lists_outer">
                      <div className="row clearfix">
                        {/* Column */}
                        <div className="column col-lg-5 col-md-4 col-sm-6">
                          <h5 className="footer-title">Services</h5>
                          <ul className="footer-pages_list">
                            <li>
                              <a href="#">AI-powered copywriting</a>
                            </li>
                            <li>
                              <a href="#">Blog post generation</a>
                            </li>
                            <li>
                              <a href="#">Social media content</a>
                            </li>
                            <li>
                              <a href="#">Product descriptions</a>
                            </li>
                            <li>
                              <a href="#">Email campaigns</a>
                            </li>
                            <li>
                              <a href="#">Copy writings</a>
                            </li>
                            <li>
                              <a href="#">SEO specialist</a>
                            </li>
                          </ul>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-3 col-md-4 col-sm-6">
                          <h5 className="footer-title">resources</h5>
                          <ul className="footer-pages_list">
                            <li>
                              <a href="#">Blog</a>
                            </li>
                            <li>
                              <a href="#">FAQs</a>
                            </li>
                            <li>
                              <a href="#">Help center</a>
                            </li>
                            <li>
                              <a href="#">case studies</a>
                            </li>
                            <li>
                              <a href="#">whitepapers</a>
                            </li>
                            <li>
                              <a href="#">Services</a>
                            </li>
                          </ul>
                        </div>
                        {/* Column */}
                        <div className="column col-lg-4 col-md-4 col-sm-6">
                          <h5 className="footer-title">about us</h5>
                          <ul className="footer-pages_list">
                            <li>
                              <a href="#">Our story</a>
                            </li>
                            <li>
                              <a href="#">Team</a>
                            </li>
                            <li>
                              <a href="#">Careers</a>
                            </li>
                            <li>
                              <a href="#">Testimonials</a>
                            </li>
                            <li>
                              <a href="#">Error 404</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
      {/* End PageWrapper */}
      <div className="progress-wrap">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>
    </>
  );
};

export default ResetPassawordPage;
