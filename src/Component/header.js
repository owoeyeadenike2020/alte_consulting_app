import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaIndent, FaTimesCircle } from "react-icons/fa";
import RequestForm from '../RequestForm';

function Header() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };


    return (
        <>
            <section id="header">
                <a href="/"><img src="icons/nav-logo.png" className="logo" alt="" /></a>

                <div>
                    <ul id="navber" className={isMobileMenuOpen ? 'active' : ''}>
                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                        <li><NavLink to="/about-us" activeClassName="active">About us</NavLink></li>
                        <li><NavLink to="/our-services" activeClassName="active">Our Services</NavLink></li>
                        <li><NavLink to="/careers" activeClassName="active">Careers</NavLink></li>
                        <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>
                        <li><NavLink to="/contact-us" activeClassName="active">Contact us</NavLink></li>
                        <li><NavLink to="/case-study" activeClassName="active">Case studies</NavLink></li>
                        <button type='button' id="nav-req" onClick={() => setIsFormOpen(true)}>Request a Quote</button>
                        <a href="#" id="close" onClick={() => setIsMobileMenuOpen(false)}><i className="fa-solid"><FaTimesCircle /></i></a>
                    </ul>
                </div>

                <div id="mobile">
                    <i id="bar" onClick={toggleMobileMenu}><FaIndent />

                    </i>
                </div>
            </section>

            {isFormOpen && (
                <RequestForm onClose={() => setIsFormOpen(false)} />
            )}
        </>
    );
}

export default Header;
