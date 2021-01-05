import styled from 'styled-components';

export const Container = styled.div`
    width:80px;
    height:80px;
    background-color:${props=>props.active === props.id ? '#FFF': '#aae094'};
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:20px;
    margin-right:10px;
    cursor: pointer;
    
`;

export const CategoryImg = styled.img`
    width:55px;
    height:auto;

`;