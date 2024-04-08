const AboutPage = () => {
  return (
    <>
      <div
        className="page-wrapper"
        style={{
          backgroundColor: "black",
        }}
      >
        {/* Cursor */}
        <div className="cursor" />
        <div className="cursor-follower" />
        {/* Cursor End */}

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
            <h2>About us</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>About us</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Story One */}
        <section className="story-one">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Image Column */}
              <div className="story-one_image-column col-lg-6 col-md-12 col-sm-12">
                <div className="story-one_image-outer">
                  <div className="story-one_image">
                    <img src="images/resource/story.png" alt="" />
                  </div>
                </div>
              </div>
              {/* Image Column */}
              <div className="story-one_content-column col-lg-6 col-md-12 col-sm-12">
                <div className="story-one_content-outer">
                  {/* Sec Title */}
                  <div className="sec-title style-four">
                    <div className="sec-title_title">Our story</div>
                    <h2 className="sec-title_heading">
                      Navigating the frontier of our <span>intelligence</span>
                    </h2>
                  </div>
                  <p>
                    The narrative unfolds as we delve into the inception of our
                    company, tracing the roots of our vision for a future
                    intertwined with artificial intelligence. Through the lens
                    of this captivating chronicle, readers will witness the
                    trials and triumphs that have shaped. the story weaves
                    together the intricate threads of innovation
                  </p>
                  <p>
                    Through anecdotes and case studies, readers will witness the
                    tangible difference our innovations make in fields ranging
                    from healthcare and finance to education and beyond.
                  </p>
                  <div className="story-one_button">
                    <a href="#" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Know more</span>
                        <span className="text-two">Know more</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Assistance One */}
        {/* Value One */}
        <section className="value-one">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-four centered">
              <div className="sec-title_title">core value</div>
              <h2 className="sec-title_heading">
                Unveiling our <span>core values</span> <br /> for lasting
                impact.
              </h2>
            </div>
            <div className="row clearfix">
              {/* Value Block One */}
              <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="value-block_one-inner">
                  <div className="value-block_one-icon">
                    <i className="icon-users-4" />
                  </div>
                  <h5 className="value-block_one-title">People</h5>
                  <div className="value-block_one-text">
                    The impact of our AI solutions on the broader world forms a
                    central theme, highlighting real-world applications and the
                    positive changes
                  </div>
                </div>
              </div>
              {/* Value Block One */}
              <div className="value-block_one active col-lg-4 col-md-6 col-sm-12">
                <div className="value-block_one-inner">
                  <div className="value-block_one-icon">
                    <i className="icon-bulb1" />
                  </div>
                  <h5 className="value-block_one-title">Innovation</h5>
                  <div className="value-block_one-text">
                    The impact of our AI solutions on the broader world forms a
                    central theme, highlighting real-world applications and the
                    positive changes
                  </div>
                </div>
              </div>
              {/* Value Block One */}
              <div className="value-block_one col-lg-4 col-md-6 col-sm-12">
                <div className="value-block_one-inner">
                  <div className="value-block_one-icon">
                    <i className="fa-solid fa-bullseye fa-fw" />
                  </div>
                  <h5 className="value-block_one-title">Mission</h5>
                  <div className="value-block_one-text">
                    The impact of our AI solutions on the broader world forms a
                    central theme, highlighting real-world applications and the
                    positive changes
                  </div>
                </div>
              </div>
            </div>
            {/* Button Box */}
            <div className="value-one_button text-center">
              <a href="#" className="template-btn btn-style-two">
                <span className="btn-wrap">
                  <span className="text-one">Join braine today</span>
                  <span className="text-two">Join braine today</span>
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* End Value One */}
        {/* Team One */}
        <section className="team-one">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Title Column */}
              <div className="team-one_title-column col-lg-4 col-md-12 col-sm-12">
                <div className="team-one_title-outer">
                  {/* Sec Title */}
                  <div className="sec-title style-four">
                    <div className="sec-title_title">Our team</div>
                    <h2 className="sec-title_heading">
                      Team behind the <span>innovation</span>
                    </h2>
                    <div className="sec-title_text">
                      Lorem ipsum dolor sit amet consectetur adipiscing elit Ut
                      et massa Aliquam hendrerit urna.Maecenas vitae mattis
                      tellus.
                    </div>
                  </div>
                  {/* If we need navigation buttons */}
                  <div className="team-one_arrows">
                    <div className="team_carousel-prev fa-solid fa-angle-left fa-fw" />
                    <div className="team_carousel-next fa-solid fa-angle-right fa-fw" />
                  </div>
                </div>
              </div>
              {/* Team Column */}
              <div className="team-one_team-column col-lg-8 col-md-12 col-sm-12">
                <div className="team-one_team-outer">
                  <div className="team-carousel swiper-container">
                    <div className="swiper-wrapper">
                      {/* Slide */}
                      <div className="swiper-slide">
                        {/* Team Block One */}
                        <div className="team-block_one">
                          <div className="team-block_one-inner">
                            <div className="team-block_one-image">
                              <a href="/-detail">
                                <img src="images/resource/team-1.jpg" alt="" />
                              </a>
                            </div>
                            <div className="team-block_one-content">
                              <h4 className="team-block_one-title">
                                <a href="team-detail">Elliot S. Acevedo</a>
                              </h4>
                              <div className="team-block_one-designation">
                                Founder
                              </div>
                              {/* Social Box */}
                              <div className="team-block_one-socials">
                                <a href="https://facebook.com/">
                                  <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a href="https://twitter.com/">
                                  <i className="fa-brands fa-twitter" />
                                </a>
                                <a href="https://linkedin.com/">
                                  <i className="fa-brands fa-linkedin-in" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Slide */}
                      <div className="swiper-slide">
                        {/* Team Block One */}
                        <div className="team-block_one">
                          <div className="team-block_one-inner">
                            <div className="team-block_one-image">
                              <a href="team-detail">
                                <img src="images/resource/team-2.jpg" alt="" />
                              </a>
                            </div>
                            <div className="team-block_one-content">
                              <h4 className="team-block_one-title">
                                <a href="team-detail">Elliot S. Acevedo</a>
                              </h4>
                              <div className="team-block_one-designation">
                                Founder
                              </div>
                              {/* Social Box */}
                              <div className="team-block_one-socials">
                                <a href="https://facebook.com/">
                                  <i className="fa-brands fa-facebook-f" />
                                </a>
                                <a href="https://twitter.com/">
                                  <i className="fa-brands fa-twitter" />
                                </a>
                                <a href="https://linkedin.com/">
                                  <i className="fa-brands fa-linkedin-in" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Team One */}
        {/* Testimonial Three */}
        <section className="testimonial-three">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-four centered">
              <div className="sec-title_title">Success Stories</div>
              <h2 className="sec-title_heading">
                Our clients share their <br /> fitness <span>journey</span>
              </h2>
            </div>
            <div className="three-item_carousel ">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="testimonial-block_one-text">
                        Lorem ipsum amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit{" "}
                        <span>Pellentesque sit amet</span> sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis tellus. Nullam quis imperdiet augue.
                      </div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <img src="images/resource/author-2.png" alt="" />
                        </div>
                        Larry K. Lund <span>Social Media Manger</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="testimonial-block_one-text">
                        Lorem ipsum amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit{" "}
                        <span>Pellentesque sit amet</span> sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis tellus. Nullam quis imperdiet augue.
                      </div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <img src="images/resource/author-3.png" alt="" />
                        </div>
                        Marian R. Vieira <span>Social Media Manger</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  {/* Testimonial Block One */}
                  <div className="testimonial-block_one">
                    <div className="testimonial-block_one-inner">
                      <div className="testimonial-block_one-rating">
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                        <span className="fa fa-star" />
                      </div>
                      <div className="testimonial-block_one-text">
                        Lorem ipsum amet consectetur adipiscing elit Ut et massa
                        mi. Aliquam in hendrerit{" "}
                        <span>Pellentesque sit amet</span> sapien fringilla,
                        mattis ligula consectetur, ultrices mauris. Maecenas
                        vitae mattis tellus. Nullam quis imperdiet augue.
                      </div>
                      <div className="testimonial-block_one-author_box">
                        <div className="testimonial-block_one-author-image">
                          <img src="images/resource/author-4.png" alt="" />
                        </div>
                        Bob E. Wiggins <span>Social Media Manger</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* If we need pagination */}
              <div className="three-item_carousel-pagination" />
            </div>
          </div>
        </section>
        {/* End Testimonial Three */}
        {/* Clients Two */}
        <section className="clients-two">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title centered">
              <div className="sec-title_title">Trusted Organizations</div>
            </div>
            <div className="clients_slider swiper-container">
              <div className="swiper-wrapper">
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="client-image">
                    <a href="#">
                      <img src="images/clients/1.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="client-image">
                    <a href="#">
                      <img src="images/clients/2.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="client-image">
                    <a href="#">
                      <img src="images/clients/3.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="client-image">
                    <a href="#">
                      <img src="images/clients/4.png" alt="" />
                    </a>
                  </div>
                </div>
                {/* Slide */}
                <div className="swiper-slide">
                  <div className="client-image">
                    <a href="#">
                      <img src="images/clients/5.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Clients Two */}
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

export default AboutPage;
