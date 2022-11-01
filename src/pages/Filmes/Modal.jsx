import React from 'react';
import interistelar from './interistelar.png';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={interistelar} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p>Ace Ventura: Pet Detective <br/>Ano: 1994  <br/>Diretor: Tom Shadyac<br/></p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold'>FAVORITAR</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;