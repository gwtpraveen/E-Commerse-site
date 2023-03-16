import { useParams, useOutletContext } from "react-router-dom";
import { useState, useRef } from "react";

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
            <div>
                <div>
                    <img src={product.image} alt="" />
                </div>
                <div>
                    <p>{product.discriptionShort}</p>
                    <div>
                        <p>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                            <i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i>
                        </p>
                        <p>55 reviews</p>
                        <p>{product.totalSold}+ orders</p>
                    </div>
                    <p>${product.price.toFixed(2)}</p>
                    <div>
                        <p>opctions</p>
                    </div>
                    <p>Quantity</p>
                    <div>
                        <div>
                            <button onClick={() => handleQuantityChange("-")}>-</button>
                            <input type="number" name="" id="" min={0} value={quantity} onChange={() => handleQuantityChange("value")} ref={quantityValue} onBlur={handleBlur}/>
                            <button onClick={() => handleQuantityChange("+")}>+</button>
                        </div>
                        <p>27 pieces Available</p>
                    </div>
                    <div>
                        <button>Buy Now</button>
                        <button onClick={() => addToCart({
                            id: product._id,
                            price: product.price,
                            name: product.name,
                            quantity: quantity
                        })}>Add to Cart</button>
                    </div>
                    <p>{product.discriptionLong}</p>
                </div>
            </div>
        </>
    )
}