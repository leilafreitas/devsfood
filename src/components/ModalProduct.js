import React from 'react';
import {Container,
     ProductInfoArea,
     ProductPhoto,
     ProductDetails,
     ProductQuantityArea,
     ProductButtons,
     ProductArea
     } from './ModalProductStyled';

function Modal({data}){
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        {data.name}
                    </ProductDetails>
                    <ProductQuantityArea>
                    </ProductQuantityArea>

                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>

            </ProductButtons>
        </Container>
    );

}
export default Modal;