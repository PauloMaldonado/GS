import React from 'react';
import './Modal.css';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <button className="modal-fechamento-janela" onClick={onClose}>
         x
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
