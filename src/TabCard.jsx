import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import Modal from './components/ModalEdit';
import data from './data.json'; 

function Table() {
  const columns = Object.keys(data[0]);
  const [showModal, setShowModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const openModal = (row) => {
    setSelectedRow(row);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleConfirm = () => {
    console.log("Confirmé");
    closeModal();
  };

  return (
    <div className="tab_card">
      <table>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.values(row).map((value, colIndex) => (
                <td key={colIndex}>{value}</td>
              ))}
              <td>
                <button onClick={() => openModal(row)}>
                  Modifier <FontAwesomeIcon icon={faEdit} />
                </button>
                <span style={{ margin: '0 10px' }}></span>
                <button onClick={() => handleDelete(row)}>
                  Supprimer <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal showModal={showModal} closeModal={closeModal} handleConfirm={handleConfirm} rowData={selectedRow} />
    </div>
  );
}

function handleDelete(row) {
  console.log("Supprimer", row);

}

export default Table;
  