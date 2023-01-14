import Navbar from "../components/Navbar";
import transactionsData from "../../data/transactions.json";
import TransactionItem from "../components/TransactionItem";

export default function Transactions() {
  function getDateSections(sectionData) {
    // retrieving an array of unique dates
    const sectionHeaders = Array.from(
      new Set(
        sectionData.map((item) => new Date(item.datetime).toLocaleDateString())
      )
    );

    // creating an array of objects with date as header and empty data array
    const sections = [];
    sectionHeaders.forEach((header) => {
      sections.push({ header: header, data: [] });
    });

    // adding itinerary items to the correct section
    sectionData.forEach((item) => {
      const date = new Date(item.datetime).toLocaleDateString();

      sections.forEach((section) => {
        if (section.header === date) section.data.push(item);
      });
    });
    return sections;
  }
  console.log(getDateSections(transactionsData));
  return (
    <>
      <Navbar />
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Type</th>
              <th>Name</th>
              <th>Time</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactionsData.map((transaction) => (
              <TransactionItem key={transaction.id} {...transaction} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
