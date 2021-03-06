import React, { useEffect } from 'react'
import M from 'materialize-css'
import { NavLink} from 'react-router-dom'

const style={
width:'200px'
}


export default function Navbar() {

   useEffect(()=>{
    document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {
            edge:'right'
        });
   })
},[])


        return (
            <div>
            <div className='navbar-fixed'>
                    <nav className="teal darken-4">
                        <div className="nav-wrapper container teal darken-4">
                            <NavLink to ="/home" className="brand-logo">PearlsAfrica</NavLink>
                            <NavLink to="/home" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                        </div>
                    </nav>
                    </div>

                <ul className="sidenav teal darken-4" style={style} id="mobile-demo">
                    <li><NavLink to="/home" className='white-text'>Home</NavLink></li>
                    <li><NavLink to="/about" className='white-text'>About</NavLink></li>
                    <li><NavLink to="/contact" className='white-text'>Contact</NavLink></li>
                    </ul>

            </div>
        )
    }

 