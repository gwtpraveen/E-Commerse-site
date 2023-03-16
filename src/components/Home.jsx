import { useOutletContext } from "react-router-dom"
import Card from "./Card"

export default function Home() {
    const [data] = useOutletContext();
    return (
        <>
        {
            data.map(item => <Card key={item._id} object={item}/>)
        }
            
        </>
    )
}