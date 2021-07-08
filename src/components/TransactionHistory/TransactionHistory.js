import React from 'react';
import PropTypes from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th className={styles.table_head}>Type</th>
          <th className={styles.table_head}>Amount</th>
          <th className={styles.table_head}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={styles.table_row}>
              <td className={styles.table_cell}>{type}</td>
              <td className={styles.table_cell}>{amount}</td>
              <td className={styles.table_cell}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
export default TransactionHistory;
