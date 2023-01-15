import Navbar from "../components/Navbar";
import React from "react";
import transactionsData from "../../data/transactions.json";
import TransactionItem from "../components/TransactionItem";
import Home from "./Home";
import Summary from "./Summary";
import { useGlobalContext } from "../context";
import { Puff } from "react-loader-spinner";

export default function Transactions() {
  const {
    state: { transactions, loading },
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
  const home = async () => {
    try {
      window.location.href = "./Home";
    } catch (error) {
      console.error(error);
    }
  };

  const summary = async () => {
    try {
      window.location.href = "/Summary";
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    setSectionedData(getDateSections(transactions));
  }, [transactions]);
  return (
    <>
      <Navbar onClick={home} />
      {loading ? (
        <div className="w-full justify-center flex">
          <Puff />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {sectionedData.map((section, idx) => (
            <>
              <div
                key={idx}
                className="collapse mx-8 collapse-arrow border border-base-300 bg-base-100 rounded-box"
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
                          <th>Amount (SGD)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.data.map((transaction) => (
                          <TransactionItem
                            key={transaction.id}
                            {...transaction}
                          />
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      )}
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
