import './mainHome.css';
import Navbar from '../Navbar/navbar';
import HomeSearch from '../HomeSearch/homeSearch';
import { useState } from 'react';
import Footer from '../Footer/footer';
import circle from '../../assets/radio_button_unselected.png';
import tickCircle from '../../assets/filter_checkbox.png';
import plus from '../../assets/filter_plus.png';
import minus from '../../assets/filter_minus.png';
import food1 from '../../assets/food1.png';
import food2 from '../../assets/food2.png';
import food3 from '../../assets/food3.png';
import menuBtn from '../../assets/menu-btn.png';
import left from '../../assets/left enabled.png';
import right from '../../assets/right enabled.png';
import brand1 from '../../assets/brand1.png';
import brand2 from '../../assets/brand2.png';
import brand3 from '../../assets/brand3.png';
import brand4 from '../../assets/mc.png';
import RestraPreview from '../RestraPreview/restraPreview';
import { Navigate, useNavigate } from 'react-router-dom';

const MainHome = () => {
    const [filter, setFilter] = useState(false);
    const [resta, setResta] = useState(false);
    const [filterAccor, setFilterAccor] = useState(false);
    const [cuisineAccor, setCuisineAccor] = useState(false);
    const navigate = useNavigate();

    const handleAccorClick = event => {
        setFilterAccor(!filterAccor);
    }

    return (
        <div>
            <Navbar />
            <div className="mainhome-container">
                <HomeSearch />
                <div className="main-home-part">
                    <div className="path-text">Home  >  UAE  >  Explore  >  Great breakfasts</div>
                    <hr />
                    <div className="filter-resta-container">
                        <div className="heading-with-place">Breakfast in Dubai</div>
                        <div className="filter-all-row">
                            <div className="list-by">List by: <span className='list-by-all'>All</span></div>
                            <div className="list-by">Sort by: <span className='list-by-all'>Rating</span></div>
                        </div>


                        <div className="filters-and-restaurants">

                            <div className="filters-part">
                                <div className="filter-apply">
                                    <div className="filters-text">Filters</div>
                                    <div className="reset-all-text">Reset All</div>
                                </div>
                                <div className="filter-apply-bottom-border"></div>
                                <div className="time-cost-div" onClick={handleAccorClick}>
                                    <div className="time-average-meal-cost">Time & Average meal cost</div>
                                    <div className="plus">{filterAccor === true ? <img src={minus} alt="" className='plus-img' /> : <img src={plus} alt="" className='plus-img' />}</div>
                                </div>

                                {filterAccor ? (
                                    <div className="filters">
                                        <div className="show-resta-with-filter">
                                            <div className="show-resta-with-text">Show restaurant with</div>

                                            <div className="open-now-div">
                                                {/* <img src={open} alt=""  className='open-img'/> */}
                                                <div className="fitler-options"><img src={tickCircle} alt="" /> Open Now</div>
                                            </div>

                                            <div className="delivery-in-div">
                                                <div className="show-resta-with-text">Delivery in</div>
                                                <div className="min-30"><img src={circle} alt="" /> 30 min</div>
                                                <div className="min-30"><img src={circle} alt="" /> 45 min</div>
                                                <div className="min-30"><img src={circle} alt="" /> 60 min</div>
                                            </div>

                                            <div className="average-meal-cost-div">
                                                <div className="show-resta-with-text">Average Meal cost</div>
                                                <div className="upto-30-AED-text"><img src={circle} alt="" /> Upto 30 AED</div>
                                                <div className="upto-30-AED-text"><img src={circle} alt="" /> Upto 60 AED</div>
                                                <div className="upto-30-AED-text"><img src={circle} alt="" /> Upto 100 AED</div>
                                            </div>

                                            <div className="minimum-order-div">
                                                <div className="show-resta-with-text">Minimum order</div>
                                                <div className="order-cost"><img src={circle} alt="" /> Upto 60 AED</div>
                                                <div className="order-cost"><img src={circle} alt="" /> Upto 100 AED</div>
                                            </div>


                                        </div>
                                    </div>
                                ) : ("")}
                                <div className="filter-apply-bottom-border"></div>

                                <div className="cuisines-div">
                                    <div className="cousine-text">CUISINES</div>
                                    <div className="cuisine-plus"><img src={plus} alt="" className='cuisine-plus-img' /></div>
                                </div>
                                <div className="filter-apply-bottom-border"></div>

                                <div className="filterApplyBtn-div">
                                    <div className="filter-apply-btn">APPLY</div>
                                </div>

                            </div>


                            <div className="restaurants-part">
                                <div className="resta-card">
                                    <div className="food1"><img src={food1} alt="" className='food1-img' />
                                    </div>
                                    <div className="resta-info">
                                        <div className="reatra-name-rating">
                                            <div className="restra-name">The Boutique Kitchen</div>
                                            <div className="restra-rating">4.5</div>
                                        </div>
                                        <div className="restra-address">Shiekh Zayed Road, Dubai, UAE</div>
                                        <div className="restra-cuisine">Indian, Pakistani, Kebab</div>
                                        <div className="open-or-closed">Open Now</div>
                                        <div className="time-cost-row">
                                            <div className="timeCost">
                                                <div className="time-cost">&#x2022; 63 mins</div>
                                                <div className="time-cost">&#x2022; AED40 min order</div>
                                                <div className="time-cost">&#x2022; AED60 avg meal cost</div>
                                            </div>
                                            <div className="menu-btn" onClick={() => { navigate('/restraPreview') }}><img src={menuBtn} alt="" className='menu-btn-img' /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="resta-card">
                                    <div className="food1"><img src={food2} alt="" className='food1-img' />
                                    </div>
                                    <div className="resta-info">
                                        <div className="reatra-name-rating">
                                            <div className="restra-name">Iran Zamin Restaurant & Cafe</div>
                                            <div className="restra-rating">4.5</div>
                                        </div>
                                        <div className="restra-address">Shiekh Zayed Road, Dubai, UAE</div>
                                        <div className="restra-cuisine">Indian, Pakistani, Kebab</div>
                                        <div className="open-or-closed">Open Now</div>
                                        <div className="time-cost-row">
                                            <div className="time-cost">&#x2022; 63 mins</div>
                                            <div className="time-cost">&#x2022; AED40 min order</div>
                                            <div className="time-cost">&#x2022; AED60 avg meal cost</div>
                                            <div className="menu-btn" onClick={() => { navigate('/restraPreview') }}><img src={menuBtn} alt="" className='menu-btn-img' /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="resta-card">
                                    <div className="food1"><img src={food3} alt="" className='food1-img' />
                                    </div>
                                    <div className="resta-info">
                                        <div className="reatra-name-rating">
                                            <div className="restra-name">PAUL Bakery & Restaurant</div>
                                            <div className="restra-rating">4.5</div>
                                        </div>
                                        <div className="restra-address">Shiekh Zayed Road, Dubai, UAE</div>
                                        <div className="restra-cuisine">Indian, Pakistani, Kebab</div>
                                        <div className="open-or-closed">Open Now</div>
                                        <div className="time-cost-row">
                                            <div className="time-cost">&#x2022; 63 mins</div>
                                            <div className="time-cost">&#x2022; AED40 min order</div>
                                            <div className="time-cost">&#x2022; AED60 avg meal cost</div>
                                            <div className="menu-btn"><img src={menuBtn} alt="" className='menu-btn-img' /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="brand-container">
                                    <div className="brands-div">
                                        <div className="brands-nearby-text">Brands Nearby</div>
                                        <div className="more-brnads-text">More</div>
                                    </div>
                                    <div className="-nearby-brands-carsd">
                                        <div className="leftbtn"><img src={left} alt="" className='rightbtn-img' /></div>
                                        <div className="brands">
                                            <img src={brand1} alt="" className='brand1-img' />
                                            <div className="brands-name">Pizza Hut</div>
                                            <div className="outlet-count">2 Outlets</div>
                                        </div>

                                        <div className="brands">
                                            <img src={brand2} alt="" className='brand1-img' />
                                            <div className="brands-name">KFC</div>
                                            <div className="outlet-count">2 Outlets</div>
                                        </div>

                                        <div className="brands">
                                            <img src={brand3} alt="" className='brand1-img' />
                                            <div className="brands-name">Chicken thikka</div>
                                            <div className="outlet-count">2 Outlets</div>
                                        </div>

                                        <div className="brands">
                                            <img src={brand4} alt="" className='brand1-img' />
                                            <div className="brands-name">McDonalds</div>
                                            <div className="outlet-count">2 Outlets</div>
                                        </div>
                                        <div className="rightbtn"><img src={right} alt="" className='leftbtn-img' /></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            {/* <div className="mainHome-footer"> */}
            <Footer />
            {/* </div> */}
        </div>
    );
}
export default MainHome;