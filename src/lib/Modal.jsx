import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

export function Modal({ onClose, children }) {
  return (
    <div className={'modal-overlay'}>
      <div id="confirmation" className={'modal-content'}>
        {children}
        <button onClick={onClose} className={`modal-close-button`}>
          &#x2715; {/* Code unicode pour "x" */}
        </button>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.string,
};
