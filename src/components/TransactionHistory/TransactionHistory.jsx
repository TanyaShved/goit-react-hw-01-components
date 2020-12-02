import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => {
    return (
        <table className={s.history}>
            <thead>
                <tr className={s.head}>
                    <th className={s.item}>Type</th>
                    <th className={s.item}>Amount</th>
                    <th className={s.item}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={s.item}>{item.type}</td>
                        <td className={s.item}>{item.amount}</td>
                        <td className={s.item}>{item.currency}</td>
                </tr>))}
            </tbody>
        </table>
    );
};

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired,
        }),
    ),
};

export default TransactionHistory;