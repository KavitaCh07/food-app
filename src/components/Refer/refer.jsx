import './refer.css';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/footer';
import refer from '../../assets/icn_refer_a_friend.png';
import fb from '../../assets/icn_facebook.png';
import gmail from '../../assets/icn_gmail.png';
import { useNavigate } from 'react-router-dom';

const Refer = () => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <div className="refer-container">
                <div className="refer-card">
                    <div className="refer-a-friend-text">Refer a friend</div>
                    <div className="card-content">
                        <div className="refer-icn"><img src={refer} alt="" /></div>
                        <div className="refer-friend-earn">Refer friends & Earn!</div>
                        <div className="receive-credit">Refer your friends and receive credits.</div>
                        <div className="ur-code-text">Your Code</div>
                        <div className="code">12456</div>
                        <div className="refer-sites">
                            <div className="fb"><img src={fb} alt="" /></div>
                            <div className="gmail"><img src={gmail} alt="" /></div>
                        </div>
                        <div className="back-to-order-btn" onClick={() => { navigate('/account') }}>back to orders</div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Refer;