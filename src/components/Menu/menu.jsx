import './menu.css';
import menu1 from '../../assets/menu1.png';
import AddBtn from '../../assets/Add button.png';
import AddAgain from '../../assets/Added again.png';
import veg from '../../assets/icon_veg.png';
import plus from '../../assets/my_order_plus_active.png';
import minus from '../../assets/my_order_minus_inactive.png';
import { useState } from 'react';
import arrow from '../../assets/collapse button.png';
import magnify from '../../assets/search.png';

const Menu = () => {
    const [itemCount, setItemCount] = useState(0);
    const [toPayAccor, setToPayAccor] = useState(false);

    const handleToPayAccor = event => {
        setToPayAccor(!toPayAccor);
    }

    return (
        <div>
            <div className="menu-container">
                <div className="menu-items-orderList">

                    <div className="menu-items-container">
                        <form action="" className="menu-search-form">
                            <div className="menu-search-div">
                                <input type="text" className='menu-search-input' placeholder='Search an Item' />
                                <img src={magnify} alt="" className='magni-img' />
                            </div>
                        </form>
                        <div className="recommended-container">
                            <div className="recomended-text">Recommended (3)</div>

                            <div className="recomended-menu">
                                <div className="recomended-menu-card">
                                    <div className="menuImg"><img src={menu1} alt="" className='menu-item-img' /></div>
                                    <div className="menu-info">
                                        <div className="menu-item-name-bestseller">
                                            <div className="menu-item-name">Chili Cheese Meal</div>
                                            <div className="besteseller-text">BESTSELLER</div>
                                        </div>
                                        <div className="menu-item-cost">AED27.00</div>
                                        <div className="customizable-text">Customizable</div>
                                        <div className="menu-item-desc-adddbtn">
                                            <div className="menu-item-description">Panko breaded mac and cheese balls fried until golden brown and served with our homemade marinara sauce.</div>
                                            <div className="addBtn"><img src={AddBtn} alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="recomended-menu-card">
                                    <div className="menuImg"><img src={menu1} alt="" className='menu-item-img' /></div>
                                    <div className="menu-info">
                                        <div className="menu-item-name-bestseller">
                                            <div className="menu-item-name">Canapes and Crostini</div>
                                            <div className="besteseller-text">BESTSELLER</div>
                                        </div>
                                        <div className="menu-item-cost">AED27.00</div>
                                        <div className="customizable-text">Customizable</div>
                                        <div className="menu-item-desc-adddbtn">
                                            <div className="menu-item-description">Clams, mussels, calamari & shrimp w/ white wine & garlic</div>
                                            <div className="addBtn"><img src={AddBtn} alt="" /></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="recomended-menu-card">
                                    <div className="menuImg"><img src={menu1} alt="" className='menu-item-img' /></div>
                                    <div className="menu-info">
                                        <div className="menu-item-name-bestseller">
                                            <div className="menu-item-name">Herb-Spiced Chicken Sandwich</div>
                                            <div className="besteseller-text">BESTSELLER</div>
                                        </div>
                                        <div className="menu-item-cost">AED27.00</div>
                                        <div className="customizable-text">Customizable</div>
                                        <div className="menu-item-desc-adddbtn">
                                            <div className="menu-item-description">Roasted chick peas, julienne carrots, wild mushrooms & manchego w/ cider vinaigrette</div>
                                            <div className="addBtn"><img src={AddBtn} alt="" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="order-items">

                        <div className="order-clearCart">
                            <div className="my-order-text">My Order</div>
                            <div className="clear-cart-text">Clear cart</div>
                        </div>

                        <div className="order-item-container">

                            <div className="ordered-item-info">
                                <div className="ordered-item-quantitiy">
                                    <div className="veg-item">
                                        <div className="veg-nonveg"><img src={veg} alt="" /></div>
                                        <div className="ordered-food-name">Chili Cheese Meal</div>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-plus" onClick={() => { setItemCount(itemCount + 1) }}><img src={plus} alt="" className='quantity-plus-img' /></div>
                                        <div className="quantity-count">{itemCount}</div>
                                        <div className="quantity-minus" onClick={() => { setItemCount(itemCount - 1) }}><img src={minus} alt="" className='quantity-minus-img' /></div>
                                    </div>
                                </div>
                                <div className="ordered-item-cost-totalCost">
                                    <div className="ordered-item-cost">AED27.00</div>
                                    <div className="ordered-item-totalCost">AED54.00</div>
                                </div>
                                <div className="add-on">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</div>
                                <div className="customize-remove">
                                    <div className="customize-item-text">Customize</div>
                                    <div className="remove-item-text">Remove</div>
                                </div>
                            </div>

                            <div className="ordered-item-info">
                                <div className="ordered-item-quantitiy">
                                    <div className="veg-item">
                                        <div className="veg-nonveg"><img src={veg} alt="" /></div>
                                        <div className="ordered-food-name">Canapes and Crostini</div>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-plus" onClick={() => { setItemCount(itemCount + 1) }}><img src={plus} alt="" className='quantity-plus-img' /></div>
                                        <div className="quantity-count">{itemCount}</div>
                                        <div className="quantity-minus" onClick={() => { setItemCount(itemCount - 1) }}><img src={minus} alt="" className='quantity-minus-img' /></div>
                                    </div>
                                </div>
                                <div className="ordered-item-cost-totalCost">
                                    <div className="ordered-item-cost">AED27.00</div>
                                    <div className="ordered-item-totalCost">AED54.00</div>
                                </div>
                                {/* <div className="add-on">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</div> */}
                                <div className="customize-remove">
                                    {/* <div className="customize-item-text">Customize</div> */}
                                    <div className="remove-item-text">Remove</div>
                                </div>
                            </div>

                            <div className="ordered-item-info">
                                <div className="ordered-item-quantitiy">
                                    <div className="veg-item">
                                        <div className="veg-nonveg"><img src={veg} alt="" /></div>
                                        <div className="ordered-food-name">Chicken Tortilla</div>
                                    </div>
                                    <div className="quantity">
                                        <div className="quantity-plus" onClick={() => { setItemCount(itemCount + 1) }}><img src={plus} alt="" className='quantity-plus-img' /></div>
                                        <div className="quantity-count">{itemCount}</div>
                                        <div className="quantity-minus" onClick={() => { setItemCount(itemCount - 1) }}><img src={minus} alt="" className='quantity-minus-img' /></div>
                                    </div>
                                </div>
                                <div className="ordered-item-cost-totalCost">
                                    <div className="ordered-item-cost">AED27.00</div>
                                    <div className="ordered-item-totalCost">AED54.00</div>
                                </div>
                                <div className="if-quantity">Quantity : 1</div>
                                {/* <div className="add-on">Add On : Avacado, Seasoned Grilled Chicken, Grilled Salmon</div> */}
                                <div className="customize-remove">
                                    {/* <div className="customize-item-text">Customize</div> */}
                                    <div className="remove-item-text">Remove</div>
                                </div>
                            </div>

                        </div>

                        <div className="order-total-price">
                            <div className="total-price-container">
                                <div className="to-pay-div">
                                    <div className="to-pay-text">To Pay </div>
                                    <div className="amount-arrow">
                                        <div className="order-food-total-amount">AED85.76</div>
                                        <div className="collab-icon" onClick={handleToPayAccor}>{toPayAccor === true ? (<img src={arrow} alt="" />) : (<img src={arrow} alt="" />)}</div>
                                    </div>
                                </div>

                                {toPayAccor ? (
                                    <div className="diacount-container">
                                        <div className="items-total-row">
                                            <div className="items-toal-text">Items total</div>
                                            <div className="items-toal-text">AED118.00</div>
                                        </div>
                                        <div className="fee-charge-container">
                                            <div className="items-toal-text">Fee/ charges</div>
                                            <div className="items-toal-text">AED10.00</div>
                                        </div>
                                        <div className="discount-container">
                                            <div className="items-toal-text">Discount</div>
                                            <div className="items-toal-text">AED42.24</div>
                                        </div>
                                    </div>
                                ) : ("")}

                            </div>
                        </div>

                        <div className="cooking-instruction-container">
                            <form action="" className='cooking-inst-form'>
                                <div className="cooking-instruction">Cooking instructions?</div>
                                <input type="text" className='cooking-inst-input' placeholder='Mention it here…' />
                            </form>
                        </div>

                        <div className="proceed-checkout-btn">
                            <div className="checkout-btn">Proceed to checkout ></div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;