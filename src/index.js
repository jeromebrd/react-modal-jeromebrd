import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { Modal } from './lib/Modal';
import './lib/Modal.css';

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Test du Composant Modal</h1>
      <button onClick={openModal}>Ouvrir la Modal</button>
      {isModalOpen && <Modal onClose={closeModal}>success</Modal>}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
