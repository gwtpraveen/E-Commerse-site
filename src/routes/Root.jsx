import "../style/Card.scss";
import data from "../data.json";
import Card from "../components/Card";
import Header from "../components/Header";

export default function Root() {
    console.log("root",data[0])
    return (
        <>
            <Header/>
            <main>
                <div>
                    <Card object={data[0]}/>
                    {/* <img src="/Images/banner 1.jpg" alt="" /> */}
                </div>
            </main>
        </>
    );
};
