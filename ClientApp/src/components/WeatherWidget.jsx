import React, { Component } from 'react';
import logo from '../logo.svg';

export class WeatherWidget extends Component {
	displayName = WeatherWidget.name

	constructor(props) {
		super(props);
		this.state = { weather: {}, loading: true, query: props.query };

		fetch('api/Weather/GetWeather/?Query=' + this.state.query)
			.then(response => response.json())
			.then(data => {
				this.setState({ weather: data, loading: false });
			});
	}
	componentWillReceiveProps = (props) => {
		this.state = { weather: {}, loading: true, query: props.query };
		fetch('api/Weather/GetWeather/?Query=' + this.state.query)
			.then(response => response.json())
			.then(data => {
				this.setState({ weather: data, loading: false });
			});
	}

	static renderWeatherData(weather) {
		return (
			<div className="ForecastContainer">
				<div className="Frost"></div>
				<h2 className="LocationTitle">{weather.location}</h2>
				<hr />
				<div className="row">
					{weather.forecasts.slice(0, 8).map(forecast =>
						<div className="col-xs-12 col-sm-3 ForecastCard" key={forecast.key}>
							<h3>{forecast.summary}</h3>
							<h4>{forecast.date}</h4>
							<p><strong>High:</strong> {forecast.highC}&deg;C | {forecast.highF}&deg;F</p>
							<p><strong>Low:</strong> {forecast.lowC}&deg;C | {forecast.lowF}&deg;F</p>
						</div>
					)}
				</div>
			</div>
		);
	}

	render() {
		let contents = this.state.loading
			? <div className="ForecastLoading"><em>Loading...</em><br /> <img src={logo} className="App-logo" alt="logo" /></div>
			: WeatherWidget.renderWeatherData(this.state.weather);
		return (
			<div>
				{contents}
			</div>
		);
	}
}
