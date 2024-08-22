// components/Section.jsx
import React from 'react';
import styles from './Section.module.css';

const Section = ({ children, id }) => (
  <section id={id} className={styles.section}>
    {children}
  </section>
);

export default Section;
