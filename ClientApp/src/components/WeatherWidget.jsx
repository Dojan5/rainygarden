import React, { Component } from 'react';

export class WeatherWidget extends Component {
	displayName = WeatherWidget.name

	constructor(props) {
		super(props);
		this.state = { weather: {}, loading: true };

		fetch('api/Weather/GetWeather')
			.then(response => response.json())
			.then(data => {
				this.setState({ weather: data, loading: false });
			});
	}

	static renderWeatherData(weather) {
		return (
			<div>
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
				<h1>Forecast</h1>
				{contents}
			</div>
		);
	}
}
