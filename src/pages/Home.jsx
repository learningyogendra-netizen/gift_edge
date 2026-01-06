
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

export default function Home() {

  const [currentIndex, setCurrentIndex] = useState(0);

  const visibleCategories = CATEGORIES.slice(currentIndex, currentIndex + 3);

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
        <div className="section-header">
          <h1 className="section-title">Premium Gifting Categories</h1>
          <span></span>
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

        
        </div>
          <button className="carousel-nav next" onClick={handleNext}>
            &#10095;
          </button>
        
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
        
      </section>

    </>
  );
}
