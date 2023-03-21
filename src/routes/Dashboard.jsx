import { Outlet } from "react-router-dom";
import "../style/Dashboard.scss";

export default function DashBoard() {
    return (
        <>
            <header className="header">
                <nav className="nav">
                    <img src="/Images/logo1.png" alt="" className="logo"/>
                    <div>
                        <ul className="links">
                            <li><a href="/home">HOME</a></li>
                        </ul>
                        <div className="profilePic">
                            <img src="" alt="" />
                        </div>
                    </div>
                </nav>
            </header>
            <div className="content">
                <aside className="aside">
                    <ul className="asideLinks">
                        <a href="">Add new product</a>
                        <a href="">All products</a>
                        <a href="">orders</a>
                        <a href="">Customer questions</a>
                    </ul>
                </aside>
                <main>
                    <Outlet/>                    
                </main>
            </div>
            <footer>

            </footer>
        </>
    )
}