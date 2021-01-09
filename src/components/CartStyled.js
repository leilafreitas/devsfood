import styled from 'styled-components';

export const CartArea = styled.div`
    background-color:#136713;
    border-top-left-radius:10px;
    border-top-right-radius:10px;
    position: fixed;
    bottom: 0;
    right:30px;
`;

export const CartBody = styled.div`
    display:${props=>props.active ? 'block':'none'};
    color:#fff;
`;

export const CartHeader = styled.div`
    height:50px;
    display:flex;
    width:290px;
    align-items:center;
    cursor: pointer;
`;

export const CartIcon = styled.img`
    width:23px;
    height:auto;
    margin-left:10px;
    margin-right:10px;
`;

export const CartText = styled.div`
    color:#fff;
    font-size:17px;
    flex:1;
`;

export const ProductsArea = styled.div`
`;

export const ProductQuantityArea = styled.div`
    display:flex;
    align-items:center;
    img{
        width:13px;
        height:auto;
        cursor: pointer;
    }
    p{
        font-size:13;
        font-weight:bold;
        margin:0px 5px;
    }
`;

export const ProductPrice = styled.div`
    font-size:13px;
`;

export const ProductItem = styled.div`
    display:flex;
    margin:10px;
`;

export const ProductName = styled.div`
    font-weight:bold;
    font-size:15px;
`;

export const ProductInfoArea = styled.div`
    flex:1;
    margin-left:10px;
`;

export const ProductPhoto = styled.img`
    width:64px;
    height:auto;
    border-radius:10px;

`;

export const AddressArea = styled.div`
    margin:10px;
`;

export const AdressTitle = styled.div`
    font-size:15px;
    font-weight:bold;
    margin:15px 0px;
`;

export const AddressData = styled.div`
    display:flex;
    align-items:center;
`;

export const AddressInfo = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    font-size:13px;
    p{
        margin:0;
        font-style:italic;
    }
`;

export const AddressPhoto = styled.img`
    width:15px;
    height:auto;
`;

export const DiscauntArea = styled.div`
    display:flex;
    flex-direction:column;
    margin:10px;
    p{
        font-size:15px;
        font-weight:bold;
    }
`;

export const DiscauntInput = styled.input`
    border-radius:10px;
    height:22px;
    width:260px;
    margin-bottom:10px;
`;

export const PaymentData = styled.div`
    margin:0px 10px 10px 10px;
    display:flex;
    font-weight:bold;
    
`;

export const PaymentTitle = styled.div`
    font-size:14px;
    flex:1;
`;

export const PaymentValue = styled.div`
    font-size:15px;
    
`;

export const BuyButtom = styled.button`
    color:#fff;
    background-color:#073C07;
    margin:10px 10px;
    border-radius:50px;
    font-size:18px;
    font-weight:bold;
    width:90%;
    height:45px;
    border:0;
    cursor:pointer;
`;
