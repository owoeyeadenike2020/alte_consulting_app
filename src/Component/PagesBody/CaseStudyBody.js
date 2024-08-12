import React from 'react'

function CaseStudyBody() {
    return (
        <>
            {/* <!-- hero section begins --> */}

            <section class="hero-section"   >

                <img class="pussy1" src="image/case-sudy-hero-img-1.png" alt="" data-aos="fade-up" data-aos-delay="50" />

                <div class="hero-container" data-aos="fade-up" data-aos-delay="50">
                    <h1>Your Digital <span>Partner</span> for <span class="hero-span">sucess</span></h1>

                    <p>Discover how we've helped our clients achieve their goals through innovative technology and strategic consulting.</p>

                    <div class="hero-links">
                        <a id="button-1" href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ00GcrPNO72R7ML0RTskXRADvJdJmiBJh_CP03IxNCaTERG0W5huuLvIC1gD9nUZCYDWjJR9qCo?gv=true" target="_blank" rel="noreferrer">Book a Discovery call<i class="fa-solid fa-arrow-right"></i></a>

                        <button id="button-2" onclick="toggleForm()">Request a Quote<i class="fa-solid fa-arrow-right"></i></button>

                    </div>
                </div>
            </section>

            <div class="pussy">
                <img class="hero-img" src="image/case-sudy-hero-img.png" alt="" />
            </div>



            {/* <!-- hero section ends -->



<!-- blank-green-sec --> */}

            <div class="blank-green-sec">

            </div>

            {/* <!-- 


case study section --> */}

            <section class="case-study">
                <h2>Our Case Studies</h2>
                <div class="line"></div>
            </section>


            {/* <!-- case study c-suite section --> */}
            <section class="c-suite">

                <div class="c-suite-container" data-aos="fade-up" data-aos-delay="50">
                    <img src="image/c-suite.png" alt="" />

                    <div class="c-suite-folder">
                        <h3>Personal Website for a C-suite Executive</h3>
                        <h4>Client</h4>
                        <p>C-suite executive in a financial institution</p>
                        <h4>Challenge</h4>
                        <p>Need for a professional personal online presence</p>
                        <h4>Solution</h4>
                        <p>Developed a custom personal website</p>
                        <h4>Result</h4>
                        <p>Enhanced personal branding and online visibility</p>
                        <button id="button-3">View Case<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

            </section>

            <section class="c-suite branding-for ">

                <div class="c-suite-container second" data-aos="fade-up" data-aos-delay="50">
                    <img src="image/branding-elderly.png" alt="" />

                    <div class="c-suite-folder">
                        <h3>Branding for Elderly Companionship Service</h3>
                        <h4>Client</h4>
                        <p>On-Demand Companion App for Elderly</p>
                        <h4>Challenge</h4>
                        <p>Establishing a strong brand identity</p>
                        <h4>Solution</h4>
                        <p>Developed a comprehensive branding strategy that reflects the client's values and target audience:</p>
                        <h4>Result</h4>
                        <p>Ensured consistent application of the brand guideline</p>
                        <button id="button-3">View Case<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </section>

            <section class="c-suite">

                <div class="c-suite-container third" data-aos="fade-up" data-aos-delay="50">
                    <img src="image/case-study-business-plan.png" alt="" />

                    <div class="c-suite-folder">
                        <h3>Business Plan and Pitch Deck for a Food Tech Startup</h3>
                        <h4>Client</h4>
                        <p>Food Tech Startup</p>
                        <h4>Challenge</h4>
                        <p>Need for investment and business direction</p>
                        <h4>Solution</h4>
                        <p>Created a detailed business plan and a compelling pitch deck</p>
                        <h4>Result</h4>
                        <p>Successfully secured funding and strategic partnerships</p>
                        <button id="button-3">View Case<i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

            </section>

        </>
    )
}

export default CaseStudyBody;
