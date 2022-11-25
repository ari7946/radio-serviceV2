import React from 'react';
import Nav from '../nav/nav.component';
import styles from './header.module.scss';

const Header = ({ handleYear }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerTitle}>Radio Tu Hora Divina</h1>
      <Nav handleYear={handleYear} />
    </header>
  )
}

export default Header;