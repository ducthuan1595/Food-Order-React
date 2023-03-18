//////////////////////////////////////////
import ReactDOM from 'react-dom'
import styled from './Modal.module.css'

const Backdrop = (props) => {
  return <div className={styled.backdrop} onClick={props.onClick} ></div>
}

const ModalOverlay = (props) => {
  return (
    <div className={styled.modal}>
      <div className={styled.content}>{props.children}</div>
    </div>
  )
}

const Modal = (props) => {

  const portalOverlay = document.getElementById('overlay');

  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClick={props.onClick} />, portalOverlay)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalOverlay)}
    </>
  )
}

export default Modal;