import React from 'react';
import './createAccount.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import close from '../../assets/close.png';
import { useState } from 'react';
import HalfBg from '../HalfModalBg/halfBg';
import verify from '../../assets/icn_verify_icon.png';
import arrow from '../../assets/backArrow.png';
import Login from '../Login/login';

const CreateAccount = (props) => {
    const [loginModal, setLoginModal] = useState(false);
    const [verification, setVerification] = useState(false);
    
    const [loginForm, setLoginForm] = useState(false);

    return (
        <div>

            {verification && (
                <div className="modal">
                    <div className="overlay">
                        <div className="modal-content">
                            <HalfBg />
                            <div className="modal-inner-content">
                                <div className="back"><img src={arrow} alt="" className='arrow-back'/></div>
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

                                    <button className="verify-btn" ><span className='verify-text'>VERIFY</span></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


        </div>
    )
}

export default CreateAccount;
