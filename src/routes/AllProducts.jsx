import "../style/AllProducts.scss";
import { Link } from "react-router-dom";

export default function AllProducts() {
    return (
        <>
            <h1>All Your Products</h1>
            <div className="products">
                <div className="productCard">
                    <img src="" alt="" className="productImage"/>
                    <div className="productDetailsDiv">
                        <p>productName</p>
                        <p>price</p>
                        <p>rating</p>
                        <div>
                            <label htmlFor="outofStock">out of stock </label>
                            <input type="checkbox" name="outofStock" id="outofStock" />
                        </div>
                    </div>
                    <div className="productsButtons">
                        <Link to="/">Edit</Link>
                        <Link to="/">Delete</Link>
                    </div>
                </div>
            </div>
        </>
    ) 
}