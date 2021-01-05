import React from 'react';
import {CartArea,CartBody,CartHeader,CartIcon,CartText} from './CartStyled';

function Cart(){
    
    return(
        <CartArea>
            <CartHeader>
                <CartIcon src={'/assets/cart.png'}/>
                <CartText>Meu Carrinho (x)</CartText>
            </CartHeader>
            <CartBody>

            </CartBody>
        </CartArea>
    );
}
export default Cart;