import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const { setInputSearch } = useContext(Context);
  const { inputSearchResultPage, setInputSearchResultPage } = useContext(Context);

  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const clearInputHandler = () => {
    setInputText("");
  };
  const submitSearch = (e) => {
    e.preventDefault();
    setInputSearch(inputText);
    if (inputText) {
      setInputSearchResultPage(true);
    }
  };
  const submitSearchEnter = (e) => {
    e.preventDefault();
    if (inputText) {
      setInputSearch(inputText);
      setInputText("");
    }
  };

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
        <li className="menu-container__li" onClick={(e) => e.stopPropagation()}>
          {" "}
          <form onChange={submitSearch} onSubmit={submitSearchEnter}>
            <input onChange={inputTextHandler} value={inputText}></input>
          </form>
        </li>
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
