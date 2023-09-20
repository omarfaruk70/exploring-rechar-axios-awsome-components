import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Navlink from "../Navlink/Navlink";
import { useState } from "react";

const Navbar = () => {
  // all state
  const [openMenuIcon, setOpenMenuIcon] = useState(false);

  // all routes
  const routes = [
    { path: "/", name: "Home", id: "home-link" },
    { path: "/about", name: "About", id: "about-link" },
    { path: "/services", name: "Services", id: "services-link" },
    { path: "/contact", name: "Contact", id: "contact-link" },
    { path: "/dashboard", name: "Dashboard", id: "dashboard-link" },
  ];

  return (
    <nav>
      <div
        className="md:hidden text-4xl"
        onClick={() => setOpenMenuIcon(!openMenuIcon)}
      >
        {openMenuIcon === true ? (
          <AiOutlineClose></AiOutlineClose>
        ) : (
          <AiOutlineMenu></AiOutlineMenu>
        )}
      </div>

      <ul
        className={`${
          openMenuIcon ? "top-20" : "-top-60"
        } 
        absolute lg:static duration-1000 flex flex-col md:flex-row`}
      >
        {routes.map((route) => (
          <Navlink key={route.id} route={route}></Navlink>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
