export default function TransactionItem({ id, type, name, datetime, amount }) {
  const Logo = ({ type }) => {
    if (type === "pay_now") {
      return <img src="../icons/paynow.png" />;
    } else if (type === "pay_lah") {
      return <img src="../icons/paylah.png" />;
    } else if (type === "grab_pay") {
      return <img src="../icons/grabpay.png" />;
    }
  };

  const date = new Date(datetime).toLocaleString();
  return (
    <>
      <tr>
        <th>{id}</th>
        <td>
          <div className="w-14 rounded">
            <Logo type={type} />
          </div>
        </td>
        <td>{name}</td>
        <td>{date}</td>
        <td>{amount.toFixed(2)}</td>
      </tr>
      <tr></tr>
    </>
  );
}
