import "../style/Header.scss";
import { NavLink } from "react-router-dom";

export default function Header ({cart, onRemoveCartItem}) {


    return (
            <header className="header">
                <nav className="nav">
                    <img src="/Images/logo1.png" alt="logo" className="logo"/>
                    <ul className="links">
                        <li><NavLink to="/home">HOME</NavLink></li>
                        <li><NavLink to="/login">LOG IN</NavLink></li>
                        <li><NavLink to="/signup">SIGN UP</NavLink></li>
                    </ul>
                </nav>
                <div className="nav2">
                    <form className="inputGroup" method="get" action="/result">
                        <input type="text" name="search" id="search" className="inputItem" placeholder="Search" autoFocus/>
                        <button type="submit" className="searchButton">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>
                    <div className="shoppingCartDiv">
                        <i className="fa-solid fa-cart-shopping shoppingCart"></i>
                        <span className="itemsNumber">{cart.length}</span>
                        <div>
                            {cart && cart.map(item => 
                                <div key={item.id}>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.quantity} X {item.price}</p>
                                    </div>
                                    <button onClick={() => onRemoveCartItem(item.id)}>X</button>
                                </div>
                                )
                            }
                        </div>
                    </div>
                </div>
            </header>
    )   
}