import React, { Component } from 'react';

export class WeatherWidget extends Component {
    displayName = WeatherWidget.name

    render() {
        return (
            <div>
                <h1>You're <em>fin</em>tastic brah!</h1>
                <p>React version: {React.version}</p>
            </div>
        );
    }
}
