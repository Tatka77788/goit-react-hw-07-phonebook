/* eslint-disable react/require-default-props */
import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import ListItem from './ListItemContainer';
import itemSlide from '../../animations/itemSlide.module.css';
import styles from './ContactList.module.css';

export default function ContactList({ contacts }) {
  return (
    <TransitionGroup className={styles.list}>
      {contacts.map(({ id }) => (
        <CSSTransition key={id} timeout={250} classNames={itemSlide}>
          <ListItem id={id} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
    PropTypes.array,
  ]),
};
