import { useOutletContext } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Card from "./Card";

export default function SearchResult() {
    const [data] = useOutletContext();
    const [queryParameters] = useSearchParams();
    return(
        <>
            { data
                .filter(item => item.keywords.includes(queryParameters.get("search").toLowerCase()))
                .map(item => <Card key={item._id} object={item}/>)
            }
        </>
    );
}