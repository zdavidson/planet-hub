import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "./MobileMenu.scss";

const MobileMenu = () => {
  return (
    <div className="mobile-menu">
      <h1>Your Menu</h1>
      <ul>
        <li>Lots</li>
        <li>Of</li>
        <li>Links</li>
      </ul>
    </div>
  );
};

export default MobileMenu;
