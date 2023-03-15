import "../style/Card.scss";
import { useNavigate } from "react-router-dom";

export default function Card ({object}) {
    const navigate = useNavigate();
    return (
            <div className="card" onClick={() => navigate(`/product/${object._id}`)}>
                <img src={object.image} alt="" className="productImage"/>
                <div className="detailsDiv">
                    <p className="price">${object.price.toFixed(2)}</p>
                    <p className="rating"><i className="fa-sharp fa-solid fa-star" style={{color : "#e1b01b"}}></i> {object.rating}</p>
                    <p className="sold">{object.totalSold.toLocaleString()}+sold</p>
                    <p className="productName">{object.name}</p>
                </div>
            </div>
    )
}