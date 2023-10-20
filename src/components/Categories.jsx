import React from "react";


export default function Categories(props){

    const categories=[
        {
            key:"all",
            name:"Все"
        },
        {
            key:"Apple",
            name:"Apple"
        },
        {
            key:"Samsung",
            name:"Samsung"
        },
        {
            key:"Nothing",
            name:"Nothing"
        },
        {
            key:"Huawei",
            name:"Huawei"
        }

    ];

    return(
        <div className="categories">
            {categories.map(el=>(
                <div key={el.key} onClick={()=>props.chooseCategory(el.key)}>{el.name}</div>
            ))}
        </div>
    );
}