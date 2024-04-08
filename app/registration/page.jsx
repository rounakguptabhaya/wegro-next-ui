const RegistrationPage = () => {
  return (
    <div className="page-wrapper">
      <section className="register-one">
        <div className="auto-container">
          <div className="inner-container">
            <h3>Registration</h3>
            <div className="text">
              Your email address will not be published.
            </div>
            {/* Register Form */}
            <div className="register-form">
              <form method="post" action="contact.html">
                <div className="form-group">
                  <label>Name*</label>
                  <input type="text" name="name" placeholder="" required="" />
                </div>
                <div className="form-group">
                  <label>Email*</label>
                  <input type="text" name="email" placeholder="" required="" />
                </div>
                <div className="form-group">
                  <label>Password*</label>
                  <span className="icon fa-regular fa-eye fa-fw" />
                  <input
                    type="password"
                    name="password"
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
                      <span className="text-one">Join now</span>
                      <span className="text-two">Join now</span>
                    </span>
                  </button>
                </div>
                <div className="form-group">
                  <div className="creat-account">
                    Already have a account? <a href="/login">Login Now</a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;
