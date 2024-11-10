import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { useCommon } from "../../UI/ContextApi";
const Header = () => {
  const { menu, setMenu, scroller, setScoller ,time, setTime} = useCommon();


  useEffect(() => {
    const timing = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timing);
    };
  }, []);
  // console.log(time,'oka')
  const handelMenu = () => {
    setMenu((prev) => !prev);
  };

  const scrollBehaver = () => {
    const scroll = window.scrollY;
    setScoller(scroll);
  };
  // console.log(scroller);

  useEffect(() => {
    window.addEventListener("scroll", scrollBehaver);
    return () => {
      window.removeEventListener("scroll", scrollBehaver);
    };
  }, []);
  return (
    <header className={scroller >= 10 ? "scroller":"unscroller"}>
    <div className="time">
      {time}
    </div>
      <div className="container">
        <NavLink to={'/'} className="logo">Ketan</NavLink>
        <div onClick={handelMenu} className={menu ? "menuBtn mol" : "menuBtn"}>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <ul className={menu ? "open" : "close"}>
          <li>
            <NavLink to={"/"} className={({isActive})=>isActive ? 'active' : undefined } onClick={()=> setMenu(false)}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/about"} onClick={()=> setMenu(false)}>About</NavLink>
          </li>
          <li>
            <NavLink to={"/project"} onClick={()=> setMenu(false)}>Projects</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} onClick={()=> setMenu(false)}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
