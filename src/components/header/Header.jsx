import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <header className="header">
            <div className="header-container">
                {/* Logo */}
                <NavLink to="/" className="logo" onClick={closeMenu}>
                    <img src="/assets/logo.png" alt="Logo" />
                </NavLink>

                {/* Navigation */}
                <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
                    <NavLink to="/" onClick={closeMenu}>Home</NavLink>
                    <NavLink to="/collection" onClick={closeMenu}>Collection</NavLink>
                    <NavLink to="/about" onClick={closeMenu}>About Us</NavLink>
                    <NavLink to="/contact" onClick={closeMenu}>Contact Us</NavLink>
                </nav>

                {/* CTA */}
                <div className="cta">
                    <NavLink to="/request-quote" className="btn-primary">
                        Request a Quote
                    </NavLink>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="menu-toggle "
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <FontAwesomeIcon icon={menuOpen ? faXmark : faBars} />
                </button>
            </div>
        </header>
    );
}
