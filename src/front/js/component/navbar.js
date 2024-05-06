import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";

export const Navbar = () => {
	return (

		<div className="navbar_div" >
		<nav>
  <div class="wrapper">
    <div class="logo"><a href="#">Logo</a></div>
    <input type="radio" name="slider" id="menu-btn"/>
    <input type="radio" name="slider" id="close-btn"/>
    <ul class="nav-links">
      <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
      <li><span>Home</span></li>
      <li><span>About</span></li>
      <li>
        <span href="#" class="desktop-item">Dropdown Menu</span>
        <input type="checkbox" id="showDrop"/>
        <label for="showDrop" class="mobile-item">Dropdown</label>
        <ul class="drop-menu">
          <li><span >Drop menu 1</span></li>
          <li><span >Drop menu 2</span></li>
          <li><span>Drop menu 3</span></li>
         
        </ul>
      </li>

	  <li>
        <span href="#" class="desktop-item">Profile</span>
        <input type="checkbox" id="showDrop"/>
        <label for="showDrop" class="mobile-item">Profile</label>
        <ul class="drop-menu">
          <li><span >Personal Info</span></li>
       
          <li><span>Preference</span></li>
		  <li><span >Log out</span></li>
         
        </ul>
      </li>
     
      <li><span >Feedback</span></li>
	  <li><span >Schedule</span></li>
	  <li><span >History</span></li>
    </ul>
    <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
  </div>

</nav>
		</div>

	);
};
