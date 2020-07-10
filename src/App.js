import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Navbar,
  Products,
  PageConstructor,
  ItemPage,
  Cart,
} from './containers';
import { Footer } from './components';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path='/cart' component={Cart} />
        <Route exact path={['/', '/:group']} component={PageConstructor} />
        <Route exact path='/p/:tag' component={Products} />
        <Route exact path='/p/item/:id' component={ItemPage} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
