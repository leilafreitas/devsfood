import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import {CartArea,CartBody,CartHeader,CartIcon,CartText} from './CartStyled';

function Cart(){
    
    const products = useSelector(state=>state.cart.products);

    const [opened,setOpened] =  useState(false);

    const handleCartClick = () =>{
        setOpened(!opened);
    }

    return(
        <CartArea>
            <CartHeader onClick={handleCartClick}>
                <CartIcon src={'/assets/cart.png'}/>
                <CartText>Meu Carrinho ({products.length})</CartText>
                {opened &&
                    <CartIcon src={'./assets/down.png'}/>
                }
                
            </CartHeader>
            <CartBody active={opened}>
                ...
            </CartBody>
        </CartArea>
    );
}
export default Cart;