import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';

/**
 * A simple React modal component with customizable text.
 * @prop {function} onClose - required -  Function that will be called when the modal should be closed, typically on clicking the overlay or close button.
 * @prop {string|node} children - optional - Content to display inside the modal. This can be text, HTML, or any React component.
 */

export function Modal({ onClose, children }) {
  return (
    <div onClick={onClose} className={'modal-overlay'}>
      <div
        onClick={(e) => e.stopPropagation()}
        id="confirmation"
        className={'modal-content'}
      >
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
