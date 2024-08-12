import React from 'react'

function AboutBody() {
    return (
        <>
            <section className="hero-section"   >

                <img className="pussy1" src="image/about-us-hero-1.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div className="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1> Your strategic <span>partner</span> for business innovation and<span className="hero-span">growth.</span></h1>

                    <p>Our expertise spans across a comprehensive range of services designed to elevate your business to new heights. Whether it's developing cutting-edge websites, software, and mobile apps, conducting product discovery, or creating intuitive and user-friendly designs, we have you covered
                    </p>

                    <div className="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i className="fa-solid fa-arrow-right"></i></a>

                        <button id="button-2" onclick="toggleForm()">Request a Quote<i className="fa-solid fa-arrow-right"></i></button>

                    </div>
                </div>
            </section>

            <div className="pussy">
                <img className="hero-img" src="image/about-us-hero.png" alt="" />
            </div>



            {/* <!-- blank-green-sec --> */}

            <div className="blank-green-sec"> </div>

            {/* // <!-- blank-green ends -->

// <!-- hero section ends --> */}



            {/* // <!--about us vision-- > */}
            <section className="our-vision">

                <div className="container-vis" data-aos="fade-up" data-aos-delay="50">

                    <div className="vision-folder-1">
                        <img className="vision-img" src="image/abt-vision-img.png" alt="" />

                        <div className="vision-folder-text">
                            <h2>Our Vision</h2>
                            <p>To be the leading force in
                                digital  transformation</p>
                        </div>

                    </div>

                    <div className="vision-folder-1">
                        <img className="vision-img" src="image/abt-vision-img-1.png" alt="" />

                        <div className="vision-folder-text">
                            <h2>Our Mission</h2>
                            <p >Our mission is to empower businesses with innovative Solutions that foster growth.</p>
                        </div>

                    </div>

                </div>

            </section>


            {/* <!--about us call value section-- > */}

            <div className="abt-core">

                <div className="core-container" data-aos="fade-up" data-aos-delay="50">

                    <h2>Core Values</h2>

                    <div className="abt-folder" >

                        <div className="about-folder-in">
                            <img src="image/choose-us-1.png" alt="" />
                            <h3>Integrity</h3>
                            <p>We are a team of seasoned professionals with deep industry knowledge.</p>
                        </div>
                        <div className="about-folder-in">
                            <img src="image/choose-us-1.png" alt="" />
                            <h3>Collaboration</h3>
                            <p>We work together to achieve common goals.</p>
                        </div>
                        <div className="about-folder-in">
                            <img src="image/choose-us-1.png" alt="" />
                            <h3>Excellence</h3>
                            <p>We are committed to delivering superior quality in everything we do.</p>
                        </div>

                    </div>

                </div>

            </div>


            {/* <!--abt our process-- > */}
            <section className="our-process-abt">
                <h2 className="abt-h2">Our Process</h2>

                <ul className="container-abt" data-aos="fade-up" data-aos-delay="50">

                    <div>
                        <li><i className='bx bxs-envelope'></i>Initial Contact:</li>
                        <p>Send us an email outlining your project goals and requirements.</p>
                    </div>

                    <div>
                        <li><i className='bx bxs-phone-call'></i>Discovery Call:</li>
                        <p>We schedule a personalized discovery call to delve deeper into your needs and aspirations.</p>
                    </div>

                    <div>
                        <li><i className="fa-solid fa-desktop"></i>Proposal and Agreement:</li>
                        <p>Receive a comprehensive proposal and basic contract,detailing the scope of work and payment terms</p>
                    </div>

                    <div>
                        <li><i className="fa-solid fa-people-group"></i>Collaborative Development:</li>
                        <p>Stay involved as we develop your project, with regular updates and opportunities for your feedback.</p>
                    </div>

                    <div>
                        <li><i className="fa-solid fa-star"></i>Final Delivery:</li>
                        <p>Receive the final deliverables, meticulously crafted to exceed your expectations.</p>
                    </div>

                </ul>

            </section>
        </>
    )
}

export default AboutBody;
