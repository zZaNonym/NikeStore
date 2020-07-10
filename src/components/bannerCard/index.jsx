import React from 'react';
import { Link } from 'react-router-dom';

import './bannerCard.scss';

const BannerCard = ({ srcBig, srcSmall, textTop, textBottom }) => {
  return (
    <Link className='bannerCard_link' to='/'>
      <div className='bannerCard_images'>
        <div className='bannerCard_content'>
          <p className='bannerCard_content-top'>{textTop}</p>
          <p className='bannerCard_content-bottom'>{textBottom}</p>
        </div>
        <picture>
          <source
            srcSet={srcSmall}
            type='image/jpeg'
            media='(max-width:630px)'
            className='bannerCard_images-img'
          />
          <img className='bannerCard_images-img' src={srcBig} alt='banner' />
        </picture>
      </div>
    </Link>
  );
};

export default BannerCard;
