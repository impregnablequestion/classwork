import React, { useState, useEffect } from 'react';
import CountryList from '../components/CountryList';
import CountryDetail from '../components/CountryDetail';
import CountrySelector from '../components/CountrySelector';
import './CountriesContainer.css';

const CountryContainer = () => {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);

    useEffect(() => {
      getCountries();
    }, [])

    const onCountrySelected = function (country) {
        setSelectedCountry(country);
    }

    const getCountries = function(){
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(countries => setCountries(countries))
    }


    return (
        <div className="main-container">
            <CountrySelector countries={countries} onCountrySelected={onCountrySelected}></CountrySelector>
            {/* <CountryList countries={countries} onCountryClicked={onCountryClicked}/> */}
            {selectedCountry ? 
            <CountryDetail country={selectedCountry}></CountryDetail>
            : null}
        </div>
    )
}

export default CountryContainer;
