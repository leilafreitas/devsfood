import React from 'react';
import { CategoryList } from '../pages/HomeScreen/styled';
import {} from './CategoryItemStyled';
import { Container, CategoryImg } from './CategoryItemStyled';

export default (props) => {

    const handleActiveCategory= () =>{
        props.setActiveCategory(props.data.id);
    }

    return(
        <Container active={props.activeCategory} id={props.data.id} onClick={handleActiveCategory} data-tip={props.data.name} data-for="tip-top">
            <CategoryImg src={props.data.image}/>
        </Container>
    );
}