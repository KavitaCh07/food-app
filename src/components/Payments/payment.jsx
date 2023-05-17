import './payment.css';
import visa from '../../assets/visa.png';
import master from '../../assets/mastercard_icon.png';
import primary from '../../assets/icn_check.png';
import notprimary from '../../assets/icn_check copy.png';

const Payment = () => {
    return (
        <div>
            <div className="payment-contain">
                <div className="payment-method-add-new-row">
                    <div className="payment-method-tect">Payment Methods</div>
                    <div className="add-new-payment">+ Add new</div>
                </div>
                <div className="payment-card-container">
                    <div className="payment-card">
                        <div className="card-primary"><img src={primary} alt="" /> Primary</div>
                        <div className="card-type-number">
                            <div className="card-type"><img src={visa} alt="" /></div>
                            <div className="card-number-company">
                                <div className="card-number">2345 XXXX XXXX 6574</div>
                                <div className="card-company">American Express</div>
                            </div>
                        </div>
                        <div className="card-edit-delete-">
                            <div className="edit-text">Edit</div>
                            <div className="Delete-text">Delete</div>
                        </div>
                    </div>

                    <div className="payment-card">
                        <div className="card-not-primary"><img src={notprimary} alt="" /> Primary</div>
                        <div className="card-type-number">
                            <div className="card-type"><img src={master} alt="" /></div>
                            <div className="card-number-company">
                                <div className="card-number">1234 XXXX XXXX 3456</div>
                                <div className="card-company">Master card</div>
                            </div>
                        </div>
                        <div className="card-edit-delete-">
                            <div className="edit-text">Edit</div>
                            <div className="Delete-text">Delete</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;