import axios from "axios";
import React, { useState } from "react"
import { IProduct } from './../models';
import { Error } from './Error';

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 10,
        count: 1
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void
}

export function CreateProduct({onCreate}: CreateProductProps){
    const [value, setValue] = useState("")
    const [error, setError] = useState("")
    
    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError("")
        
        if(value.trim().length === 0){
            setError('fill value !!!')
            return
        }

        productData.title = value
        const response = await axios.post<IProduct>("https://fakestoreapi.com/products", productData)
        onCreate(response.data)
    }
    
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }
    
    return (
        <form onSubmit={submitHandler}>
            <input
                type="text"
                className="border py-2 px-4 mb-2 w-full outline-0"
                placeholder="Enter product name"
                value={value}
                onChange={changeHandler}
            />
            {error && <Error error={error}/>}
            <button className="py-2 px-4 border bg-yellow-400 hover:bg-yellow-300" type="submit">Create</button>
        </form>
    )
}