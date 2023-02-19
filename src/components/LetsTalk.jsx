import React, { useState, useEffect } from 'react';
import axios from 'axios';
function LetsTalk() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [phone, setPhone] = useState();
    const [message, setMessage] = useState();

    const [whatsapp, setWhatsapp] = useState(0);
    const [iMessage, setIMessage] = useState(0);
    const [faceTime, setFaceTime] = useState(0);
    const [Email, setemail] = useState(0);


    const URL = "/";
    const API = URL + 'api/email/';

    const sendQuery = async (e) => {
        e.preventDefault();
        var status = "User want to connect these communication channel ";
        if (whatsapp) {
            status += "WhatsApp, ";
        }
        if (iMessage) {
            status += "iMessage, ";
        }
        if (faceTime) {
            status += "FaceTime, ";
        }
        if (Email) {
            status += "Email, ";
        }
        try {
            var response = await axios.post(API, {
                to: "er.shivangtrivedi@gmail.com",
                subject: "Query Message Sended by the User",
                message: {
                    name: name,
                    email: email,
                    phone: phone,
                    text: message + status,
                },
                sender: "user"
            },
            );
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }

    };



    return (
        <div className="subscribe">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="section-heading">
                            <h2>Let's Talk, Send us an inquiry</h2>
                            <span>Contact us to know about any French or English Bull Dog's puppies</span>
                        </div>
                        <form id="subscribe" action="" method="post">
                            <div className="row">
                                <div className="col-lg-3">
                                    <fieldset>
                                        <input onChange={e => setName(e.target.value)} name="name" type="text" id="name" placeholder="Your Name" required="" />
                                    </fieldset>
                                </div>
                                <div className="col-lg-3">
                                    <fieldset>
                                        <input onChange={e => setEmail(e.target.value)} name="email" type="text" id="email" pattern="[^ @]*@[^ @]*" placeholder="Email Address" required="" />
                                    </fieldset>
                                </div>

                                <div className="col-lg-3">
                                    <fieldset>
                                        <input onChange={e => setPhone(e.target.value)} name="phone" type="text" id="phone" pattern="" placeholder="Phone Number" required="" />
                                    </fieldset>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <center>
                                        <label>
                                            <input onChange={e => setWhatsapp(e.target.value)} name="Whatsapp" type="checkbox" id="Whatsapp" pattern="" placeholder="" value="1" required="" />
                                            <span value="">Whatsapp</span></label>
                                        <label>
                                            <input onChange={e => setIMessage(e.target.value)} name="iMessage" type="checkbox" id="iMessage" pattern="" placeholder="" value="1" required="" />
                                            <span value="">iMessage</span></label>
                                        <label>
                                            <input onChange={e => setFaceTime(e.target.value)} name="FaceTime" type="checkbox" id="FaceTime" pattern="" placeholder="" value="1" required="" />
                                            <span value="">FaceTime</span></label>
                                        <label>
                                            <input onChange={e => setemail(e.target.value)} name="semail" type="checkbox" id="semail" pattern="" placeholder="" value="1" required="" />
                                            <span value="">Email</span></label>
                                        <p>[Please mark your preferred communication channel in which we can reach out to you.]!!!</p>
                                    </center>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-lg-9">
                                    <fieldset>
                                        <textarea onChange={e => setMessage(e.target.value)} name="msg" type="text" id="msg" pattern="" placeholder="Message" required=""></textarea>
                                    </fieldset>
                                </div>
                            </div>
                            <div className="row">

                                <div className="col-lg-9">
                                    <center>
                                        <fieldset>
                                            <button onClick={sendQuery} type="submit" id="form-submit" className="main-dark-button"><i className="fa fa-paper-plane"></i></button>
                                        </fieldset>
                                    </center>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-lg-4">
                        <div className="row">
                            <div className="col-6">
                                <ul>
                                    <li>Store Location:<br></br><span>Jason Montana, Dubai, United Arab Emirates</span></li>
                                    <li>Phone:<br></br><span>010-020-0340</span></li>
                                    <li>Office Location:<br></br><span>United Arab Emirates</span></li>
                                </ul>
                            </div>
                            <div className="col-6">
                                <ul>
                                    <li>Work Hours:<br></br><span>07:30 AM - 9:30 PM Daily</span></li>
                                    <li>Email:<br></br><span>info@company.com</span></li>
                                    <li>Social Media:<br></br><span><a href="/">Facebook</a>, <a href="/">Instagram</a>, <a href="/">Behance</a>, <a href="/">Linkedin</a></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LetsTalk;
