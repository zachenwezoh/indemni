.header {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    background-color: #74b69a;
  }
  
  .logo {
    display: flex;
    align-items: center;
    margin-left: 10%;
  }
  
  .logo-image {
    max-height: 40px;
    margin-right: 10px; 
  }
  
  .logo-text {
    color: rgb(255, 255, 255);
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
  }
  
  .quote-button {
    background-color: #000000;
    border: none;
    padding: 10px 10px;
    color: white;
    cursor: pointer;
    border-radius: 15px;
    width: 200px;
    margin-left: 70%;
  }

import React from 'react';
import './Header.css';
import logoIndemni from './indemni.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoIndemni} alt="Indemni Logo" className="logo-image" />
        <span className="logo-text">Indemni</span>
      </div>
      <button className="quote-button">Get a Quote</button>
    </header>
  );
};

export default Header;


.hero-section {
    text-align: center;
    padding: 40px;
    color: rgb(255, 255, 255);
    background-color: #000000;
    font-family: 'Poppins', sans-serif;
}

.hero-section h1 {
    font-size: 50px; 
    margin: 0 0 20px 0; 
}

.hero-section p {
    color: #9E9E9E;
    font-size: 18px;
    margin-bottom: 50px; 
    max-width: 500px;
    margin-left: auto;
    margin-right: auto;
}

.features {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
    gap: 20px; 
    margin-top: -40px;
}

.feature {
    background-color: #18181c;
    padding: 30px; 
    width: 25%; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin: 20px 10px; 
    border-radius: 30px;
}

.feature-icon {
    width: 80px; 
    height: 80px;
    margin-bottom: 20px; 
}

.feature h3 {
    margin-bottom: 10px;
}

.feature p {
    color: #9E9E9E;
}


import React from 'react';
import './HeroSection.css';
import comprehensiveIcon from './comprehensive-icon.png';
import advancedIcon from './advanced-icon.png';
import claimsIcon from './claims-icon.png';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Secure Your Cargo with Cutting-Edge Logistics Insurance Solutions</h1>
      <p>Protect your shipments with Indemni's advanced cargo insurance solutions, designed for maximum efficiency and reliability.</p>
      <div className="features">
        <div className="feature">
          <img src={comprehensiveIcon} alt="Comprehensive Coverage" className="feature-icon" />
          <h3>Comprehensive Coverage</h3>
          <p>From All-Risk Cargo Insurance to Stock Throughput Policies, we offer tailored solutions to meet your unique needs.</p>
        </div>
        <div className="feature">
          <img src={advancedIcon} alt="Advanced Risk Management" className="feature-icon" />
          <h3>Advanced Risk Management</h3>
          <p>Leverage our AI and real-time data analytics to mitigate risks and ensure the safety of your shipments.</p>
        </div>
        <div className="feature">
          <img src={claimsIcon} alt="Rapid Claims Processing" className="feature-icon" />
          <h3>Rapid Claims Processing</h3>
          <p>Experience fast and efficient claims processing, with settlements typically within 72 hours.</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


.challenges-section {
    background-color: #18181c;
    padding: 50px;
    text-align: center;
    color: azure;
    font-family: 'Poppins', sans-serif;
  }
  
  .challenges-section h2 {
    margin-bottom: 40px;
    font-size: 48px; 
  }
  
  .challenges-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .challenge {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    width: 80%; 
    justify-content: space-between;
  }
  
  .green-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #74b69a;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    width: 450px; 
  }
  
  .green-box .plus-sign {
    margin-left: auto;
  }
  
  .challenge .text {
    flex: 2;
    text-align: left;
    margin-left: 80px;
  }
  
  .challenge .icon {
    margin-left: 150px;
  }
  
  .challenge .icon img {
    width: 80px; 
    height: auto;
  }
  
  .challenge h3 {
    display: none; 
  }
  
  .challenge p {
    margin: 0;
  }
  

  import React from 'react';
import './ChallengesSection.css';
import coverageGapsIcon from './coverage-gaps.png';
import claimChallengesIcon from './claim-challenges.png';
import operationalDisruptionsIcon from './operational-disruptions.png';
import theftIcon from './theft-icon.png';

