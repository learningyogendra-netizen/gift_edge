import "./style/about.css"

export default function AboutUs() {
  return (
    <>
      <div className="about_us">
        <div className="about_us_banner">
          <span><img src="/assets/home/category_dots.png" alt="" className='about_section_left_image' /></span>
          <span><img src="/assets/about/top_rignt_image.png" alt="" className='about_section_right_image' /></span>
          <span><img src="/assets/about/header_bottom_image.png" alt="" className='about_section_bottom_image' /></span>
          <h1>Crafting Meaningful Corporate <br /> Gifting Experiences</h1>
          <div className="story_line"></div>
          <p>Where thoughtful design meets premium craftsmanship to create
            <br /> gifts that leave a lasting impression.</p>
          <button className='btn-primary'>Explore Our Legacy</button>
        </div>

        <div className="about_us_story">
          <h3>Our story</h3>
          <div className="about_us_story_content">
            <div className="about_us_story_content_text">
              <p>GiftEdge began with a vision—to elevate corporate gifting into an art form. What started as a small collection of handcrafted hampers soon evolved into a premium gifting brand trusted by companies across industries.</p>
              <p>From curated selections to custom-crafted experiences, our mission has always remained the same: <span> To make every gift unforgettable.</span></p>
            </div>
            <div className="about_us_story_content_img">
              <img src="/assets/about/about_right.png" alt="" />
            </div>
          </div>
        </div>

        <div className="about_us_why_choose">
          <span><img src="/assets/about/choose_left_image.png" alt="" className='about_us_why_choose_left_image' /></span>
          <span><img src="/assets/about/choose_right_image.png" alt="" className='about_us_why_choose_right_image' /></span>
          <h3>Why Choose GiftEdge?</h3>
          <div className="about_us_why_choose_content">
            <div className="about_us_why_choose_content_item">
              <div><img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Quality Craftsmanship</h4>
              <p>Premium products sourced and curated with unmatched attention to detail.</p>
            </div>
            <div className="about_us_why_choose_content_item">
              <div><img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Customization Expertise</h4>
              <p>Tailored hampers, branded boxes, personalized cards & more.</p>
            </div>
            <div className="about_us_why_choose_content_item">
              <div><img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Quality Craftsmanship</h4>
              <p>Premium products sourced and curated with unmatched attention to detail.</p>
            </div>
          </div>
        </div>
        <div className="about_achivement">
          <div className="about_achivement_content">
            <div>
              <img src="/assets/about/gift.png" alt="" />
              <p>20,000+</p>
              <span>Gift Deliveried</span>
            </div>
            <div>
              <img src="/assets/about/client.png" alt="" />
              <p>500+</p>
              <span>Corporate Clients</span>
            </div>
            <div>
              <img src="/assets/about/star.png" alt="" />
              <p>8+</p>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>

        <section className="team-section">
          <img src="/assets/about/Polygon 3-1.png" className="right-polygon" alt="Polygon-3.1" />
          <img src="/assets/about/Frame-9.png" className="right-polygonFrame9" alt="Frame-9" />
          <img src="/assets/about/div-13.png" className="left-cirlce" alt="Cirlce" />
          <img src="/assets/about/Vector 2-1.png" className="bottom-vector-img" alt="Bottom Vector" />
          <img src="/assets/about/Vector.png" className="right-vector-img" alt="Right Vector" />


          <h2 className="team-title">Meet Our Team</h2>

          <div className="team-grid">
            <div className="team-member">
              <img src="/assets/about/img-17.png" alt="Sarah Chen" />
              <h3>Sarah Chen</h3>
              <p>Founder & CEO</p>
            </div>

            <div className="team-member">
              <img src="/assets/about/img-18.png" alt="Michael Ross" />
              <h3>Michael Ross</h3>
              <p>Creative Director</p>
            </div>

            <div className="team-member">
              <img src="/assets/about/img-19.png" alt="Emma Taylor" />
              <h3>Emma Taylor</h3>
              <p>Operations Manager</p>
            </div>

            <div className="team-member">
              <img src="/assets/about/img-20.png" alt="David Kumar" />
              <h3>David Kumar</h3>
              <p>Client Relations</p>
            </div>
          </div>

          <div className="team-quote">
            <span className="line"></span>
            <p className="team-quote-text">
              "At GiftEdge, every gift is crafted to reflect care, celebration,
              and connection."
            </p>
            <span className="line"></span>
          </div>
        </section>
      </div>
    </>
  );
}
