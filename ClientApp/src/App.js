import React, { Component } from 'react';
import { WeatherWidget } from './components/WeatherWidget.jsx';
import SearchWidget from './components/SearchWidget.jsx';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <div className="container">
        <SearchWidget />
        <WeatherWidget />
      </div>
    );
  }
}
