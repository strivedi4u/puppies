import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
function AboutPuppie(props) {
    const navigate = useNavigate();
    let { name } = useParams();
    const API = props.URL + "api/puppie/about/" + name;
    const [puppie, setPuppie] = useState([]);

    useEffect(() => {
        const getPuppies = async () => {
            let response = await axios.get(API);
            setPuppie(response.data);
        };
        getPuppies();
    }, []);

    const buyNow = () => {
        if(puppie[0].status === "Available"){
            localStorage.setItem("name", puppie[0].name);
            navigate("/checkout");
        }
    }



    useEffect(() => {
        if (document.readyState === 'complete') {
            showSlides(slideIndex);
        } else {
            window.addEventListener('load', showSlides(slideIndex));
            return () => window.removeEventListener('load', showSlides(slideIndex));
        }
    }, []);

    var slideIndex = 1;
    function openModal() {
        if (document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "block";
        }
    }
    function closeModal() {
        console.log("Ok");
        if (document.getElementById("myModal")) {
            document.getElementById("myModal").style.display = "none";
        }
    }
    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("demo");
        var captionText = document.getElementById("caption");
        console.log(dots);
        if (n > slides.length) { slideIndex = 1 }
        if (n < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace("active", "");
        }

        if (slides[slideIndex - 1]) {
            console.log("Hello");
            slides[slideIndex - 1].style.display = "block";
        }
        if (dots[slideIndex - 1]) {
            console.log("Hi");
            dots[slideIndex - 1].className += " active";
        }
        if (dots[slideIndex - 1]) {
            captionText.innerHTML = dots[slideIndex - 1].alt;
        }
    }


    return (
        <div>
            {puppie.length != 0 && <>
                <div className="about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-image">
                                    <img src={props.URL + "static/" + puppie[0].image1} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <center>
                                    <div className="right-content puppy-details">
                                        <br></br><h3>{puppie[0].name}</h3>

                                        <div className="puppy-details-box">
                                            <table>
                                                <tr>
                                                    <td>Birthday</td>
                                                    <td>:</td>
                                                    <td>{puppie[0].birthday}</td>
                                                </tr>
                                                <tr>
                                                    <td>Color</td>
                                                    <td>:</td>
                                                    <td>{puppie[0].color}</td>
                                                </tr>
                                                <tr>
                                                    <td>Breed</td>
                                                    <td>:</td>
                                                    <td>{puppie[0].breed}</td>
                                                </tr>
                                                <tr>
                                                    <td>Gender</td>
                                                    <td>:</td>
                                                    <td>{puppie[0].gender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Weight</td>
                                                    <td>:</td>
                                                    <td>{puppie[0].weight}</td>
                                                </tr>
                                            </table>

                                        </div>
                                        <button onClick={(e) => { buyNow() }}>{puppie[0].status==="Available" && <>Buy Now</>}{puppie[0].status==="Unavailable" && <>SOLD</>}<i className='fa fa-cart-arrow-down'></i></button>
                                    </div></center>

                            </div>
                        </div>
                        <hr />
                        <center className="know-more"><h2>KNOW MORE</h2>
                            <div className="quote">
                                <i className="fa fa-quote-left"></i><p>{puppie[0].name}</p>
                            </div>
                            <p>{puppie[0].about}</p></center>
                    </div>
                </div>
                <div id="viewbox"><div><img id="viewbox-img" src="" alt="" /></div><button id="close-viewbox"><i className="fa fa-window-close" aria-hidden="true"></i></button></div>
                <section className="">

                    <div className="gallery">
                        <div className="img-w">
                            <img src={props.URL + "static/" + puppie[0].image1} alt="" onClick={(e) => { openModal(); currentSlide(1) }} /></div>
                        <div className="img-w"><img src={props.URL + "static/" + puppie[0].image2} alt="" onClick={(e) => { openModal(); currentSlide(2) }} /></div>
                        <div className="img-w"><img src={props.URL + "static/" + puppie[0].image3} alt="" onClick={(e) => { openModal(); currentSlide(3) }} /></div>
                        <div className="img-w"><img src={props.URL + "static/" + puppie[0].image4} alt="" onClick={(e) => { openModal(); currentSlide(4) }} /></div>

                        <div className="img-w"><img src={props.URL + "static/" + puppie[0].image5} alt="" onClick={(e) => { openModal(); currentSlide(5) }} /></div>
                    </div>



                    <div id="myModal" className="modal">
                        <span className="close cursor" onClick={(e) => { closeModal(); }}>&times;</span>
                        <div className="modal-content">
                            <div className="mySlides">
                                <img src={props.URL + "static/" + puppie[0].image1} style={{ width: "100%" }} alt="" />
                            </div>

                            <div className="mySlides">
                                <img src={props.URL + "static/" + puppie[0].image2} style={{ width: "100%" }} alt="" />
                            </div>

                            <div className="mySlides">
                                <img src={props.URL + "static/" + puppie[0].image3} style={{ width: "100%" }} alt="" />
                            </div>

                            <div className="mySlides">
                                <img src={props.URL + "static/" + puppie[0].image4} style={{ width: "100%" }} alt="" />
                            </div>
                            <div className="mySlides">
                                <img src={props.URL + "static/" + puppie[0].image5} style={{ width: "100%" }} alt="" />
                            </div>

                            <a className="prev" onClick={(e) => { plusSlides(-1) }}>&#10094;</a>
                            <a className="next" onClick={(e) => { plusSlides(1) }} >&#10095;</a>
                        </div></div>
                </section>
                <section>
                    <center>
                        <br></br><br></br>
                        <h2 className="price-h2">Whats included in my price?</h2><hr />
                        <div className="investment">

                            <div className="first-part">
                                <ol>
                                    <li>Flight ticket to major international airports
                                    </li>
                                    <li>Pet Passport
                                    </li>
                                    <li>Health certification (issued by the vet after 3 examinations)
                                    </li>
                                    <li>All the puppy shots (worth: 600 USD, and no new shots are needed till the age of 10 months)
                                    </li>
                                    <li>Lifetime health guarantee on genetic illnesses
                                    </li>
                                    <li>Lifetime free online vet assistance
                                    </li>
                                </ol>
                            </div>
                            <div className="second-part">
                                <ol>
                                    <li>Microchip</li>
                                    <li>Deworming</li>
                                    <li>Membership in the TomKingsKennel Frenchie Family closed Facebook group</li>
                                    <li>Participation on local American Tom Kings Frenchie Meet-ups</li>
                                    <li>We start potty training</li>
                                    <li>Our puppies are very well socialized with children and other dogs</li>
                                    <li>Excellent blood lines</li>
                                    <li>AKC registerable</li>
                                    <li>FCI export pedigree and breeding rights (costs extra $600)</li>
                                </ol>
                            </div>

                        </div>
                    </center>
                </section>
                <br></br><br></br>

                <section><center>
                    {puppie[0].video1 &&
                        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="1" className="elementor-video" data-gtm-yt-inspected-26="true" height="360" id="widget2" src={"https://youtube.com/embed/" + puppie[0].video2 + "?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftomkingskennel.com&amp;widgetid=1"} title="Title" width="640"></iframe>
                    }
                    {puppie[0].video2 && <><span>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</span>
                        <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen="1" className="elementor-video" data-gtm-yt-inspected-26="true" height="360" id="widget2" src={"https://youtube.com/embed/" + puppie[0].video2 + "?controls=1&amp;rel=0&amp;playsinline=0&amp;modestbranding=0&amp;autoplay=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Ftomkingskennel.com&amp;widgetid=1"} title="Title" width="640"></iframe>
                        </>
                    }
                </center>

                </section>

            </>}

        </div>
    );
}

export default AboutPuppie;
