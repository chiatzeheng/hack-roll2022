import { useState } from "react";
import transactionsData from "../../data/transactions.json";

import LineChart from "../components/LineChart";

export default function Summary() {
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
  const sectionedData = getDateSections(transactionsData);

  const [chartData, setChartData] = useState({
    labels: sectionedData.map((data) => data.header),
    datasets: [
      {
        label: "Users Gained ",
        data: sectionedData.map((section) =>
          section.data.reduce((a, b) => a + b.amount, 0)
        ),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div>
      <LineChart chartData={chartData} />
    </div>
  );
}
