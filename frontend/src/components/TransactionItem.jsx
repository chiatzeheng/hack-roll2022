export default function TransactionItem({ id, type, name, datetime, amount }) {
  return (
    <tr className="hover">
      <th>{id}</th>
      <td>{type}</td>
      <td>{name}</td>
      <td>{datetime}</td>
      <td>{amount}</td>
    </tr>
  );
}
