import React from 'react';
import './navbar.css';
import langArrow from '../../assets/lang-arrow.png';
import bag from '../../assets/icn_cart.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import HalfBg from '../HalfModalBg/halfBg';
import close from '../../assets/close.png';
import arrow from '../../assets/backArrow.png';
import forgotP from '../../assets/forgot_p.png';
import verify from '../../assets/icn_verify_icon.png';
import success from '../../assets/icn_password_success.png';
import register from '../../assets/icn_register_success.png';
import bag2 from '../../assets/bag.png';
import kfc from '../../assets/kfc.png';
import plus from '../../assets/filter_plus.png';
// import Login from '../Login/login';
// import CreateAccount from '../CreateAccount/createAccount';7

const Navbar = () => {

    const navigate = useNavigate();
    const [login, setLogin] = useState(false);
    const [createAccount, setCreateAccount] = useState(false);
    const [forgotPasswordModal, setForgotPasswordModal] = useState(false);
    const [tab, setTab] = useState(1);
    const [otpVerification, setOtpVerification] = useState(false);
    const [verified, setVerified] = useState(false);
    const [great, setGreat] = useState(false);
    const [welcome, setWelcome] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const [mainCart, setMainCart] = useState(true);
    const [loginDone, setLoginDone] = useState(false);
    // const [scrollCart, setScrollCart] = useState(false);

    const handleClick = event => {
        setDropdown(!dropdown);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="lorem-text">LOREM</div>

                    <div className="right-nav">
                        {/* <div className="select-lang"> */}
                        <div className="language-text">English
                            <img src={langArrow} alt="" className='arrow-img' onClick={handleClick} />
                        </div>
                        {/* {logModal && <Login setLogModal={setLogModal}/>} */}
                        {/* </div> */}

                        {loginDone ? (

                            <>
                                <div className="login-user-name">
                                    <div className="user-profile"><img src={kfc} alt="" className='profile-img' /></div>
                                    <div className="user-name">Kavita</div>
                                </div>
                                <div className="logout-text">Logout</div>
                                <div className="cart-bag-info">
                                    <div className="bag-div"><img src={bag2} alt="" className='cart-bag-img' /></div>
                                    <div className="newNav-cart">cart</div>
                                </div>
                            </>


                        ) :
                            (
                                <>
                                    <div className="login-text" onClick={() => { setLogin(true); }}>Login</div>
                                    <div className="create-account-text" onClick={() => { setCreateAccount(true); }}>Create an account</div>
                                </>
                            )}

                        {/* {loginModal && <CreateAccount setLoginModal={setLoginModal}/>} */}
                        {/* <div className="right-border"></div> */}

                        {mainCart ?
                            (<div className="cart">
                                <div className="cart-bag"><img src={bag} alt="" /></div>
                                <div className="cart-text">cart</div>
                            </div>) :
                            (<div className="cart-bag-info">
                                <div className="bag-div"><img src={bag2} alt="" className='cart-bag-img' /></div>
                                <div className="newNav-cart">cart</div>
                            </div>)}

                    </div>

                </div>
            </div>

            {dropdown ?
                (<div className="dropdown-menu">
                    <div className="language">English</div>
                    <div className="Hindi">Hindi</div>
                    <div className="French">French</div>
                </div>
                ) : ("")}

            {login &&
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="close" ><img src={close} alt="" onClick={() => { setLogin(false); }} /></div>
                                <div className="lets-get-started-text">Lets get started!</div>
                                <div className="logForm">
                                    <form action="" onSubmit={handleSubmit}>
                                        <Box className='form-log'
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '38ch' },
                                            }}
                                            noValidate
                                            autoComplete="off">
                                            <TextField id="standard-basic" name='email' label="Email" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="email" InputProps={{
                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" name='password' label="Password" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="password" InputProps={{
                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />
                                        </Box>

                                        <div className="forgot-password" onClick={() => { setForgotPasswordModal(true); setLogin(false); }}>Forgot Password?</div>
                                        {/* {forgotPasswordModal && <ForgotPassword setForgotPasswordModal={setForgotPasswordModal}/>} */}
                                        <div className='logBtn' onClick={() => { setWelcome(true); setLogin(false); }}><span className='loginText'>Login</span></div>
                                    </form>
                                </div>
                                <div className="fb-google-btn">
                                    <button className='BtnFb'><span className='text-fb'>Facebook</span></button>
                                    <button className='BtnGogle'><span className='text-gogle'>Google+</span></button>
                                </div>
                                <div className="dont-have-an-account">Dont have an account? <span className='get-one-now-text' onClick={() => { setCreateAccount(true); setLogin(false); }} > Get one now!</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {createAccount &&
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="close" onClick={() => { setCreateAccount(false); }}><img src={close} alt="" /></div>
                                <div className="create-acc-text">Create your account</div>
                                <div className="share-ur-email-text">Share your email address to send you the <br /> OTP to get yourself registered!</div>
                                <div className="form">
                                    <form action="" className='email-form'>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '38ch' },
                                            }}
                                            noValidate
                                            autoComplete="off">
                                            <TextField id="standard-basic" label="Email" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="email" InputProps={{
                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />
                                        </Box>

                                        <div className='create-text'><span className='create-btn-text' onClick={() => { setOtpVerification(true); setCreateAccount(false); }}>CREATE ACCOUNT</span></div>
                                    </form>

                                    <div className="terms-condition">By registering you agree to the <span className='terms-text'>Terms & Conditions</span></div>
                                    <div className="two-btn">
                                        <button className='fb-btn'><span className='fb-text'>Facebook</span></button>
                                        <button className='google-btn'><span className='google-text'>Google+</span></button>
                                    </div>
                                    <div className="already-have-account">Already have an account? <span className='log-text' onClick={() => { setLogin(true); setCreateAccount(false); }}>Login</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }


            {forgotPasswordModal &&
                (<>
                    <div className="modal">
                        <div className="overlay">
                            <div className="modal-content">

                                <div className="half-bg-forgogt-pass">
                                    <div className="imga-content">
                                        <div className="lore-text">LOREM</div>
                                        <div className="experience-text">Experience the</div>
                                        <div className="experience-text">easiest a way to get</div>
                                        <div className="experience-text"><strong>great food</strong>&nbsp;Delivered</div>
                                    </div>
                                </div>

                                <div className="modal-inner-content">
                                    <div className="back"><img src={arrow} alt="" className='arrow-back' onClick={() => { setLogin(true); setForgotPasswordModal(false); }} /></div>
                                    <div className="forgot-p"><img src={forgotP} alt="" /></div>
                                    <div className="forgot-pass-text">Forgot Password!</div>
                                    <div className="share-ur-text">Share your registered either email address or <br /> mobile number to send you the OTP to <br /> reset your password</div>
                                    <div className="forgot-tabs">
                                        <div className={tab === 1 ? "tablSelect" : "tabUnselect"} onClick={() => { setTab(1) }}>Email</div>
                                        <div className={tab === 2 ? "tablSelect" : "tabUnselect"} onClick={() => { setTab(2) }}>Mobile No.</div>
                                    </div>

                                    {tab === 1 && (
                                        <>
                                            <div className="tabl">
                                                <form action="">
                                                    <Box className='form-otp'
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '38ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off">
                                                        <TextField id="standard-basic" label="Email" InputLabelProps={{
                                                            style: {
                                                                color: "#858585",
                                                                fontFamily: "Open Sans",
                                                                fontSize: "12px",
                                                                letterSpacing: "-0.24px",
                                                                lineHeight: "17px"
                                                            }
                                                        }} type="email" InputProps={{
                                                            style: {
                                                                color: "#000000",
                                                                fontFamily: "Open Sans",
                                                                fontSize: "16px",
                                                                letterSpacing: "-0.27px",
                                                                lineHeight: "22px"
                                                            }
                                                        }} variant="standard" />
                                                    </Box>

                                                    <div className='send-otp-btn' onClick={() => { setForgotPasswordModal(false); setOtpVerification(true); }}><span className='send-otp-text'>SEND OTP</span></div>
                                                </form>
                                            </div>
                                        </>
                                    )}


                                    {tab === 2 && (
                                        <>
                                            <div className="tabl">
                                                <form action="">
                                                    <Box className='form-otp'
                                                        component="form"
                                                        sx={{
                                                            '& > :not(style)': { m: 1, width: '38ch' },
                                                        }}
                                                        noValidate
                                                        autoComplete="off">
                                                        <TextField id="standard-basic" label="Mobile No." InputLabelProps={{
                                                            style: {
                                                                color: "#858585",
                                                                fontFamily: "Open Sans",
                                                                fontSize: "12px",
                                                                letterSpacing: "-0.24px",
                                                                lineHeight: "17px"
                                                            }
                                                        }} type="tel" InputProps={{
                                                            style: {
                                                                color: "#000000",
                                                                fontFamily: "Open Sans",
                                                                fontSize: "16px",
                                                                letterSpacing: "-0.27px",
                                                                lineHeight: "22px"
                                                            }
                                                        }} inputProps={{ maxLength: 10, minLength: 10 }} variant="standard" />
                                                    </Box>
                                                    <div className='send-otp-btn' onClick={() => { setForgotPasswordModal(false); setOtpVerification(true); }}><span className='send-otp-text'>SEND OTP</span></div>
                                                </form>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </>)}

            {otpVerification && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="back"><img src={arrow} alt="" className='arrow-back' onClick={() => { setLogin(true); setOtpVerification(false); }} /></div>
                                <div className="verify-photo"><img src={verify} alt="" className='verify-img' /></div>
                                <div className="verification-text">Verification</div>
                                <div className="we-just-sent-you">We just sent you the OTP via SMS to <br /> your email address/mobile no. <br /> You should get it soon!</div>
                                <div className="otp-form-div">
                                    <form action="" className='otp-form'>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '38ch' },
                                            }}
                                            noValidate
                                            autoComplete="off">
                                            <TextField id="standard-basic" label="Enter OTP" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="text" InputProps={{

                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} inputProps={{ maxLength: 4, minLength: 4 }} variant="standard" />
                                        </Box>
                                    </form>

                                    <button className="verify-btn" onClick={() => { setVerified(true); setOtpVerification(false); }}><span className='verify-text'>VERIFY</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {verified && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">

                            <div className="half-bg-verified">
                                <div className="imga-content">
                                    <div className="lore-text">LOREM</div>
                                    <div className="experience-text">Experience the</div>
                                    <div className="experience-text">easiest a way to get</div>
                                    <div className="experience-text"><strong>great food</strong>&nbsp;Delivered</div>
                                </div>
                            </div>

                            <div className="modal-inner-content">
                                <div className="back"><img src={arrow} alt="" className='arrow-back' onClick={() => { setOtpVerification(true); setVerified(false); }} /></div>
                                <div className="verified-text">Verified!</div>
                                <div className="ur-email-verified-text">Your Email is verified. <br /> Finally enter details below to create account.</div>
                                <div className="verified-form-div">
                                    <form action="" className='verified-form'>
                                        <Box
                                            component="form" className='verified-form-box'
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '38ch' },
                                            }}
                                            noValidate
                                            autoComplete="off">
                                            <TextField id="standard-basic" label="First Name" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="text" InputProps={{

                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" label="Last Name" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="text" InputProps={{

                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" label="Enter mobile number (optional)" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="text" InputProps={{

                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} inputProps={{ maxLength: 10, minLength: 10 }} variant="standard" />

                                            <TextField id="standard-basic" label="Create Password" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} type="text" InputProps={{

                                                style: {
                                                    color: "#000000",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />
                                        </Box>

                                        <div className="done-btn"><span className='done-text' onClick={() => { setGreat(true); setVerified(false); }}>DONE</span></div>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {great && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="great-content">
                                    <div className="close" ><img src={close} alt="" onClick={() => { setLogin(true); setGreat(false); }} /></div>
                                    <div className="great-photo"><img src={success} alt="" className='great-img' /></div>
                                    <div className="great-text">Great!</div>
                                    <div className="ur-pass-success-text">Your password has been successfully reset</div>
                                    <div className="login-now-btn" onClick={() => { setLogin(true); setGreat(false); }}><span className='login-now-text'>LOGIN NOW</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {welcome && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="close" ><img src={close} alt="" onClick={() => { setWelcome(false); }} /></div>
                                <div className="register-success"><img src={register} alt="" className='register-img' /></div>
                                <div className="hi-user-text">Hi Abdulla, <br /> Welcome to Zadoh</div>
                                <div className="we-sent-u-text">We’ve sent you an email on <br /> abdulla.mohammad for verification.</div>
                                <div className="browse-btn" onClick={() => { navigate('/mainHome') }}><span className='browse-btn-text'>Browse to start ordering</span></div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar;
