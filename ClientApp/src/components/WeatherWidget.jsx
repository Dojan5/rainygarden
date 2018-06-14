import React, { Component } from 'react';
import logo from '../logo.svg';
import { Col, Row } from 'react-bootstrap';

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
			<div className="ForecastContainer">
				<div className="Frost"></div>
				<h2 className="LocationTitle">{weather.location}</h2>
				<hr />
				<Row className="justify-content-center">
					{weather.forecasts.slice(0, 8).map(forecast =>
						<Col xs="12" sm="3">
							<div key={forecast.key} className="ForecastCard">
								<h3>{forecast.summary}</h3>
								<h4>{forecast.date}</h4>
								<p><strong>High:</strong> {forecast.highC}&deg;C | {forecast.highF}&deg;F</p>
								<p><strong>Low:</strong> {forecast.lowC}&deg;C | {forecast.lowF}&deg;F</p>
							</div>
						</Col>
					)}
				</Row>
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
