import React, { Component } from 'react'
import data from "../../blue/script"

export default class search extends Component {

  render() {
    let profiles = Object.keys(data) 
    profiles.forEach((user) => console.log(user));
    return ( 
      <input placeholder="Enter Post Title"/>
         
    );
  }
}


