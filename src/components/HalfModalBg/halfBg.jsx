import React from 'react';
import './halfBg.css';
import halfBg from '../../assets/login_bg.png';

const HalfBg = () => {
  return (
    <div>
        <div className="hlaf-bg">
            {/* <img src={halfBg} alt="" className='half-img'/> */}
            <div className="imga-content">
            <div className="lore-text">LOREM</div>
            <div className="experience-text">Experience the</div>
            <div className="experience-text">easiest a way to get</div>
            <div className="experience-text"><strong>great food</strong>&nbsp;Delivered</div>
            </div>
        </div>
    </div>
  )
}

export default HalfBg;