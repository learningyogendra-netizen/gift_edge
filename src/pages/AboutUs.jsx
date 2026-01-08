import "./style/about.css"
import { motion } from "framer-motion"

export default function AboutUs() {
  return (
    <>
      <div className="about_us">
        <div className="about_us_banner">
          <span><img src="/assets/home/category_dots.png" alt="" className='about_section_left_image' /></span>
          <span><img src="/assets/about/top_rignt_image.png" alt="" className='about_section_right_image' /></span>
          <span><img src="/assets/about/header_bottom_image.png" alt="" className='about_section_bottom_image' /></span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >Crafting Meaningful Corporate <br /> Gifting Experiences</motion.h1>
          <div className="story_line"></div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >Where thoughtful design meets premium craftsmanship to create
            <br /> gifts that leave a lasting impression.</motion.p>
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='btn-primary'
          >Explore Our Legacy</motion.button>
        </div>

        <div className="about_us_story">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >Our story</motion.h3>
          <div className="about_us_story_content">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about_us_story_content_text"
            >
              <p>GiftEdge began with a vision—to elevate corporate gifting into an art form. What started as a small collection of handcrafted hampers soon evolved into a premium gifting brand trusted by companies across industries.</p>
              <p>From curated selections to custom-crafted experiences, our mission has always remained the same: <span> To make every gift unforgettable.</span></p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="about_us_story_content_img"
            >
              <img src="/assets/about/about_right.png" alt="" />
            </motion.div>
          </div>
        </div>

        <div className="about_us_why_choose">
          <span><img src="/assets/about/choose_left_image.png" alt="" className='about_us_why_choose_left_image' /></span>
          <span><img src="/assets/about/choose_right_image.png" alt="" className='about_us_why_choose_right_image' /></span>
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >Why Choose GiftEdge?</motion.h3>
          <div className="about_us_why_choose_content">
            {[
              { title: "Quality Craftsmanship", desc: "Premium products sourced and curated with unmatched attention to detail." },
              { title: "Customization Expertise", desc: "Tailored hampers, branded boxes, personalized cards & more." },
              { title: "Quality Craftsmanship", desc: "Premium products sourced and curated with unmatched attention to detail." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                className="about_us_why_choose_content_item"
              >
                <div><img src="/assets/about/daimond.png" alt="" /></div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="about_achivement">
          <div className="about_achivement_content">
            {[
              { img: "/assets/about/gift.png", count: "20,000+", label: "Gift Deliveried" },
              { img: "/assets/about/client.png", count: "500+", label: "Corporate Clients" },
              { img: "/assets/about/star.png", count: "8+", label: "Years of Excellence" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5, type: "spring" }}
              >
                <img src={stat.img} alt="" />
                <p>{stat.count}</p>
                <span>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>

        <section className="team-section">
          <img src="/assets/about/Polygon 3-1.png" className="right-polygon" alt="Polygon-3.1" />
          <img src="/assets/about/Frame-9.png" className="right-polygonFrame9" alt="Frame-9" />
          <img src="/assets/about/div-13.png" className="left-cirlce" alt="Cirlce" />
          <img src="/assets/about/Vector 2-1.png" className="bottom-vector-img" alt="Bottom Vector" />
          <img src="/assets/about/Vector.png" className="right-vector-img" alt="Right Vector" />


          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="team-title"
          >Meet Our Team</motion.h2>

          <div className="team-grid">
            {[
              { img: "/assets/about/img-17.png", name: "Sarah Chen", role: "Founder & CEO" },
              { img: "/assets/about/img-18.png", name: "Michael Ross", role: "Creative Director" },
              { img: "/assets/about/img-19.png", name: "Emma Taylor", role: "Operations Manager" },
              { img: "/assets/about/img-20.png", name: "David Kumar", role: "Client Relations" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="team-member"
              >
                <img src={member.img} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="team-quote"
          >
            <span className="line"></span>
            <p className="team-quote-text">
              "At GiftEdge, every gift is crafted to reflect care, celebration,
              and connection."
            </p>
            <span className="line"></span>
          </motion.div>
        </section>
      </div>
    </>
  );
}
