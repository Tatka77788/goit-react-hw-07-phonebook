import React from 'react';
import Title from './Title';
import styles from './Title.module.css';

function Header() {
  return (
    <div className={styles.container}>
      <Title text="PHONEBOOK" />
    </div>
  );
}

export default Header;
