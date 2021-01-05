import React,{useState} from 'react';
import {Container,Logo,SearchInput} from './HeaderStyled';

function Header({search,onSearch}){
    const [inputActive,setInputActive] = useState(search === ''? false : true);
    
    const handleInputFocus=()=>{
        setInputActive(true);
    }
    
    const handleInputBlur=()=>{
        if(search === ''){
            setInputActive(false);
        }     
    }

    const handleChange= (e) =>{
        onSearch(e.target.value)
    }
    
    return(
        <Container>
            <Logo src={'/assets/logo.png'}/>
            <SearchInput 
            type="text" 
            value={search}
            onChange={handleChange}
            placeholder="Digite um produto"
            active={inputActive}
            onBlur={handleInputBlur}
            onFocus={handleInputFocus}/>
        </Container>
    );
}
export default Header;