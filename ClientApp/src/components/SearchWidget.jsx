import React from 'react';

const SearchWidget = (props) => {
    return (
        <div className="SearchContainer">
            <input type="text" name="WeatherSearch" onChange={props.search} />
        </div>
    )
};

export default SearchWidget;