// import react from React;
import './restraPreview.css';
import Navbar from '../Navbar/navbar';
import HomeSearch from '../HomeSearch/homeSearch';
import restBlackBg from '../../assets/black-bg.png';
import restraImg from '../../assets/Resturant Image.png';
import cutlery from '../../assets/restaurant-cutlery.png';
import rating1 from '../../assets/Rating 1.png';
import rating2 from '../../assets/Rating 2.png';
import rating3 from '../../assets/Rating 3.png';
import rating4 from '../../assets/Rating 4.png';
import { Navigate, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Menu from '../Menu/menu';
import Overview from '../Overview/overview';
import ReviewRating from '../ReviewRating/reviewRating';
import Gallery from '../Gallery/gallery';
import { useState } from 'react';
import Footer from '../Footer/footer';


const RestraPreview = () => {
    const navigate = useNavigate();
    const [tab, setTab] = useState(1);
    return (
        <div>
            <Navbar />
            <HomeSearch />
            <div className="restraunt-full-part">
            <div className="restra-menu-container">
                <div className="restra-path">Home  >  UAE  >  Explore  >  Great breakfasts  >  The Boutique Kitchen</div>
                <div className="restra-black-bg">
                    <div className="restraImg">
                        <img src={restraImg} alt="" className='restra-img' />
                        <div className="restra-img-info">
                            <img src={cutlery} alt="" className='cutlery-img' />
                            <div className="rest-name">The Boutique Kitchen</div>
                            <div className="restra-cuisine">Indian, Pakistani, Kebab</div>
                            <div className="restra-cost-rating-row">
                                <div className="rest-rating">4.5</div>
                                <div className="qrest-cost1">&#x2022; 63 mins</div>
                                <div className="qrest-cost1">&#x2022; AED30 min order</div>
                                <div className="qrest-cost1">11:00 AM - 10:00 PM</div>
                            </div>
                            <div className="rating-for-orders">Delivery rating for last 5 orders</div>
                            <div className="give-rating-row">
                                <img src={rating1} alt="" className='rating-img' />
                                <img src={rating2} alt="" className='rating-img' />
                                <img src={rating3} alt="" className='rating-img' />
                                <img src={rating4} alt="" className='rating-img' />
                            </div>
                        </div>
                    </div>
                    <div className="restra-tabs">
                        <div className={tab === 1 ? 'tabSelect' : 'tabUnselects'} onClick={() => { setTab(1) }}>Menu</div>
                        <div className={tab === 2 ? 'tabSelect' : 'tabUnselects'} onClick={() => { setTab(2) }}>Overview</div>
                        <div className={tab === 3 ? 'tabSelect' : 'tabUnselects'} onClick={() => { setTab(3) }}>Reviews & Ratings</div>
                        <div className={tab === 4 ? 'tabSelect' : 'tabUnselects'} onClick={() => { setTab(4) }}>Gallery</div>
                    </div>

                    {tab === 1 ? <Menu /> : ""}
                    {tab === 2 ? <Overview /> : ""}
                    {tab === 3 ? <ReviewRating /> : ""}
                    {tab === 4 ? <Gallery /> : ""}

                </div>
            </div>

            </div>
            

        </div>


    );
}

export default RestraPreview;