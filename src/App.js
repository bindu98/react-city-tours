import React, { Component } from "react";
import './App.scss';
import Navbar from './components/Navbar/Navbar.js';
import TourList from "./components/TourList";

class App extends Component{
 render(){
   return (
     <main>
        <Navbar></Navbar>
        <TourList></TourList>
     </main>
   );
   }
}
export default App;
