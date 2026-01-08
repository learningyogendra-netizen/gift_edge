
import { useState } from 'react';
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
          <img
            src="/assets/home/hero.png"
            alt="Luxury Gifts"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Elevate Your Corporate <br />
            Gifting Experience
          </h1>

          <p className="hero-subtitle">
            Curated with unrivaled luxury and designed to delight.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Explore Our Collections</button>
            <button className="btn-secondary">Learn About Custom Branding</button>
          </div>
        </div>
      </header>

      {/* Categories Section */}
      <section className="categories-section">
        <span><img src="/assets/home/category_dots.png" alt="" className='categories-section-left-image' /></span>
        <span><img src="/assets/home/category_blob.png" alt="" className='categories-section-image' /></span>
        <div>
          <h1 className="section-title">Premium Gifting Categories</h1>
        </div>

        
        <div className="categories-container">
          <div className="categories-cards">
            {visibleCategories.map((cat) => (
              <div className="category-card" key={cat.id}>
                <div className="card-image-wrapper">
                  <img src={cat.image} alt={cat.title} />
                </div>
                <div className="card-content">
                  <h3>{cat.title}</h3>
                  <p>{cat.description}</p>
                  <button className="btn-view-collection">
                    View Collection <span className="arrow">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-nav next" onClick={handleNext}>
            &#10095;
          </button>
        
        </div>
          
      </section>

      {/* solutions */}

      <section className="solution-section">
        <span><img src="/assets/home/circle.png" alt="" className='solution-section-circle-image' /></span>
        <span><img src="/assets/home/solution-top-design.png" alt="" className='solution-section-left-image' /></span>
        <div className="section-header">
          <h1 className="solution-section-title">Beyond Gifting Solutions</h1>
          <p className='solution-section-description'>Revenue extensions and comprehensive corporate services</p>
        </div>
        <div className='solutions'>
          <div className="solution-wrapper">
            <div>
              <img src="/assets/home/s1.png" alt="" />
            </div>
            <h4>Corporate Branding</h4>
            <span>Complete brand identity solutions</span>
          </div>
          <div className="solution-wrapper">
            <div>
              <img src="/assets/home/s2.png" alt="" />
            </div>
            <h4>UV Printing</h4>
            <span>High-quality custom printing</span>
          </div>
          <div className="solution-wrapper">
            <div>
              <img src="/assets/home/s3.png" alt="" />
            </div>
            <h4>Signage & Fabrication</h4>
            <span>Professional display solutions</span>
          </div>
          <div className="solution-wrapper">
            <div>
              <img src="/assets/home/s4.png" alt="" />
            </div>
            <h4>Packaging Workshops</h4>
            <span>Custom packaging design sessions</span>
          </div>
        </div>
        <div className="solution-action">
          <button className='btn-tertiary'>Explore Service</button>
        </div>
      </section>

      {/* Why Choose GiftEdge ? */}

      <section className='why_choose_us'>
        <span><img src="/assets/home/why_choose_top_right.png" alt="" className='why_choose_us-section-circle-image' /></span>
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-right-triangle" alt="right-triangle" />
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-left-triangle" alt="left-triangle" />
        <img src="/assets/home/Frame-7.png" className="why_choose_us-section-bottom-triangle" alt="bottom-triangle" />


        <div className="section-header">
          <h1 className="why_choose_us-section-title">Why Choose <span>GiftEdge ?</span></h1>
          <p className='why_choose_us-section-description'>Delivering excellence in corporate gifting with unparalleled attention to detail</p>
        </div>

        <div className='why_choose_us-container'>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s1.png" alt="" />
            </div>
            <h4>Corporate Branding</h4>
            <span>Complete brand identity solutions</span>
          </div>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s2.png" alt="" />
            </div>
            <h4>UV Printing</h4>
            <span>High-quality custom printing</span>
          </div>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s3.png" alt="" />
            </div>
            <h4>Signage & Fabrication</h4>
            <span>Professional display solutions</span>
          </div>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s4.png" alt="" />
            </div>
            <h4>Packaging Workshops</h4>
            <span>Custom packaging design sessions</span>
          </div>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s4.png" alt="" />
            </div>
            <h4>Packaging Workshops</h4>
            <span>Custom packaging design sessions</span>
          </div>
          <div className="why_choose_us-container-wrapper">
            <div>
              <img src="/assets/home/s4.png" alt="" />
            </div>
            <h4>Packaging Workshops</h4>
            <span>Custom packaging design sessions</span>
          </div>
        </div>
      </section>

      {/* Our Work  */}
      <section className="our_work_section">
        <div className="section-header">
          <h1 className="our_work_section-title">Our Work</h1>
        </div>

        <div className="our-work-grid">
          {OURWORKS.map((work) => (
            <div className="our-work-card" key={work.id}>
              <img src={work.image} alt={work.title} />
              <div className="play-btn"></div>
              <div className="work-title">{work.title}</div>
            </div>  
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

        <h2>
          What Our <span>Clients</span> Say
        </h2>
        <div className="underline"></div>

        <div className="testimonial-wrapper">
            <button className="nav-btn left" onClick={prevTestimonial}>‹</button>

            <div className="testimonial-viewport">
              <div className="testimonial-cards">
                {visibleClientReviews.map((review) => (
                  <div className="testimonial-card" key={review.id}>
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
                  </div>
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
          <h2>Featured Seasonal Collection</h2>
          <p>Handcrafted luxury sets for this season</p>
        </div>
                
        <div className='seasonal-scroll'>
          <div className="seasonal-track">
            <div className="seasonal-card">
              <img src="/assets/home/hero.png" alt="Winter Elegance" />
              <div className="seasonal-content">
                <h4>Winter Elegance</h4>
                <p>Premium winter collection with artisanal touches</p>
                <span className="price">From $125</span>
              </div>
            </div>

            <div className="seasonal-card">
              <img src="/assets/home/hero.png" alt="Holiday Celebration" />
              <div className="seasonal-content">
                <h4>Holiday Celebration</h4>
                <p>Festive collection for year-end appreciation</p>
                <span className="price">From $95</span>
              </div>
            </div>

            <div className="seasonal-card">
              <img src="/assets/home/hero.png" alt="Wellness Retreat" />
              <div className="seasonal-content">
                <h4>Wellness Retreat</h4>
                <p>Self-care essentials for employee wellbeing</p>
                <span className="price">From $85</span>
              </div>
            </div>

            <div className="seasonal-card">
              <img src="/assets/home/hero.png" alt="Executive Suite" />
              <div className="seasonal-content">
                <h4>Executive Suite</h4>
                <p>Sophisticated gifts for leadership teams</p>
                <span className="price">From $200</span>
              </div>
            </div> 
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
