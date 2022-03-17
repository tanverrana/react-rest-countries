import "./Country.css"
import React from 'react';

const Country = (props) => {
    return (
        <div className="country-style">
            <h2>Country Name:{props.name}</h2>
            <h2>Flag:{props.flag}</h2>
            <h2>Capital:{props.capital}</h2>
        </div>
    );
};

export default Country;