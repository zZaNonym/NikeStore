import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AppActions } from '../redux/actions';
import { BannerCard, Carousel } from '../components';
import { AdvCard } from '../containers';

const PageConstructor = ({ location, fetchPageData, page, match }) => {
  const [showPage, setShowPage] = useState(false);
  useEffect(() => {
    if (location.pathname === '/') {
      setShowPage(fetchPageData('home'));
    } else {
      setShowPage(fetchPageData(match.params.group));
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  if (!showPage) {
    return <div className='content'>loading</div>;
  }

  return (
    <div className='content'>
      {match.params.group && (
        <div className='content-container'>
          <div className='content_header'>
            <h2 className='content_header-tag'>
              {match.params.group.toUpperCase()}
            </h2>
            <div className='content_menu'>
              <Link
                to={`/p/${match.params.group}-shoes`}
                className='content_menu-link'>
                <span>Shoes</span>
              </Link>
              <Link
                to={`/p/${match.params.group}-clothes`}
                className='content_menu-link'>
                <span>Clothes</span>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className='content-container'>
        <BannerCard
          srcBig={page.banner.srcBig}
          srcSmall={page.banner.srcSmall}
          textTop={page.banner.textTop}
          textBottom={page.banner.textBottom}
        />
      </div>
      <div className='content-container'>
        <AdvCard items={page.advCard.items} moto={page.advCard.moto} />
      </div>
      <Carousel moto={page.carousel.moto} items={page.carousel.items} />
    </div>
  );
};

export default connect(
  ({ app }) => ({ page: app.page, isLoading: app.isLoading }),
  AppActions
)(PageConstructor);
