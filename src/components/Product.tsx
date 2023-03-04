import React, { useState } from 'react';
import { IProduct } from './../models';

interface ProductProps {
    product: IProduct
}

export function Product({product}: ProductProps){
    const [details, setDetails] = useState(false)

    const btnClassName = details ? "bg-gray-300" : "bg-gray-500"
    const commonStyleClassName = ["py-5 px-5 pb-2 border"]
    const commonStyleClassNameWithoutBorders = ["py-2 px-2 pt-3 pb-3"]
    const btnClasses = [commonStyleClassName, btnClassName]

    return (
        <div className={"rounded flex flex-col items-center mb-2" + commonStyleClassName.join(" ")}>
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <span className="font-bold">{product.price}</span>
            <button 
                style={{ borderRadius: '0.35rem' }}
                className={"borderRadius: 0.25rem" + btnClasses.join(" ")}
                onClick={() => setDetails(!details)}>
                    {details ? "Hide details" : "Show details"}
            </button>
            
            {details && <div>
                <p className={"font-light" + commonStyleClassNameWithoutBorders.join(" ")}>{product.description}</p>
            </div>}
        </div>
    )
}