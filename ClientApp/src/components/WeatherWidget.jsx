import React, { Component } from 'react';
import SearchWidget from './SearchWidget.jsx';
import './WeatherWidget.css';

export class WeatherWidget extends Component {
	displayName = WeatherWidget.name

	constructor(props) {
		super(props);
		this.state = { weather: {}, loading: true, query: "Nyköping" };

		fetch('api/Weather/GetWeather/?Query=' + this.state.query)
			.then(response => response.json())
			.then(data => {
				this.setState({ weather: data, loading: false });
			});
	}

	searchHandler = (event) => {
		this.setState({ weather: {}, loading: true, query: event.target.value });
	}

	static renderWeatherData(weather) {
		return (
			<div className="ForecastContainer">
				<div className="Frost"></div>
				<h3>{weather.location}</h3>
				{weather.forecasts.map(forecast =>
					<div key={forecast.key}>
						<h4>{forecast.summary}</h4>
						<p><strong>High:</strong> {forecast.highC}&deg;C | {forecast.highF}&deg;F</p>
						<p><strong>Low:</strong> {forecast.lowC}&deg;C | {forecast.lowF}&deg;F</p>
					</div>
				)}
			</div>
		);
	}

	render() {
		let contents = this.state.loading
			? <p><em>Loading...</em></p>
			: WeatherWidget.renderWeatherData(this.state.weather);
		return (
			<div>
				<h1 id="AppTitle">rainy garden</h1>
				<SearchWidget search={this.searchHandler} />
				{contents}
			</div>
		);
	}
}
