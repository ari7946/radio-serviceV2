import React from 'react';
import Nav from '../nav/nav.component';
import styles from './header.module.scss';
import PodcastList from '../podcast-list/podcast-list.component';

const Header = ({ handleYear }) => {
  return (
    <header className={styles.header}>
      <div className={styles.topContainer}>
        <h1 className={styles.headerTitle}>Radio Tu Hora Divina</h1>
        <PodcastList />
      </div>
      <Nav handleYear={handleYear} />
    </header>
  )
}

export default Header;
