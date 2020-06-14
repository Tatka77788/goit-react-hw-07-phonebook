/* eslint-disable react/prop-types */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import titleSlide from '../../animations/titleSlide.module.css';
import styles from './Title.module.css';

function Title({ text }) {
  return (
    <>
      <CSSTransition timeout={500} classNames={titleSlide} in appear>
        <h2 className={styles.titlel}>{text}</h2>
      </CSSTransition>
    </>
  );
}

export default Title;
