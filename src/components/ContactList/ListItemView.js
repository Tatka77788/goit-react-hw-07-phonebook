/* eslint-disable react/prop-types */
import React from 'react';
import styles from './ContactList.module.css';

export default function ListItem({ name, number, onDeleteContact }) {
  return (
    <li className={styles.listItem}>
      <span className={styles.paragraph}>{name}</span>
      <span className={styles.paragraph}>{number}</span>
      <button className={styles.button} type="button" onClick={onDeleteContact}>
        &#215;
      </button>
    </li>
  );
}
