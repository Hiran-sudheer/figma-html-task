
import React from 'react';

import step1Img from './../assets/howitworks/1.png';
import step2Img from './../assets/howitworks/2.png';
import step3Img from './../assets/howitworks/3.png';
import step4Img from './../assets/howitworks/4.png';


const stepsData = [
  {
    number: '1',
    title: 'Install the Extension',
    description: 'Add LeadCRM to Chrome and connect your CRM in 2 minutes—secure and seamless.',
    image: step1Img,
  },
  {
    number: '2',
    title: 'Browse LinkedIn',
    description: 'Use LinkedIn normally, our extension auto-captures data and reveals CRM contacts instantly.',
    image: step2Img,
  },
  {
    number: '3',
    title: 'Get Enriched Data',
    description: 'Enrich profiles with verified emails, phones, and company data with 95%+ accuracy guaranteed.',
    image: step3Img,
  },
  {
    number: '4',
    title: 'Sync to CRM Instantly',
    description: 'Prospect data syncs to your CRM instantly with history, tracking, and AI powered insights for better follow-ups.',
    image: step4Img,
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works__container">
        <header className="how-it-works__header">
          <h2 className="how-it-works__heading">How it Works</h2>
          <p className="how-it-works__subheading">
            From setup to success in <strong>4 simple steps</strong>
          </p>
        </header>

        <div className="how-it-works__grid">
          {stepsData.map((step, index) => (
            <div className="step-card" key={index}>
              <span className="step-card__number">{step.number}</span>
              <div className="step-card__content">
                <h3 className="step-card__title">{step.title}</h3>
                <p className="step-card__description">{step.description}</p>
                <img src={step.image} alt={`Step ${step.number}: ${step.title}`} className="step-card__image" />
              </div>
            </div>
          ))}
        </div>

        <div className="how-it-works__cta">
          <a href="#" className="btn-cta">Try LeadCRM Now</a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;