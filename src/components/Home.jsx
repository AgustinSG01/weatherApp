import React from "react";
import Cards from "./Cards";
import Nav from "./Nav";

export default function Home ({onSearch, onClose, cities}) {
    return (
        <>
        <Nav onSearch={onSearch}/>
        <Cards cities={cities} onClose={onClose}/>
        </>
    )
}