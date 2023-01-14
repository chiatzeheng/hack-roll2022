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

export default function Login() {
  const onClick = async () => {
    try {
      window.location.href = getGoogleAuthURL();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          {/* <Link to={"/transactions"}> */}
          <button onClick={onClick} className="btn btn-primary">
            Sync your Gmail
          </button>
          {/* </Link> */}
        </div>
      </div>
    </div>
  );
}
