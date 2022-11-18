import React from 'react';

const Modal = ({ open, onClose, filme }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className='overlay'>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className='modalContainer'
      >
        <img src={filme?.imagem} alt='/' />
        <div className='modalRight'>
          <p className='closeBtn' onClick={onClose}>
            X
          </p>
          <div className='content'>
            <p> {filme?.nome} <br/> {filme?.data} <br/>Diretor: {filme?.diretor}<br/></p>
          </div>
          <div className='btnContainer'>
            <button className='btnPrimary'>
              <span className='bold' onClick = {() => alert('O filme foi favoritado com sucesso!')}> FAVORITAR </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;