import querystring from "querystring";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";
import { useNavigate } from "react-router-dom";

function getGoogleAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: `https://hack-n-roll-production-1482.up.railway.app/api/auth/google/redirect`,
    client_id: process.env.client_id,
    access_type: "offline",
    response_type: "code",
    prompt: "consent",
    scope: [
      "https://www.googleapis.com/auth/userinfo.profile",
      "https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/gmail.addons.current.message.readonly",
      "https://www.googleapis.com/auth/gmail.readonly",
    ].join(" "),
  };
  return `${rootUrl}?${querystring.stringify(options)}`;
}

export default function Navbar({ onClick }) {
  const navigate = useNavigate();
  const {
    state: { user },
  } = useGlobalContext();
  const sync = async () => {
    try {
      window.location.href = getGoogleAuthURL();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="navbar px-8 bg-base-100">
      <div className="flex gap-4 py-4">
        <Link to="/transactions" className="btn btn-ghost normal-case text-2xl">
          TrackHack!
        </Link>
        <button onClick={sync} className="btn">
          Sync Transactions
        </button>
      </div>
      <div className="ml-auto">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/home">Dashboard</Link>
          </li>
        </ul>
        <img
          onClick={() => navigate("/home")}
          src={user?.avatar}
          alt="avatar"
          className="rounded-full w-12 h-12 cursor-pointer"
        />
      </div>
    </div>
  );
}
