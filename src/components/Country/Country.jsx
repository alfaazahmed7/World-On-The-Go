import React, { useState } from 'react';
import "./Country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {
    const [visited, setVisited] = useState(false);
    // console.log(country);

    const handleVisited = () => {
        // // system - 01
        // if (visited) {
        //     setVisited(false)
        // }
        // else {
        //     setVisited(true)
        // }

        // // system - 02
        // setVisited(visited ? false : true);

        // system - 03
        setVisited(!visited);
        handleVisitedCountries(country);
        
    }

    return (
        <div className= {`country ${visited && "visited-country"}`}>
            <h2>Name: {country.name.common}</h2>
            <h2>Population: {country.population.population}</h2>
            <h5>Area: {country.area.area}
                {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}
            </h5>
            <img style={{height: "160px", width: "320px"}} src={country.flags.flags.png} alt={country.flags.flags.alt} />
            <button style={{marginRight: "10px"}} onClick={handleVisited}>
                {visited ? "Visited" : "Not Visited"}
            </button>
            <button onClick={() => {handleVisitedFlags(country.flags.flags.png)}}>Add Visited Flag</button>
        </div>
    );
};

export default Country;