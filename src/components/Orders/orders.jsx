import './orders.css';
import arrow from '../../assets/collapse button.png';
import { useState } from 'react';
import downArrow from '../../assets/right_arrow.png';
import cancel from '../../assets/dismiss button.png';
import veg from '../../assets/icon_veg.png';
import nonveg from '../../assets/nonveg.png';
import r1 from '../../assets/rstar1.png';
import r2 from '../../assets/rstar2.png';
import r3 from '../../assets/rstar3.png';
import r4 from '../../assets/rstar4.png';
import r5 from '../../assets/rstar5.png';

const Orders = () => {
    const [activeOrders, setActiveOrders] = useState(false);
    const [orderDetails, setOrderDetails] = useState(false);

    const handleActiveOrder = event => {
        setActiveOrders(!activeOrders);
    }

    return (
        <div>
            <div className="orders-container">
                <div className="active-order-text" onClick={handleActiveOrder}>Active Orders {activeOrders === true ? <img src={downArrow} alt="" className='active-order-downArrow' /> : <img src={arrow} alt="" />}
                    {activeOrders ?
                        (
                            <div className="active-orders">
                                <div className="past-orders-text">Past Orders</div>
                                <div className="cancelled-orders-text">Cancelled Orders</div>
                            </div>
                        ) : ("")}
                </div>

                <div className="order-cards-container">

                    <div className="order-card">
                        <div className="order-id-status">
                            <div className="order-id">Order id: 1234567890</div>
                            <div className="order-status">Out for Delivery</div>
                        </div>
                        <div className="order-restra-name">The Boutique Kitchen</div>
                        <div className="order-restra-address">Shiekh Zayed Road, , Dubai, UAE</div>
                        <div className="item-cost-row">
                            <div className="item-count">3 Items</div>
                            <div className="order-total-cost">AED85.76</div>
                        </div>
                        <div className="orderbtns">
                            <div className="details-btn" onClick={() => { setOrderDetails(true) }}>Details</div>
                            <div className="lorem">Status</div>
                        </div>
                    </div>

                    <div className="order-card">
                        <div className="order-id-status">
                            <div className="order-id">Order id: 1234567890</div>
                            <div className="order-status">In Kitchen</div>
                        </div>
                        <div className="order-restra-name">The Boutique Kitchen</div>
                        <div className="order-restra-address">Shiekh Zayed Road, , Dubai, UAE</div>
                        <div className="item-cost-row">
                            <div className="item-count">3 Items</div>
                            <div className="order-total-cost">AED85.76</div>
                        </div>
                        <div className="orderbtns">
                            <div className="details-btn">Details</div>
                            <div className="lorem">Status</div>
                        </div>
                    </div>

                    <div className="order-card">
                        <div className="order-id-status">
                            <div className="order-id">Order id: 1234567890</div>
                            <div className="order-status">In Kitchen</div>
                        </div>
                        <div className="order-restra-name">The Boutique Kitchen</div>
                        <div className="order-restra-address">Shiekh Zayed Road, , Dubai, UAE</div>
                        <div className="item-cost-row">
                            <div className="item-count">3 Items</div>
                            <div className="order-total-cost">AED85.76</div>
                        </div>
                        <div className="orderbtns">
                            <div className="details-btn" onClick={() => { setOrderDetails(true) }}>Details</div>
                            <div className="lorem">Status</div>
                        </div>
                    </div>
                </div>

                {/* <div className="refer-lorem-app-box">
                    <div className="intoduce-to-lore">INTRODUCE A FRIEND TO LOREM</div>
                </div> */}

                {orderDetails &&
                    (
                        <div className="modal">
                            <div className="order-overlay">
                                <div className="order-modal-content">
                                    <div className="order-modal-inner-content">
                                        <div className="dismiss"><img src={cancel} alt="" onClick={() => { setOrderDetails(false) }} className='dismiss-img' /></div>
                                        <div className="order-details-text">Order Details</div>
                                        <div className="items-added-container">
                                            <div className="items-text">Items</div>
                                            <div className="items-added-box">
                                                <div className="item-added">
                                                    <div className="item-added-name"><img src={nonveg} alt="" />Chili Cheese Meal</div>
                                                    <div className="item-added-cost">AED27.00</div>
                                                    <div className="item-added-adOn">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</div>
                                                    <div className="item-added-total-cost">AED54.00</div>
                                                </div>

                                                <div className="item-added">
                                                    <div className="item-added-name"><img src={veg} alt="" />Canapes and Crostini</div>
                                                    <div className="item-added-cost">AED27.00</div>
                                                    {/* <div className="item-added-adOn">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</div> */}
                                                    <div className="item-added-total-cost">AED44.00</div>
                                                </div>

                                                {/* <div className="item-added">
                                                      <div className="item-added-name"><img src={nonveg} alt="" />Chicken Tortilla</div>
                                                        <div className="item-added-cost">AED27.00</div>
                                                        <div className="item-added-quantity">Quantity : 1</div>
                                                        <div className="item-added-total-cost">AED54.00</div>
                                                    </div>   */}
                                            </div>
                                        </div>

                                        <div className="items-cost-container">
                                            <div className="items-amount-text">Amount</div>
                                            <div className="items-cost-box">
                                                <div className="amount-item-total-row">
                                                    <div className="amount-to-be-paid">Paid</div>
                                                    <div className="paid-amount">AED85.76</div>
                                                </div>
                                                <div className="amount-items-total-row">
                                                    <div className="amount-items-total">Items total</div>
                                                    <div className="amount-items-total">AED118.00</div>
                                                </div>
                                                <div className="amount-fee-charge-row">
                                                    <div className="amount-fee-charge">Fee/ charges</div>
                                                    <div className="amount-fee-charge-total">AED10.00</div>
                                                </div>
                                                <div className="amount-discount-row">
                                                    <div className="amount-discount">Discount</div>
                                                    <div className="amount-discount-total">AED42.24</div>
                                                </div>
                                                <div className="order-mode-of-payment">
                                                    <div className="payment-mod-text">Payment Mode</div>
                                                    <div className="pay-moda">Credit/Debit Card</div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="delivery-details-container">
                                            <div className="delivery-detail-text">Delivery Details</div>
                                            <div className="delivery-details-box">
                                                <div className="delivery-location">Delivery location</div>
                                                <div className="delivery-address">Downtown Burj Khalifa, Dubai, UAE</div>
                                                <div className="delivery-date-time">Date & Time</div>
                                                <div className="delivery-time">Today at 11:30 AM</div>
                                            </div>
                                        </div>

                                        <div className="rate-ur-delivery-container">
                                            <div className="rate-ur-del">Rate your Delivery</div>
                                            <div className="delivery-rating-row">
                                                <div className="delivery-rating"><img src={r1} alt="" /></div>
                                                <div className="delivery-rating"><img src={r2} alt="" /></div>
                                                <div className="delivery-rating"><img src={r3} alt="" /></div>
                                                <div className="delivery-rating"><img src={r4} alt="" /></div>
                                                <div className="delivery-rating"><img src={r5} alt="" /></div>
                                            </div>
                                            <div className="delivery-review">
                                                <form action="" className='delivery-review-form'>
                                                    <label htmlFor="" className='write-review-label'>Write a review</label>
                                                    <input type="text" className='delivery-review-input' placeholder='Start writing your review' />
                                                    <div className="submit-order-btn">
                                                        <div className="submitt-btn">Submit</div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    );
}

export default Orders;