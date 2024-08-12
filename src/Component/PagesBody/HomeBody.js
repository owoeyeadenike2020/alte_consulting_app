import React from 'react';
import { FaRegArrowAltCircleUp, FaArrowRight} from "react-icons/fa";

function HomeBody() {
    return (
        <>
            <section className="hero-section"   >

                <img className="pussy1" src="image/hero-img-1.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div className="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>Transform your <span>ideas</span> into <span className="hero-span">Digital Excellence</span></h1>

                    <p>At Alte Consulting, we offer a full spectrum of digital consulting services, from website and software development to mobile app creation, product discovery, intuitive design, and comprehensive business solutions.</p>

                    <div className="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i className="fa-solid fa-arrow-right"><FaArrowRight/></i></a>

                        <button id="button-2" onclick="toggleForm()">Request a Quote<i className="fa-solid fa-arrow-right"><FaArrowRight/></i></button>

                    </div>
                </div>
            </section>

            <div className="pussy">
                <img className="hero-img" src="image/hero-img.png" alt="" />
            </div>



            {/* <!-- hero section ends --> */}



            {/* <!-- blank-green-sec --> */}

            <div className="blank-green-sec">

            </div>

            {/* <!-- blank-green ends --> */}


            {/* <!-- project conpleted --> */}

            <section className="projection-completed" >

                <div className="prj-container" data-aos="fade-up" data-aos-delay="50">
                    <div className="prj-split" >
                        <img src="image/50+.png" alt="" />
                        <h2>Projects Completed</h2>
                        <p>Over 50+ Projects Completed</p>
                    </div>
                    <div className="prj-split">
                        <img src="image/3k.png" alt="" />
                        <h2>Delivery Timeline</h2>
                        <p>Faster Delivery Process </p>
                    </div>
                    <div className="prj-split">
                        <img src="image/30+.png" alt="" />
                        <h2>Satisfied Clients</h2>
                        <p>We have reached a wide audience</p>
                    </div>
                </div>

            </section>



            {/* <!-- 3th secetion--> */}

            <section className="home3" >
                <div className="folder" >

                    <div className="container" data-aos="fade-up" data-aos-delay="50">
                        <h1>At Alte Consulting, we excel in a diverse range of digital services tailored to meet your specific needs.
                        </h1>
                        <p className="text1">Our team of specialists leverages deep industry knowledge to deliver solutions that not only solve problems but also propel your business forward.</p>

                        <div className="view">
                            <a className="anchor" href="our-services.html"> <i className='bx bx-right-top-arrow-circle'><FaRegArrowAltCircleUp/></i> LEARN MORE</a>
                        </div>
                    </div>

                    <div className="container2">
                        <img src="image/section-3-consulting.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                    </div>

                </div>
            </section>


            {/* <!-- 4th secetion--> */}

            {/* <!-- <section className="explore-services  swiper">  

<h2>Explore Our Services</h2>
    <div className="line"></div>


<div className="card-container swiper-wrapper" data-aos="fade-up" data-aos-delay="50">    
    
    <div className="card " >
        <img src="image/eplore-our-services-img-1.png" alt="">
        <div className="card-content">
            <h3>Web/Software Development</h3>
            <p>Transform your online presence with our custom
                website and software solutions designed for 
                seamless performance and scalability, ensuring 
                your business stays ahead in the digital age
                Read more</p>
            <a className="btn" href="#">Read more</a>
        </div>
        
    </div>

    <div className="card">
        <img src="image/eplore-our-services-img-2.png" alt="">
        <div className="card-content">
            <h3>Mobile App Development</h3>
            <p> Capture the growing mobile market with our high-
                performance app development services. We
                 create intuitive, engaging mobile experiences
                 that keep users coming back.
                </p>
            <a className="btn" href="#">Read more</a>
        </div>

    </div>

    <div className="card">
        <img src="image/eplore-our-services-img-3.png" alt="">
        <div className="card-content">
            <h3>Product Discovery</h3>
            <p className="product-dis" >Our product discovery process aligns your vision
                with market needs and technical feasibility,
                providing a clear path from concept to launch.
                </p>
            <a className="btn" href="#">Read more</a>
        </div>
        
    </div>

    <div className="card">
        <img src="image/eplore-our-services-img-3.png" alt="">
        <div className="card-content">
            <h3>Product Discovery</h3>
            <p className="product-dis" >Our product discovery process aligns your vision
                with market needs and technical feasibility,
                providing a clear path from concept to launch.
                </p>
            <a className="btn" href="#">Read more</a>
        </div>
        
    </div>

    <div className="card">
        <img src="image/eplore-our-services-img-3.png" alt="">
        <div className="card-content">
            <h3>Product Discovery</h3>
            <p className="product-dis" >Our product discovery process aligns your vision
                with market needs and technical feasibility,
                providing a clear path from concept to launch.
                </p>
            <a className="btn" href="#">Read more</a>
        </div>
        
    </div>

    <div className="card">
        <img src="image/eplore-our-services-img-3.png" alt="">
        <div className="card-content">
            <h3>Product Discovery</h3>
            <p className="product-dis" >Our product discovery process aligns your vision
                with market needs and technical feasibility,
                providing a clear path from concept to launch.
                </p>
            <a className="btn" href="#">Read more</a>
        </div>
        
    </div>

</div>   
<div className="swiper-pagination"></div>
<div className="swiper-button-prev"></div>
<div className="swiper-button-next"></div>
</section> --> */}


            <section className="ex-container">
                <div className="swiper">
                    <h2 className="swiper-tex">Explore Our Services</h2>
                    <div className="line"></div>

                    <div className="swiper-wrapper">
                        <div className="swiper-slide swiper-no-swiping">
                            <div className="content">
                                <img src="image/eplore-our-services-img-1.png" alt="" />
                                <h2>Web/Software Development</h2>
                                <p>Transform your online presence with our custom
                                    website and software solutions designed for
                                    seamless performance and scalability, ensuring
                                    your business stays ahead in the digital age
                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-2.png" alt="" />
                                <h2>Mobile App Development</h2>
                                <p>Capture the growing mobile market with our high-
                                    performance app development services. We
                                    create intuitive, engaging mobile experiences
                                    that keep users coming back.


                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-3.png" alt="" />
                                <h2>Product Discovery</h2>
                                <p  >Our product discovery process aligns your vision
                                    with market needs and technical feasibility,
                                    providing a clear path from concept to launch.


                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-4.png" alt="" />
                                <h2>Product Design</h2>
                                <p  >Our expert design team crafts visually stunning,
                                    user-centric designs that enhance usability and
                                    delight your customers, ensuring a superior user
                                    experience
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-5.png" alt="" />
                                <h2>Research and Analysis</h2>
                                <p >Gain a competitive edge in your business with our comprehensive research and analysis services. We provide actionable insights to optimize your strategies and stay ahead of market trends.
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-6.png" alt="" />
                                <h2>Pitch Desk Creation</h2>
                                <p>Position, helping you secure the investment you
                                    need to grow your business Our compelling pitch
                                    clearly communicate your vision and value
                                    proposition.
                                </p>
                                <button className="btn">Read More<i className="fa-solid fa-arrow-right"><FaArrowRight/></i> </button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-7.png" alt="" />
                                <h2>Business Plan Development</h2>
                                <p className="texhight1 texhight5">Let us help you build a comprehensive business
                                    plan that outlines your goals, strategies, and
                                    roadmap to success, giving you a solid
                                    foundation for growth.
                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight/></i></button>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <div className="content">
                                <img src="image/eplore-our-services-img-8.png" alt="" />
                                <h2>Low-Code App Development</h2>
                                <p className="texhight3 texhight6">Reduce time-to-market and development costs
                                    with our low-code app development service,
                                    allowing you to quickly deploy efficient
                                    applications without sacrificing quality.
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight/></i></button>
                            </div>
                        </div>

                    </div>
                    <ul className="control" id="custom-control">
                        <li className="prev"><ion-icon className="arrow" name="caret-back-outline"></ion-icon></li>
                        <li className="next"><ion-icon className="arrow" name="caret-forward-outline"></ion-icon></li>
                    </ul>
                </div>
            </section>





            {/* <!-- 6th secetion--> */}

            <section className="why-choose-sec" >

                <h1 data-aos="fade-up" data-aos-delay="50">Why Choose Us?</h1>

                <div className="line" data-aos="fade-up" data-aos-delay="50"></div>

                <div className="choose-sec" data-aos="fade-up" data-aos-delay="50">
                    <div className="choose-contianer">
                        <img src="image/choose-us-1.png" alt="" />
                        <h3>Expertise</h3>
                        <p>We are a team of seasoned professionals with deep industry knowledge.</p>
                    </div>
                    <div className="choose-contianer">
                        <img src="image/choose-us-2.png" alt="" />
                        <h3>Innovation</h3>
                        <p>We deliver state-of-the-art solutions tailored to your unique needs.
                        </p>
                    </div>
                    <div className="choose-contianer">
                        <img src="image/choose-us-3.png" alt="" />
                        <h3>Partnership</h3>
                        <p>We employ a collaborative approach to
                            ensure the success of your project.</p>
                    </div>
                </div>

            </section>



            {/* <!-- 7th secetion--> */}


            <section className="client-say">

                <div className="client-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>What Our Clients Say?</h1>
                    {/* <!-- <img className="say-image" src="image/client-say-arror.png" alt="">  --> */}

                    <div className="client-folder">

                        <div className="client-say-1">

                            <div className="inside-client">
                                <img src="image/client-say-1.png" alt="" />

                                <div className="inside-client-img-text">
                                    <h3>Mila McSabbu</h3>
                                    <p>Freelance Designer</p>
                                </div>
                            </div>

                            <p className="testimonies">Alte exceeded our expectations in every way. They built a sleek, user-friendly website that perfectly represents our brand. Their attention to detail and technical expertise are impressive. Our online traffic and user engagement have improved significantly!"</p>
                        </div>

                        <div className="client-say-1">
                            <div className="inside-client">
                                <img src="image/client-say-2.png" alt="" />

                                <div className="inside-client-img-text">
                                    <h3>Jeremiah June</h3>
                                    <p>Data Analyst</p>
                                </div>
                            </div>

                            <p className="testimonies">Alte delivered a top-notch pitch deck that was both informative and visually appealing. Their understanding of what investors are looking for and their ability to highlight our strengths were crucial in our successful fundraising." </p>
                        </div>

                        <div className="client-say-1">
                            <div className="inside-client">
                                <img src="image/client-say-3.png" alt="" />

                                <div className="inside-client-img-text">
                                    <h3>Ozzy Abel</h3>
                                    <p>Marketing Strategist</p>
                                </div>
                            </div>

                            <p className="testimonies">Alte exceeded our expectations. Their team crafted a pitch deck that not only looked amazing but also effectively told our story and highlighted our key metrics. We received overwhelmingly positive feedback from investors."</p>
                        </div>
                    </div>

                </div>

            </section>


        </>
    )
}

export default HomeBody;
