import "../style/Footer.scss";

export default function Footer() {
    return(
        <footer className="footer">
            <div className="div1">
                <p>Help</p>
                <div className="links">
                    <a href=" ">Help Center</a>,  
                    <a href="">Disputes & Reports</a>, 
                    <a href="">Buyer Protection</a>, 
                    <a href="">Report IPR infringement</a>, 
                    <a href="">Regulated information</a>
                </div>
            </div>
            <div className="div2">
                <p>Browser by Category</p>
                <div className="links">
                    <a href="">All Popular</a>,
                    <a href="">Product</a>,
                    <a href="">Promotion</a>,
                    <a href="">Low Price</a>,
                    <a href="">Great Value</a>,
                    <a href="">Reviews</a>,
                    <a href="">Blog</a>,
                    <a href="">Seller Portal</a>,
                    <a href="">Black FRIDAY</a>
                </div>
            </div>
            <div className="allRightDiv">
                <p>
                    2023-present E-commerce. All right reserved.
                </p>
            </div>
        </footer>
    );
}