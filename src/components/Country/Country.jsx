import React from 'react';
import "./Country.css";

const Country = ({ country }) => {
    console.log(country);

    const handleVisited = () => {
        console.log("button clicked");
    }

    return (
        <div className='country'>
            <h2>Name: {country.name.common}</h2>
            <h2>Population: {country.population.population}</h2>
            <h5>Area: {country.area.area}
                {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
            </h5>
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <button onClick={handleVisited}>Not Visited</button>
        </div>
    );
};

export default Country;