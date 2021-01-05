import React from 'react';
import {useHistory,useLocation} from 'react-router-dom';
import {LinkArea,LinkIcon} from './MenuItemStyled';

function MenuItem(props){
    const history=useHistory();
    const location = useLocation();
    let isActive = location.pathname == props.link;
    
    const handleLinkClick=(e)=>{
        e.preventDefault();
        history.push(props.link)
    }
    
    return(
        <LinkArea data-tip={props.title} data-for="tip-right" active={isActive} href={props.link} onClick={handleLinkClick}>
            <LinkIcon src={props.icon}/>
        </LinkArea>
    );
}
export default MenuItem;