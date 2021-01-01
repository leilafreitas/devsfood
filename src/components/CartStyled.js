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
`;