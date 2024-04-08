const ContactPage = () => {
  return (
    <>
      <div
        className="page-wrapper"
        style={{
          backgroundColor: "black",
        }}
      >
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
            <h2>Contact Us</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Contact Us</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Contact Info */}
        <section className="contact-info">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Info Block One */}
              <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="info-block_one-inner">
                  <div className="info-block_one-icon">
                    <i className="icon-phone" />
                  </div>
                  <h4>Call us on</h4>
                  <a href="tel:+415-864-8728">+415-864-8728</a> <br />
                  <a href="tel:+415-864-8729">+415-864-8729</a>
                </div>
              </div>
              {/* Info Block One */}
              <div className="info-block_one active col-lg-4 col-md-6 col-sm-12">
                <div className="info-block_one-inner">
                  <div className="info-block_one-icon">
                    <i className="icon-envelope" />
                  </div>
                  <h4>Email us</h4>
                  <a href="../../cdn-cgi/l/email-protection.html#b9">
                    <span
                      className="__cf_email__"
                      data-cfemail="ee9d9b9e9e819c9aae8c9c8f87808bc08d8183"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>{" "}
                  <br />
                  <a href="../../cdn-cgi/l/email-protection.html#d7">
                    <span
                      className="__cf_email__"
                      data-cfemail="01626e6f7560627541637360686f642f626e6c"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>
                </div>
              </div>
              {/* Info Block One */}
              <div className="info-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="info-block_one-inner">
                  <div className="info-block_one-icon">
                    <i className="icon-map" />
                  </div>
                  <h4>Our location</h4>
                  <div className="text">
                    1426 Center StreetBend, OR <br /> 97702, California, USA
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Faq One */}
        {/* Team Detail Form */}
        <section className="team-detail_form">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                {/* Sec Title */}
                <div className="sec-title style-four">
                  <div className="sec-title_title">Contact me</div>
                  <h2 className="sec-title_heading">
                    Connect with us for <span>assistance</span>
                  </h2>
                  <div className="sec-title_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing <br />{" "}
                    elit Ut et massa Aliquam in hendrerit urna.
                  </div>
                </div>
                {/* Social Box */}
                <div className="contact-social_box">
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
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <div className="default-form contact-form">
                  <form
                    method="post"
                    action="index%EF%B9%96message=Failed.html"
                    id="contact-form"
                  >
                    <div className="row clearfix">
                      {/*Form Group*/}
                      <div className="form-group col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="name"
                          defaultValue=""
                          placeholder="Name"
                          required=""
                        />
                      </div>
                      {/*Form Group*/}
                      <div className="form-group col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="email"
                          name="email"
                          defaultValue=""
                          placeholder="Email"
                          required=""
                        />
                      </div>
                      <div className="form-group col-lg-6 col-md-6 col-sm-6">
                        <input
                          type="text"
                          name="phone"
                          defaultValue=""
                          placeholder="Phone"
                          required=""
                        />
                      </div>
                      {/*Form Group*/}
                      <div className="form-group col-lg-6 col-md-6 col-sm-6">
                        <select name="country" className="custom-select-box">
                          <option>Select service</option>
                          <option>Service 01</option>
                          <option>Service 02</option>
                          <option>Service 03</option>
                        </select>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          className=""
                          name="message"
                          placeholder="Type comment here*"
                          defaultValue={""}
                        />
                      </div>
                      <div className="form-group col-lg-12 col-md-12 col-sm-12">
                        <button
                          type="button"
                          className="template-btn btn-style-one"
                        >
                          <span className="btn-wrap">
                            <span className="text-one">Send now</span>
                            <span className="text-two">Send now</span>
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Detail Form */}
        {/* Map One */}
        <section className="map-one">
          <div className="auto-container">
            <div className="map-one_map">
              <iframe
                width={820}
                height={560}
                id="gmap_canvas"
                src="https://maps.google.com/maps?q=636+5th+Ave%2C+New+York&t=&z=18&ie=UTF8&iwloc=&output=embed"
              />
            </div>
          </div>
        </section>
        {/* End Map One */}
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

export default ContactPage;
