import './style.css'
const close = new URL('../assets/close.png', import.meta.url)
import React from 'react'

export function openModal() {
  const id = document.querySelector('.backgroundModal')
  id.style.display = 'flex'
}
function closeModal() {
  const id = document.querySelector('.backgroundModal')
  id.style.display = 'none'
}

export function SimpleModal(props) {
  const width = props.options.width ? props.options.width : '500px';
  const bgColor = props.options.bgColor ? props.options.bgColor : 'white';
  const height = props.options.height ? props.options.height : '50px';
  const maskBgColor = props.options.maskBgColor? props.options.maskBgColor : 'gray';
  const maskBgOpacity = props.options.maskBgOpacity? props.options.maskBgOpacity : '0.5';
  return (
    <div className='backgroundModal' style={{backgroundColor:maskBgColor, opacity: maskBgOpacity}}>
      {' '}
      <div
        className='modalContainer'
        style={{ width: width, backgroundColor: bgColor, height: height }}
      >
        <div className='modal'>{props.text}</div>
        <div className='container-close'>
          <div className='close' onClick={closeModal}>
            <img src={close} alt='close'></img>
          </div>
        </div>
      </div>
    </div>
  )
}
