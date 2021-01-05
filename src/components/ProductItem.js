import React from 'react';
import {
    Container,
    ProductButton,
    ProductButtonArea,
    ProductInfoArea,
    ProductIngredients,
    ProductName,
    ProductPhoto,
    ProductPhotoArea,
    ProductPrice
} from './ProductItemStyled';

export default (props) => {
    return(
        <Container>
            <ProductPhotoArea>
                <ProductPhoto src={props.data.image}/>
            </ProductPhotoArea>
            <ProductInfoArea>
                <ProductName>{props.data.name}</ProductName>
                <ProductPrice>R$ {props.data.price}</ProductPrice>
                <ProductIngredients>{props.data.ingredients}</ProductIngredients>
            </ProductInfoArea>
            <ProductButtonArea>
                <ProductButton src="/assets/next.png"/>
            </ProductButtonArea>
        </Container>
    );
}
