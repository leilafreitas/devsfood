import React,{useState,useEffect} from 'react';
import {Container,
     ProductInfoArea,
     ProductPhoto,
     ProductDetails,
     ProductQuantityArea,
     ProductButtons,
     ProductArea,
     ProductName,
     ProductIngredients,
     ProductButtom,
     ProductQuantity,
     ProductPrice
     } from './ModalProductStyled';

function Modal({data,setStatus}){

    const [quantity,setQuantity] = useState(1);

    useEffect(()=>{
        setQuantity(1);
    },[data])

    const handleCancel = () =>{
        setStatus(false);
    }

    const handleMinus = () =>{
        if(quantity>0){
            setQuantity(quantity-1);
        }
    }

    const handlePlus = () =>{
        setQuantity(quantity+1);
    }
    
    return (
        <Container>
            <ProductArea>
                <ProductPhoto src={data.image}/>
                <ProductInfoArea>
                    <ProductDetails>
                        <ProductName>{data.name}</ProductName>
                        <ProductIngredients>{data.ingredients}</ProductIngredients>
                    </ProductDetails>
                    <ProductQuantityArea>
                        <ProductQuantity>
                            <img onClick={handleMinus} src="/assets/minus.png"/>
                            <p>{quantity}</p>
                            <img onClick={handlePlus} src="/assets/plus.png"/>
                        </ProductQuantity>
                        <ProductPrice>
                            R$ {(data.price * quantity).toFixed(2)}
                        </ProductPrice>
                    </ProductQuantityArea>
                </ProductInfoArea>
            </ProductArea>
            <ProductButtons>
                <ProductButtom small={true} onClick={handleCancel}>Cancelar</ProductButtom>
                <ProductButtom>Adicionar ao carrinho</ProductButtom>
            </ProductButtons>
        </Container>
    );

}
export default Modal;