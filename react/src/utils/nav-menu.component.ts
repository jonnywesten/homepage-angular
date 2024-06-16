import React, { useState } from 'react';
import { mdiMenu, mdiPeriodicTable, mdiAccountDetails, mdiImageMultiple, mdiEmail, mdiDatabaseSearch, mdiFileDocumentBox, mdiVoice, mdiMenuDown } from '@mdi/js';
import Icon from '@mdi/react';

const NavMenu: React.FC<{ text: any, ls: any }> = ({ text, ls }) => {
  const [open, setOpen] = useState(false);
  const [dropOpen, setDropOpen] = useState(false);

  const toggleNav = () => {
    setOpen(!open);
  };

  const closeDrop = () => {
    setDropOpen(false);
  };

  const openDrop = () => {
    setDropOpen(!dropOpen);
  };

  const scrollToElement = (id: string) => {

    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });

    const modalElement = document.getElementById(modalName);
    if (modalElement) {
      modalElement.style.display = 'block';

    if (ls && typeof ls.setLanguage === 'function') {
      ls.setLanguage(language);
      setDropOpen(false);
    } else {
      console.error('Language service is not available or setLanguage method is missing.');
    }
  };
      console.error(`Modal with id ${modalName} not found`);
    }
  };
      console.error(`Element with id ${id} not found.`);
    }
  };

  const openModal = (modalName: string) => {

    const modalElement = document.getElementById(modalName);
    if (modalElement) {
      modalElement.style.display = 'block';

    if (ls && typeof ls.setLanguage === 'function') {
      ls.setLanguage(language);
      setDropOpen(false);
    } else {
      console.error('Language service is not available or setLanguage method is missing.');
    }
  };
      console.error(`Modal with id ${modalName} not found`);
    }
  };

  const setLanguage = (language: string) => {

    if (ls && typeof ls.setLanguage === 'function') {
      ls.setLanguage(language);
      setDropOpen(false);
    } else {
      console.error('Language service is not available or setLanguage method is missing.');
    }
  };

  return (
    <div>
      <div className="menu-icon-container position-fixed m-2 px-2" onClick={toggleNav}>
        <Icon path={mdiMenu} size={1} />
      </div>

      <div className={`menu-backdrop ${open ? 'open' : ''}`} onClick={toggleNav}></div>

      <div className={`menu h-100 position-fixed boxed ${open ? 'open' : ''}`} onClick={closeDrop}>
        <div className="header p-2 py-1 mb-4">
          <div className="menu-icon-container d-inline px-2" onClick={toggleNav}>
            <Icon path={mdiMenu} size={1} />
          </div>
          <div className="menu-title">code | smart</div>
        </div>
        <Icon path={mdiPeriodicTable} size={1} className="mdi-bg" />

        <ul className="navbar-nav mr-0 ml-auto">
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToElement('#start')}>
              <Icon path={mdiAccountDetails} size={1} />
              {text.menu[0]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToElement('#projects')}>
              <Icon path={mdiImageMultiple} size={1} />
              {text.menu[1]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => scrollToElement('#contact')}>
              <Icon path={mdiEmail} size={1} />
              {text.menu[2]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => openModal('privacy')}>
              <Icon path={mdiDatabaseSearch} size={1} />
              {text.menu[3]}
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" onClick={() => openModal('legal')}>
              <Icon path={mdiFileDocumentBox} size={1} />
              {text.menu[4]}
            </a>
          </li>
          <li className="nav-item">
            <div className="nav-link position-relative pt-3" onClick={openDrop}>
              <Icon path={mdiVoice} size={1} />
              <div className="dropdown-container pl-1">
                <div className="dropdown-input">
                  {ls.getLanguage()}
                  <Icon path={mdiMenuDown} size={1} />
                </div>
                <ul className={`dropdown-select w-75 ${dropOpen ? 'open' : ''}`}>
                  <li onClick={() => setLanguage('en')}>English</li>
                  <li onClick={() => setLanguage('de')}>Deutsch</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;