import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import { Container} from './styled';
import Header from '../../components/Header';
export default () => {
    const history = useHistory();
    const [search,setSearch] = useState('');


    return (
        <Container>
            <Header search={search} onSearch={setSearch}/>
           
        </Container>
    );
}