const ChallengesSection = () => {
  return (
    <section className="challenges-section">
      <h2>Challenges in Logistics Insurance</h2>
      <div className="challenges-container">
        <div className="challenge">
          <div className="green-box">
            <span>Coverage Gaps</span>
            <span className="plus-sign">+</span>
          </div>
          <div className="text">
            <h3>Coverage Gaps</h3>
            <p>High denial rates and the burden of proving negligence make claims difficult.</p>
          </div>
          <div className="icon">
            <img src={coverageGapsIcon} alt="Coverage Gaps" />
          </div>
        </div>
        <div className="challenge">
          <div className="green-box">
            <span>Claim Challenges</span>
            <span className="plus-sign">+</span>
          </div>
          <div className="text">
            <h3>Claim Challenges</h3>
            <p>Many shippers assume their cargo is fully covered under standard business insurance, leading to significant gaps, especially with varying INCOTERMS.</p>
          </div>
          <div className="icon">
            <img src={claimChallengesIcon} alt="Claim Challenges" />
          </div>
        </div>
        <div className="challenge">
          <div className="green-box">
            <span>Operational Disruptions</span>
            <span className="plus-sign">+</span>
          </div>
          <div className="text">
            <h3>Operational Disruptions</h3>
            <p>Delays and routing errors disrupt operations, causing increased costs and missed deadlines.</p>
          </div>
          <div className="icon">
            <img src={operationalDisruptionsIcon} alt="Operational Disruptions" />
          </div>
        </div>
        <div className="challenge">
          <div className="green-box">
            <span>Theft and Pilferage</span>
            <span className="plus-sign">+</span>
          </div>
          <div className="text">
            <h3>Theft and Pilferage</h3>
            <p>Organized crime frequently targets high-value shipments, leading to substantial financial losses.</p>
          </div>
          <div className="icon">
            <img src={theftIcon} alt="Theft and Pilferage" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;

.solutions-section {
    background-color: #000000;
    padding: 50px;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

.solutions-section h2 {
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 50px;
}

.solutions {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 20px;
}

.solution {
    background-color: #18181c;
    padding: 40px;
    width: 20%; 
    height: 300px; 
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    text-align: center;
    margin: 10px 0;
}

.solution.green {
    background-color: #74b69a;
    color: #000000; 
}

.solution.green p,
.solution.green h3 {
    color: #000000; 
}

.solution.black {
    background-color: #18181c;
    color: #ffffff;
}

.solution-icon {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: 50%; 
}

.solution h3 {
    margin-bottom: 10px;
}

.solution p {
    color: #9e9e9e;
}

import React from 'react';
import './SolutionsSection.css';
import icon1 from './icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import icon4 from './icon4.png';
import icon5 from './icon5.png';
import icon6 from './icon6.png';

const SolutionsSection = () => {
  return (
    <section className="solutions-section">
      <h2>The Proven Way to Secure Your Cargo.</h2>
      <div className="solutions">
        <div className="solution green">
          <img src={icon1} alt="Icon 1" className="solution-icon" />
          <h3>All-Risk Cargo Insurance</h3>
          <p>Offers comprehensive protection against physical loss or damage from external causes throughout transit.</p>
        </div>
        <div className="solution black">
          <img src={icon2} alt="Icon 2" className="solution-icon" />
          <h3>Shipper's Interest Insurance</h3>
          <p>Protects cargo owners from various hazards like fire, theft, and damage. This policy covers your interest in the cargo beyond standard carrier liability.</p>
        </div>
        <div className="solution green">
          <img src={icon3} alt="Icon 3" className="solution-icon" />
          <h3>Stock Throughput Policies</h3>
          <p>Provides seamless coverage from production to final delivery, eliminating gaps in coverage that can occur during different supply chain stages.</p>
        </div>
        <div className="solution black">
          <img src={icon4} alt="Icon 4" className="solution-icon" />
          <h3>Environmental Risk Management</h3>
          <p>Utilize IoT devices for real-time monitoring of environmental conditions, protecting perishable and sensitive goods from damage due to temperature and humidity fluctuations.</p>
        </div>
        <div className="solution green">
          <img src={icon5} alt="Icon 5" className="solution-icon" />
          <h3>Proactive Risk Management</h3>
          <p>Leverages advanced AI and big data to predict potential disruptions and implement preventive measures, ensuring smoother logistics operations.</p>
        </div>
        <div className="solution black">
          <img src={icon6} alt="Icon 6" className="solution-icon" />
          <h3>Quick Event-Based Payouts</h3>
          <p>Offers quick payouts based on predefined events, such as weather events or port delays, ensuring rapid financial recovery and minimal disruption to operations.</p>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;


.testimonials-section {
    background-color: #18181c;
    padding: 50px;
    text-align: center;
    font-family: 'Poppins', sans-serif;
    position: relative;
  }
  
  .testimonials-section h2 {
    color: #ffffff;
    font-size: 36px;
    margin-bottom: 20px;
  }
  
  .carousel {
    position: relative;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .carousel-track-container {
    overflow: hidden;
    width: 100%;
  }
  
  .carousel-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
    width: 100%;
  }
  
  .carousel-slide {
    min-width: 100%;
    transition: transform 0.5s ease-in-out;
    opacity: 0;
    transform: scale(0.8);
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ffffff;
  }
  
  .carousel-slide.current-slide {
    opacity: 1;
    transform: scale(1);
  }
  
  .testimonial-image {
    width: 100%;
    max-width: 600px; 
    height: auto;
    border-radius: 15px; 
    margin-bottom: 20px;
  }
  
  .carousel-slide h4 {
    font-size: 24px;
    margin: 10px 0;
  }
  
  .carousel-slide p {
    color: #9e9e9e;
    font-size: 18px;
  }
  
  .carousel-button {
    background: none;
    border: none;
    color: #ffffff;
    font-size: 24px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }
  
  .carousel-button.left {
    right: 550px;
  }
  
  .carousel-button.right {
    left: 550px;
  }

  import React, { useState, useEffect } from 'react';
import './TestimonialsSection.css';
import review1 from './review1.png';
import review2 from './review2.png';
import review3 from './review3.png';

const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);

  const testimonials = [
    { image: review1, name: 'Jane Doe', position: 'CEO of X' },
    { image: review2, name: 'John Smith', position: 'Manager at Y' },
    { image: review3, name: 'Alice Johnson', position: 'Director of Z' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials-section">
      <h2>Testimonials</h2>
      <div className="carousel">
        <button className="carousel-button left" onClick={prevTestimonial}>
          &lt;
        </button>
        <div className="carousel-track-container">
          <ul className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
            {testimonials.map((testimonial, i) => (
              <li
                key={i}
                className={`carousel-slide ${i === index ? 'current-slide' : ''}`}
              >
                <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </li>
            ))}
          </ul>
        </div>
        <button className="carousel-button right" onClick={nextTestimonial}>
          &gt;
        </button>
      </div>
    </section>
  );
};

export default TestimonialsSection;

.contact-form-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    padding: 50px;
    font-family: 'Poppins', sans-serif;
  }
  
  .image-container {
    flex: 1;
  }
  
  .form-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #18181c; 
    padding: 20px;
    border-radius: 10px; 
  }
  
  h2 {
    margin-bottom: 20px;
    color: #ffffff; 
    font-size: 24px; 
  }
  
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  input, select, textarea, button {
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    font-size: 16px;
    border: none;
    border-radius: 5px; 
    box-sizing: border-box; 
  }
  
  input, select, textarea {
    background-color: #2c2c2e; 
    color: #ffffff; 
  }
  
  button {
    background-color: #74b69a; 
    color: white; 
    cursor: pointer;
    width: 40%; 
    align-self: center; 
  }
  
  textarea {
    height: 100px; 
  }
  
  .world-image {
    max-width: 100%;
    height: auto;
    border-radius: 10px; 
  }

  import React from 'react';
import './ContactForm.css';
import worldImage from './world.jpg'; 

const ContactForm = () => {
  return (
    <section className="contact-form-section">
      <div className="image-container">
        <img src={worldImage} alt="World" className="world-image" />
      </div>
      <div className="form-container">
        <h2>Get in Touch</h2>
        <form>
          <input type="email" placeholder="Your Email" required />
          <input type="text" placeholder="Name" required />
          <select required>
            <option value="" disabled selected>Subject</option>
            <option value="general">General Inquiry</option>
            <option value="quote">Request a Quote</option>
            <option value="support">Support</option>
          </select>
          <textarea placeholder="Text" required></textarea>
          <button type="submit">Get in Touch</button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

.footer {
    background-color: #18181c;
    padding: 20px;
    text-align: center; 
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .footer-logo {
    width: 60px; 
    height: auto;
    margin-bottom: 10px; 
  }



  import React from 'react';
import './Footer.css';
import indemniLogo from './indemni.png'; 

const Footer = () => {
  return (
    <footer className="footer">
      <img src={indemniLogo} alt="Indemni Logo" className="footer-logo" />
      <p>&copy; 2024 Indemni. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

