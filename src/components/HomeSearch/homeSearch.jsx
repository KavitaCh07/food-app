import './homeSearch.css';
import searchBg from '../../assets/searchBg.png';
import clock from '../../assets/now_button.png';
import pin from '../../assets/icn_pin.png';
import loc from '../../assets/icn_gps_indicator.png'
import { useState } from 'react';
import close from '../../assets/dismiss button.png';

const HomeSearch = () => {
  const [modal, setModal] = useState(false);
  const [value, onChange] = useState("");
  const [time, onChangeTime] = useState("");

  const date = new Date();

  setInterval(function () {
    today();
  }, 1000);

  setInterval(function () {
    todayTime();
  }, 1000);


  const today = () => {
    onChange(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()} `
    );
  };

  const todayTime = () => {
    onChangeTime(
      ` ${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div>
      <div className="home-search">
        <div className="seach-bg">
          <img src={searchBg} alt="" className='searchcg-img' />
        </div>
        <div className="home-search-part">
          <div className="delevery-asap">Delivery ASAP</div>
          <div className="search-inputs-row">
            <form action="" className='homeSearch-form'>
              <div className="place-input-search">
                <input type="text" placeholder='Downtown Burj Khalifa, Dubai' className='place-search2' />
                <img src={pin} alt="" className='pin2-img' />
                <img src={loc} alt="" className='loc2-img' />
              </div>
              <div className="item-search">
                <input type="text" placeholder='Breakfast' className='item-search-input' />
              </div>
              <div className="current-time" onClick={() => { setModal(true) }}><img src={clock} alt="" className='current-time-img' /></div>
            </form>
          </div>
        </div>


        {modal &&
          (
            <div className="modal">
              <div className="schedule-overlay">
                <div className="modal-content">
                  <div className="schedule-modal-inner-content">
                    <div className="modal-close"><img src={close} alt="" className='close-img' onClick={() => { setModal(false) }} /></div>
                    <div className="schedule">Schedule</div>
                    <div className="busy-at-work">Busy at work now, schedule it for later!</div>
                    <form action="" className="schedule-form">
                      <div className="schedule-date">Date</div>
                      <input type="text" className='schedule-date-input' placeholder={value} />
                      <div className="schedule-date">Time</div>
                      <input type="text" className='schedule-time-input' placeholder={time} />

                      <div className="schedule-date-time-btn">
                        <div className="schedule-btn">SCHEDULE DATE AND TIME</div>
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
export default HomeSearch;