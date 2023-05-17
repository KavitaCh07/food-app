import './account.css';
import Navbar from '../Navbar/navbar';
import banner from '../../assets/profile-banner.png';
import kfc from '../../assets/kfc.png';
import cell from '../../assets/phone_icn.png';
import mail from '../../assets/mail_icn.png';
import ibutton from '../../assets/icn_info_small.png';
import Footer from '../Footer/footer';
import { useState } from 'react';
import Orders from '../Orders/orders';
import Address from '../Address/address.';
import { useNavigate } from 'react-router-dom';
import Payment from '../Payments/payment';
// import kfc from '../../assets/kfc.png';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import camera from '../../assets/icn_add_photo.png';
import avatar1 from '../../assets/icn_icecream.png';
import avatar2 from '../../assets/icn_cupcake.png';
import avatar3 from '../../assets/icn_frenchfries.png';
import avatar4 from '../../assets/icn_bread.png';
import avatar5 from '../../assets/icn_chicken.png';
import avatar6 from '../../assets/icn_burger.png';
import avatar7 from '../../assets/icn_donut.png';
import avatar8 from '../../assets/icn_beer.png';
import avatar9 from '../../assets/icn_pizza.png';


const Account = () => {
    const [profileTab, setProfileTab] = useState(1);
    const navigate = useNavigate();
    const [editProfile, setEditProfile] = useState(false);

    return (
        <div>
            <Navbar />
            <div className="account-part">
                <div className="account-banner">
                    <div className="acc-profile-container">
                        <div className="account-info">
                            <div className="acc-profile"><img src={kfc} alt="" /></div>
                        </div>
                        <div className="acc-profile-info">
                            <div className="acc-profile-name-edit">
                                <div className="acc-profile-name">Kavita</div>
                                <div className="edit-refer">
                                    <div className="acc-profile-edit" onClick={() => { setEditProfile(true); }}>Edit</div>
                                    <div className="refer-a-friend" onClick={() => { navigate('/refer') }}>REFER A FRIEND</div>
                                </div>
                            </div>
                            <div className="acc-user-full-name">Kavita Chaudhary</div>
                            <div className="user-info-row">
                                <div className="user-no"><img src={cell} alt="" /> +8138959467</div>
                                <div className="user-mail"><img src={mail} alt="" /> kavita@gmail.com</div>
                                <div className="user-credits">Credits Earned - <span className='credits'>236</span> <img src={ibutton} alt="" /></div>
                            </div>
                        </div>
                    </div>

                    <div className="profile-tabs">
                        <div className={profileTab === 1 ? "select-profile-tab" : "profile-tab"} onClick={() => { setProfileTab(1) }}>Orders (2)</div>
                        <div className={profileTab === 2 ? "select-profile-tab" : "profile-tab"} onClick={() => { setProfileTab(2) }}>Address</div>
                        <div className={profileTab === 3 ? "select-profile-tab" : "profile-tab"} onClick={() => { setProfileTab(3) }}>payment methods</div>
                        <div className={profileTab === 4 ? "select-profile-tab" : "profile-tab"} onClick={() => { setProfileTab(4) }}>Reviews</div>
                        <div className={profileTab === 5 ? "select-profile-tab" : "profile-tab"} onClick={() => { setProfileTab(5) }}>Gallery</div>
                    </div>

                </div>

                <div className="tabs-content">
                    {profileTab === 1 ? <Orders /> : ""}
                    {profileTab === 2 ? <Address /> : ""}
                    {profileTab === 3 ? <Payment /> : ""}
                </div>

                {editProfile && (
                    <div className="edit-profile-container">
                        <div className="edit-profile-overlay">
                            <div className="edit-modal-box">
                                <div className="edit-profile-text">Edit Profile</div>
                                <div className="edit-modal-inner-box">
                                    <div className="edit-profile-avtar">
                                        <div className="edit-profile-column">
                                            <form action="" className='edit-profile-form'>
                                                <div className="edit-profile-photo-div"><img src={kfc} alt="" />
                                                    <div className="edit-prodile-input-div">
                                                        <label htmlFor="prophoto"><img src={camera} alt="" /></label>
                                                        <input type="file" name="" id="prophoto" className='edit-profilee-input' />
                                                    </div>
                                                </div>

                                                <Box
                                                    component="form"
                                                    sx={{
                                                        '& > :not(style)': { m: 1, width: '40ch' },
                                                    }}
                                                    noValidate
                                                    autoComplete="off"
                                                    className='edit-profile-form-box'
                                                >

                                                    <TextField id="standard-basic" label="Username" InputLabelProps={{
                                                        style: {
                                                            color: "#858585",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "12px",
                                                            letterSpacing: "-0.24px",
                                                            lineHeight: "17px"
                                                        }
                                                    }} InputProps={{
                                                        style: {
                                                            color: "#000000",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "16px",
                                                            letterSpacing: "-0.27px",
                                                            lineHeight: "22px"
                                                        }
                                                    }} variant="standard" />
                                                    <TextField id="standard-basic" label="Name" InputLabelProps={{
                                                        style: {
                                                            color: "#858585",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "12px",
                                                            letterSpacing: "-0.24px",
                                                            lineHeight: "17px"
                                                        }
                                                    }} InputProps={{
                                                        style: {
                                                            color: "#000000",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "16px",
                                                            letterSpacing: "-0.27px",
                                                            lineHeight: "22px"
                                                        }
                                                    }} variant="standard" />
                                                    <TextField id="standard-basic" label="Phone Number" InputLabelProps={{
                                                        style: {
                                                            color: "#858585",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "12px",
                                                            letterSpacing: "-0.24px",
                                                            lineHeight: "17px"
                                                        }
                                                    }} InputProps={{
                                                        style: {
                                                            color: "#000000",
                                                            fontFamily: "Open Sans",
                                                            fontSize: "16px",
                                                            letterSpacing: "-0.27px",
                                                            lineHeight: "22px"
                                                        }
                                                    }} variant="standard" />
                                                </Box>
                                            </form>
                                        </div>
                                        <div className="profile-avtar-column">
                                            <div className="choose-avatar">Choose a user avatar</div>
                                            <div className="avatar-container">
                                                <div className="avatar-row">
                                                    <div className="avatar"><img src={avatar1} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar2} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar3} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar4} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar5} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar6} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar7} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar8} alt="" className='avatar-img' /></div>
                                                    <div className="avatar"><img src={avatar9} alt="" className='avatar-img' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="save-edit-profile-div">
                                        <div className="save-edit-profile" onClick={() => { setEditProfile(false) }}>save</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    );
}

export default Account;