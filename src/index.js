import './style.css'
import React from 'react'
const close = new URL('../assets/close.png', import.meta.url)

export function openModal() {
  const id = document.querySelector('.backgroundModal')
  id.style.display = 'flex'
}
function closeModal() {
  const id = document.querySelector('.backgroundModal')
  id.style.display = 'none'
  console.log('close modal')
  console.log(id)
}

export function SimpleModal(props) {
  const width = props.options.width ? props.options.width : '500px'
  const bgColor = props.options.bgColor ? props.options.bgColor : 'white'
  const height = props.options.height ? props.options.height : '50px'
  const maskBgColor = props.options.maskBgColor
    ? props.options.maskBgColor
    : 'gray'
  const maskBgOpacity = props.options.maskBgOpacity
    ? props.options.maskBgOpacity
    : '1'

  const imgUrl = props.options.imgUrl ? props.options.imgUrl : ''
  const zIndex = props.options.zIndex ? props.options.zIndex : '100'
  if (props.options.imgUrl) {
    return (
      <div
        className='backgroundModal'
        style={{
          backgroundColor: maskBgColor,
          opacity: maskBgOpacity,
          zIndex: zIndex
        }}
      >
        {' '}
        <div className='containerC-close' style={{ width: width }}>
          <div className='close' onClick={closeModal}>
            <img src={close} alt='close' />
          </div>
        </div>
        <div
          className='modalContainer'
          style={{ width: width, backgroundColor: bgColor, height: height }}
        >
          {/* texte modal */}
          <div className='modal'>{props.text}</div>
          {/* image modal  */}
          <img src={imgUrl} alt='image' />
        </div>
      </div>
    )
  } else {
    return (
      <div
        className='backgroundModal'
        style={{
          backgroundColor: maskBgColor,
          opacity: maskBgOpacity,
          zIndex: zIndex
        }}
      >
        {' '}
        <div className='containerC-close' style={{ width: width }}>
          <div className='close' onClick={closeModal}>
            <img src={close} alt='close' />
          </div>
        </div>
        <div
          className='modalContainer'
          style={{ width: width, backgroundColor: bgColor, height: height }}
        >
          {/* texte modal */}
          <div className='modal'>{props.text}</div>
        </div>
      </div>
    )
  }
}
