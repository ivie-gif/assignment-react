import React, { useEffect } from 'react'
import M from 'materialize-css'
import {Link, NavLink} from 'react-router-dom'

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
                            <NavLink to ="#!" className="brand-logo">PearlsAfrica</NavLink>
                            <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></NavLink>
                            <ul className="right hide-on-med-and-down">
                                <li><NavLink to="/home">Home</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>
                                </ul>
                        </div>
                    </nav>
                    </div>

                <ul className="sidenav teal darken-4" style={style} id="mobile-demo">
                    <li><NavLink to="sass.html" className='white-text'>Home</NavLink></li>
                    <li><NavLink to="badges.html" className='white-text'>About</NavLink></li>
                    </ul>

            </div>
        )
    }

 