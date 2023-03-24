export default function ShopSignup() {
    return (
    <>
        <div>
            <img src="./Images/logo1.png" alt="" />
            <h1>Shop Register</h1>
            <p>thankyou for doing business with us</p>
            <form action="" method="post">
                <input type="text" name="firstName" id="firstName" placeholder="Owner's First Name"/>
                <input type="text" name="lastName" id="lastName" placeholder="Owner's Last Name"/>
                <input type="email" name="email" id="email" placeholder="Owner's Email Address"/>
                <input type="text" name="storeName" id="storeName" placeholder="Store Name"/>
                <input type="email" name="businessEmail" id="businessEmail" placeholder="Business Email"/>
                <input type="tel" name="tel" id="tel" placeholder="phone Number"/>
                <input type="submit" value="Sign Up" />
            </form>
        </div>
    </>
    )
}
