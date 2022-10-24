import {Plus,Minus} from "phosphor-react";
import {useState } from 'react';
import { AddCartButtonContainer, MinusPlusButtonContainer } from "./styles";
import { IconButton } from "../IconButton";
import { Product } from "../../models/Product";
import React from "react";

export function AddCartButton (product: Product, AddToCart : (productId: number, addedQuantity: number)=>void) {
    const [count, setCount] = useState(1);
    function handleAdd () {
        return setCount( count + 1 );
    }

    function handleSub () {
        return setCount((count>2)?(count - 1):1);
    }
    

    return (
        <AddCartButtonContainer>
            <MinusPlusButtonContainer>
                <Minus size={11} weight="fill" onClick={ handleSub } />
                <input className='quantity' type="number" value={ count } onChange={(e)=>{setCount(Number(e.target.value));}} />
                <Plus size={11} weight="fill" onClick={ handleAdd } />
            </MinusPlusButtonContainer>

            <IconButton 
                color='white' 
                background='purple' 
                backgroundHover='purpleDark' 
                icon="ShoppingCart" 
                size={ 20 } 
                clickFunction={
                    ()=> {
                        AddToCart(product.id,count); 
                        setCount(1);
                    }
                } 
            />
            
        </AddCartButtonContainer>
    );
}
