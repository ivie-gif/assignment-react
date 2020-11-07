import React from 'react';
import Navbar from './components/navbar'
import {HashRouter, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Footer from './components/footer'


const App=()=> {
  return (
<HashRouter>
  <Navbar/>
<switch>
<Route path = '/home' component = {Home}/>
<Route path = '/about' component = {About}/>
</switch>
{/* <Home/>
<About/> */}
  <Footer/>
  </HashRouter>
  )}

export default App;
