import React from 'react';
import '../assets/css/modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

function Input({ type, placeholder }) {
  return <input type={type} placeholder={placeholder} />;
}

function ModalEdit({ showModal, closeModal, handleConfirm }) {
  return (
    showModal && (
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <Input type="text" placeholder="Nouveau nom" />
          <div className="button_container">
            <button onClick={handleConfirm}>
              Valider <FontAwesomeIcon icon={faCheck} /> 
            </button>
            <button onClick={closeModal}>
              Fermer  <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
        </div>
      </div>
    )
  );
}

export default ModalEdit;
