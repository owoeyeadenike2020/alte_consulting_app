import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { IonIcon } from '@ionic/react';
import { caretBackOutline, caretForwardOutline } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import { useState,useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import RequestForm from '../../RequestForm';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


function HomeBody() {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current && swiperRef.current.swiper) {
            const swiper = swiperRef.current.swiper;

            // Custom navigation
            document.querySelector('.prev').addEventListener('click', () => {
                swiper.slidePrev();
            });
            document.querySelector('.next').addEventListener('click', () => {
                swiper.slideNext();
            });
        }
    }, []);

    return (
        <>
            <section className="hero-section"   >

                <img className="pussy1" src="image/hero-img-1.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div className="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>Transform your <span>ideas</span> into <span className="hero-span">Digital Excellence</span></h1>

                    <p>At Alte Consulting, we offer a full spectrum of digital consulting services, from website and software development to mobile app creation, product discovery, intuitive design, and comprehensive business solutions.</p>

                    <div className="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i className="fa-solid fa-arrow-right"><FaArrowRight /></i></a>

                        <button id="button-2" onClick={() => setIsFormOpen(true)}>Request a Quote<i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>

                    </div>
                </div>
            </section>

            <div className="pussy">
                <img className="hero-img" src="image/hero-img.png" alt="" />
            </div>
            {isFormOpen && (
                <RequestForm onClose={() => setIsFormOpen(false)} />
            )}


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
                            <Link className="anchor" to="/Our-Services"> <i className='bx bx-right-top-arrow-circle'></i> LEARN MORE</Link>
                        </div>
                    </div>

                    <div className="container2">
                        <img src="image/section-3-consulting.png" alt="" data-aos="fade-left" data-aos-delay="50" />
                    </div>

                </div>
            </section>


           


            <section className="ex-container">
                <div className="swiper">
                    <h2 className="swiper-tex">Explore Our Services</h2>
                    <div className="line"></div>
                    <Swiper
                        ref={swiperRef}
                        modules={[Navigation, Pagination]}
                        spaceBetween={20} // Reduced space between slides
                        slidesPerView={4} // Changed to 4 slides per view
                        navigation={false} // We'll use custom navigation
                        pagination={{ clickable: true }}
                        breakpoints={{
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10
                            },
                            // when window width is >= 480px
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 20
                            },
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 20
                            }
                        }}
                    >
                        <SwiperSlide>
                            {/* <div className="swiper-wrapper"> */}
                            {/* <div className="swiper-slide swiper-no-swiping"> */}
                            <div className="content">
                                <img src="image/eplore-our-services-img-1.png" alt="" />
                                <h2>Web/Software Development</h2>
                                <p>Transform your online presence with our custom
                                    website and software solutions designed for
                                    seamless performance and scalability, ensuring
                                    your business stays ahead in the digital age
                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>
                            </div>
                            {/* </div> */}
                        </SwiperSlide>
                        {/* <div className="swiper-slide"> */}
                        <SwiperSlide>
                            <div className="content">
                                <img src="image/eplore-our-services-img-2.png" alt="" />
                                <h2>Mobile App Development</h2>
                                <p>Capture the growing mobile market with our high-
                                    performance app development services. We
                                    create intuitive, engaging mobile experiences
                                    that keep users coming back.
                                </p>

                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* <div className="swiper-slide"> */}
                        <SwiperSlide>\
                            <div className="content">
                                <img src="image/eplore-our-services-img-3.png" alt="" />
                                <h2>Product Discovery</h2>
                                <p  >Our product discovery process aligns your vision
                                    with market needs and technical feasibility,
                                    providing a clear path from concept to launch.


                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="swiper-slide"> */}
                        <SwiperSlide>
                            <div className="content">
                                <img src="image/eplore-our-services-img-4.png" alt="" />
                                <h2>Product Design</h2>
                                <p  >Our expert design team crafts visually stunning,
                                    user-centric designs that enhance usability and
                                    delight your customers, ensuring a superior user
                                    experience
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                        <SwiperSlide>
                            <div className="content">
                                <img src="image/eplore-our-services-img-5.png" alt="" />
                                <h2>Research and Analysis</h2>
                                <p >Gain a competitive edge in your business with our comprehensive research and analysis services. We provide actionable insights to optimize your strategies and stay ahead of market trends.
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="swiper-slide"> */}
                        <SwiperSlide>
                            <div className="content">
                                <img src="image/eplore-our-services-img-6.png" alt="" />
                                <h2>Pitch Desk Creation</h2>
                                <p>Position, helping you secure the investment you
                                    need to grow your business Our compelling pitch
                                    clearly communicate your vision and value
                                    proposition.
                                </p>
                                <button className="btn">Read More<i className="fa-solid fa-arrow-right"><FaArrowRight /></i> </button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                        {/* <div className="swiper-slide"> */}
                        <SwiperSlide>
                            <div className="content">
                                <img src="image/eplore-our-services-img-7.png" alt="" />
                                <h2>Business Plan Development</h2>
                                <p className="texhight1 texhight5">Let us help you build a comprehensive business
                                    plan that outlines your goals, strategies, and
                                    roadmap to success, giving you a solid
                                    foundation for growth.
                                </p>
                                <button className="btn">Read More <i className="fa-solid fa-arrow-right"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                        <SwiperSlide>
                            {/* <div className="swiper-slide"> */}
                            <div className="content">
                                <img src="image/eplore-our-services-img-8.png" alt="" />
                                <h2>Low-Code App Development</h2>
                                <p className="texhight3 texhight6">Reduce time-to-market and development costs
                                    with our low-code app development service,
                                    allowing you to quickly deploy efficient
                                    applications without sacrificing quality.
                                </p>
                                <button className="btn">Read More <i className="fa"><FaArrowRight /></i></button>
                            </div>
                        </SwiperSlide>
                        {/* </div> */}
                    </Swiper>
                    {/* </div> */}
                    <ul className="control" id="custom-control">
                        <li className="prev"><IonIcon icon={caretBackOutline} className="arrow" /></li>
                        <li className="next"><IonIcon icon={caretForwardOutline} className="arrow" /></li>
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
