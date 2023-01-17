import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th className={styles.tableTh}>Type</th>
          <th className={styles.tableTh}>Amount</th>
          <th className={styles.tableTh}> Currency</th>
        </tr>
      </thead>
      {items.map(item => {
        return (
          <tbody key={item.id} className={styles.tableTbodyTr}>
            <tr>
              <td className={styles.tableTd}>{item.type}</td>
              <td className={styles.tableTd}>{item.amount}</td>
              <td className={styles.tableTd}>{item.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    }).isRequired
  ).isRequired,
};
