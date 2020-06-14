/* eslint-disable react/prop-types */
import React from 'react';
import styles from './Layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.Containerv}>{children}</div>
);
export default Layout;
