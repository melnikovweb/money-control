const Transaction = (props) =>
(
    <div>
    label: {props.transaction.label}
    <p>Id: {props.transaction.id}</p>
    <p>Value: {props.transaction.value}</p>
  </div>

)

export default Transaction