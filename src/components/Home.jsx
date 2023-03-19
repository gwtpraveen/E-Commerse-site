import { useOutletContext } from "react-router-dom"
import Card from "./Card";
import categories from "../database/categories.json";
import "../style/Home.scss";

export default function Home() {
    const [data] = useOutletContext();
    return (
        <>
            <div className="hero">
                <img src={"/Images/hero 1.jpg"} alt="" />
            </div>
            <section className="categoriesSection">
                <h2 className="h2">Categories</h2>
                <div className="categoriesDiv">
                    { categories.slice(0, 8).map(item => <div key={item._id} className="categorieCard">
                        <p>{item.categorie}</p>
                    </div>)}
                </div>
            </section>
            <section className="productsSection">
                <h2 className="h2">Just For You</h2>
                <div className="cardDiv">
                    {data.map(item => <Card key={item._id} object={item}/>)}
                </div>
            </section>
            <section className="homeFooter">
                <div className="highlightsDiv">
                    <div>
                        <i className="fa-solid fa-sack-dollar"></i>
                        <p>Great Value</p>
                        <p>We offer competitive prices on electornics</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-truck"></i>
                        <p>Worldwide shopping</p>
                        <p>We ship to over 200 contries and regions</p>
                    </div>
                    <div>
                        <i className="fa-regular fa-credit-card"></i>
                        <p>Safe payment</p>
                        <p>Pay with the world's most popular and secure payment methods</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-shield"></i>
                        <p>Shop with confidence</p>
                        <p>Our buyer protection policy covers your entire purchase journey</p>
                    </div>
                    <div>
                        <i className="fa-solid fa-users"></i>
                        <p>Help center</p>
                        <p>Rount-the-clock assistance for a smooth shopping experience</p>
                    </div>
                </div>
                <div className="footerLinks">
                    <div className="socialLinksDiv">
                        <p>Stay Connected</p>
                        <div>
                            <i className="fa-brands fa-twitter"></i>
                            <i className="fa-brands fa-facebook"></i>
                            <i className="fa-brands fa-instagram"></i>
                            <i className="fa-brands fa-facebook-messenger"></i>
                            <i className="fa-brands fa-whatsapp"></i>
                        </div>
                    </div>
                    <div className="linksDiv">
                        <div>
                            <p>Shopping with us</p>
                            <ul>
                                <li>Making Payments</li>
                                <li>Delivery Options</li>
                                <li>Buyer Protection</li>
                            </ul>
                        </div>
                        <div>
                            <p>Customer service</p>
                            <ul>
                                <li>Help Center</li>
                                <li>Tearms and Conditions</li>
                                <li>Take our feedback sruvey</li>
                            </ul>
                        </div>
                        <div>
                            <p>Collaborate with us</p>
                            <ul>
                                <li>Partnerships</li>
                                <li>affiliage program</li>
                                <li>Ds Center</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}