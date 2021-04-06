import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  @media (max-width: 768px) {
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="navbar__burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
        <div className={open ? " nav-open" : " line"} />
      </div>
      {/* <RightNav open={open} /> */}

      {/* temp solution */}
      <Ul className="menu-container" open={open} onClick={() => setOpen(!open)}>
        {/* className={open ? " menu-container-open" : " menu-container"} */}
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/">
            Home
          </Link>
        </li>
        {/* <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/discover">
            Discover
          </Link>
        </li> */}
        <li className="menu-container__li">
          {" "}
          <Link className="menu-container__link" to="/movies">
            Movies
          </Link>
        </li>
      </Ul>
      {/*  */}
    </>
  );
};

export default Burger;
