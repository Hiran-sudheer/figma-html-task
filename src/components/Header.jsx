import "../styles/_header.scss";
import Logo from "../assets/Logo.png";
import { FaAngleDown } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container header__inner">
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="LeadCRM" width={120} />
        </div>

        {/* Desktop Nav */}
        <nav className={`nav ${isOpen ? "nav--open" : ""}`}>
          <ul className="nav__list">
            <li>
              <a href="#">
                Product <FaAngleDown className="nav__icon" />
              </a>
            </li>
            <li><a href="#">Pricing</a></li>
            <li>
              <a href="#">
                Resources <FaAngleDown className="nav__icon" />
              </a>
            </li>
            <li>
              <a href="#">
                Company <FaAngleDown className="nav__icon" />
              </a>
            </li>
          </ul>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <a href="#" className="btn btn--primary">Get Your Free Account</a>
          <a href="#" className="btn btn--outline">
            <CiLogin /> Login
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  );
}
