export default function Navbar({onClick}) {
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a onClick={onClick}>Homepage</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
  