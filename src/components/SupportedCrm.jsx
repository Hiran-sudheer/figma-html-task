
import React from 'react';
import message from './../assets/supported-crm/message.png';
import collaboration from './../assets/supported-crm/Collaboration.png';

const SupportedCrm = () => {
  return (
    <section className="supported-crm">
        

      <div className="supported-crm__container">
        
        <header className="supported-crm__header">
        <div className="message"><img src={message} alt="message" /></div>
          <h2 className="supported-crm__heading">Our Supported LeadCRM</h2>
          <p className="supported-crm__subheading">
            LeadCRM provides Native Integrations with popular CRM tools to make the most out of your LinkedIn prospecting. We don’t want you to miss any revenue opportunity on the internet!
          </p>
        </header>

        {/* This div will contain the large graphic as a background image */}
        <div className="supported-crm__graphic"></div>

        <div className="supported-crm__cta">
          <a href="#" className="btn-cta">Lets Integrate your CRM Now!</a>
        </div>
        <div className="collaboration">
            <img src={collaboration} alt="collaboration" />
        </div>
      </div>
    </section>
  );
};

export default SupportedCrm;