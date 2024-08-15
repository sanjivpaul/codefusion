import React from "react";
import "./Sidebar.css";
import { IoHomeOutline, IoLibrary } from "react-icons/io5";
import { GrArticle, GrDocumentNotes } from "react-icons/gr";
import { RiLogoutCircleLine } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
} from "../../store/features/counter/CounterSlice";
import { setShowSidebar } from "../../store/features/nav/navSlice";
import { GiHamburgerMenu } from "react-icons/gi";
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { TiContacts } from "react-icons/ti";
import { Link } from "react-router-dom";

function Sidebar() {
  const count = useSelector((state) => state.counter.value);

  const navCollapse = useSelector((state) => state.sidebar.showSidebar);

  console.log(navCollapse);

  const dispatch = useDispatch();
  return (
    <div className="sidebar-content">
      <div className={`sidebar-container ${navCollapse ? "navCollapse" : ""}`}>
        <div className="hamburger-toggle">
          <div className="ham-icon">
            <GiHamburgerMenu
              size={25}
              onClick={() => {
                dispatch(setShowSidebar(!navCollapse));
              }}
            />
          </div>
        </div>
        <Link className="link" to="/">
          <div className="nav-options">
            <IoHomeOutline size={25} />

            <h3>Home</h3>
          </div>
        </Link>

        <Link className="link" to="/cource">
          <div className="nav-options">
            <IoLibrary size={25} />

            <h3>Cource</h3>
          </div>
        </Link>

        <Link className="link" to="/ide">
          <div className="nav-options">
            <LiaLaptopCodeSolid size={25} />

            <h3>Editor</h3>
          </div>
        </Link>

        <Link className="link" to="/note">
          <div className="nav-options">
            <GrDocumentNotes size={25} />

            <h3>Notes</h3>
          </div>
        </Link>

        <Link className="link" to="/contact">
          <div className="nav-options">
            <TiContacts size={25} />

            <h3>Contact Us</h3>
          </div>
        </Link>

        <div className="nav-options">
          <RiLogoutCircleLine size={25} />

          <h3>Logout</h3>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
