import "./../styles/_hero.scss";
import underline from "./../assets/hero/line.png";
import social1 from "./../assets/hero/social1.png";
import social2 from "./../assets/hero/social2.png";
import social3 from "./../assets/hero/social3.png";
import chrome from "./../assets/hero/chrome.png";
import chromelogo from "./../assets/hero/chrome-logo.png";
import capterra from "./../assets/hero/capterra.png";

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__container">
        {/* Top badge */}
        <div className="hero__badge">
          <span className="hero__badge-icon">🚀</span>
          Thousands of Professionals using LeadCRM
        </div>

        {/* Main heading */}
        <h1 id="hero-title" className="hero__title">
          LinkedIn CRM Integration
          <br />
          Capture, Sync and Enrich in{" "}
          <span className="highlight">
            Both Ways{" "}
            <span>
              <img src={underline} alt="underline" />
            </span>
          </span>
        </h1>

        {/* Subtext */}
        <p className="hero__subtitle">
          Automatically sync LinkedIn prospects to your CRM and overlay existing
          CRM contacts on LinkedIn profiles. Complete bi-directional integration
          with HubSpot, Salesforce, and Pipedrive.
        </p>

        {/* Works with */}
        <div className="hero__works">
          <span className="works-label">Works with</span>
          <div className="works-logos">
            <img src={social1} alt="HubSpot" />
            <img src={social2} alt="Pipedrive" />
            <img src={social3} alt="Salesforce" />
          </div>
        </div>

        {/* Ratings */}
        <div className="hero__ratings">
          <div className="rating">
            <img src={chrome} alt="Chrome" />
            <span className="stars">★★★★★</span>
            <span className="score">5/5</span>
          </div>
          <div className="rating">
            <img src={capterra} alt="Capterra" />
            <span className="stars">★★★★★</span>
            <span className="score">5/5</span>
          </div>
        </div>

        {/* CTAs */}
        <div className="hero__actions">
          <a href="#" className="btn btn--dark">
            <span className="btn-label">
            Available in <span className="highlight">Chrome Web Store</span> 
            </span><span><img src={chromelogo} alt="Chrome Web Store" width={30} height={30} /></span>
          </a>
          <a href="#" className="btn btn--green">
            Get a Free Trial Now!
          </a>
        </div>
      </div>
    </section>
  );
}
