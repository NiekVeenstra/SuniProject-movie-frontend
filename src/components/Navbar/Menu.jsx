import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar__burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
      </div>
      <div
        className={open ? "menu-container test" : "menu-container"}
        open={open}
        onClick={() => setOpen(!open)}
      >
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/">
            Home
          </Link>
        </li>
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/movies">
            Movies
          </Link>
        </li>
      </div>
      {/*  */}
    </>
  );
};

export default Menu;
