import React from 'react';
import './footer.css';
import flag1 from '../../assets/flag1.PNG';
import flag2 from '../../assets/flag2.PNG';
import flag3 from '../../assets/flag3.PNG';
import flag4 from '../../assets/flag4.PNG';
import media1 from '../../assets/gogle.PNG';
import media2 from '../../assets/face.PNG';
import media3 from '../../assets/link.PNG';
import media4 from '../../assets/twitter.PNG';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-row">
        <div className="footer-lorem-tex">LOREM</div>
        <div className="city-count"><span className='city-number'>24</span> CITIES</div>
        <div className="country-count"><span className='country-number'>4</span> COUNTRIES</div>
        <div className="flag-row">
          <div className="flag"><img src={flag1} alt="" /></div>
          <div className="flag"><img src={flag2} alt="" /></div>
          <div className="flag"><img src={flag3} alt="" /></div>
          <div className="flag"><img src={flag4} alt="" /></div>
        </div>
        <div className="social-media-row">
          <div className="media"><img src={media1} alt="" className='media-img' /></div>
          <div className="media"><img src={media2} alt="" className='media-img' /></div>
          <div className="media"><img src={media3} alt="" className='media-img' /></div>
          <div className="media"><img src={media4} alt="" className='media-img' /></div>
        </div>
      </div>
      {/* <hr className='nav-hr'/> */}
      <div className="footer-second-row">
        <div className="text">About</div>
        <div className="text">Careers</div>
        <div className="text">Privacy policy </div>
        <div className="text">Terms & Condition</div>
        <div className="text">Mobile app</div>
        <div className="text">Blog</div>
        <div className="text">Contact</div>
        <div className="text">Sitemap</div>
      </div>
    </div>
  )
}

export default Footer;
