import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const ToggleButton = ({ isOpen, onClick, name }) => {
  return (
    <div className={name} onClick={onClick} style={{ cursor: 'pointer' }}>
      {isOpen ? <FaTimes /> : <FaBars />}
    </div>
  );
};

export default ToggleButton;
