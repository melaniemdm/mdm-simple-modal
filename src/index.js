import React from 'react'

export function openModal(){
const id= document.querySelector(".modalContainer")
id.style.display="flex"
}
function closeModal(){
    const id= document.querySelector(".modalContainer")
id.style.display="none"
}



export function ModalEmployeeCreated(props){
   
    return <div  className="modalContainer">
        <div  className="modal">{props.text}</div>
        <div className="container-close">
<div className='close' > 
     x
      
</div></div>
              
    </div>
}