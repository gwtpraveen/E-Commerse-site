import data from "../data.json";

export function getSearchResult(searchParams) {
    return data.filter(item => item.keywords.includes(searchParams))
};
