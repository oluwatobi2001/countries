import React,{ useState, useEffect} from 'react';
import "./Country.css"

import {Link} from 'react-router-dom';
import {useParams} from 'react-router'



const Country = () => {

    const [country , setCountry] = useState([]);
const {common} = useParams();





  useEffect(() => {
        const fetchCountryData = async () => {
          const response = await fetch(
            `https://restcountries.com/v2/name/${common}`
          )
          const country = await response.json()
          setCountry(country)
          console.log(country)
        }
    
        fetchCountryData()
      }, [common])

    return (
        <>
            <Link to="/" className="btn btn-light">
              Back
            </Link>
            <section className="country">
                {country.map((info) => {
                    const { 
                        numericCode,
                        flag,
                        name,
                        nativeName,
                        population,
                        region,
                        subregion,
                        capital,
                        topLevelDomain,
                        currencies,
                        languages,
                        
                        } = info

                        return (
                        <article key={numericCode} className="article">
                            <div className="container">
                                <div className="flag">
                                    <img src={flag} alt={name} />
                                </div>

                                <div className="detail">
                                    <h2>{name}</h2>
                                    <div className="top">
                                        <div className="first">
                                            <h5>Native Name: <span>{nativeName}</span></h5>
                                            <h5>Population: <span>{population.toLocaleString()}</span></h5>
                                            <h5>Region: <span>{region}</span></h5>
                                            <h5>Sub Region: <span>{subregion}</span></h5>
                                            <h5>Capital: <span>{capital}</span>{" "}</h5>
                                        </div>

                                        <div className="second">
                                            <h5>Top Level Domain: <span>{topLevelDomain}</span></h5>
                                            <h5>Currencies: <span>{currencies[0].name}</span></h5>
                                            <h5>Languages: <span>{languages[0].name}</span></h5>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <h3>Border Countries: </h3>
                                        <div className="borders">
                                            {info.borders.map((border) => {
                                                return (
                                                    <ul key={border}>
                                                        <li>{border}</li>
                                                    </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                   
                                </div>

                            </div>
                        </article>
                        )
                })}
            </section>
        </>
    )
}

export default Country
