
import React from 'react';

import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { MdOutlineMail, MdOutlinePhone, MdOutlineHelpOutline } from 'react-icons/md';

import logo from './../assets/Logo.png';
import chromeBadge from './../assets/footer/link.png';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Column 1: Brand Info */}
          <div className="footer__col footer__col--brand">
            <img src={logo} alt="LeadCRM" className="footer__logo" />
            <p className="footer__description">
              LeadCRM is LinkedIn integration tool for your CRM.
            </p>
            <div className="footer__socials">
              <a href="#" aria-label="Facebook"><FaFacebookF /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
            </div>
          </div>

          {/* Column 2: Integrations */}
          <div className="footer__col">
            <h3 className="footer__col-title">Integrations</h3>
            <ul className="footer__link-list">
              <li><a href="#">HubSpot</a></li>
              <li><a href="#">Salesforce</a></li>
              <li><a href="#">Pipedrive</a></li>
              <li><a href="#">Close.io <span className="badge">Coming Soon</span></a></li>
              <li><a href="#">Insightly <span className="badge">Coming Soon</span></a></li>
            </ul>
          </div>

          {/* Column 3: Alternative */}
          <div className="footer__col">
            <h3 className="footer__col-title">Alternative</h3>
            <ul className="footer__link-list">
              <li><a href="#">Surfe VS LeadCRM</a></li>
              <li><a href="#">Linkmatch Alternative</a></li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="footer__col">
            <h3 className="footer__col-title">Legal</h3>
            <ul className="footer__link-list">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Use</a></li>
            </ul>
          </div>

          {/* Column 5: Contact Us */}
          <div className="footer__col footer__col--contact">
            <h3 className="footer__col-title">Contact Us</h3>
            <ul className="footer__contact-list">
              <li><MdOutlineMail /><a href="mailto:support@leadcrm.io">support@leadcrm.io</a></li>
              <li><MdOutlinePhone /><a href="tel:+12315387466">+1 231-538-7466</a></li>
              <li><MdOutlineHelpOutline /><a href="#">Help Center</a></li>
            </ul>
            <a href="#">
              <img src={chromeBadge} alt="Available in Chrome Web Store" className="footer__chrome-badge" />
            </a>
          </div>
        </div>

        <div className="footer__sub">
          <p className="footer__disclaimer">
            Disclaimer : LeadCRM is not endorsed or certified by LinkedIn. All LinkedIn(tm) logos and trademarks displayed on this tool are property of LinkedIn. LeadCRM is distributed AS IS. Your use of LeadCRM is at your own risk.
          </p>
          <hr className="footer__divider" />
          <p className="footer__copyright">
            Copyright © 2025 LeadCRM. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;