import React from 'react';
import M from 'materialize-css'
import { HashRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import About from './components/about'
import Contact from './components/contact'
import Footer from './components/footer'


const App=()=> {
  return (
<HashRouter>
<Navbar/>
<Switch>
<Route path = '/home' component = {Home}/>
<Route path = '/about' component = {About}/>
<Route path = '/contact' component = {Contact}/>
</Switch>
<Footer/>
  </HashRouter>
  )}

export default App;
