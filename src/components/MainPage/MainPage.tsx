import * as React from 'react';
import { Banner } from "../Banner";
import { MOCK_ALLPRODUCTS } from "../Header/Mock";
import { Product } from "../Product";
import { MainPageContainer } from "./styles";


interface MainPageProps {
    AddToCart : (productId: number, addedQuantity: number, newQuantity?:number)=>void;
}

export function MainPage ({AddToCart}: MainPageProps) {
    return (
        <MainPageContainer>        
            <Banner />
            <h2 className="ProductGroupTitle">Os donuts entre donuts:</h2>
            <div className="ProductGroup">
                {MOCK_ALLPRODUCTS.map((product) => (
                    <Product 
                        key = { product.id }  
                        product = { product } 
                        version = 'big' 
                        AddToCart = { AddToCart }
                    />
                ))}
            </div>
        </MainPageContainer>
    )
} 