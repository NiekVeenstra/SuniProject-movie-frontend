import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  li {
    padding: 18px 10px;
    .log-out {
      font-size: 2rem;
      border: solid black 1px;
      background: transparent;
      padding: 0 0.3rem;
      cursor: pointer;
    }
    .link {
      color: #000000;
      font-size: 2rem;
      text-decoration: none;
      .img {
        border: solid red 1px;
        width: 2.5rem;
      }
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    padding-top: 3.5rem;
    transition: transform 0.5s ease-in-out;
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
        <li>
          {" "}
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          {" "}
          <Link className="link" to="/">
            Movies
          </Link>
        </li>
      </Ul>
      {/*  */}
    </>
  );
};

export default Burger;
