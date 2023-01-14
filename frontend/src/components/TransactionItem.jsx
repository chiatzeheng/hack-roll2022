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
      <tr className="hover">
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
        <td>{amount}</td>
      </tr>

      {/* <input type="checkbox" id="my-modal" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal cursor-pointer">
        <label className="modal-box relative" htmlFor="">
          <h3 className="text-lg font-bold">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
        </label>
      </label> */}
    </>
  );
}
