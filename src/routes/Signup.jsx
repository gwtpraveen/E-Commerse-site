import "../style/Login.scss";
import { Link } from "react-router-dom";

export default function Signup() {
    return (
        <>
            <div className="login">
                <img src="./Images/logo1.png" alt="" />
                <h1 className="h1">Sign Up</h1>   
                <form action="" method="post" className="form">
                    <input className="inputFeild" type="text" name="" id="" placeholder="userName"/>
                    <input type="email" name="email" id="email" placeholder="E-mail" className="inputFeild"/>
                    <input className="inputFeild" type="password" name="" id="" placeholder="password"/>
                    <input type="password" name="passwordRe" id="passwordRe" placeholder="confirm password" className="inputFeild"/>
                    <input className="loginBtn" type="submit" value="Sign Up" />
                    <Link to="/login" className="link">Already Have an Account?</Link>
                </form>
            </div>
        </>
    )
}