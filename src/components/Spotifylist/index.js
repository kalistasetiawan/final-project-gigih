import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Login';
import Redirect from './Redirect';
import SearchTrack from './SearchTrack';

class Spotifylist extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Login} exact={true} />
            <Route path="/redirect" component={Redirect} />
            <Route path="/search-track" component={SearchTrack} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
export default Spotifylist;