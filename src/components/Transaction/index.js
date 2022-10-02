import PropTypes from 'prop-types';
const Transaction = ({transaction}) =>
(
    <div>
    label: {transaction.label}
    <p>Value: {transaction.value}</p>
  </div>

)
Transaction.propTypes = {
    transaction:PropTypes.shape ({
        label: PropTypes.string,
        value: PropTypes.string
    })
}
Transaction.defaultProps = {
    transaction: {
        label: '',
        value:0
    }
}
export default Transaction