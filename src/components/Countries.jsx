import React, { useEffect, useState } from 'react'
import Country from './Country'

function Countries({ lang }) {
    const [countries, setCountries] = useState([])

    function transformResponseObjectToJSData(responseObj) {
        return responseObj.json()
    }

    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/lang/${lang}`)
        // next 3 thens are equal
        //.then(response => response.json())
        // .then(function (responseObj) {
        //     return responseObj.json()
        // })
        .then(transformResponseObjectToJSData)

        //.then(console.log)

        // next 3 thens are equal
        // .then(function (countries) {
        //     setCountries(countries)
        // })
        // .then(setCountries)
        .then(countries => setCountries(countries))
    

    }, [lang])   
    

    return (
        <div className="Countries">
            {
                countries.map(country => <Country name={country.name.common} capital={country.capital} />)
            }
        </div>
    )
}

export default Countries