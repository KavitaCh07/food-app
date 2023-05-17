import './gallery.css';
import photo1 from '../../assets/menu1.png';
import arrow from '../../assets/collapse button.png';
import { useState } from 'react';
import cross from '../../assets/cancel.png';
import bigPhoto from '../../assets/icecream.png';
import left from '../../assets/left enabled.png';
import right from '../../assets/right enabled.png';

const Gallery = () => {
    const [photoModal, setPhotoModal] = useState(false);
    return (
        <div>
            <div className="gallery-container">
                <div className="all-photos-box">
                    <div className="all-photos-text">All Photos <img src={arrow} alt="" className='photos-down-arrow-img' /></div>
                </div>

                <div className="photo-gallery">
                    <div className="photo-row">
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' onClick={() => { setPhotoModal(true) }} /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                        <div className="gallery-photo"><img src={photo1} alt="" className='gallery-photo-img' /></div>
                    </div>
                </div>
                <div className="view-more-text">View more ></div>

                {photoModal && (
                    <div className="modal">
                        <div className="photo-overlay">
                            <div className="photo-modal-content">
                                <div className="photo-modal-inner-content">
                                    <div className="photo-modal-cross"><img src={cross} alt="" className='photo-modal-cross-img' onClick={() => { setPhotoModal(false); }} /></div>
                                    <div className="big-photo"><img src={bigPhoto} alt="" className='big-photo-img' /></div>
                                    <div className="photo-infor">
                                        <div className="photo-name">The Nachos cream stone</div>
                                        <div className="count-more">
                                            <div className="photo-count">2/30</div>
                                            <div className="left-right">
                                                <div className="photo-left"><img src={left} alt="" className='photo-left-img' /></div>
                                                <div className="photo-right"><img src={right} alt="" className='photo-left-img' /></div>
                                            </div>
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

export default Gallery;
