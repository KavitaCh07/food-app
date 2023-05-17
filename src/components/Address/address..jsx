import './address.css';
import primary from '../../assets/icn_check.png';
import notprimary from '../../assets/icn_check copy.png';
import { useState } from 'react';
import cancel from '../../assets/dismiss button.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import pin from '../../assets/icn_pin.png';
import loc from '../../assets/icn_gps_indicator.png';

const Address = () => {
    const [addressModal, setAddressModal] = useState(false);

    return (
        <div>
            <div className="address-container">
                <div className="ny-address-add-row">
                    <div className="my-address-text">My Addresses (2)</div>
                    <div className="add-new-text" onClick={() => { setAddressModal(true) }}>+ Add new</div>
                </div>

                <div className="address-card-container">
                    <div className="address-card">
                        <div className="home-primary-row">
                            <div className="home-text">Home</div>
                            <div className="primary-text"><img src={primary} alt="" /> Primary</div>
                        </div>
                        <div className="address-address">Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE</div>
                        <div className="edit-delete-row">
                            <div className="edit-test">Edit</div>
                            <div className="delete-text">Delete</div>
                        </div>
                    </div>

                    <div className="address-card">
                        <div className="home-primary-row">
                            <div className="home-text">Office</div>
                            <div className="not-primary-text"><img src={notprimary} alt="" /> Primary</div>
                        </div>
                        <div className="address-address">Downtown Burj Khalifa, Sheikh Mohammed bin Rashid Blvd - Dubai - United Arab EmiratesDubai, UAE</div>
                        <div className="edit-delete-row">
                            <div className="edit-test">Edit</div>
                            <div className="delete-text">Delete</div>
                        </div>
                    </div>
                </div>

                {addressModal && (
                    <div className="modal">
                        <div className="address-overlay">
                            <div className="address-modal-content">
                                <div className="address-modal-inner-content">
                                    <div className="addres-modal-cancel"><img src={cancel} alt="" onClick={() => { setAddressModal(false) }} /></div>
                                    <div className="add-address-text">Add new address</div>
                                    <form action="" className='add-address-form'>
                                        <div className="addres-input-div">
                                            <input type="text" name="" id="" className='add-address-input' placeholder='Downtown Burj Khalifa, Dubai.' />
                                            <img src={pin} alt="" className='address-pin' />
                                            <img src={loc} alt="" className='address-loc' />
                                        </div>
                                        <Box
                                            component="form"
                                            sx={{
                                                '& > :not(style)': { m: 1, width: '35ch' },
                                            }}
                                            noValidate
                                            autoComplete="off" className='add-address-mui'
                                        >

                                            <TextField id="standard-basic" label="City" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} InputProps={{
                                                style: {
                                                    color: "#4A4A4A",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" label="Area" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} InputProps={{
                                                style: {
                                                    color: "#4A4A4A",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" label="Address" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} InputProps={{
                                                style: {
                                                    color: "#4A4A4A",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />

                                            <TextField id="standard-basic" label="Address label" InputLabelProps={{
                                                style: {
                                                    color: "#858585",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "12px",
                                                    letterSpacing: "-0.24px",
                                                    lineHeight: "17px"
                                                }
                                            }} InputProps={{
                                                style: {
                                                    color: "#4A4A4A",
                                                    fontFamily: "Open Sans",
                                                    fontSize: "16px",
                                                    letterSpacing: "-0.27px",
                                                    lineHeight: "22px"
                                                }
                                            }} variant="standard" />
                                        </Box>
                                        <div className="addres-submit">
                                            <div className="address-submit-btn">SAVE ADDRESS</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Address;