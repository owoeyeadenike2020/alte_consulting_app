import React from 'react';


function Footer() {
    return (
        <>
            <section id="newsletter"  >

                <div class="newstext">
                    <h4>SUBSCRIBE TO OUR NEWS LETTER</h4>
                    <p>Signup to enjoy our services better</p>
                </div>
                <div class="form">
                    <input type="text" placeholder="Your email address" />
                    <button class="normal">send</button>
                </div>
                <div class="social-media-links">
                    <a href="#"><i class='bx bxl-twitter'></i></a>
                    <a href="#"><i class='bx bxl-facebook-circle'></i></a>
                    <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                </div>

            </section>
            <footer>
                <div className="f-container" >

                    <div className="f-content-1">
                        <a href="index.html"><img src="icons/nav-logo.png" alt="" className="f-logo" /></a>
                        <p>At Alte Consulting, we offer a full spectrum of digital consulting services, from website and software development to mobile app creation, product discovery, intuitive design, and comprehensive business solutions.</p>


                    </div>
                    <div className="f-content">
                        <h5>PAGES</h5>

                        <div className="home-links">
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about-us.html">About</a></li>
                            <li><a href="our-services.html">Our Services</a></li>
                            <li><a href="#">Careers</a></li>
                            <li><a href="#">Blogs</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="case-study.html">Case study</a></li>
                        </div>

                    </div>

                    <div className="f-content">
                        <h5>SERVICES</h5>

                        <div className="home-links">
                            <li><a href="#">Web Development </a></li>
                            <li><a href="#">Research and Analysis</a></li>
                            <li><a href="#">Mobile App Devlelopment</a></li>
                            <li><a href="#">Product Design</a></li>
                            <li><a href="#">Pitch Desk Creation</a></li>
                            <li><a href="#">Product Discovery</a></li>
                        </div>

                    </div>


                    <div className="f-content">

                        <h5>CONTACT US</h5>
                        <p><i className='bx bxs-envelope'></i> hello@gmail.com</p>
                        <p><i className='bx bxs-phone-call'></i>+234 9068 200 735</p>

                    </div>

                    <div className="borderline1">
                        <div className="allright">
                            <h1>© 2024 Alte - All rights reserved</h1>
                        </div>
                    </div>

                </div>
            </footer>
        </>
    )
}

export default Footer
