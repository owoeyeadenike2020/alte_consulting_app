import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import RequestForm from '../../RequestForm';
import { useState } from 'react';

function ServiceBody() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    return (
        <>
            {/* <!-- hero section begins --> */}

            <section className="hero-section" >

                <img className="pussy1" src="image/cont-us-hero-img-mobile.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div className="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>The <span>Best Solutions</span> for your <span className="hero-span">Business</span></h1>

                    <p>At Alte, we excel in a diverse range of digital services tailored to meet
                        your specific needs. Our team of specialists leverages deep industry
                        knowledge to deliver solutions that not only solve problems but also
                        propel your business forward.
                    </p>

                    <div className="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i className="fa-solid fa-arrow-right"><FaArrowRight/></i></a>

                        <button id="button-2" onClick={() => setIsFormOpen(true)}>Request a Quote<i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>

                    </div>
                </div>
            </section>

            <div className="pussy" id="contact-hero">
                <img className="hero-img" src="image/cont-us-hero-img.png" alt="" data-aos="fade-up" data-aos-delay="50" />
            </div>

            {isFormOpen && (
                <RequestForm onClose={() => setIsFormOpen(false)} />
            )}
            {/* <!-- hero section ends --> */}





            {/* <!-- contact us section begins --> */}

            {/* <!-- mobile app development --> */}
            <section className="cont-us-soft-dev">

                <div className="cont-us-container" data-aos="fade-up" data-aos-delay="50">
                    <img className="mobile-app-img" src="image/mobile-and-dev-img.png" alt="" data-aos="fade-right" data-aos-delay="50" />

                    <div className="folder">
                        <h1>Mobile App development</h1>
                        <h2>Engage Customers Wherever they are</h2>
                        <p>In today’s mobile-first world, having a compelling mobile app is crucial for customer engagement and brand visibility. Alte designs and develops intuitive mobile applications for iOS and Android that resonate with your target audience. From concept to deployment, we focus on creating apps that deliver exceptional user experiences while aligning with your business goals.</p>
                    </div>
                </div>

            </section>


            {/* <!-- Website And Software Development --> */}
            <section className="cont-us-soft-dev" id="website-soft">

                <div className="cont-us-container" id="website-dev" data-aos="fade-up" data-aos-delay="50">
                    <div className="folder">
                        <h1>Website And Software Development</h1>
                        <h2>Drive your online presence forward</h2>
                        <p>We specialize in building custom websites and software solutions that not only meet but exceed your expectations. Whether you need a robust e-commerce
                            platform, a scalable business application, or a responsive corporate or individual website, our development team ensures seamless functionality and user-centric design to enhance customer engagement and operational efficiency.</p>
                    </div>

                    <img src="image/website-&-software-dev.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                </div>

            </section>

            {/* <!-- Product Discovery --> */}
            <section className="cont-us-soft-dev">

                <div className="cont-us-container" data-aos="fade-up" data-aos-delay="50">
                    <img className="mobile-app-img" src="image/product-discovery.png" alt="" data-aos="fade-right" data-aos-delay="50" />

                    <div className="folder">
                        <h1>Product Discovery</h1>
                        <h2>Transform your Ideas into marketable Products</h2>
                        <p>Embark on your product journey with Alte’s product discovery services. We help businesses validate ideas, identify market opportunities, and define Product requirements through rigorous research and prototyping. Our strategic approach ensures that your product not only meets customer needs but also stands out in the competitive landscape, driving growth and profitability.
                        </p>
                    </div>
                </div>

            </section>

            {/* <!-- Product Design --> */}
            <section className="cont-us-soft-dev" id="website-soft">

                <div className="cont-us-container" id="website-dev" data-aos="fade-up" data-aos-delay="50">
                    <div className="folder">
                        <h1>Product Design</h1>
                        <h2>Create Design that Inspire and Engage</h2>
                        <p>At Alte, we believe in the power of design to elevate user experiences
                            and enhance brand perception. Our expert designers collaborate closely
                            with clients to create visually appealing and user-friendly interfaces for
                            websites, apps, and digital products. Whether you need a fresh redesign
                            or a brand-new concept, our design solutions are tailored to captivate
                            your audience and drive conversions.</p>
                    </div>

                    <img src="image/product-design.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                </div>

            </section>


            {/* <!-- Research and Analysis--> */}
            <section className="cont-us-soft-dev">

                <div className="cont-us-container" data-aos="fade-up" data-aos-delay="50">
                    <img className="mobile-app-img" src="image/research-analysis.png" alt="" data-aos="fade-right" data-aos-delay="50" />

                    <div className="folder">
                        <h1>Research and Analysis</h1>
                        <h2>Gain insights for informed decision</h2>
                        <p>Make data-driven decisions with Alte’s research and analysis services. We provide deep insights into market trends, consumer behavior, and you’re launching a new product or refining your marketing strategy, our research ensures that you stay ahead of the curve and maximize opportunities for growth.
                        </p>
                    </div>
                </div>

            </section>


            {/* <!-- Pitch Deck Creation --> */}
            <section className="cont-us-soft-dev" id="website-soft">

                <div className="cont-us-container" id="website-dev" data-aos="fade-up" data-aos-delay="50">
                    <div className="folder">
                        <h1>Pitch Deck Creation</h1>
                        <h2>Standout and secure Investment</h2>
                        <p>Craft compelling pitch decks that resonate with investors and stakeholders. Alte helps businesses articulate their vision, value proposition, and growth potential through persuasive storytelling and impactful visuals. Our strategic approach to pitch deck creation increases your chances of securing funding partnerships, and strategic alliances to fuel your business expansion.
                        </p>
                    </div>

                    <img src="image/pitch-deck.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                </div>

            </section>


            {/* <!-- Business Plan Development--> */}
            <section className="cont-us-soft-dev">

                <div className="cont-us-container" data-aos="fade-up" data-aos-delay="50">
                    <img className="mobile-app-img" src="image/business-plan.png" alt="" data-aos="fade-right" data-aos-delay="50" />

                    <div className="folder">
                        <h1>Business Plan Development</h1>
                        <h2>Strategize for sustainable growth</h2>
                        <p>Develop comprehensive business plans that outline your goals, strategies, and
                            financial projections. Alte collaborates closely with businesses to create strategic roadmaps for success. Whether you’re a startup seeking funding or an established company planning for growth, our business plans provide clarity and direction to achieve your long-term objectives.
                        </p>
                    </div>
                </div>

            </section>



            {/* <!-- Low Code App Development --> */}
            <section className="cont-us-soft-dev" id="website-soft">

                <div className="cont-us-container" id="website-dev" data-aos="fade-up" data-aos-delay="50">
                    <div className="folder">
                        <h1>Low Code App Development</h1>
                        <h2>Accelerate Time-To-Market with Efficiency</h2>
                        <p>Streamline app development processes with our low-code app development team. We leverage cutting-edge low-code tools to rapidly build and deploy scalable applications while minimizing costs and complexity. Whether you’re launching a new product or optimizing existing workflows, our low-code services empower businesses to innovate faster and stay competitive in the digital age.

                        </p>
                    </div>

                    <img src="image/low-code.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                </div>

            </section>


        </>
    )
}

export default ServiceBody;
