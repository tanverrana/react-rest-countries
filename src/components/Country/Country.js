import "./Country.css"
import React from 'react';

const Country = (props) => {
    //Destructering 
    const { population, area } = props.country;

    return (
        <div className="country">
            <h2>Country Name:{props.name}</h2>
            <h2 className="flag">Flag:{props.country.flag}</h2>
            <h2>Capital:{props.country.capital}</h2>
            <h4>Population:{population}</h4>
            <h4>Area:{area}</h4>


        </div>
    );
};

export default Country;