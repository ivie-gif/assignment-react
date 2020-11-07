import React, { Component } from 'react'
import M from 'materialize-css'
import Navbar from './navbar';
import {Link, NavLink} from 'react-router-dom'






export default class Home extends Component {
componentDidMount(){
  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems, {
        fullWidth:true,
        indicators:true
    });
  });
}

    render() {
        return (
            <div>
                <div class="carousel row carousel-slider">
    <NavLink className="carousel-item" to="#one!"><img className='caro-image' src="https://media.istockphoto.com/photos/portrait-of-successful-business-professionals-picture-id1150572138?b=1&k=6&m=1150572138&s=170667a&w=0&h=Ad8BBeYBajOw0KIXqsNa-5mpMgeNOmszZYGr9S1zFQU=" alt=""/></NavLink>
    <NavLink className="carousel-item" to="#two!"><img className='caro-image' src="https://media.istockphoto.com/photos/business-people-working-at-a-modern-office-picture-id1150572095?b=1&k=6&m=1150572095&s=170667a&w=0&h=j-EQYEkilvjRN8YC7_3ZkORePew6hnLLOfZ2xpFxyRk=" alt=""/></NavLink>
    <NavLink className="carousel-item" to="#three!"><img className='caro-image' src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg" alt=""/></NavLink>
  </div>


{/* H1 tag for heading */}
<h3 className='center'>Our Services</h3>
<p className="center">Now Brewing… Font Awesome 6 Alpha!
The next generation of our icon library + toolkit is coming with more icons, <br/>
more styles, more services,and more awesome. Pre-order now to get access to our alpha and future releases!</p>
  {/* div for cards */}
  
 <div className="card-margin">
      
  <div className='row  '>
      <div className="col s6 m6 l3">
          <div className="card">
              <div className="card-image">
                  <img src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg" alt='' className="img-responsive"/>
                  <span className="card-title ">Innovation</span>
              </div>
              <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <NavLink to="/about">Learn More</NavLink>
        </div>
          </div>
      </div>

      <div className="col s6 m6 l3">
          <div className="card">
              <div className="card-image">
                  <img src="https://cdn.pixabay.com/photo/2015/05/26/23/52/technology-785742__340.jpg" alt='' className="img-responsive"/>
                  <span className="card-title">Technicality</span>
              </div>
              <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <NavLink to="/about">Learn More</NavLink>
        </div>
          </div>
      </div>

      <div className="col s6 m6 l3">
          <div className="card">
              <div className="card-image">
                  <img src="https://cdn.pixabay.com/photo/2015/04/20/13/17/work-731198__340.jpg" alt='' className="img-responsive"/>
                  <span className="card-title">Development</span>
              </div>
              <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <NavLink to="/about">Learn More</NavLink>
        </div>
          </div>
      </div>
      
      <div className="col s6 m6 l3">
          <div className="card">
              <div className="card-image">
                  <img src="https://cdn.pixabay.com/photo/2016/11/29/06/18/home-office-1867761__340.jpg"  alt='' className="img-responsive"/>
                  <span className="card-title">Improvement</span>
              </div>
              <div class="card-content">
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <NavLink to="/about">Learn More</NavLink>
        </div>
          </div>
      </div>
  </div>
  </div>


  
            </div>
        )
    }
}


