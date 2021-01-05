import React from 'react';
import {Container,ModalBody} from './ModalStyled';

function Modal({status,setStatus,children}){

    const handleModalClick = (e) => {
        if(e.target.classList.contains('ContainerModal')){
            setStatus(false);
        }
    }

    return (
        <Container className='ContainerModal' status={status} onClick={handleModalClick}>
            <ModalBody>
                {children}
            </ModalBody>
        </Container>
    );

}
export default Modal;