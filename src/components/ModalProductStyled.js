import styled from 'styled-components';

export const Container = styled.div`
    width:650px;
    padding: 20px;
`;

export const ProductArea = styled.div`
    height:200px;
    display:flex;
`;

export const ProductInfoArea = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    padding-left:10px;

`;

export const ProductButtons = styled.div`
    height:50px;
    padding-top:10px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
`;

export const ProductDetails = styled.div`
    height:50px;
`;

export const ProductQuantityArea = styled.div`
    height:50px;
    display:flex;
    justify-content:space-between;
`;

export const ProductPhoto = styled.img`
    width:310px;
    border-radius:10px;

`;

export const ProductName =  styled.div`
    font-size:30px;
    font-weight:bold;
`;

export const ProductIngredients =  styled.div`
    font-size:14px;
`;

export const ProductButtom = styled.button`
    border: 0;
    background-color: #073c07;
    box-shadow: 4px 5px 0px #999;
    color: #fff;
    font-size:${props=>props.small?13:22}px;
    padding:${props=>props.small?'5px 10px':'10px 20px'};
    margin-left:10px;
    border-radius: 5px;
    cursor: pointer;
`;

export const ProductQuantity =  styled.div`
    display:flex;
    align-items:center;
    background-color:#073c07;
    border-radius:5px;
    img{
        width: 24px;
        height: 24px;
        margin:0 10px;
        cursor: pointer;
    }
    p{
        font-size:25px;
        font-weight:bold;
        color:#fff;
        margin:0 10px;

    }
`;

export const ProductPrice =  styled.div`
    font-size:30px;
    font-weight:bold;
`;