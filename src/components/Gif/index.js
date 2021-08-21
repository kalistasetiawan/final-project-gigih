import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchComponent from './SearchComponent';
import Trending from './Trending';

class Gifs extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="left-navbar"><a href="/search">Search Component</a></div>
        <div className="left-navbar"><a href="/">Trending Component</a></div>

        <div className="main">
          <Switch>
            <Route path="/" component={Trending} exact={true} />
            <Route path="/search" component={SearchComponent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Gifs;