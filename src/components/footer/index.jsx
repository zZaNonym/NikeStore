import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import './footer.scss';

const Footer = () => {
  const [btn1, setBtn1] = useState(false);
  const [btn2, setBtn2] = useState(false);

  return (
    <div className='footer'>
      <div className='footer_top'>
        <div className='footer_top-group'>
          <div className='footer_top-group-coll'>
            <ul className='footer-links'>
              <li className='footer-link header'>
                <Link to='/'>GIFT CARDS</Link>
              </li>
              <li className='footer-link header'>
                <Link to='/'>PROMOTIONS</Link>
              </li>
              <li className='footer-link header'>
                <Link to='/'>PROMOTIONS</Link>
              </li>
              <li className='footer-link header'>
                <Link to='/'>SIGN UP FOR EMAIL</Link>
              </li>
              <li className='footer-link header'>
                <Link to='/'>BECOME A MEMBER</Link>
              </li>
              <li className='footer-link header'>
                <Link to='/'>SEND US FEEDBACK</Link>
              </li>
            </ul>
          </div>
          <div className='footer_top-group-coll'>
            <ul className='footer-links'>
              <li onClick={() => setBtn2(!btn2)} className='footer-link header'>
                Get Help
                <PlusOutlined className='footer-links-btn' />
              </li>
              <div
                style={{
                  maxHeight: !btn2 ? '0' : '500px',
                  transition: '1s',
                }}>
                <li className='footer-link'>
                  <Link to='/'>Order Status</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Shipping and Delivery</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Returns</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Payment Options</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Gift Card Balance</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Contact Us</Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='footer_top-group-coll'>
            <ul className='footer-links'>
              <li onClick={() => setBtn1(!btn1)} className='footer-link header'>
                About Nike
                <PlusOutlined className='footer-links-btn' />
              </li>
              <div
                style={{
                  maxHeight: !btn1 ? '0' : '500px',
                  transition: '1s',
                }}>
                <li className='footer-link'>
                  <Link to='/'>News</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Careers</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Investors</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Purpose</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>Sustainability</Link>
                </li>
                <li className='footer-link'>
                  <Link to='/'>CA Supply Chains Act</Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div className='footer-links-icons'>
          <Link to='/'>
            <TwitterOutlined className='footer-links-icon' />
          </Link>
          <Link to='/'>
            <InstagramOutlined className='footer-links-icon' />
          </Link>
          <Link to='/'>
            <FacebookOutlined className='footer-links-icon' />
          </Link>
          <Link to='/'>
            <YoutubeOutlined className='footer-links-icon' />
          </Link>
        </div>
      </div>
      <div className='footer_bottom'>
        <span>© 2020 Nike, Inc. All Rights Reserved</span>
      </div>
    </div>
  );
};

export default Footer;
