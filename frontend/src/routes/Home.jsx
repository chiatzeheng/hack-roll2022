import Navbar from "../components/Navbar";

export default function Transactions() {
    return (
      <>
        <Navbar />
        <div className="avatar mx-10 top-20 -bottom-10">
          <div className="w-72 rounded-full">
            <img src="../icons/pfp.jpg" />
          </div>
        </div>
        <div className="stat" class="flex flex-col flex-initial m-10 p-8 rounded-lg min-w-fit max-w-min bg-green-600">
            <div class="text-white pr-44">
                <div className="stat-title pt-5 text-5xl">Available Balance</div>
                <div className="stat-value pt-2 text-9xl">$69,420</div>
                <div className="stat-desc pt-3 text-2xl">21% more than last month</div>
            </div>
        </div>
      </>
    );
}
  