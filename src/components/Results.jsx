import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Results.css'
import {NavLink} from 'react-router-dom'

import { Search } from './Search';


const apiUrl = 'https://restcountries.com/v3.1/all'
const Results  = () => {
    const [countries, setCountries] = useState([]);
    const [filtered, setFiltered] = useState("");
    const [filterValue, setFilterValue] = useState("");
    const [searchInput, setSearchInput] = useState("")
        useEffect(() => {
          axios.get(apiUrl).then((response) =>  {
            setCountries(response.data) 
            console.log(response.data[0])
        
          }).catch((error) => {
            console.log(error)
          })
          
        }, []);


        
    return (
<>
<Search  countries={countries} setCountries={setCountries} fiterValue = {filterValue} setFilterValue = {setFilterValue}  setFiltered={setFiltered} filtered={filtered} searchInput={searchInput} setSearchInput={setSearchInput} /> 
<div className="contain">

{filtered ? filtered.map((country) => {
    const {
        common
    } = country.name
    const {
      png
  } = country.flags
    const {
        population,
        
        region,
        capital
    } = country
      return (
        <NavLink to={`/${common}`}  >
          <div className="contry">
        <div className="card">
            <img src={png} alt="" className="card-image" />
            </div>
            <div className="card-body">
                <h1 className = "" ><span className="font-bold"> Country: </span>{common}</h1>
                <h2> <span className="font-bold">Population </span> {population.toLocaleString()} </h2>
                <h2> <span className="font-bold">Region </span> {region}</h2>
                <h2> <span className="font-bold">Capital : </span> {capital}</h2>
            </div>
    
        
       </div>
        </NavLink>
    )
}
   


          ) : countries.map((country) => {
            const {
                common
            } = country.name

            const {
              png
          } = country.flags
            const {
             
                population,
                region,
                capital
            } = country

              return (<NavLink to={`/countries/${common}`}  >
                 <div className="contry">
            <div className="card">
                <img src={png} alt="" className="card-image" />
                </div>
                <div className="">
                    <h1 className = "" ><span className="font-bold"> Country: </span>{common}</h1>
                    <h2> <span className="font-bold">Population </span> {population.toLocaleString()} </h2>
                    <h2> <span className="font-bold">Region </span> {region}</h2>
                    <h2> <span className="font-bold">Capital : </span> {capital}</h2>
               
                </div>
            </div>
            </NavLink>
            )
            
        }
          )
          
          }

        </div>
        </>
    )
}

export default Results