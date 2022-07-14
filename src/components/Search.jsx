import React, {useEffect} from 'react';
import axios from "axios";

import "./Search.css"
const regionUrl = `https://restcountries.com/v3.1/region/`;

export  const Search = ({ filterValue, setFilterValue, countries, setCountries,  filtered, setFiltered, searchInput, setSearchInput}) => {
  function handleSubmit(e) {
    e.preventDefault();
  }
const SearchCountries = (searchValue) => {
  setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

   
    const Tobi = async(e) => {
      
        
        setFilterValue(e.target.value);
        const bi = e.target.value;
        const url = regionUrl + bi;
        axios.get(url).then((response) =>  {
          setFiltered(response.data) 
          console.log(response.data)
      
        }).catch((error) => {
          console.log(error)
        })
        
    }
    useEffect(() => {
        Tobi();
    }, [])
    
    return (
        <div className="search-filter">
        <div className="search-form">
        <form  onSubmit ={handleSubmit}>
        <input
           type="text"
           placeholder="Search for a country"
           className="Search-box"
           name= "countries" 
           onChange={(e) => SearchCountries(e.target.value) }/>
           
           </form>
        </div> 

        <div className="filter-form">
     <select onChange={Tobi} className="filter-box" >
     <option value="all" >Filter by country</option>
       <option value="Africa" className="filter-text" >Africa</option>
       <option value="America" className="filter-text">America</option>
       <option value="Asia" className="filter-text">Asia</option>
       <option value="Europe" className="filter-text">Europe</option>
       <option value="Oceania" className="filter-text">Oceania</option>
       </select>

      
            

        </div>
        </div>
    )
}