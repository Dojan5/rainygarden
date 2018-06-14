import React, { Component } from 'react';
import { WeatherWidget } from './components/WeatherWidget.jsx';
import SearchWidget from './components/SearchWidget.jsx';

export default class App extends Component {
  displayName = App.name
  state = {
    searchQuery: 'Nyköping'
  }

  locationSearchHandler = (event) => {
    this.setState({
      searchQuery: event.target.value
    })
    console.log(this.state.searchQuery);
  }

  render() {
    return (
      <div className="container">
        <h1 id="AppTitle">rainy garden</h1>
        <SearchWidget textChanged={this.locationSearchHandler} stateQuery={this.state.searchQuery} />
        <WeatherWidget query={this.state.searchQuery} />
      </div>
    );
  }
}
