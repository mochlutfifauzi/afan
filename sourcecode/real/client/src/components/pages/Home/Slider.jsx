import React from 'react';

const Slider = () => (
    <div><section className="section-block featured-media tm-slider-parallax-container">
        <div className="tm-slider-container full-width-slider" data-featured-slider data-parallax data-scale-under="960">
            <ul className="tms-slides">
                <li className="tms-slide" data-image data-force-fit data-overlay-bkg-color="#000000" data-overlay-bkg-opacity="0.70">
                    <div className="tms-content">
                        <div className="tms-content-inner center v-align-middle">
                            <div className="row">
                                <div className="column width-12">
                                    <h1 className="tms-caption color-white title-xlarge"
                                        data-animate-in="preset:slideInUpShort;duration:900ms;delay:100ms;"
                                        data-no-scale
                                    >Sartre v.1.0.7</h1>
                                    <div className="clear"></div>
                                    <p className="tms-caption lead mb-20 color-grey-ultralight"
                                       data-animate-in="preset:slideInUpShort;duration:900ms;delay:200ms;"
                                       data-no-scale
                                    >A new level of elegance in web design</p>
                                    <div className="clear"></div>
                                    <a href="#homepage-demos" data-offset="-60" className="tms-caption button scroll-link medium border-grey-light bkg-hover-theme color-white color-hover-white text-uppercase"
                                       data-animate-in="preset:slideInUpShort;duration:900ms;delay:400ms;"
                                       data-no-scale
                                    >Homepage Concepts</a>
                                    <a href="#one-page-demos" data-offset="-60" className="tms-caption button scroll-link medium border-grey-light bkg-hover-theme color-white color-hover-white text-uppercase"
                                       data-animate-in="preset:slideInUpShort;duration:900ms;delay:400ms;"
                                       data-no-scale
                                    >One page Concepts</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img  src={require('./../../nasa.jpg')} alt=""/>
                </li>
            </ul>
        </div>
    </section></div>
);

export default Slider;