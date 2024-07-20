import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import userStore from '../../store/userstore/UserStore';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <div className="dropdown">
      <div className="dropdown-selected" onClick={handleToggle}>
        <div className='dropdown-option'><p>{userStore.user.firstName} {userStore.user.lastName}</p></div>
        <span className="dropdown-arrow">{isOpen ? '▲' : '▼'}</span>
      </div>
      {isOpen && (
        <div className='dropdown-options'>
            <Link to='profile'><div className='dropdown-option'>Мой Аккаунт</div></Link>
            <Link to='journal'><div className='dropdown-option'>Уведомления</div></Link>
            <Link to='camera'><div className='dropdown-option'>Камеры</div></Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
