import querystring from "querystring";

function getGoogleAuthURL() {
  const rootUrl = "https://accounts.google.com/o/oauth2/v2/auth";
  const options = {
    redirect_uri: `https://hack-n-roll-production-1482.up.railway.app/api/auth/google/redirect`,
    client_id:
      "58358299620-e1cnh8cjhj5fc1f2ukars12hp5hulbl8.apps.googleusercontent.com",
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
  const sync = async () => {
    try {
      window.location.href = getGoogleAuthURL();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="navbar px-8 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">TrackLah!</a>
        <button className="btn">Sync Transactions</button>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={sync}>Summary</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
