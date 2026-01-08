import { useState } from 'react';
import { motion } from 'framer-motion';
import './style/home.css';

const CATEGORIES = [
  {
    id: 1,
    title: 'Rewards & Recognition',
    description: 'Celebrate employee milestones with curated gifting.',
    image: '/assets/home/hero.png',
  },
  {
    id: 2,
    title: 'Creative Gifting',
    description: 'Modern, branded, and custom-designed experiences.',
    image: '/assets/home/hero.png',
  },
  {
    id: 3,
    title: 'Seasonal Gifting',
    description: 'Handpicked festival collections for every corporate occasion.',
    image: '/assets/home/hero.png',
  },
  {
    id: 4,
    title: 'Onboarding Kits',
    description: 'Welcome new team members with premium kits.',
    image: '/assets/home/hero.png',
  },
];

const OURWORKS = [
  {
    id: 1,
    title: "Custom Branded Festive Hampers",
    image: '/assets/home/hero.png'
  },
  {
    id: 2,
    title: "Custom Branded Festive Hampers",
    image: '/assets/home/hero.png'
  },
  {
    id: 3,
    title: "Custom Branded Festive Hampers",
    image: '/assets/home/hero.png'
  },
]

const CLIENTREVIEWS = [
  {
    id: 1,
    name: "Emily Rodriguez 1",
    desgnation: "Director HR, GlobalFinance",
    quote: "The perfect partner for our seasonal gifting needs.Reliable, creative, and always exceeding expectations.",
    avatarImage: "/assets/home/img-19.png",
    clientImage: "/assets/home/img-20.png"
  },
  {
    id: 2,
    name: "Emily Rodriguez 2",
    desgnation: "Director HR, GlobalFinance",
    quote: "The perfect partner for our seasonal gifting needs.Reliable, creative, and always exceeding expectations.",
    avatarImage: "/assets/home/img-19.png",
    clientImage: "/assets/home/img-20.png"
  },
  {
    id: 3,
    name: "Emily Rodriguez 3",
    desgnation: "Director HR, GlobalFinance",
    quote: "The perfect partner for our seasonal gifting needs.Reliable, creative, and always exceeding expectations.",
    avatarImage: "/assets/home/img-19.png",
    clientImage: "/assets/home/img-20.png"
  },
  {
    id: 4,
    name: "Emily Rodriguez 4",
    desgnation: "Director HR, GlobalFinance",
    quote: "The perfect partner for our seasonal gifting needs.Reliable, creative, and always exceeding expectations.",
    avatarImage: "/assets/home/img-19.png",
    clientImage: "/assets/home/img-20.png"
  },
  {
    id: 5,
    name: "Emily Rodriguez 5",
    desgnation: "Director HR, GlobalFinance",
    quote: "The perfect partner for our seasonal gifting needs.Reliable, creative, and always exceeding expectations.",
    avatarImage: "/assets/home/img-19.png",
    clientImage: "/assets/home/img-20.png"
  }

]

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCategories = CATEGORIES.slice(currentIndex, currentIndex + 3);

  const VISIBLE_COUNT = 3;
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  const visibleClientReviews = CLIENTREVIEWS.slice(
    testimonialIndex,
    testimonialIndex + VISIBLE_COUNT
  );

  const nextTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev + VISIBLE_COUNT >= CLIENTREVIEWS.length ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setTestimonialIndex((prev) =>
      prev === 0 ? CLIENTREVIEWS.length - VISIBLE_COUNT : prev - 1
    );
  };


  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 >= CATEGORIES.length - 2 ? 0 : prev + 1));
  };



  return (
    <>
      {/* hero section  */}
      <header className="hero">
        <div className="hero-bg">
          <motion.img
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src="/assets/home/hero.png"
            alt="Luxury Gifts"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hero-title"
          >
            Elevate Your Corporate <br />
            Gifting Experience
          </motion.h1>

          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="hero-subtitle"
          >
            Curated with unrivaled luxury and designed to delight.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="hero-actions"
          >
            <button className="btn-primary" onClick={() => window.location.href = '/collection'}>
              Explore Our Collections
            </button>
            <button className="btn-secondary" onClick={() => window.location.href = '/about'}>
              Learn About Custom Branding
            </button>
          </motion.div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories-section">
        <span><img src="/assets/home/category_dots.png" alt="" className='categories-section-left-image' /></span>
        <span><img src="/assets/home/category_blob.png" alt="" className='categories-section-image' /></span>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="section-title"
          >
            Premium Gifting Categories
          </motion.h1>
        </div>


        <div className="categories-container">
          <div className="categories-cards">
            {visibleCategories.map((cat, index) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="category-card"
              >
                <div className="card-image-wrapper">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <button className="btn-view-collection" onClick={() => window.location.href = '/collection'}>
                    View Collection <span className="arrow">→</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={handleNext}>
            &#10095;
          </button>

        </div>

      </section>

      {/* solutions */}

      {/* solutions */}

      <section className="solution-section">
        <span><img src="/assets/home/circle.png" alt="" className='solution-section-circle-image' /></span>
        <span><img src="/assets/home/solution-top-design.png" alt="" className='solution-section-left-image' /></span>
        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="solution-section-title"
          >
            Beyond Gifting Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='solution-section-description'
          >
            Revenue extensions and comprehensive corporate services
          </motion.p>
        </div>
        <div className='solutions'>
          {[
            { img: "/assets/home/s1.png", title: "Corporate Branding", desc: "Complete brand identity solutions" },
            { img: "/assets/home/s2.png", title: "UV Printing", desc: "High-quality custom printing" },
            { img: "/assets/home/s3.png", title: "Signage & Fabrication", desc: "Professional display solutions" },
            { img: "/assets/home/s4.png", title: "Packaging Workshops", desc: "Custom packaging design sessions" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="solution-wrapper"
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <h4>{item.title}</h4>
              <span>{item.desc}</span>
            </motion.div>
          ))}
        </div>
        <div className="solution-action">
          <button className='btn-tertiary'>Explore Service</button>
        </div>
      </section>

      {/* Why Choose GiftEdge ? */}

      {/* Why Choose GiftEdge ? */}

      <section className='why_choose_us'>
        <span><img src="/assets/home/why_choose_top_right.png" alt="" className='why_choose_us-section-circle-image' /></span>
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-right-triangle" alt="right-triangle" />
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-left-triangle" alt="left-triangle" />
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-bottom-triangle" alt="bottom-triangle" />


        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="why_choose_us-section-title"
          >
            Why Choose <span>GiftEdge ?</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='why_choose_us-section-description'
          >
            Delivering excellence in corporate gifting with unparalleled attention to detail
          </motion.p>
        </div>

        <div className='why_choose_us-container'>
          {[
            { img: "/assets/home/s1.png", title: "Corporate Branding", desc: "Complete brand identity solutions" },
            { img: "/assets/home/s2.png", title: "UV Printing", desc: "High-quality custom printing" },
            { img: "/assets/home/s3.png", title: "Signage & Fabrication", desc: "Professional display solutions" },
            { img: "/assets/home/s4.png", title: "Packaging Workshops", desc: "Custom packaging design sessions" },
            { img: "/assets/home/s4.png", title: "Packaging Workshops", desc: "Custom packaging design sessions" },
            { img: "/assets/home/s4.png", title: "Packaging Workshops", desc: "Custom packaging design sessions" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className="why_choose_us-container-wrapper"
            >
              <div>
                <img src={item.img} alt="" />
              </div>
              <h4>{item.title}</h4>
              <span>{item.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Work  */}
      <section className="our_work_section">
        <div className="section-header">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="our_work_section-title"
          >
            Our Work
          </motion.h1>
        </div>

        <div className="our-work-grid">
          {OURWORKS.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="our-work-card"
            >
              <img src={work.image} alt={work.title} />
              <div className="play-btn"></div>
              <div className="work-title">{work.title}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="trusted-section">
        <span><img src="/assets/home/Vector 14.png" alt="" className='trust-section-right-imgVector14' /></span>
        <span><img src="/assets/home/Vector 13.png" alt="" className='trust-section-right-imgVector13' /></span>
        <span><img src="/assets/home/Group 1.png" alt="" className='trust-section-left-imgGroup1' /></span>
        <span><img src="/assets/home/circle.png" alt="" className='trust-section-circle-img' /></span>

        <div className="trusted-container">
          <h2>
            Brands That Place Their Trust in <span>GiftEdge</span>
          </h2>
          <p className="subtitle">
            A growing family of corporations, HR teams, and enterprises rely on
            GiftEdge for thoughtful, high-quality gifting experiences.
          </p>

          <div className="logo-marquee">
            <div className="logo-track">
              <div className="logo-card"> <img src="/assets/home/img-3.png" /></div>
              <div className="logo-card"><img src="/assets/home/img-3.png" /></div>
              <div className="logo-card"><img src="/assets/home/img-3.png" /></div>
              <div className="logo-card"><img src="/assets/home/img-3.png" /></div>
              <div className="logo-card"><img src="/assets/home/img-3.png" /></div>
            </div>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>500+</h3>
              <p>Trusted Companies</p>
            </div>
            <div className="stat">
              <h3>1M+</h3>
              <p>Gifts Delivered</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Says Section */}
      <section className="testimonial-section">
        {/* <img src="/assets/home/circle.png" className="client-section" alt="right-circle" /> */}
        <img src="/assets/home/Frame-7.png" className="client-section-right-triangle" alt="right-triangle" />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          What Our <span>Clients</span> Say
        </motion.h2>
        <div className="underline"></div>

        <div className="testimonial-wrapper">
          <button className="nav-btn left" onClick={prevTestimonial}>‹</button>

          <div className="testimonial-viewport">
            <div className="testimonial-cards">
              {visibleClientReviews.map((review) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="testimonial-card"
                  key={review.id}
                >
                  <div className="video-box">
                    <img src={review.clientImage} alt="Client" />
                    <span className="client-playBtn"></span>
                  </div>

                  <div className="card-content">
                    <div className="client-info">
                      <img src={review.avatarImage} alt="Avatar" />
                      <div>
                        <h4>{review.name}</h4>
                        <p>{review.desgnation}</p>
                      </div>
                    </div>
                    <p className="quote">{review.quote}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <button className="nav-btn right" onClick={nextTestimonial}>›</button>
        </div>
      </section>

      {/* Corporate Section */}
      <section className="corporate-section">
        <img src="/assets/home/circle.png" className="corporate-right-circle" alt="right-circle" />
        <div className="corporate-container">
          {/* Left Image */}
          <div className="corporate-image">
            <img src="/assets/home/div-3.png" alt="Corporate Gifting" />
          </div>

          {/* Right Content */}
          <div className="corporate-content">
            <h2>Corporate Gifting Made Effortless</h2>

            <ul className="corporate-list">
              <li>Custom branding</li>
              <li>Bulk orders</li>
              <li>Employee onboarding kits</li>
              <li>Festival hampers</li>
            </ul>

            <div className="corporate-actions">
              <button className="btn-primary-gold">Request a Quote</button>
              <button className="btn-outline-gold">View Corporate Services</button>
            </div>
          </div>
        </div>
      </section>


      {/* Seasonal Section */}
      <section className="seasonal-section">
        <img src="/assets/home/Vector 17.png" className="seasonal-left-vector17" alt="left-vector17" />
        <img src="/assets/home/circle.png" className="seasonal-left-circle" alt="left-circle" />
        <img src="/assets/home/Vector.png" className="seasonal-right-vector" alt="right-vector" />

        <div className="seasonal-header">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Featured Seasonal Collection</motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >Handcrafted luxury sets for this season</motion.p>
        </div>

        <div className='seasonal-scroll'>
          <div className="seasonal-track">
            {[
              { title: "Winter Elegance", desc: "Premium winter collection with artisanal touches", price: "From $125" },
              { title: "Holiday Celebration", desc: "Festive collection for year-end appreciation", price: "From $95" },
              { title: "Wellness Retreat", desc: "Self-care essentials for employee wellbeing", price: "From $85" },
              { title: "Executive Suite", desc: "Sophisticated gifts for leadership teams", price: "From $200" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="seasonal-card"
              >
                <img src="/assets/home/hero.png" alt={item.title} />
                <div className="seasonal-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="price">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="top-shine-line"></div>
      <section className="cta-section">
        {/* <!-- decorative shapes --> */}
        <img src="/assets/home/Frame-7.png" className="cta-section-left-triangle" alt="left-triangle" />
        <img src="/assets/home/circle.png" className="cta-section-left-circle" alt="cicle-triangle" />
        <img src="/assets/home/Frame-7.png" className="cta-section-right-triangle" alt="right-triangle" />
        <img src="/assets/home/circle.png" className="cta-section-right-circle" alt="right-triangle" />

        <div className="cta-content">
          <div className="cta-icon">✉️</div>

          <h2>
            Looking for Custom Corporate <br />
            <span>Gifting Solutions?</span>
          </h2>

          <p>
            Let our experts curate the perfect gifting experience tailored to
            your corporate needs
          </p>

          <button className="cta-btn">
            Request a Quote →
          </button>
        </div>

        {/* <!-- WhatsApp Floating Button --> */}
        <a href="#" className="whatsapp-float" aria-label="WhatsApp">
          <img src="/assets/home/svg.png" alt="WhatsApp" />
        </a>
      </section>
    </>
  );
}
