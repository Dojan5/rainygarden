import React, { Component } from 'react';

export class SearchWidget extends Component {
    displayName = SearchWidget.name

    render() {
        return (
            <div className="SearchContainer">
                <input type="text" name="WeatherSearch" />
            </div>
        );
    }
}