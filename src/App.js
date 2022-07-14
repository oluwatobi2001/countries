import React , {useState} from 'react';
import './App.css';

import {NavBar} from './components/NavBar';
import {Footer} from './components/Footer';

import  Results  from './components/Results';
import { Route} from 'react-router-dom';
import {Switch} from 'react-router-dom'
import Country from './components/Country'



function App() {

  
  
  
  const [darkTheme, setDarkTheme] = useState(false);

  
      
        
   
  return (
    <div className={darkTheme ? 'dark' : ''}>
        <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
         
        <NavBar  darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      
        
        <div className="countries">
        <Switch>
<Route exact path="/" component={Results} />

        
          
          <Route exact path="/countries/:common"  component={Country} />


         

        </Switch>
        </div>
        <Footer />
        

        </div>
    </div>
  );
}

export default App;
