import "../style/Card.scss";

export default function Card ({object}) {
    console.log(object)
    return (
            <div className="card">
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