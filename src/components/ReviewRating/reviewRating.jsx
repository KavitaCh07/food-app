import './reviewRating.css';
import profile1 from '../../assets/profile1.png';
import profile2 from '../../assets/profile2.png';
import profile3 from '../../assets/profile3.png';
import whiteStar from '../../assets/rstar.png';
import like from '../../assets/like_inactive.png';
import likeActive from '../../assets/like_active.png';
import rfood1 from '../../assets/rfood1.png';
import rfood2 from '../../assets/rfood2.png';
import rfood3 from '../../assets/rfood3.png';
import rstar1 from '../../assets/rstar1.png';
import rstar2 from '../../assets/rstar2.png';
import rstar3 from '../../assets/rstar3.png';
import rstar4 from '../../assets/rstar4.png';
import rstar5 from '../../assets/rstar5.png';
import downArrow from '../../assets/long-arrow-pointing-down.png';

const ReviewRating = () => {
    return (
        <div>
            <div className="review-rating-container">
                <div className="reviews-sort">
                    <div className="reviews-texrt">Reviews</div>
                    <div className="show-text">Show : <span className='recent'>Recent <img src={downArrow} alt="" className='downArrow-img'/></span></div>
                </div>
                <div className="review-ratings-part">

                    <div className="reviews-part">
                        <div className="review-container">
                            <div className="review-card">
                                <div className="profile-row">
                                    <div className="profile-photos"><img src={profile1} alt="" className='review-profile-img' /></div>
                                    <div className="profile-info">
                                        <div className="profile-info-name">John Doe</div>
                                        <div className="review-rating">2 reviews, 30 Ratings</div>
                                        <div className="reting-given"><img src={whiteStar} alt="" /> 4</div>
                                    </div>
                                </div>
                                <div className="review-content">Offers homely and delicious Indian food choices. The rajma chawal, chana bhature, pav bhaaji, kheer and paan mint shisha are all great. The service is good and staff are friendly. We also liked their playlist, it was a mix of Indian and Western songs.</div>
                                <div className="time-like-review">
                                    <div className="review-date">March 15, 2018</div>
                                    <div className="like-btn"><img src={like} alt="" /> <span className='like-count'>0</span></div>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="profile-row">
                                    <div className="profile-photos"><img src={profile2} alt="" className='review-profile-img' /></div>
                                    <div className="profile-info">
                                        <div className="profile-info-name">Mohamed Ali</div>
                                        <div className="review-rating">2 reviews, 30 Ratings</div>
                                        <div className="reting-given"><img src={whiteStar} alt="" /> 4</div>
                                    </div>
                                </div>
                                {/* <div className="review-content">Offers homely and delicious Indian food choices. The rajma chawal, chana bhature, pav bhaaji, kheer and paan mint shisha are all great. The service is good and staff are friendly. We also liked their playlist, it was a mix of Indian and Western songs.</div> */}
                                <div className="time-like-review">
                                    <div className="review-date">March 15, 2018</div>
                                    <div className="like-btn"><img src={like} alt="" /> <span className='like-count'>0</span></div>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="profile-row">
                                    <div className="profile-photos"><img src={profile3} alt="" className='review-profile-img' /></div>
                                    <div className="profile-info">
                                        <div className="profile-info-name">Amir</div>
                                        <div className="review-rating">2 reviews, 30 Ratings</div>
                                        <div className="reting-given"><img src={whiteStar} alt="" /> 4</div>
                                    </div>
                                </div>
                                <div className="review-content">Offers homely and delicious Indian food choices. The rajma chawal, chana bhature, pav bhaaji, kheer and paan mint shisha are all great. The service is good and staff are friendly. We also liked their playlist, it was a mix of Indian and Western songs.</div>
                                <div className="time-like-review">
                                    <div className="review-date">March 15, 2018</div>
                                    <div className="like-btn"><img src={like} alt="" /> <span className='like-count'>0</span></div>
                                </div>
                                <div className="review-food-photos">
                                    <div className="review-food-item"><img src={rfood1} alt="" className='review-food-img' /></div>
                                    <div className="review-food-item"><img src={rfood2} alt="" className='review-food-img' /></div>
                                    <div className="review-food-item"><img src={rfood3} alt="" className='review-food-img' /></div>
                                    <div className="review-food-item"><img src={rfood1} alt="" className='review-food-img' /></div>
                                </div>
                            </div>

                            <div className="review-card">
                                <div className="profile-row">
                                    <div className="profile-photos"><img src={profile1} alt="" className='review-profile-img' /></div>
                                    <div className="profile-info">
                                        <div className="profile-info-name">John Doe</div>
                                        <div className="review-rating">2 reviews, 30 Ratings</div>
                                        <div className="reting-given"><img src={whiteStar} alt="" /> 4</div>
                                    </div>
                                </div>
                                <div className="review-content">Offers homely and delicious Indian food choices. The rajma chawal, chana bhature, pav bhaaji, kheer and paan mint shisha are all great. The service is good and staff are friendly. We also liked their playlist, it was a mix of Indian and Western songs.</div>
                                <div className="time-like-review">
                                    <div className="review-date">March 15, 2018</div>
                                    <div className="like-btn"><img src={like} alt="" /> <span className='like-count'>0</span></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="ratings-part">
                        <div className="rating-container">
                            <div className="rate-ur-exp">Rate your experience</div>
                            <div className="food-serivce-rating">
                                <div className="food-rating">
                                    <div className="food-text">Food</div>
                                    <div className="rating-stars">
                                        <div className="rating-star"><img src={rstar1} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar2} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar3} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar4} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar5} alt="" className='rstar-img' /></div>
                                    </div>
                                </div>
                                <div className="service-rating">
                                    <div className="food-text">Service</div>
                                    <div className="rating-stars">
                                        <div className="rating-star"><img src={rstar1} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar2} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar3} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar4} alt="" className='rstar-img' /></div>
                                        <div className="rating-star"><img src={rstar5} alt="" className='rstar-img' /></div>
                                    </div>
                                </div>
                            </div>

                            <div className="write-review-part">
                                <form action="" className="writereview-form">
                                    <div className="write-review-text">Write a review</div>
                                    <input type="text" className='write-review-input' placeholder='Start writing your review' />
                                    <label htmlFor="addImage" className='add-image-text'>+ Add image
                                    <input type="file" name="" id="addImage" multiple accept='image/*' className='image-input'/>
                                    </label>
                                    
                                </form>

                                <div className="submit-review-btn-div">
                                    <div className="submit-review-btn">Submit</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    );
}

export default ReviewRating;