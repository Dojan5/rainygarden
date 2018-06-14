import React, { Component } from 'react';
import { WeatherWidget } from './components/WeatherWidget.jsx';
import SearchWidget from './components/SearchWidget.jsx';

export default class App extends Component {
  displayName = App.name

  locationSearchHandler = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
  }

  render() {
    return (
      <div className="container">
        <h1 id="AppTitle">rainy garden</h1>
        <SearchWidget textChanged={this.locationSearchHandler} />
        <WeatherWidget />
      </div>
    );
  }
}
