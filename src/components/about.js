import React, { Component } from 'react'
import M from 'materialize-css'
import Navbar from './navbar';
// import Footer from './components/footer'



export default class About extends Component {
    componentDidMount() {
        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.materialboxed');
            var instances = M.Materialbox.init(elems, {});
        });
    };





    render() {
        return (
            <div>
                <div className="container-fluid">
                    <img className="materialboxed widthpic" data-caption="A picture of a way with a group of trees in a park" src="https://cdn.pixabay.com/photo/2014/12/15/17/18/home-office-569359__340.jpg"></img>
                </div>
          
                    <h3 className='center'>About Us</h3>
                    <p className="center">Now Brewing… Font Awesome 6 Alpha!
                        The next generation of our icon library + toolkit is coming with more icons, <br />
                        more styles, more services,and more awesome. Pre-order now to get access to
                        our alpha and future releases!</p>


<div className="container">
<div className="col s12 m7">
    <div className="card horizontal">
      <div className="card-image">
        <img src="https://media.istockphoto.com/photos/business-people-working-at-a-modern-office-picture-id1150572095?b=1&k=6&m=1150572095&s=170667a&w=0&h=j-EQYEkilvjRN8YC7_3ZkORePew6hnLLOfZ2xpFxyRk="/>
      </div>
      <div className="card-stacked">
        <div className="card-content">
          <p>I am a very simple card. I am good at containing small bits of information
          Now Brewing… Font Awesome 6 Alpha!
                        The next generation of our icon library + toolkit is coming with more icons, <br />
                        more styles, more services,and more awesome. Pre-order now to get access to
                        our alpha and future releases!.
                        I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
      </div>
    </div>
  </div>

</div>
            </div>

        )
    }

}