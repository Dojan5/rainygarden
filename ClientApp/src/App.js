import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { FetchData } from './components/FetchData';
import { WeatherWidget } from './components/WeatherWidget.jsx';

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Route exact path='/' component={WeatherWidget} />
        <Route path='/fetchdata' component={FetchData} />
      </Layout>
    );
  }
}
