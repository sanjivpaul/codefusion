import React from "react";
import "./TopNav.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { setShowSidebar } from "../../store/features/nav/navSlice";
import logo from "../../assets/logo/logo1.png";
import { Link } from "react-router-dom";

function TopNav() {
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.sidebar.showSidebar);

  return (
    <div className="nav-container">
      {/* <div>
        <GiHamburgerMenu
          onClick={() => {
            dispatch(setShowSidebar(!showSidebar));
          }}
        />
      </div> */}
      <div className="logo-container">
        <img src={logo} />
        <div className="codefusion">Code Fusion</div>
      </div>

      <div className="top-navigation">
        <ul className="top-navigation-items">
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/feedback">
              Feedback
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="top-right">
        <button className="explore-btn-nav">Explore Cources</button>
        {/* <div className="explore-btn">
          <p>Explore Cources</p>
        </div> */}
      </div>
    </div>
  );
}

export default TopNav;
