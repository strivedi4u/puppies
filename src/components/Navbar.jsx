import React from 'react';
import {useNavigate} from 'react-router-dom';
import logo from "../images/logo.svg";
function Navbar(props) {
    const navigate = useNavigate();
    const tokenfor = localStorage.getItem("tokenfor");
    
    if(!tokenfor){
        navigate("/");
    }

    const Logout = (e) => {
        localStorage.clear();
    }

    return (
        <>
            <div id="preloader">
                <div className="jumper">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>

            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                <a href="/" className="logo">
                                    <img src={logo} alt='logo' />
                                </a>
                                <ul className="nav">
                                    {tokenfor && <>
                                        <li className="scroll-to-section"><a href="/dashboard" className={props.dashboard}>Dashboard</a></li>
                                        <li className="scroll-to-section"><a href="/availablePuppies" className={props.adminAvailable}>Available Puppies</a></li>
                                        <li className="scroll-to-section"><a href="/unavailablePuppies" className={props.adminUnavailable}>Unavilable Puppies</a></li>
                                        <li className="scroll-to-section"><a href="/addPuppies" className={props.add}>Add Puppies</a></li>
                                    </>}

                                    {!tokenfor && <>
                                        <li className="scroll-to-section"><a href="/" className={props.home}>Home</a></li>
                                        <li className="scroll-to-section"><a href="/available" className={props.available}>Available Puppies</a></li>
                                        <li className="scroll-to-section"><a href="/englishPuppies" className={props.english}>English Puppies</a></li>
                                        <li className="scroll-to-section"><a href="/frenchPuppies" className={props.french}>French Puppies</a></li>

                                    </>}

                                    <li className="submenu">
                                        <a className={props.more}>More Info</a>
                                        <ul>
                                        {tokenfor && <>
                                            <li><a href="/payments">Transcation Details</a></li>
                                            </>
                                        }
                                        {!tokenfor && <>
                                            <li><a href="/about">About Us</a></li>
                                            </>
                                        }
                                            
                                            <li><a href="/search">Shipping Status</a></li>
                                        </ul>
                                    </li>

                                    {tokenfor && <>
                                    <li className="scroll-to-section"><a onClick={(e)=>{Logout()}} href="/">Logout</a></li>
                                    </>}
                               
                                    {!tokenfor && <>
                                    <li className="scroll-to-section"><a href="/contact" className={props.contact}>Contact Us</a></li>
                                    </>}

                                </ul>
                                <span className='menu-trigger'>
                                    <span>Menu</span>
                                </span>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
