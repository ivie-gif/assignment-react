import React, { Component } from 'react'
import M from 'materialize-css'
import Navbar from './navbar';
import { Button, Form, FormGroup, Label, Input, FormText } from 'react-router-dom';
import { Container, Row, Col } from 'react-router-dom'




export default class Contact extends Component {
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
                    <img className="materialboxed widthpic" data-caption="A picture of a way with a group of trees in a park" src="https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825__340.jpg"></img>
                </div>
            <div className="container">

<div className="row">
    <form className="col s12">
      <div className="row">
        <div className="input-field col s6 ">
          <input id="first_name" type="text" className="validate"/>
          <label htmlFor="first_name">First Name</label>
        </div>
        <div className="input-field col s6">
          <input id="last_name" type="text" className="validate"/>
          <label htmlFor="last_name">Last Name</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="password" type="password" className="validate"/>
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input id="email" type="email" className="validate"/>
          <label htmlFor="email">Email</label>
        </div>
      </div>
     

    </form>
  </div>
  </div>

            </div>

        )
        }
        }





















