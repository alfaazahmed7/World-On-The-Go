import React, { use, useState } from 'react';
import Country from '../Country/Country';
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const handleVisitedCountries = (country) => {
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);
    }
    const countriesData = use(countriesPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>Total Country: {countries.length}</h1>
            <h4 style={{ margin: "0px" }}>Total Visited Country: {visitedCountries.length}</h4>
            <h4 style={{ margin: "0px" }}>Total Visited Flags: {visitedFlags.length}</h4>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map(flag => <img src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country
                        key={country.cca3.cca3}
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;