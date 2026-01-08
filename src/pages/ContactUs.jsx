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
        <img src="/assets/home/category_dots.png" alt="" className="contact-bg-dots" />
        <img src="public/assets/contact/header_top_right.png" alt="" className="contact-bg-blob-top" />
        <img src="public/assets/about/header_bottom_image.png" alt="" className="contact-bg-header-left" />
        <img src="public/assets/contact/header_triangle_image.png" alt="" className="contact-bg-shape-left" />
        <img src="public/assets/contact/header_bottom_right.png" alt="" className="contact-bg-bottom-right" />
        
        <h1>We're Here to Assist You</h1>
        <div className="header-line"></div>
        <p>Connect with our team for inquiries, custom gifting, or bulk orders.</p>
      </div>

      {/* Content */}
      <div className="contact-content">
        {/* Left: Form Card */}
        <img src="/assets/contact/query_center_image.png" alt="" className="contact-query-bottom-right" />
        <img src="/assets/contact/query_bottom_right_image.png" alt="" className="contact-query-right" />
        <div className="contact-card contact-form-section">
          <h2 className="section-title">Send Us Your Inquiry</h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Full Name" required />
              <input type="text" placeholder="Company Name" />
            </div>

            <div className="form-row">
              <input type="email" placeholder="Email Address" required />
              <input type="tel" placeholder="Phone Number" />
            </div>

            <textarea placeholder="Detailed Requirements / Budget" rows="5" />

            <button type="submit" className="btn-primary ">
              Submit Inquiry
            </button>
          </form>
        </div>

        {/* Right: Details */}
        <div className="contact-card contact-details-section">
          <h2 className="section-title">Contact Details</h2>

          <div className="contact-info-list">
            <div className="info-item">
              <div className="icon-box">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div className="info-content">
                <h3>Address</h3>
                <p>123 Corporate Lane, Business District, Mumbai, India</p>
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
        <img src="/assets/contact/map_triangle_image.png" alt="" className="map-tirangle-image" />
        <img src="/assets/contact/map_circle_image.png" alt="" className="map-circle-image" />
        {/* <img src="/assets/contact/map_bottom_image.png" alt="" className="map-bottom-image" /> */}

        <h2>Find Us on the Map</h2>
          <div className="map-wrapper">
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

      {/* Bottom Banner */}
      <div className="printing_service">
        <p>Need signage or printing services? | <span>Contact us for premium, customized solutions.</span></p>
      </div>
    </div>
  );
};