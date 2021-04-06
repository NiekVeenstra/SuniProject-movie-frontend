import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
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

const RightNav = ({ open }) => {
  const { currentUser } = useContext(AuthContext);
  return (
    <Ul className="menu-container" open={open}>
      {/* className={open ? " menu-container-open" : " menu-container"} */}
      <li>
        <Link className="link" to="/">
          Home
        </Link>
      </li>
      {!currentUser && (
        <li>
          <Link className="link" to="/login">
            Login
          </Link>
        </li>
      )}
      {!currentUser && (
        <li>
          <Link className="link" to="/signup">
            Sign Up
          </Link>
        </li>
      )}
      {!!currentUser && (
        <li>
          <Link className="link" to="/settings">
            {/* <img
            className="img"
            src="https://i.postimg.cc/W1CLyW31/account-avatar-face-man-people-profile-user-icon-123197.png"
            alt=""
          /> */}
            Settings
          </Link>
        </li>
      )}
    </Ul>
  );
};

export default RightNav;
