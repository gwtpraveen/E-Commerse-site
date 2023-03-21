import "../style/AdminLog.scss";

export default function Login() {
    return (
        <div className="adminLog">
            <h1 className="h1">Admin log</h1>   
            <form action="" method="post" className="form">
                <input type="text" name="" id="" placeholder="userName"/>
                <input type="email" name="" id="" placeholder="email"/>
                <input type="password" name="" id="" placeholder="password"/>
                <input type="submit" value="Admin Log" />
            </form>
        </div>
    )
}