const initialState = {
  user: null,
  transactions: [],
  loading: false,
};
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return { ...state, loading: payload };

    case "SET_USER":
      return { ...state, user: payload, listing: null };
    case "CLEAR_USER":
      // localStorage.removeItem("token");
      return { ...state, user: null };
    case "PARSE_TRANSACTIONS":
      return { ...state, transactions: parseTransactions(payload) };
    default:
      return state;
  }
};

export { initialState, reducer };
function convertToDate(datetimeString) {
  const dateRegex =
    /^(\d{1,2})\s([a-zA-Z]+)\s(\d{1,2}):(\d{2})\s\(([a-zA-Z]+)\)$/;
  const match = dateRegex.exec(datetimeString);

  if (!match) {
    throw new Error("Invalid datetime string format");
  }

  const [, day, month, hour, minute, timezone] = match;
  const monthMap = {
    Jan: 0,
    Feb: 1,
    Mar: 2,
    Apr: 3,
    May: 4,
    Jun: 5,
    Jul: 6,
    Aug: 7,
    Sep: 8,
    Oct: 9,
    Nov: 10,
    Dec: 11,
  };

  const date = new Date();
  date.setUTCHours(hour, minute, 0, 0);
  date.setUTCMonth(monthMap[month], day);
  return date;
}

function parseTransactions(transactions) {
  let res = [];
  let idx = 0;
  for (let { body, _ } of transactions) {
    try {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(body, "text/html");
      let mainTable = htmlDoc.querySelectorAll("table")[2];
      if (!mainTable) continue;
      let tds = mainTable?.querySelectorAll("td");
      let timestamp = tds[1].innerHTML;
      let amount = tds[3].innerHTML;
      let to = tds[7].innerHTML;
      timestamp = convertToDate(timestamp);
      timestamp.setHours(timestamp.getHours() - 8);
      res.push({
        id: idx,
        name: to,
        amount: parseFloat(amount.replace("SGD", "")),
        datetime: timestamp.toString(),
        type: "pay_now",
      });
      idx++;
    } catch (error) {
      console.log(error);
    }
  }
  res = res.sort((a, b) => new Date(a.datetime) - new Date(b.datetime));
  return res;
}
