const TeamDetailPage = () => {
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
            <h2>Team detail</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Team detail</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Team Detail */}
        <section className="team-detail">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Team Block One */}
              <div className="team-detail_image-column col-lg-6 col-md-12 col-sm-12">
                <div className="team-detail_image-outer">
                  <div className="team-detail_image">
                    <img src="images/resource/team-7.jpg" alt="" />
                  </div>
                </div>
              </div>
              {/* Team Block One */}
              <div className="team-detail_content-column col-lg-6 col-md-12 col-sm-12">
                <div className="team-detail_content-outer">
                  <div className="team-detail_subtitle">About me</div>
                  <h2 className="team-detail_title">Elliot S. Acevedo</h2>
                  <div className="team-detail_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut e
                    massa Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                    Vestibulum auctor ornare leo, non suscipit magna.
                  </div>
                  <div className="team-detail_info-outer">
                    <div className="row clearfix">
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-6">
                        <div className="team-detail_info">
                          email
                          <span>
                            <a
                              href="../../cdn-cgi/l/email-protection.html"
                              className="__cf_email__"
                              data-cfemail="63140f0f0a0c17230111020a0d064d000c0e"
                            >
                              [email&nbsp;protected]
                            </a>
                          </span>
                        </div>
                        <div className="team-detail_info">
                          Location:
                          <span>Burnside, UT 84501</span>
                        </div>
                      </div>
                      {/* Column */}
                      <div className="column col-lg-6 col-md-6 col-sm-6">
                        <div className="team-detail_info">
                          Phone:
                          <span>02 (908) 480-20</span>
                        </div>
                        <div className="team-detail_info">
                          Experience
                          <span>06+ Years</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-detail_button">
                    <a href="/contact" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Contact me</span>
                        <span className="text-two">Contact me</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Detail */}
        {/* Team Detail Experiance */}
        <section className="team-detail_experiance">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                {/* Sec Title */}
                <div className="sec-title style-four title-anim">
                  <div className="sec-title_title">Experiences</div>
                  <h2 className="sec-title_heading">
                    Explore my personal <span>experiences</span>
                  </h2>
                </div>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="sec-title_text">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                  massa Aliquam in hendrerit urna. Pellentesque sit amet sapien
                  fringilla, mattis l consectetur, ultrices mauris. Maecenas
                  vitae mattis
                </div>
                {/* Skills */}
                <div className="default-skills">
                  {/* Skill Item */}
                  <div className="default-skill-item">
                    <div className="default-skill-title">Patent Law</div>
                    <div className="default-skill-bar">
                      <div className="default-bar-inner">
                        <div
                          className="default-bar progress-line"
                          data-width={86}
                        >
                          <div className="default-skill-percentage" />
                        </div>
                      </div>
                    </div>
                    <div className="default-count-box count-box">
                      <span
                        className="count-text"
                        data-speed={2000}
                        data-stop={86}
                      >
                        0
                      </span>
                      %
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="default-skill-item">
                    <div className="default-skill-title">Trademark</div>
                    <div className="default-skill-bar">
                      <div className="default-bar-inner">
                        <div
                          className="default-bar progress-line"
                          data-width={92}
                        >
                          <div className="default-skill-percentage" />
                        </div>
                      </div>
                    </div>
                    <div className="default-count-box count-box">
                      <span
                        className="count-text"
                        data-speed={2000}
                        data-stop={92}
                      >
                        0
                      </span>
                      %
                    </div>
                  </div>
                  {/* Skill Item */}
                  <div className="default-skill-item">
                    <div className="default-skill-title">Copyright</div>
                    <div className="default-skill-bar">
                      <div className="default-bar-inner">
                        <div
                          className="default-bar progress-line"
                          data-width={80}
                        >
                          <div className="default-skill-percentage" />
                        </div>
                      </div>
                    </div>
                    <div className="default-count-box count-box">
                      <span
                        className="count-text"
                        data-speed={2000}
                        data-stop={80}
                      >
                        0
                      </span>
                      %
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team Detail Experiance */}
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
                    Let's win <span>together</span>
                  </h2>
                  <div className="sec-title_text">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa <br /> Aliquam in hendrerit urna.
                  </div>
                </div>
              </div>
              {/* Column */}
              <div className="column col-lg-6 col-md-12 col-sm-12">
                <div className="default-form">
                  <form method="post" action="index.html">
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
                          <option>Select Service</option>
                          <option>Service 01</option>
                          <option>Service 02</option>
                          <option>Service 03</option>
                        </select>
                      </div>
                      <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                        <textarea
                          className=""
                          name="message"
                          placeholder="Type Comment here*"
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
                      <a href="about" className="template-btn btn-style-three">
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
                        <form method="post" action="contact.html">
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

export default TeamDetailPage;
