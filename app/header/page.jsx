const Header = () => {
  return (
    <>
      {/* Main Header */}
      <header className="main-header header-style-three">
        {/* Header Lower */}
        <div className="header-lower">
          <div className="auto-container">
            <div className="inner-container">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                <div className="nav-outer d-flex align-items-center flex-wrap">
                  <div className="logo-box">
                    <div className="logo">
                      <a href="/home">
                        <img src="images/logo.svg" alt="" title="" />
                      </a>
                    </div>
                  </div>
                  {/* Main Menu */}
                  <nav className="main-menu navbar-expand-md">
                    <div className="navbar-header">
                      {/* Toggle Button */}
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                      </button>
                    </div>
                    <div
                      className="navbar-collapse collapse clearfix"
                      id="navbarSupportedContent"
                    >
                      <ul className="navigation clearfix">
                        <li className="dropdown">
                          <a href="/home">Home</a>
                          {/* <ul>
                              <li>
                               <a href="/home">HomePage 01</a>
                             </li>
                             <li>
                               <a href="index-2.html">HomePage 02</a>
                             </li> 
                             <li>
                               <a href="#">HomePage 03</a>
                             </li>
                             <li className="dropdown">
                               <a href="#">Header Style</a>
                               <ul>
                                 <li>
                                   <a href="/home">Header 01</a>
                                 </li>
                                 <li>
                                   <a href="index-2.html">Header 02</a>
                                 </li>
                                 <li>
                                   <a href="index-3.html">Header 03</a>
                                 </li>
                               </ul>
                             </li>
                           </ul> */}
                        </li>
                        <li>
                          <a href="/about">About</a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Pages</a>
                          <ul>
                            <li>
                              <a href="/faq">Faq</a>
                            </li>
                            <li>
                              <a href="/pricing">Price</a>
                            </li>
                            <li>
                              <a href="/testimonial">Testimonial</a>
                            </li>
                            <li>
                              <a href="/login">Login</a>
                            </li>
                            <li>
                              <a href="/registration">Register</a>
                            </li>
                            <li>
                              <a href="/reset">Forgot password</a>
                            </li>
                            <li className="dropdown">
                              <a href="#">Team</a>
                              <ul>
                                <li>
                                  <a href="/team">Team</a>
                                </li>
                                <li>
                                  <a href="/team-detail">Team detail</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Services</a>
                          <ul>
                            <li>
                              <a href="/services">Services</a>
                            </li>
                            <li>
                              <a href="/service-detail">Services detail</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="#">Blog</a>
                          <ul>
                            <li>
                              <a href="/blog">Blog grid</a>
                            </li>
                            {/* <li>
                               <a href="blog-classic.html">Blog classic</a>
                             </li> */}
                            <li>
                              <a href="/news-detail">Blog detail</a>
                            </li>
                            {/* <li>
                               <a href="not-found.html">Not found</a>
                             </li> */}
                          </ul>
                        </li>
                        <li>
                          <a href="/contact">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
                {/* Main Menu End*/}
                <div className="outer-box d-flex align-items-center flex-wrap">
                  {/* Social Box */}
                  <div className="header-three-socials">
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
                  {/* Language DropDown */}
                  <div className="language-dropdown">
                    <button
                      className="btn dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <span className="flag">
                        <img src="images/icons/flag.png" alt="" />
                      </span>
                      &nbsp;
                      <span className="fa-solid fa-angle-down fa-fw" />
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="flag">
                            <img src="images/icons/flag.png" alt="" />
                          </span>{" "}
                          English
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="flag">
                            <img src="images/icons/arabic.png" alt="" />
                          </span>{" "}
                          Arbic
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="flag">
                            <img src="images/icons/germany.png" alt="" />
                          </span>{" "}
                          German
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          <span className="flag">
                            <img src="images/icons/france.png" alt="" />
                          </span>{" "}
                          French
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* Button Box */}
                  <div className="main-header_buttons">
                    <a href="/login" className="template-btn btn-style-two">
                      <span className="btn-wrap">
                        <span className="text-one">Login</span>
                        <span className="text-two">Login</span>
                      </span>
                    </a>
                    <a href="#" className="template-btn btn-style-one">
                      <span className="btn-wrap">
                        <span className="text-one">Join now</span>
                        <span className="text-two">Join now</span>
                      </span>
                    </a>
                  </div>
                  {/* Mobile Navigation Toggler */}
                  <div className="mobile-nav-toggler">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-menu-2"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 6l16 0" />
                      <path d="M4 12l16 0" />
                      <path d="M4 18l16 0" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*End Header Lower*/}
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <div className="menu-backdrop" />
          <div className="close-btn">
            <span className="icon fa-solid fa-xmark fa-fw" />
          </div>
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="/home">
                <img src="images/mobile-logo.svg" alt="" title="" />
              </a>
            </div>
            <div className="menu-outer">
              {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
            </div>
          </nav>
        </div>
        {/* End Mobile Menu */}
      </header>
      {/* End Main Header */}
    </>
  );
};

export default Header;
