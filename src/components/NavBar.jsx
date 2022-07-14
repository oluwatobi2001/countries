

import React from 'react';
import { Link } from 'react-router-dom';


export const NavBar = ({ darkTheme, setDarkTheme}) => {
    return (  
      <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b   bg-black-600 dark:border-gray-700 border-gray-200">
         <div className="flex justify-between items-center space-x-5 w-screen">
         <Link to="/">
           <p className="text-2xl  font-bolder text-black py-1 px-2 rounded  dark:text-white">
         Where in the World? 
           </p>
         </Link> 
         <button type="button" onClick= {() => setDarkTheme(!darkTheme)}  className="text-xl  dark:text-white rounded-full px-2 py-1 hover:shadow-lg"> {darkTheme ? '🌞 Light Mode ' : '🌙 Dark Mode '} </button>
            
         
         </div>
        
      </div>
    );
  }

  export default NavBar;
  
  
  