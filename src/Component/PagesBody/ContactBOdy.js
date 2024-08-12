import React from 'react'

function ContactBOdy() {
    return (
        <>
            {/* <!-- hero section begins --> */}

            <section class="hero-section"   >

                <img class="pussy1" src="image/contact-us-hero-img-mobile.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div class="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>Get <span>in Touch</span> <span class="hero-span">With Us</span></h1>

                    <p>Whether you are forging ahead with concrete projects or exploring new possibilities, we are eager to hear from you. Share your ideas and let us shape your digital future together.</p>

                    <div class="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i class="fa-solid fa-arrow-right"></i></a>

                        <button id="button-2" onclick="toggleForm()">Request a Quote<i class="fa-solid fa-arrow-right"></i></button>

                    </div>
                </div>
            </section>

            <div class="pussy">
                <img class="hero-img" src="image/contact-us-hero-img.png" alt="" />
            </div>



            {/* <!-- hero section ends --> */}


            {/* <!-- blank-green-sec --> */}

            <div class="blank-green-sec">

            </div>

            {/* <!-- blank-green ends --> */}


            {/* <!-- contact us form section --> */}

            <section class="contac-us">
                <h2>Join Us in Creating <span>Something Great</span></h2>
                <h3 class="cont-tex">The easiest way to reach out is by filling out the form. We strive <br /> to respond within a few working hours. </h3>

                <div class="container-cont">
                    <form action="">
                        <div class="input-box">

                            <div class="email-container">
                                <p>Full Name</p>
                                <input type="text" name="name" placeholder="Enter your first and last name" required />
                            </div>

                            <div class="email-container">
                                <p>Email Address</p>
                                <input type="text" name="name" placeholder="Enter your email" required />
                            </div>

                            <div class="email-container">
                                <p>Phone Number</p>
                                <input type="text" name="name" placeholder="Enter your phone number" required />
                            </div>

                            <div class="email-container">
                                <p>Company Name</p>
                                <input type="text" name="name" placeholder="Enter your company name
    " required />
                            </div>

                            <p>Tell about your business</p> <br />

                            <textarea name="message" id="" cols="30" rows="5" placeholder="Subject"></textarea>

                            <div class="group">
                                <input class="cont-check" type="checkbox" id="check1" />
                                <label for="check1">I agree to Alte Terms of service and Privacy policy</label>
                            </div>

                            <button id="cont-form">Send Message <i class="fa-solid fa-arrow-right"></i></button>

                        </div>
                    </form>

                    <img src="image/contact-form-section.png" alt="" />
                </div>
            </section>


            {/* <!-- faq --> */}
            <section class="faq">

                <h2>Frequently Asked Questions
                </h2>
                <div class="line"></div>

                <ul class="accordion">
                    <li>
                        <input type="radio" name="accordion" id="first" checked />
                        <label for="first">Q. What industries does Alte Specialize in?</label>
                        <div class="content">
                            <p>
                                Alte serves a wide range of industries include technology, healthcare, finance, e-commerce and more. Our versatile expertise allows us to tailor solutions to fit your industry-specific needs.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="second" />
                        <label for="second">Q: Can Alte assist with existing projects or only new developments?  </label>
                        <div class="content">
                            <p>
                                We can support both existing projects that need optimization or enhancement, as well as new projects from ideation to execution.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="third" />
                        <label for="third">Q. What industries does Alte Specialize in?</label>
                        <div class="content">
                            <p>
                                Alte serves a wide range of industries include technology, healthcare, finance, e-commerce and more. Our versatile expertise allows us to tailor solutions to fit your industry-specific needs.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="fourth" />
                        <label for="fourth">Q: How does Alte ensure data security and confidentiality? </label>
                        <div class="content">
                            <p>At Alte, we prioritize data security and confidentiality. We implement industry best practices, secure technologies, and strict internal policies to safeguard your sensitive information.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="fifth" />
                        <label for="fifth">Q: What are the typical timelines for project completion with Alte?</label>
                        <div class="content">
                            <p>Project timelines vary based on scope and complexity. We work closely with clients to establish realistic timelines and milestones, ensuring timely delivery while maintaining quality standards.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="sixth" />
                        <label for="sixth">Q. How does Alte handle changes or revisions during the
                            product lifecycle</label>
                        <div class="content">
                            <p>We have a flexible approach to accommodate changes and revisions. Our team maintains open communication and adapts the project plan as needed to meet evolving requirements.
                            </p>
                        </div>
                    </li>


                    <li>
                        <input type="radio" name="accordion" id="seventh" />
                        <label for="seventh">Q: What sets Alte apart from other digital consulting agencies?</label>
                        <div class="content">
                            <p> Alte stands out for our commitment to innovation, client-centric approach, and proven track record of delivering successful digital solutions that drive business growth.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="eighth" />
                        <label for="eighth">Q: How can I stay updated with the latest news and insights from Alte?</label>
                        <div class="content">
                            <p> Subscribe to our newsletter or follow us on social media to receive updates on industry trends, company news, and insightful articles from our blog.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="nineth" />
                        <label for="nineth">Q: Does Alte offer customized training or workshops for our team after project implementation? </label>
                        <div class="content">
                            <p> Yes, we provide tailored training sessions and workshops to ensure your team is equipped to effectively use and manage the new digital solutions we implement.
                            </p>
                        </div>
                    </li>

                    <li>
                        <input type="radio" name="accordion" id="tenth" />
                        <label for="tenth">Q: What geographical regions does Alte serve?</label>
                        <div class="content">
                            <p> Alte provides services globally, with a client base spanning across various countries and regions.
                            </p>
                        </div>
                    </li>

                </ul>
            </section>
        </>
    )
}

export default ContactBOdy
