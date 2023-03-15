import { useParams } from "react-router-dom";
import { useOutletContext } from "react-router-dom";

export default function ProductPage() {
    const parms = useParams();
    const [data, addToCart] = useOutletContext();
    const product = data.filter(item => item._id == parms.id)[0]
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
                    <p>${product.price}</p>
                    <div>
                        <p>opctions</p>
                    </div>
                    <p>Quantity</p>
                    <div>
                        <div>
                            <button>-</button>
                            <input type="number" name="" id="" min={0} />
                            <button>+</button>
                        </div>
                        <p>27 pieces Available</p>
                    </div>
                    <div>
                        <button>Buy Now</button>
                        <button onClick={() => addToCart({
                            id: product._id,
                            price: product.price,
                            name: product.name,
                            quantity: 1
                        })}>Add to Cart</button>
                    </div>
                    <p>{product.discriptionLong}</p>
                </div>
            </div>
        </>
    )
}