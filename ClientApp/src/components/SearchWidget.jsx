import React, { Component } from 'react';

export class SearchWidget extends Component {
    displayName = SearchWidget.name

    render() {
        return (
            <div>
                <input type="text" name="WeatherSearch" />
            </div>
        );
    }
}