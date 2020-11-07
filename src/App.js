import React from 'react';
import Navbar from './components/navbar'
import M from 'materialize-css'
import {HashRouter, Route} from 'react-router-dom'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'


const App=()=> {
  return (
<HashRouter>
  <Navbar/>
<switch>
<Route path = '/home' component = {Home}/>
<Route path = '/about' component = {About}/>
<Route path = '/contact' component = {Contact}/>
</switch>
  <Footer/>
  </HashRouter>
  )}

export default App;
