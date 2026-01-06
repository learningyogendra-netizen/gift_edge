import './style/contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faClock
} from '@fortawesome/free-solid-svg-icons';

export const ContactUs = () => {
  return (
    <div className="contact-container">
      {/* Header */}
      <div className="contact-header">
        <h1>Send Us Your Inquiry</h1>
        <p>Connect with our team for inquiries, custom gifting, or bulk orders.</p>
      </div>

      {/* Content */}
      <div className="contact-content">
        {/* Left: Form */}
        <div className="contact-form-section">
          <h2 className="section-title">Send Us Your Inquiry</h2>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <input type="text" placeholder="Full Name" required />
              </div>
              <div className="form-group">
                <input type="text" placeholder="Company Name" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <input type="email" placeholder="Email Address" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Phone Number" />
              </div>
            </div>

            <div className="form-group">
              <textarea placeholder="Detailed Requirements / Budget" rows="4" />
            </div>

            <button type="submit" className="submit-btn">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right: Details */}
        <div className="contact-details-section">
          <h2 className="section-title">Contact Details</h2>

          <div className="contact-info-list">
            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>
                  123 Corporate Lane, Business District
                  <br />
                  Mumbai, India
                </p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>hello@giftedge.com</p>
              </div>
            </div>

            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="info-content">
                <h3>Business Hours</h3>
                <p>Mon–Sat, 10:00 AM – 7:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map */}
      <div className="find_us_on_map">
        <h2>Find Us on the Map</h2>

        <div className="embed-map-responsive">
          <div className="embed-map-container">
            <iframe
              title="Company Location"
              className="embed-map-frame"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?hl=en&q=Dewas&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              aria-label="Google Map Location"
            />
          </div>
        </div>
      </div>
      <div className="printing_service">
        <p>Need signage or printing services?</p>
        <span>Contact us for premium, customized solutions.</span>
      </div>
    </div>
  );
};
