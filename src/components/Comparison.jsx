// src/components/Comparison/Comparison.jsx

import React from 'react';

// Card images
import withoutImg from '../assets/comparison/without-leadcrm.png';
import withImg from '../assets/comparison/with-leadcrm.png';

// Icon from react-icons library
import { MdOutlineClose } from "react-icons/md";

// Image icons for the "With" list
import iconSync from '../assets/icons/icon-sync.png';
import iconContacts from '../assets/icons/icon-contacts.png';
import iconOverlay from '../assets/icons/icon-overlay.png';
import iconAI from '../assets/icons/icon-ai.png';
import iconLeadCRM from '../assets/logo-icon.png';

// Arrow for CTA
import iconArrow from '../assets/icons/icon-arrow.png';

const withoutItems = [
  {
    IconComponent: MdOutlineClose, // ✅ We use a different key for React Components
    title: 'Manual Data Entry',
    badge: '3+ Hours wasted daily',
    badgeColor: 'red',
    description: 'Copying LinkedIn contacts to CRM manually plus losing conversation history.',
  },
  {
    IconComponent: MdOutlineClose,
    title: 'Incomplete Data',
    badge: '60% Data incomplete',
    badgeColor: 'red',
    description: 'LinkedIn profiles missing Email and Phones from 700M+ Database.',
  },
  {
    IconComponent: MdOutlineClose,
    title: 'No CRM Visibility',
    badge: 'Zero context available',
    badgeColor: 'yellow',
    description: 'Can’t see existing CRM contacts when browsing LinkedIn profiles.',
  },
  {
    IconComponent: MdOutlineClose,
    title: 'Limited Productivity',
    badge: 'No smart assistance',
    badgeColor: 'yellow',
    description: 'Writing messages manually plus no AI assistant for reply, Invite or comments.',
  },
];

const withItems = [
  {
    iconSrc: iconSync, // ✅ We use 'iconSrc' for image paths
    title: 'Complete Bi-Directional Sync',
    description: 'Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.',
  },
  {
    iconSrc: iconContacts,
    title: '700M+ Contacts + Enrichment',
    description: 'Get verified emails and phone numbers from a vast global database.',
  },
  {
    iconSrc: iconOverlay,
    title: 'CRM Overlay on LinkedIn',
    description: 'See full CRM insights directly on LinkedIn profiles without switching tabs.',
  },
  {
    iconSrc: iconAI,
    title: 'AI Response + Templates + Bulk Exports',
    description: 'Save time with AI-crafted replies, pre-built templates, and one-click data exports.',
  },
];


const Comparison = () => {
  return (
    <section className="comparison">
      <div className="comparison__container">
        <h2 className="comparison__heading">
          Every LinkedIn Prospector faces these daily challenges
        </h2>

        <div className="comparison__grid">
          {/* Card: Without LeadCRM */}
          <div className="comparison__card comparison__card--without">
            <img src={withoutImg} alt="Interface without LeadCRM" className="card__image" />
            <div className="card__content">
              <h3 className="card__title">Without LeadCRM</h3>
              <ul className="card__list">
                {withoutItems.map((item, index) => {
                  // ✅ The component is now correctly stored in a capitalized variable
                  const Icon = item.IconComponent;
                  return (
                    <li className="list-item" key={index}>
                      {/* ✅ Render the React Icon directly */}
                      <Icon className="list-item__icon list-item__icon--red" />
                      <div className="list-item__text">
                        <p className="list-item__title">
                          {item.title}
                          <span className={`list-item__badge list-item__badge--${item.badgeColor}`}>
                            {item.badge}
                          </span>
                        </p>
                        <p className="list-item__description">{item.description}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* VS Divider */}
          <div className="comparison__divider">VS</div>

          {/* Card: With LeadCRM */}
          <div className="comparison__card comparison__card--with">
            <img src={withImg} alt="Interface with LeadCRM" className="card__image" />
            <div className="card__content">
              <h3 className="card__title">
                <img src={iconLeadCRM} alt="LeadCRM icon" />
                With LeadCRM
                <span className="list-item__badge list-item__badge--blue">4+ Hours/day Saved</span>
              </h3>
              <ul className="card__list">
                {withItems.map((item, index) => (
                  <li className="list-item" key={index}>
                    {/* ✅ Render the image icon using the <img> tag */}
                    <img src={item.iconSrc} alt="" className="list-item__icon" />
                    <div className="list-item__text">
                      <p className="list-item__title">{item.title}</p>
                      <p className="list-item__description">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="comparison__cta">
          <a href="#" className="btn-cta">Start Using LeadCRM Now</a>
          <div className="cta-caption">
            <p>Save 40+ hours <strong>every Month</strong></p>
            <img src={iconArrow} alt="arrow pointing to button" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;