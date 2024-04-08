const ServiceDetailPage = () => {
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
            <h2>Service details</h2>
            <ul className="bread-crumb clearfix">
              <li>
                <a href="/home">Home</a>
              </li>
              <li>Service details</li>
            </ul>
          </div>
        </section>
        {/* End Page Title */}
        {/* Services Detail */}
        <section className="services-detail">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-four">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="left-box">
                  <div className="sec-title_title">content marketers</div>
                  <h2 className="sec-title_heading">
                    Navigating the digital landscape with{" "}
                    <span>content marketing</span>
                  </h2>
                </div>
                <div className="right-box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis l consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                    Vestibulum auctor ornare leo, non suscipit magna
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa Aliquam in hendrerit urna pellentesque
                  </p>
                </div>
              </div>
            </div>
            <div className="service-detail_image">
              <img src="images/resource/service-detail.jpg" alt="" />
            </div>
          </div>
        </section>
        {/* End Services One */}
        {/* Services Two */}
        <div className="services-two">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-four centered">
              <div className="sec-title_title">Service benefit</div>
              <h2 className="sec-title_heading">
                <span>Benefit</span> of our services
              </h2>
            </div>
            <div className="row clearfix">
              {/* Service Block Four */}
              <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                <div className="service-block_four-inner">
                  <div className="service-block_four-icon">
                    <i className="icon-heart-hand" />
                  </div>
                  <h4 className="service-block_four-title">Engagement</h4>
                  <div className="service-block_four-text">
                    Design patent protects the unique visual aspects of your
                    product, preventing.
                  </div>
                </div>
              </div>
              {/* Service Block Four */}
              <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                <div className="service-block_four-inner">
                  <div className="service-block_four-icon">
                    <i className="icon-eye" />
                  </div>
                  <h4 className="service-block_four-title">Brand visibility</h4>
                  <div className="service-block_four-text">
                    Design patent protects the unique visual aspects of your
                    product, preventing.
                  </div>
                </div>
              </div>
              {/* Service Block Four */}
              <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                <div className="service-block_four-inner">
                  <div className="service-block_four-icon">
                    <i className="icon-seo" />
                  </div>
                  <h4 className="service-block_four-title">SEO optimization</h4>
                  <div className="service-block_four-text">
                    Design patent protects the unique visual aspects of your
                    product, preventing.
                  </div>
                </div>
              </div>
              {/* Service Block Four */}
              <div className="service-block_four col-lg-3 col-md-6 col-sm-12">
                <div className="service-block_four-inner">
                  <div className="service-block_four-icon">
                    <i className="icon-magnet-1" />
                  </div>
                  <h4 className="service-block_four-title">Lead generation</h4>
                  <div className="service-block_four-text">
                    Design patent protects the unique visual aspects of your
                    product, preventing.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Services Two */}
        {/* Steps One */}
        <section className="steps-one">
          <div
            className="steps-one_bg"
            style={{
              backgroundImage: "url(images/background/step-1_bg.png)",
            }}
          />
          <div
            className="steps-one_icon"
            style={{ backgroundImage: "url(images/icons/step.png)" }}
          />
          <div className="auto-container">
            <div className="inner-container">
              <div className="circle-layer" />
              <div className="dots-layer">
                <span className="dot-one" />
                <span className="dot-two" />
              </div>
              {/* Sec Title */}
              <div className="sec-title">
                <div className="sec-title_title">How Its work</div>
                <h2 className="sec-title_heading">
                  Braine <span>typically operate</span> in <br /> a three steps
                </h2>
              </div>
              <div className="steps-one_button">
                <a href="/about" className="template-btn btn-style-two">
                  <span className="btn-wrap">
                    <span className="text-one">Know more</span>
                    <span className="text-two">Know more</span>
                  </span>
                </a>
              </div>
              <div className="row clearfix">
                {/* Column */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  {/* Step Block One */}
                  <div className="step-block_one">
                    <div className="step-block_one-inner">
                      <div className="step-block_one-steps">step 01</div>
                      <h5 className="step-block_one-title">
                        Algorithm processing
                      </h5>
                      <div className="step-block_one-text">
                        Lorem ipsum dolor sit ame consectetur adipiscing elit Ut
                        et massa mi. Aliquam in hendrerit urna..
                      </div>
                      <div className="step-block_one-content">
                        <div className="image">
                          <img src="images/resource/step-1.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column */}
                <div className="column col-lg-6 col-md-12 col-sm-12">
                  {/* Step Block One */}
                  <div className="step-block_one">
                    <div className="step-block_one-inner">
                      <div className="step-block_one-steps">step 02</div>
                      <h5 className="step-block_one-title">
                        Input &amp; data gathering
                      </h5>
                      <div className="step-block_one-text">
                        Lorem ipsum dolor sit ame consectetur adipiscing elit Ut
                        et massa mi. Aliquam in hendrerit urna..
                      </div>
                      <div className="step-block_one-content">
                        <div className="image">
                          <img src="images/resource/step-2.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Step Block One */}
                  <div className="step-block_one">
                    <div className="step-block_one-inner">
                      <div className="step-block_one-steps">step 03</div>
                      <h5 className="step-block_one-title">
                        Content generation &amp; refinement
                      </h5>
                      <div className="step-block_one-text">
                        Lorem ipsum dolor sit ame consectetur adipiscing elit Ut
                        et massa mi. Aliquam in hendrerit urna..
                      </div>
                      <div className="step-block_one-content">
                        <div className="image">
                          <img src="images/resource/step-3.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Steps One */}
        {/* Solution One */}
        <section className="solution-one">
          <div className="auto-container">
            {/* Sec Title */}
            <div className="sec-title style-four">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="left-box">
                  <div className="sec-title_title">problem &amp; solutions</div>
                  <h2 className="sec-title_heading">
                    Unveiling <span>solutions</span> for common dilemmas in
                    braine
                  </h2>
                </div>
                <div className="right-box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis l consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus. Nullam quis imperdiet augue.
                    Vestibulum auctor ornare leo, non suscipit magna
                  </p>
                  <ul className="solution-one_list">
                    <li>
                      <i className="fa-solid fa-check fa-fw" />
                      Sed tempor magna et risus ornare, a lobortis.
                    </li>
                    <li>
                      <i className="fa-solid fa-check fa-fw" />
                      Vivamus tempus urna sit amet ante imperdiet.
                    </li>
                    <li>
                      <i className="fa-solid fa-check fa-fw" />
                      Mauris sit amet eros ac tellus egestas placerat.
                    </li>
                    <li>
                      <i className="fa-solid fa-check fa-fw" />
                      Aliquam at leo pretium of consecteter.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="service-detail_image-two">
                  <img src="images/resource/service-detail-1.jpg" alt="" />
                </div>
              </div>
              <div className="column col-lg-6 col-md-6 col-sm-12">
                <div className="service-detail_image-two">
                  <a
                    href="https://www.youtube.com/watch?v=kxPCFljwJws"
                    className="lightbox-video service-detail_play"
                  >
                    <span className="fa-solid fa-play fa-fw">
                      <i className="ripple" />
                    </span>
                  </a>
                  <img src="images/resource/service-detail-2.jpg" alt="" />
                </div>
              </div>
            </div>
            {/* Sec Title */}
            <div className="sec-title style-four">
              <div className="d-flex justify-content-between align-items-center flex-wrap">
                <div className="left-box">
                  <div className="sec-title_title">Final result</div>
                  <h2 className="sec-title_heading">
                    Excellence in our service <span>final results</span>
                  </h2>
                </div>
                <div className="right-box">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et
                    massa Aliquam in hendrerit urna. Pellentesque sit amet
                    sapien fringilla, mattis l consectetur, ultrices mauris.
                    Maecenas vitae mattis tellus.
                  </p>
                  <p>
                    Pellentesque commodo lacus at sodales sodales. Quisque lorem
                    sagittis orci ut diam condimentum, vel euismod
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Solution One */}
        {/* Faq One */}
        <section className="faq-one style-three">
          <div className="auto-container">
            <div className="row clearfix">
              {/* Tab Column */}
              <div className="faq-one_title-column col-lg-5 col-md-12 col-sm-12">
                <div className="faq-one_title-outer">
                  {/* Sec Title */}
                  <div className="sec-title">
                    <div className="sec-title_title">faq</div>
                    <h2 className="sec-title_heading">
                      Frequently asked <span>questions</span>
                    </h2>
                    <div className="sec-title_text">
                      Lorem ipsum dolor sit amet consectetur adipiscing vitae
                      mattis tellus. Nullam quis mattis ligula consectetur.
                    </div>
                  </div>
                  <div className="faq-one_button">
                    <a href="/contact" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Contact now</span>
                        <span className="text-two">Contact now</span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              {/* Accordian Column */}
              <div className="faq-one_accordian-column col-lg-7 col-md-12 col-sm-12">
                <div className="faq-one_accordian-outer">
                  {/* Accordion Box */}
                  <ul className="accordion-box_two">
                    {/* Block */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <span className="icon icon-plus fa-solid fa-plus fa-fw" />
                        </div>
                        How does your AI copywriting tool work?
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Our AI copywriting tool uses sophisticated
                            algorithms to understand context, tone, and language
                            nuances. Users input specific details or prompts,
                            and the AI generates high-quality content based on
                            that input, refining.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <span className="icon icon-plus fa-solid fa-plus fa-fw" />
                        </div>
                        What is AI copywriting?
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Our AI copywriting tool uses sophisticated
                            algorithms to understand context, tone, and language
                            nuances. Users input specific details or prompts,
                            and the AI generates high-quality content based on
                            that input, refining.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <span className="icon icon-plus fa-solid fa-plus fa-fw" />
                        </div>
                        Can I trust the content generated by AI?
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Our AI copywriting tool uses sophisticated
                            algorithms to understand context, tone, and language
                            nuances. Users input specific details or prompts,
                            and the AI generates high-quality content based on
                            that input, refining.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <span className="icon icon-plus fa-solid fa-plus fa-fw" />
                        </div>
                        What types of content can your AI generate?
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Our AI copywriting tool uses sophisticated
                            algorithms to understand context, tone, and language
                            nuances. Users input specific details or prompts,
                            and the AI generates high-quality content based on
                            that input, refining.
                          </div>
                        </div>
                      </div>
                    </li>
                    {/* Block */}
                    <li className="accordion block">
                      <div className="acc-btn">
                        <div className="icon-outer">
                          <span className="icon icon-plus fa-solid fa-plus fa-fw" />
                        </div>
                        What languages does your AI support?
                      </div>
                      <div className="acc-content">
                        <div className="content">
                          <div className="text">
                            Our AI copywriting tool uses sophisticated
                            algorithms to understand context, tone, and language
                            nuances. Users input specific details or prompts,
                            and the AI generates high-quality content based on
                            that input, refining.
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Faq One */}
        <div className="more-options">
          <div className="auto-container">
            {/* Post Share Options*/}
            <div className="post-share-options">
              <div className="post-share-inner d-flex justify-content-between align-items-center flex-wrap">
                <div className="post-tags">
                  <a href="#">DataAI</a> <a href="#">AIFuture</a>{" "}
                  <a href="#">AIExperts</a>
                </div>
                <ul className="social-links">
                  <li>
                    <a href="#" className="fa-brands fa-facebook-f fa-fw" />
                  </li>
                  <li>
                    <a href="#" className="fa-brands fa-twitter fa-fw" />
                  </li>
                  <li>
                    <a href="#" className="fa-brands fa-google fa-fw" />
                  </li>
                  <li>
                    <a href="#" className="fa-brands fa-dribbble fa-fw" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="service-detail_posts">
              <div className="d-flex align-items-center flex-wrap justify-content-between">
                <div className="new-post">
                  <a href="#">
                    <i className="fa-solid fa-angle-left fa-fw" /> Previous
                  </a>
                  <h4>Protection of designs</h4>
                </div>
                <div className="new-post text-right">
                  <a href="#">
                    next <i className="fa-solid fa-angle-right fa-fw" />
                  </a>
                  <h4>Brand protection</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
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

export default ServiceDetailPage;
