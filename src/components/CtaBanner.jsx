
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

import bannerBackground from './../assets/cta/banner.png';

const CtaBanner = () => {
  return (
    <section className="cta-section">
      <div className="cta-section__container">
        <h2 className="cta-section__heading">Join Thousands of Professionals Using LeadCRM</h2>

 
        <div
          className="cta-banner"
        >
          <img src={bannerBackground} alt="banner" />
          <a href="#" className="cta-banner__button">
            Get Started Today <FaArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;