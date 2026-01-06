import "./style/about.css"

export default function AboutUs() {
  return (
    <>
      <div className="about_us">
        <div className="about_us_banner">
          <h1>Crafting Meaningful Corporate <br /> Gifting Experiences</h1>
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
          <h3>Why Choose GiftEdge?</h3>
          <div className="about_us_why_choose_content">
            <div className="about_us_why_choose_content_item">
              <div>
                <img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Quality Craftsmanship</h4>
              <p>Premium products sourced and curated with unmatched attention to detail.</p>
            </div>
            <div className="about_us_why_choose_content_item">
              <div>
                <img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Customization Expertise</h4>
              <p>Tailored hampers, branded boxes, personalized cards & more.</p>
            </div>
            <div className="about_us_why_choose_content_item">
              <div>
                <img src="/assets/about/daimond.png" alt="" /></div>
              <h4>Quality Craftsmanship</h4>
              <p>Premium products sourced and curated with unmatched attention to detail.</p>
            </div>
          </div>
        </div>
        <div className="about_achivement">
          <div className="about_achivement_content">
            <div>
              <img src="/assets/about/achivement.png" alt="" />
              <p>20,000+</p>
              <span>Gift Deliveried</span>
            </div>
            <div>
              <img src="" alt="" />
              <p>500+</p>
              <span>Corporate Clients</span>
            </div>
            <div>
              <img src="" alt="" />
              <p>8+</p>
              <span>Years of Excellence</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
