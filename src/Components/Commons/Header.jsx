import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
     <nav>
  <ul>
    <li><a href="#" className="active">Home</a></li>
    <li><a href="#">About us</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
    );
  }
}


