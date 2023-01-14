import Navbar from "../components/Navbar";
import React from "react";
import transactionsData from "../../data/transactions.json";
import TransactionItem from "../components/TransactionItem";
import { useGlobalContext } from "../context";

export default function Transactions() {
  const {
    state: { transactions },
  } = useGlobalContext();
  const [sectionedData, setSectionedData] = React.useState([]);
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
  React.useEffect(() => {
    setSectionedData(getDateSections(transactions));
  }, [transactions]);
  return (
    <>
      <Navbar />
      {sectionedData.map((section, idx) => (
        <>
          <div
            key={idx}
            className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <h1>{section.header}</h1>
            </div>
            <div className="collapse-content">
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
                    {section.data.map((transaction) => (
                      <TransactionItem key={transaction.id} {...transaction} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
      ))}
      {/* <h1>{sectionedData[0].header}</h1>
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
      </div> */}
    </>
  );
}
