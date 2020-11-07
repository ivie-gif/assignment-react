import React from 'react'
import {Link, NavLink} from 'react-router-dom'



export default function Footer() {
    return (
        <div>
            <footer className="page-footer teal darken-4">
                <div className="container">
                    <div className="row">
                        <div className="col s12 m8 l6">
                            <h5 className="white-text">Office Hours:</h5>
                            <p className="grey-text text-lighten-4">Mondays: 10am-12pm.</p>
                            <p className="grey-text text-lighten-4">Tuesdays: 10am-12pm.</p>
                            <p className="grey-text text-lighten-4">Fridays: 10am-12pm.</p>
                        </div>
                        <div className="col s12 m4 l6">
                            <h5 className="white-text">Contact Us</h5>
                            <p className="grey-text text-lighten-4">Address: Mainland Drive, lekki pennisula, area 5, lagos, Nigeria.</p>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2016 Copyright Text
                        <NavLink className="grey-text text-lighten-4 right" to="/about">Quick Links</NavLink>
                    </div>
                </div>
            </footer>
        </div>
    )
}
