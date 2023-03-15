import { useOutletContext } from "react-router-dom"
import Card from "./Card"

export default function Home() {
    const [data] = useOutletContext();
    return (
        <>
            <Card object={data[0]}/>
        </>
    )
}