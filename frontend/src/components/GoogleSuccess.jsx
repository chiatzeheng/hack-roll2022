import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const GoogleSuccess = () => {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  React.useEffect(() => {
    if (!searchParams.get("token")) return;
    console.log(searchParams.get("token"));
    localStorage.setItem("token", searchParams.get("token"));
    setTimeout(() => {
      navigate("/transactions");
    }, 100);
  }, [searchParams]);
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h1 className="text-2xl">Thank you for syncing your gmail</h1>
      <h1 className="text-2xl">Redirecting you now...</h1>
    </div>
  );
};

export default GoogleSuccess;
