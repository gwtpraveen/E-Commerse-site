import { useParams, useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";
import "../style/ProductPage.scss";

export default function ProductPage() {
    const parms = useParams();
    const [data, addToCart] = useOutletContext();
    const [quantity, setQuantity] = useState(1);
    const product = data.filter(item => item._id == parms.id)[0];
    const quantityValue = useRef();

    const handleBlur = () => {
        if (quantityValue.current.value > 0) {
            setQuantity(quantityValue.current.value);
        } else {
            setQuantity(1)
        }
    }

    const handleQuantityChange = (operate) => {
        setQuantity(prevQuantity => {
            let quantity = prevQuantity;
            if (operate === "-") {
                if (quantity >= 2) {
                    quantity--;
                }
            } else if (operate === "+") {
                quantity++;
            } else {
                let newQuentity = quantityValue.current.value;
                quantity = newQuentity;                
            }
            return quantity;
        })



    };

    return (
        <>
            <h1>{product.name}</h1>
            <div className="row">
                <div className="imageDiv">
                    <img src={product.image} alt="" className="mainImage"/>
                    <div className="smallPhotoRow">
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                        <img src={product.image} alt="" />
                    </div>
                </div>
                <div>
                    <p className="productSmall">{product.discriptionShort}</p>
                    <div className="reviewsDiv">
                        <p>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                        </p>
                        <p className="reviewNumber">55 reviews</p>
                    </div>
                    <p className="orders">{product.totalSold}+ orders</p>
                    <p className="price">${product.price.toFixed(2)}</p>
                    <div className="optionsDiv">
                        <p>options</p>
                        <div className="optionsRow">
                            <button>opction1</button>
                            <button>opciton2</button>
                            <button>opction3</button>
                        </div>
                    </div>
                    <p className="quantity">Quantity</p>
                    <div>
                        <div className="quantityDiv">
                            <button onClick={() => handleQuantityChange("-")}>-</button>
                            <input type="number" name="" id="" min={0} value={quantity} onChange={() => handleQuantityChange("value")} ref={quantityValue} onBlur={handleBlur}/>
                            <button onClick={() => handleQuantityChange("+")}>+</button>
                        </div>
                        <p className="stockNumber">27 pieces Available</p>
                    </div>
                    <div className="buttonDiv">
                        <button>Buy Now</button>
                        <button onClick={() => addToCart({
                            id: product._id,
                            price: product.price,
                            name: product.name,
                            quantity: quantity
                        })}>Add to Cart</button>
                    </div>
                </div>
            </div>
            <p>{product.discriptionLong}</p>
        </>
    )
}