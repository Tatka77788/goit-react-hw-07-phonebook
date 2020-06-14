/* eslint-disable react/prop-types */
import React from 'react';
import Notification from '../Notification/Notification';
import styles from './ContactForm.module.css';

export default function ContactForm({
  warning,
  showNotice,
  name,
  number,
  handleSubmit,
  handleChange,
}) {
  return (
    <>
      <Notification message={warning} showNotice={showNotice} />
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="Enter name..."
          required
          value={name}
          onChange={handleChange}
          name="name"
        />

        <input
          className={styles.input}
          placeholder="Enter number"
          required
          value={number}
          onChange={handleChange}
          name="number"
        />
        <button
          type="submit"
          disabled={!name || !number}
          className={styles.button}
        >
          Add contact
        </button>
      </form>
    </>
  );
}
