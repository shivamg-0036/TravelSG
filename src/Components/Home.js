import React, { useState, useEffect } from 'react'
import './Home.css'
import Newsletter from './Newsletter';
import AOS from 'aos';
import Loader from './Loader';
import Navbar from './Navbar'
import 'aos/dist/aos.css'; // Import the CSS for AOS
export default function Home() {


    const [selectedButton, setSelectedButton] = useState(0);
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        setLoading(true)
        setTimeout(() => {
          setLoading(false)
        }, 1000)
    

        // Initialize AOS here
        AOS.init({

        });

    }, []);

    function activeslide(num) {
        if (num === 1) {
            setSelectedButton(1);
        }

        else if (num === 2) {
            setSelectedButton(2);
        }

        else if (num === 3) {
            setSelectedButton(3);
        }

        else if (num === 4) {
            setSelectedButton(4);
        }


        else {
            setSelectedButton(0);
        }
    }


    return (

        loading ? <Loader /> :

        <>

        
<Navbar />

            <section className={`home-section`}>

            <img src='home3.jpg' id='v3' className={selectedButton === 0 ? 'active' : 'inactive'} />
                <img src='home1.jpg' id='v3' className={selectedButton === 1 ? 'active' : 'inactive'} />
                <img src='contact.jpg' id='v3' className={selectedButton === 2 ? 'active' : 'inactive'} /> 
                <img src='home2.jpg' id='v3' className={selectedButton === 3 ? 'active' : 'inactive'} /> 
                <img src='services.jpg' id='v3' className={selectedButton === 4 ? 'active' : 'inactive'} /> 


                <div className='home-content'>
                    <h1>WonderFul<br /><span>Island</span></h1>
                    <p>Hidden away in the embrace of the vast ocean lies a truly magical place - a wonderful island that captivates all who venture to its shores. Surrounded by
                        crystal-clear turquoise waters, this island paradise boasts a breathtaking landscape that seems straight out of a dream. Majestic mountains loom
                        in the distance, covered in lush greenery, while cascading waterfalls sparkle like diamonds under the radiant sunlight. The air is filled with the sweet
                        fragrance of exotic flowers, and the melodious chirping of tropical birds creates a symphony that resonates throughout the island. Every corner
                        of this enchanting place offers a new discovery - from secret coves with hidden caves to vibrant coral reefs teeming with colorful marine life.</p>
                    <a href='#'>Read More...</a>
                </div>

                <div className='social-media'>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-instagram'> </i>
                    <i className='fab fa-twitter'></i>
                </div>

                <div className='slider'>
                    <div key={0} className={selectedButton === 0 ? 'new-btn-active' : 'new-btn-inactive'} onClick={() => activeslide(0)} ></div>
                    <div key={1} className={selectedButton === 1 ? 'new-btn-active' : 'new-btn-inactive'} onClick={() => activeslide(1)} ></div>
                    <div key={2} className={selectedButton === 2 ? 'new-btn-active' : 'new-btn-inactive'} onClick={() => activeslide(2)}></div>
                    <div key={3} className={selectedButton === 3 ? 'new-btn-active' : 'new-btn-inactive'} onClick={() => activeslide(3)}></div>
                    <div key={4} className={selectedButton === 4 ? 'new-btn-active' : 'new-btn-inactive'} onClick={() => activeslide(4)}></div>
                </div>

            </section>

            <div className='normal' >
                <div className='left-normal flex' >
                    <div className='smaller' data-aos="fade-right" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000" data-aos-delay="100">
                        <span ><img src='paragliding.png' className='imager' /></span>
                        <div className='media-body'>
                            <h3>Activities</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                    </div>

                    <div className='smaller' data-aos="fade-left" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000" data-aos-delay="100">
                        <span ><img src='destination.png' className='imager' /></span>
                        <div className='media-body'>
                            <h3>Travel Arrangements</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                    </div>

                    <div className='smaller' data-aos="fade-right" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000" data-aos-delay="100">
                        <span ><img src='tourist.png' className='imager' /></span>
                        <div className='media-body'>
                            <h3>Private Guide</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                    </div>

                    <div className='smaller' data-aos="fade-left" data-aos-easing="ease-in-out-cubic" data-aos-duration="2000" data-aos-delay="300">
                        <span ><img src='map.png' className='imager' /></span>
                        <div className='media-body'>
                            <h3>Location Manager</h3>
                            <p>A small river named Duden flows by their place and supplies it with the necessary</p>
                        </div>
                    </div>
                </div>

                <div className='right-normal'>
                    <h2>It's time to start your adventure</h2>
                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <span></span>
                    <a href='#' className='btns'>Search Destination</a>

                </div>
            </div>

            <div className='banner'>
                <img src='banner.jpg' />
            </div>

            <div className='package-container'>
                <div className='pack-row'>
                    <div className='pack-header'>
                        <span className='sub-heading'>Destinations</span>
                        <h2>Special Tour Packages</h2>
                    </div>
                </div>

                <div className='pack-row'>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                        <div className='project-wrap'>
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic1.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                        <div className='project-wrap'  >
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic2.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                        <div className='project-wrap'>
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic3.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="100">
                        <div className='project-wrap'>
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic4.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='sunset.png' className='flaticon' />  <span className=''>Near Beach</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="600">
                        <div className='project-wrap'>
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic5.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='pack-div' data-aos="zoom-in" data-aos-easing="ease-in-out-cubic" data-aos-delay="1000">
                        <div className='project-wrap'>
                            <a href='#' className='imaging' style={{ backgroundImage: `url("pic6.jpg")` }}  >
                                <span className='price'>$550/person</span>
                            </a>

                            <div className='text'>
                                <span className='days'>8 Days Tour</span>
                                <h3>
                                    <a href='#'>Banaue Rice Terraces</a>
                                </h3>

                                <p className='location'>
                                    <span className='fa fa-map-marker'></span>
                                    Banaue, Ifugao, Philippines
                                </p>

                                <ul>
                                    <li><img src='bath.png' className='flaticon' /> <span  >  2</span></li>
                                    <li><img src='bed.png' className='flaticon' />  <span className=''>4</span></li>
                                    <li><img src='mountain.png' className='flaticon' />  <span className=''>Near Mountain</span> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

            <div className='pack-row'>
                <div className='pack-header'>
                    <span className='sub-heading'>Let's Have a Talk</span>
                    <h2>We'd love to Hear from you</h2>
                </div>
            </div>


            <div className='contact-section'>
                <div className='image-section'>
                    <a href='#'>
                        <img src='contact.png' className='contact-image'></img>
                    </a>
                </div>

                <div className='form-section'>
                    <div className='contact_form_container'>
                        <div className='contact_title'>Let's Get In Touch With Us ...</div>
                        <form action='#' id='contact-form' className='contact-form'>
                            <input type='text' id='contact_form_name' className='contact_form_name input_field' placeholder='Name' required data-error="Name is required." />
                            <input type='email' id='contact_form_email' className='contact_form_email input_field' placeholder='Email' required data-error="Email is required." />
                            <input type='text' id='contact_form_subject' className='contact_form_subject input_field' placeholder='Subject' required data-error="Subject is required." />
                            <textarea id='contact_form_message' className='text_field contact_form_message' rows="2" name="message" placeholder='Message' required data-error="Please, write us a message."></textarea>
                            <button type='submit' className='form_submit_button button' id='form_submit_button'>
                                Send Message
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </form>
                    </div>
                </div>

            </div>

            <Newsletter />
        </>
    )
}
