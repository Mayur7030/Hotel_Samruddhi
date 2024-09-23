import { useState } from "react";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import data from "../restApi.json";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  return (
    <nav>
      <div className="logo">
        <img src="./SamruddhiLogo.png" alt="Hotel Samruddhi" />
      </div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data.jsonData[0].navbarLinks.map((element) => (
            <div
              key={element.id}
              onClick={() => navigate(`/${element.link}`)} // Use navigate for routing
              style={{
                cursor: "pointer",
                padding: "10px",
                display: "inline-block",
              }} // Optional styles for better UI
            >
              {element.title}
            </div>
          ))}
        </div>
        <button className="menuBtn">OUR MENU</button>
      </div>
      <div
        className="hamburger"
        onClick={() => {
          setShow(!show);
        }}
      >
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default NavBar;
