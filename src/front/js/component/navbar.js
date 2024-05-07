import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/navbar.css";
import logo from "../../img/logo_1.png";



export const Navbar = () => {
  const navigate = useNavigate();
  return (

    <div className="navbar_div" >
      <nav>
        <div class="wrapper">
          <div class="logo"><a>SpotLess</a>  </div>

          {/* <img src={logo} class="nav_logo" /> */}

          <input type="radio" name="slider" id="menu-btn" />
          <input type="radio" name="slider" id="close-btn" />
          <ul class="nav-links">
            <label for="close-btn" class="btn close-btn"><i class="fas fa-times"></i></label>
            <li><span onClick={()=>navigate('/dashboard')}>Home</span></li>
            
            <li>
              <span href="#" class="desktop-item">Dropdown Menu</span>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Dropdown</label>
              <ul class="drop-menu">
                <li><span >Drop menu 1</span></li>
                <li><span >Drop menu 2</span></li>
                <li><span>Drop menu 3</span></li>

              </ul>
            </li>


            <li><span onClick={()=>navigate('/schedule')} >Schedule</span></li>
            <li><span onClick={()=>navigate('/hosthistory')}>History</span></li>

            
            <li>
              <span href="#" class="desktop-item">Profile</span>
              <input type="checkbox" id="showDrop" />
              <label for="showDrop" class="mobile-item">Profile</label>
              <ul class="drop-menu">
                <li><span >Personal Info</span></li>

                <li><span>Preference</span></li>
                <li><span >Log out</span></li>

              </ul>
            </li>
          </ul>
          <label for="menu-btn" class="btn menu-btn"><i class="fas fa-bars"></i></label>
        </div>

      </nav>
    </div>

  );
};
