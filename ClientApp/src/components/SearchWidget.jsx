import React from 'react';

const SearchWidget = (props) => {
    return (
        <div className="SearchContainer">
            <input type="text" name="WeatherSearch" onChange={props.textChanged} />
        </div>
    )
};

export default SearchWidget;