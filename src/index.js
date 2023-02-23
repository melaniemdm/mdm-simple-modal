import './style.css';
const close = new URL("../assets/close.png", import.meta.url)
import React from 'react';

export function openModal(){
const id= document.querySelector(".backgroundModal")
id.style.display="flex"
}
function closeModal(){
    const id= document.querySelector(".backgroundModal")
id.style.display="none"
}



export function ModalEmployeeCreated(props){
    const width = props.width? props.width:'500px';
    return <div className='backgroundModal'> <div  className="modalContainer" style={{width: width, backgroundColor: 'white', height: '50px'}}> 
        <div  className="modal">{props.text}</div>
        <div className="container-close">
<div className='close' onClick={closeModal}> 
    <img src={close} alt='close'></img>      
</div></div>
              
    </div></div>
}