import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

const randomColor = () => {
  return `rgb(${Math.round(Math.random() * 333)},${Math.round(
    Math.random() * 333,
  )},${Math.round(Math.random() * 333)})`;
};

const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.stat_list}>
        {stats.map(({ id, label, percentage }) => {
          return (
            <li
              key={id}
              className={styles.item}
              style={{ backgroundColor: randomColor() }}
            >
              <span className={styles.label}>{label}</span>
              <span className={styles.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Statistics;
