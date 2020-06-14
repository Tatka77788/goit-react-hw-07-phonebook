/* eslint-disable react/prop-types */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import filterScale from '../../animations/filterScale.module.css';
import styles from './Filter.module.css';

export default function Filter({ value, onChangeFilter, appear }) {
  return (
    <CSSTransition
      timeout={250}
      classNames={filterScale}
      in={appear}
      unmountOnExit
    >
      <div className={styles.container}>
        <label className={styles.label}>
          Find contacts by name:
          <input
            className={styles.input}
            type="text"
            value={value}
            onChange={e => onChangeFilter(e.target.value)}
          />
        </label>
      </div>
    </CSSTransition>
  );
}
