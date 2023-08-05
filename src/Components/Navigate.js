import { NavLink } from "react-router-dom";
import "../style.css"
import { IoHome, IoNotifications, IoPerson, IoBookmark } from "react-icons/io5";

const Navigate = () => {
  return (
    <div className="navBar">
      <div className="titleLogo">
        <h2>TravelMedia.in</h2>
      </div>
      <div className="navBar-path">
        <NavLink to="/"><IoHome className="icon"/></NavLink>
        <NavLink to="/"><IoNotifications className="icon"/></NavLink>
        <NavLink to="/item"><IoBookmark className="icon bk"/></NavLink>
        <NavLink to="/item"><IoPerson className="icon"/></NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default Navigate;
