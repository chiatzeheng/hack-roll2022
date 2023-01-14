export default function TransactionItem({ id, type, name, datetime, amount }) {
  const Logo = ({ type }) => {
    if (type === "pay_now") {
      return <img src="../../icons/paynow.png" />;
    } else if (type === "pay_lah") {
      return <img src="../../icons/paylah.png" />;
    } else if (type === "grab_pay") {
      return <img src="../../icons/grabpay.png" />;
    }
  };
  const date = new Date(datetime).toLocaleString();
  return (
    <>
      <th>{id}</th>
      <td>
        {
          <div className="w-14 rounded">
            <Logo type={type} />
          </div>
        }
      </td>
      <td>{name}</td>
      <td>{date}</td>
      <td>{amount.toFixed(2)}</td>

      <div className="modal" id="my-modal-2">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <a href="#" className="btn">
              Yay!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
