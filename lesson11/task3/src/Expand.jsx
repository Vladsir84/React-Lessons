import React from 'react';
import PropTypes from 'prop-types';

const Expand = ({ isOpen, children, title, onClose }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={onClose}>
          <i className="fas fa-chevron-up"></i>
        </button>
      </div>
      <div className="expand__content">{children}</div>
    </div>
  );
}

Expand.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.element.isRequired,
  title: PropTypes.string,
  onClose: PropTypes.func.isRequired
}

Expand.defaultProps = {
  isOpen: false,
  title: ''
}

export default Expand;