import React from "react";
import CardCategories from "./CardCategories";

const dataCategories = [
    {
        tittle: "Parenting",
        img: "EX1"
    },
    {
        tittle: "Parenting2",
        img: "EX2"
    },
    {
        tittle: "Parenting3",
        img: "EX3"
    },
]

const CategoriesElement = () => {
    return (
    <>
        <h1>Categories</h1>
        <CardCategories data={dataCategories}/>
    </>)
}

export default CategoriesElement;