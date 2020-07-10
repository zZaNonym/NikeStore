import { combineReducers } from 'redux';

import navbar from './navbar';
import app from './app';
import products from './products';
import cart from './cart';

export default combineReducers({ navbar, app, products, cart });
