import React from 'react';
import './home.css';
import Navbar from '../../components/Navbar/navbar';
import bg1 from '../../assets/BG 1.png';
import search from '../../assets/search.png';
import pin from '../../assets/icn_pin.png';
import location from '../../assets/icn_gps_indicator.png';
import now from '../../assets/now_button.png';
import { useState } from 'react';
import bg2 from '../../assets/bg2.png';
import brandFood from '../../assets/Bitmap.png';
import kfc from '../../assets/kfc.png';
import bg3 from '../../assets/BG 3.png';
import deal1 from '../../assets/Card1.png';
import deal2 from '../../assets/Card2.png';
import shop from '../../assets/shop.png';
import bg4 from '../../assets/BG 4.png';
import burger from '../../assets/burger.png';
import cart from '../../assets/shopping-cart (3).png';
import path from '../../assets/Path 2.png';
import tiltlogo from '../../assets/Logo Gradient.png';
import pizza from '../../assets/pizza.png';
import app from '../../assets/App-Store.png';
import play from '../../assets/Play-Store.png';
import Footer from '../../components/Footer/footer';
import { useTranslation, Trans } from "react-i18next";
import mouse from '../../assets/mouse.png';
import langArrow from '../../assets/lang-arrow.png';



const Home = (props) => {

  const [value, onChange] = useState("");
  // const [time, onChangeTime] = useState("");
  const [bestDeals, setBestDeals] = useState(true);
  const [howToOrder, setHowToOrder] = useState(true);
  const [loremApp, setLoremApp] = useState(true);
  const [navFirstBg, setNavFirstBg] = useState(true);
  const [afterScrollNav, setAfterScrollNav] = useState(false);
  const [input, setInput] = useState("");
  const [login, setLogin] = useState(false);
  const [mainCart, setMainCart] = useState(false);
  const [scrollCart, setScrollCart] = useState(false);

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  // setInterval(function () {
  //   todayTime();
  // }, 1000);


  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()} ${date.toLocaleString("en-us", {
        month: "short",
      })}, ${date.getFullYear()} `
    );
  };

  // const todayTime = () => {
  //   onChangeTime(
  //     ` ${date.toLocaleString("en-US", {
  //       hour: "numeric",
  //       minute: "numeric",
  //       // second: "numeric",
  //       hour12: true,
  //     })}`
  //   );
  // };

  return (
    <div className='home'>
      {navFirstBg &&
        <div className="bg-1st">
          <div className="bg-first">
            <img src={bg1} alt="" className='bg1-img' />

            <div className="bg1-content">
              <div className="order-ur-food-text">Order your food</div>
              <div className="order-ur-food-text">from the best restaurants</div>
              <div className="place-form-div">
                <form action="" className='place-form'>
                  <div className='input-search-div'>
                    <input type="search" placeholder='Search your restaurant or cuisines' className='search-input' name='search' autoComplete='off' onChange={(e) => { setInput(e.target.value); setBestDeals(false); setHowToOrder(false); setLoremApp(false); }} />
                    <img src={search} alt="" className="search-icn" />
                  </div>
                  <div className="two-columns">
                    <div className='place-input-div'>
                      <input type="text" placeholder='Downtown Burj Khalifa, Dubai.' className='place-input' />
                      <img src={pin} alt="" className='pin-icn' />
                      <img src={location} alt="" className='loc-icn' />
                    </div>
                    <div className='time-input'>Today, {value}<img src={now} alt="" className='now-icn' /></div>
                  </div>
                </form>
              </div>
            </div>

            
            <div className="scrollBar" onClick={() => { setNavFirstBg(false); setLogin(true); setMainCart(!mainCart);}}><img src={mouse} alt="" />Scroll</div>
            
          </div>
          <div className="home-nav">
            <Navbar />
          </div>
        </div>
      }
{login && <Navbar setLogin={setLogin}/>}
      {/* {afterScrollNav &&
        <div className="afterScrollNav">
          <div className="fixed-nav">
            <div className="lorem">Lorem</div>
            <div className="sroll-right-nav">
              <div className="english-lang">English <img src={langArrow} alt="" className='arrow-img' /></div>
              <div className="login-new" onClick={()=>{setLogin(true);}}>Login</div>
              {login && <Navbar setLogin={setLogin}/>}
              <div className="create-an-account">create an account</div>
              
            </div>
          </div>
        </div>
      } */}


      <div className="popularBrands">
        <div className="background">
          <img src={bg2} alt="" className='bg2-img' />
        </div>

        <div className="popularBrand-content">
          <div className="popularBrand-written-content">
            <div className="popular-brand-text">Popular Brands</div>
            <div className="find-more-text">Find out more about the world's top food brands are available all over the world today.</div>
          </div>
          <div className="brand">
            <div className="brand-img"><img src={brandFood} alt="" className='brandFood' /></div>
            <div className="brand-info">
              <div className="brand-photo-name">
                <img src={kfc} alt="" className='kfc-brand-img' />

                <div className="brand-name">
                  <div className="resta-name">KFC</div>
                  <div className="brand-origin">Latin American, Bakery</div>
                </div>
              </div>
              <div className="about-brand">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus <br /> consequat purus sit amet lectus bibendum finbus vel. </div>
            </div>
          </div>
          <div className="all-brands-text">All Brands</div>
        </div>
      </div>

      {bestDeals &&
        <div className="bestDeals">
          <img src={bg3} alt="" className='bg2-img' />
          <div className="best-deal-content">
            <div className="best-deal-offer-text">Best Deals & Offers</div>
            <div className="endless-deal-text">Endless deals near you! Grab the best deals and offers.</div>
            <div className="deals">
              <div className="deal1"><img src={deal1} alt="" className='deal1-img' /></div>
              <div className="deal2"><img src={deal2} alt="" className='deal2-img' /></div>
            </div>
            <div className="all-offer-deal-text">All offers & deals</div>
          </div>
        </div>
      }

      {howToOrder &&
        <div className="howToOrder">
          <img src={bg4} alt="" className='bg2-img' />
          <div className="howToOrder-content">
            <div className="order-text">How to Order</div>
            <div className="easiest-way">Giving you an easiest way to look for the best food that can be ordered.</div>

            <div className="order-process">
              <div className="step">
                <img src={shop} alt="" className='order-process-img' />
                <div className="step-text">Explore restaurants that <br /> deliver to your doorstep.</div>
              </div>
              <div><img src={path} alt="" className='path-img' /></div>

              <div className="step">
                <img src={burger} alt="" className='order-process-img' />
                <div className="step-text">Browse menus and build <br /> your order in seconds.</div>
              </div>
              <div><img src={path} alt="" className='path-img' /></div>
              <div className="step">
                <img src={cart} alt="" className='order-process-img' />
                <div className="step-text">Follow the status of your <br /> order with real-time alerts.</div>
              </div>
            </div>
          </div>
        </div>
      }

      {/* {loremApp && 
        <div className="download-app-container">
        <div className="download-content">
        <div className="app-name">Lorem App</div>
        <div className="download-food-app-text">Download the Food App</div>
        <div className="get-real-time-update-text">Get real-time order updates, live chat support,</div>
        <div className="get-real-time-update-text">and exclusive app-only offers.</div>
        <div className="download-button">
        <div><img src={app} alt="" className='download-img'/></div>
        <div><img src={play} alt="" className='download-img'/></div>
        </div>
        </div>
        <div className="logo-gradient"><img src={tiltlogo} alt="" className='tilt-logo-img' /></div>
        
        <div className="pizza"><img src={pizza} alt="" className='pizza-img' /></div>
      </div>
      } */}


      <Footer />

    </div>
  )
}

export default Home;
