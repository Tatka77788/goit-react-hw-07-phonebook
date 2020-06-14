/* eslint-disable react/prop-types */
import React from 'react';
import { CSSTransition } from 'react-transition-group';
import noticeSlide from '../../animations/noticeSlide.module.css';
import styles from './Notification.module.css';

export default function Notification({ message, showNotice }) {
  return (
    <CSSTransition
      timeout={250}
      classNames={noticeSlide}
      in={showNotice}
      unmountOnExit
    >
      <div className={styles.Notification}>{message}</div>
    </CSSTransition>
  );
}
