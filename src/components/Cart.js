import React, { useState,useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {CartArea,
    CartBody,
    CartHeader,
    CartIcon,
    CartText,
    ProductsArea,
    ProductQuantityArea,
    ProductPrice,
    ProductPhoto,
    ProductName,
    ProductItem,
    ProductInfoArea,
    AddressArea,
    AddressData,
    AddressInfo,
    AdressTitle,
    AddressPhoto,
    DiscauntArea,
    DiscauntInput,
    PaymentData,
    PaymentTitle,
    PaymentValue,
    BuyButtom
} from './CartStyled';

function Cart(){
    const dispatch = useDispatch();
    const products = useSelector(state=>state.cart.products);

    const [opened,setOpened] =  useState(true);
    const [cupom,setCupom] = useState('');
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        let value = 0;
        products.forEach(element => {
            value += element.price * element.quantity;
        })
        setTotal(value.toFixed(2));
    },[products])

    const handleCartClick = () =>{
        setOpened(!opened);
    }

    const handleProductChange = (index,operation) =>{
        dispatch({
            type:'CHANGE_PRODUCT',
            payload:{
                index,operation
            }
        })
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
                <ProductsArea>
                    {
                        products.map((item,key)=>{
                            return(
                                <ProductItem key={key}>
                                    <ProductPhoto src={item.image} />
                                    <ProductInfoArea>
                                        <ProductName>{item.name}</ProductName>
                                        <ProductPrice>R$ {item.price.toFixed(2)}</ProductPrice>
                                    </ProductInfoArea>
                                    <ProductQuantityArea>
                                        <img onClick={()=>handleProductChange(key,'-')} src="/assets/minus.png"/>
                                        <p>{item.quantity}</p>
                                        <img onClick={()=>handleProductChange(key,'+')} src="/assets/plus.png"/>
                                    </ProductQuantityArea>
                                </ProductItem>
                            );
                        })
                    }
                </ProductsArea>
                <AddressArea>
                    <AdressTitle>Entrega</AdressTitle>
                    <AddressData>
                        <AddressInfo>
                            <p>Minha casa</p>
                            <span>Rua José Alves da Silva</span>
                            <span>São Migue, RN</span>
                        </AddressInfo>
                        <AddressPhoto src="./assets/edit.png"/>
                    </AddressData>
                </AddressArea>
                <DiscauntArea>
                    <p>Cupom de Desconto</p>
                    <DiscauntInput onChange={(e)=>setCupom(e.target.value)}/>
                </DiscauntArea>
                <PaymentData>
                    <PaymentTitle>Desconto</PaymentTitle>
                    <PaymentValue>R$ 0.00</PaymentValue>
                </PaymentData>
                <PaymentData>
                    <PaymentTitle>Taxa de Entrega</PaymentTitle>
                    <PaymentValue>R$ 0.00</PaymentValue>
                </PaymentData>
                <PaymentData>
                    <PaymentTitle>Total</PaymentTitle>
                    <PaymentValue>R$ {total}</PaymentValue>
                </PaymentData>
                <BuyButtom>Finalizar Compra</BuyButtom>
            </CartBody>
        </CartArea>
    );
}
export default Cart;