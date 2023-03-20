import "../style/Login.scss";
import { Link } from "react-router-dom";

export default function LogIn() {
    return (
        <div className="login">
            <img src="./Images/logo1.png" alt="" />
            <h1 className="h1">Log In</h1>   
            <form action="" method="post" className="form">
                <input className="inputFeild" type="text" name="" id="" placeholder="userName"/>
                <input className="inputFeild" type="password" name="" id="" placeholder="password"/>
                <input className="loginBtn" type="submit" value="Log in" />
                <Link to="/signup" className="link">Don't have an account?</Link>            
            </form>
        </div>
    )
}