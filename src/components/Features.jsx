
import React from 'react';

import iconContacts from './../assets/features/contact.png';
import iconClick from './../assets/features/cursor.png';
import iconMapping from './../assets/features/mapping.png';
import iconEnrichment from './../assets/features/waterfall.png';

const featuresData = [
  {
    icon: iconContacts,
    text: <>Access to <strong>700M+ Contacts</strong></>,
  },
  {
    icon: iconClick,
    text: <><strong>One click push</strong> to CRM</>,
  },
  {
    icon: iconMapping,
    text: <><strong>Custom Field</strong> Mapping</>,
  },
  {
    icon: iconEnrichment,
    text: <>Advanced <strong>Waterfall Enrichment</strong></>,
  },
];

const Features = () => {
  // To create a seamless animation, we duplicate the features list.
  const extendedFeatures = [...featuresData, ...featuresData];

  return (
    <section className="features-section">
      <div className="scroller">
        <ul className="scroller__inner">
          {extendedFeatures.map((feature, index) => (
            <li
              className="feature-item"
              key={index}
              // The duplicated list is hidden from screen readers for accessibility
              aria-hidden={index >= featuresData.length}
            >
              <img src={feature.icon} alt="" className="feature-item__icon" />
              <p className="feature-item__text">{feature.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;