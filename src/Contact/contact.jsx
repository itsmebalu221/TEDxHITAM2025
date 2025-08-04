import React from 'react';
import './ContactUs.css'; // Import the CSS file

const ContactUs = () => {
  return (
    <>
      <div className="main-content">
        {/* Decorative images - ensure paths are correct in your project */}
        <img src="./Assets/Contact/dotted-top-img.png" className="contact_dotted-top-img" alt="" />

        <section className="contact_info">
          <div className="container">
            <h1>Get In <span>Touch</span></h1>
            <p>Have a question, feedback, or a partnership inquiry? We'd love to hear from you. Reach out through the form below or contact us directly.</p>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <div className="contact-box">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Name <span>*</span></label>
                      <input type="text" id="name" className="form-control" placeholder="Enter your full name" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address <span>*</span></label>
                      <input type="email" id="email" className="form-control" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="mobile">Mobile Number</label>
                      <input type="tel" id="mobile" className="form-control" placeholder="Enter your mobile number" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="form-label" htmlFor="queryType">Query Type <span>*</span></label>
                      <input type="text" id="queryType" className="form-control" placeholder="e.g., Sponsorship, Ticketing, General" required />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="form-label" htmlFor="message">Message <span>*</span></label>
                      <textarea id="message" className="form-control" placeholder="Type your message here..." required></textarea>
                    </div>
                  </div>
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">Submit Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section className="contact-details-section">
          <div className="container">
            <div className="row justify-content-center">
              {/* Email Box */}
              <div className="col-lg-4 col-md-6 contact-details-col">
                <div className="contact-details-box">
                  <div className="icon-wrap">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <h4>Email Us</h4>
                  <p>For all inquiries, please email us at:</p>
                  <a href="mailto:tedx@hitam.org">tedx@hitam.org</a>
                </div>
              </div>

              {/* Organizers Contact Box */}
              <div className="col-lg-4 col-md-6 contact-details-col">
                <div className="contact-details-box">
                  <div className="icon-wrap">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <h4>Contact the Organizers</h4>
                  <p>For urgent matters, you can reach out to:</p>
                  <a href="tel:+916309809060">+91 6309809060</a><br />
                  <a href="tel:+917013838701">+91 7013838701</a><br />
                  <a href="tel:+919550716210">+91 9550716210</a>
                </div>
              </div>

              {/* Address Box */}
              <div className="col-lg-4 col-md-6 contact-details-col">
                <div className="contact-details-box">
                  <div className="icon-wrap">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <h4>Venue Address</h4>
                  <p>
                    Hyderabad Institute of Technology and Management (HITAM), Gowdavelly (V), Medchal (M),
                    Hyderabad, Telangana 501401
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Decorative Image */}
          <img src="./Assets/Contact/dotted-btm-img.png" className="contact_dotted-bottom-img" alt="" />
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="d-flex flex-column flex-md-row">
                {/* Update with your actual logo path */}
                <img src="/assets/images/tedx_hitam_logo_white.png" className="footer-logo img-fluid" alt="TEDx HITAM" />
                <p>This independent TEDx event is operated under license from TED.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="text-md-right">
                <ul className="footer-icon">
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ContactUs;