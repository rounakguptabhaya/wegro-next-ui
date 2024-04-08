const NewsDetailPage = () => {
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
            <h2>News detail</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>News detail</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Sidebar Page Container */}
        <div className="sidebar-page-container">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Content Side */}
              <div className="content-side col-lg-8 col-md-12 col-sm-12">
                <div className="blog-detail">
                  <div className="blog-detail_inner">
                    <div className="blog-detail_image">
                      <img src="images/resource/news-19.jpg" alt="" />
                    </div>
                    <div className="blog-detail_content">
                      <h3 className="blog-detail_heading">
                        Transforming industries and shaping the future
                      </h3>
                      <div className="blog-detail_author-outer d-flex align-items-center flex-wrap">
                        <div className="blog-detail-author d-flex align-items-center flex-wrap">
                          <div className="blog-detail-author-image">
                            <img src="images/resource/author-6.png" alt="" />
                          </div>
                          <i>By Ellena M.Rice</i>
                        </div>
                        <ul className="blog-detail-meta d-flex align-items-center flex-wrap">
                          <li>
                            <span className="icon fa-regular fa-calendar fa-fw" />
                            20 Jan, 2024
                          </li>
                          <li>
                            <span className="icon fa-regular fa-comment-dots fa-fw" />
                            03 Comments
                          </li>
                        </ul>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa me. Aliquam hendrerit urna vitae mattis
                        tellus ultrices.. Pellentesque sit amet sapien
                        fringilla, mattis ligula consectetur, ultric Maecenas
                        vitae mattis tellus. Nullam quis imperdiet augue.
                        Vestibulum auctor ornare leo, non our suscipit magna
                        interdum eu. Curabitur pellentesque sit amet sapien.
                      </p>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit
                        Ut et massa mi. Aliquam hendrerit urna. Pellentesque sit
                        amet sapien fringilla, mattis ligula consectetur,
                        ultrices Maecenas
                      </p>
                      <blockquote>
                        <div
                          className="blockquote_bg"
                          style={{
                            backgroundImage:
                              "url(images/background/blockquote-bg.png)",
                          }}
                        />
                        <i className="icon-quote-1" />
                        The purpose of the patent system is to foster and
                        encourage new inventions of usefulness.
                        <div className="text-right">
                          <span>Thomas Jefferson</span>
                        </div>
                      </blockquote>
                      <div className="video-box">
                        <img src="images/resource/news-20.jpg" alt="" />
                        <a
                          href="https://www.youtube.com/watch?v=kxPCFljwJws"
                          className="lightbox-video overlay-box"
                        >
                          <span className="fa-solid fa-play fa-fw">
                            <i className="ripple" />
                          </span>
                        </a>
                      </div>
                      <h3>Top transforming process</h3>
                      <p>
                        We are a team of the our dedicated patent professionals,
                        united by our commitment toour excellence patent
                        protection. With years of collective experience acros
                        diverse industries team of this dedicated patent
                        professionals, united by our{" "}
                      </p>
                      <ul className="blog-detail_list">
                        <li>
                          <i className="fa-solid fa-check fa-fw" />
                          Expertise in Patent Protection
                        </li>
                        <li>
                          <i className="fa-solid fa-check fa-fw" />
                          Commitment to Excellence
                        </li>
                        <li>
                          <i className="fa-solid fa-check fa-fw" />
                          Collaborative Partnership
                        </li>
                      </ul>
                      <p>
                        We are a team of the dedicated patent professionals,
                        united by our commitment toour excellence patent
                        protection. With years of collective experience acros
                        diverse industries.
                      </p>
                      {/* Post Share Options*/}
                      <div className="post-share-options">
                        <div className="post-share-inner d-flex justify-content-between flex-wrap">
                          <div className="post-tags">
                            <a href="#">DataAI</a> <a href="#">AIFuture</a>{" "}
                            <a href="#">AIExperts</a>
                          </div>
                          <ul className="social-links">
                            <li>
                              <a
                                href="#"
                                className="fa-brands fa-facebook-f fa-fw"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fa-brands fa-twitter fa-fw"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fa-brands fa-google fa-fw"
                              />
                            </li>
                            <li>
                              <a
                                href="#"
                                className="fa-brands fa-dribbble fa-fw"
                              />
                            </li>
                          </ul>
                        </div>
                      </div>
                      {/* Author Box */}
                      <div className="blog-author_box">
                        <div className="blog-author-box_inner">
                          <div className="blog-author-box_content">
                            <div className="blog-author-box_image">
                              <img src="images/resource/author-7.png" alt="" />
                            </div>
                            <h5>Ellena M. Ricee</h5>
                            <div className="blog-author_box-designation">
                              UI/UX Instructor
                            </div>
                            <div className="blog-author_box-text">
                              Lorem ipsum dolor sit amet consectetur adipiscing
                              elit Ut massa mi. Aliquam in hendrerit
                              Pellentesque sit amet sapien fringilla.
                            </div>
                            <ul className="author-social_links">
                              <li>
                                <a
                                  href="#"
                                  className="fa-brands fa-facebook-f fa-fw"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fa-brands fa-twitter fa-fw"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fa-brands fa-google fa-fw"
                                />
                              </li>
                              <li>
                                <a
                                  href="#"
                                  className="fa-brands fa-dribbble fa-fw"
                                />
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      {/* Comment Form */}
                      <div className="comment-form_outer">
                        <div className="group-title">
                          <h3>Leave a comment</h3>
                          <div className="form-text">
                            Your email address will not be published. Required
                            fields are marked *
                          </div>
                        </div>
                        {/* Comment Form */}
                        <div className="comment-form">
                          <form method="post" action="/blog">
                            <div className="row clearfix">
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Name*</label>
                                <input type="text" name="username" />
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                <label>Email*</label>
                                <input type="text" name="username" />
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                <label>Type Comment here*</label>
                                <textarea
                                  className=""
                                  name="message"
                                  defaultValue={""}
                                />
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                {/* Button Box */}
                                <button
                                  type="submit"
                                  className="template-btn btn-style-one"
                                >
                                  <span className="btn-wrap">
                                    <span className="text-one">Submit now</span>
                                    <span className="text-two">Submit now</span>
                                  </span>
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                        {/* End Default Form */}
                      </div>
                      {/*End Comment Form */}
                    </div>
                  </div>
                </div>
              </div>
              {/* Sidebar Side */}
              <div className="sidebar-side col-lg-4 col-md-12 col-sm-12">
                <aside className="sidebar">
                  <div className="sidebar-inner">
                    {/* Search Widget */}
                    <div className="sidebar-widget search-box">
                      <div className="widget-content">
                        <h5 className="sidebar-widget_title">Search here</h5>
                        <form method="post" action="/contact">
                          <div className="form-group">
                            <input
                              type="search"
                              name="search-field"
                              defaultValue=""
                              placeholder="Search..."
                              required=""
                            />
                            <button type="submit">
                              <span className="icon fa fa-search" />
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                    {/* Post Widget */}
                    <div className="sidebar-widget post-widget">
                      <div className="widget-content">
                        <h5 className="sidebar-widget_title">Latest post</h5>
                        <div className="post">
                          <div className="thumb">
                            {/* href="https://demo.themeim.com/html/braine/blog-detail.html" */}
                            <a href="/blog-detail">
                              <img
                                src="images/resource/post-thumb-1.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="https://demo.themeim.com/html/braine/blog-detail.html">
                              Redefining tomorrow adventures in ai and
                              technology
                            </a>
                          </h6>
                          <div className="post-date">
                            <i className="fa-regular fa-calendar fa-fw" /> Mar
                            18, 2028
                          </div>
                        </div>
                        <div className="post">
                          <div className="thumb">
                            <a href="https://demo.themeim.com/html/braine/blog-detail.html">
                              <img
                                src="images/resource/post-thumb-2.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="https://demo.themeim.com/html/braine/blog-detail.html">
                              Beyond binary navigating the ai landscape
                            </a>
                          </h6>
                          <div className="post-date">
                            <i className="fa-regular fa-calendar fa-fw" /> Mar
                            18, 2028
                          </div>
                        </div>
                        <div className="post">
                          <div className="thumb">
                            <a href="https://demo.themeim.com/html/braine/blog-detail.html">
                              <img
                                src="images/resource/post-thumb-3.png"
                                alt=""
                              />
                            </a>
                          </div>
                          <h6>
                            <a href="https://demo.themeim.com/html/braine/blog-detail.html">
                              Algorithmic horizons a glimpse into our ai world
                            </a>
                          </h6>
                          <div className="post-date">
                            <i className="fa-regular fa-calendar fa-fw" /> Mar
                            18, 2028
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Service Widget */}
                    <div className="sidebar-widget category-widget">
                      <div className="widget-content">
                        <h5 className="sidebar-widget_title">Categories</h5>
                        <ul className="service-list">
                          <li>
                            <a href="#">
                              TechLeadership <span>(03)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              TechTalks <span>(04)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              TechTrends <span>(02)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Innovate <span>(05)</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              MLTech <span>(02)</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* Popular tags */}
                    <div className="sidebar-widget popular-tags">
                      <div className="widget-content">
                        <h5 className="sidebar-widget_title">Popular tags</h5>
                        <a href="#">DigitalAI</a>
                        <a href="#">TechInnovate</a>
                        <a href="#">FutureAI</a>
                        <a href="#">TechBlog</a>
                        <a href="#">CodingAI</a>
                      </div>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </div>
        {/* End Sidebar Page Container */}
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
                  © 2024 <a href="home">Braine.</a> All rights reserved.
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
        {/* End Main Footer */}
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

export default NewsDetailPage;
