import "../style/Header.scss";
import { NavLink } from "react-router-dom";

export default function Header () {
    return (
            <header className="header">
                <nav className="nav">
                    <img src="/Images/logo1.png" alt="logo" className="logo"/>
                    <ul className="links">
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/log-in">LOG IN</NavLink></li>
                        <li><NavLink to="/sign-up">SIGN UP</NavLink></li>
                    </ul>
                </nav>
                <div className="nav2">
                    <div className="inputGroup">
                        <input type="text" name="search" id="search" className="inputItem" placeholder="Search" autoFocus/>
                        <button type="submit" className="searchButton">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                    <div className="shoppingCartDiv">
                        <i className="fa-solid fa-cart-shopping shoppingCart"></i>
                        <span className="itemsNumber">1</span>
                    </div>
                </div>
            </header>
    )   
}