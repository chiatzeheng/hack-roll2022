export default function Navbar({ onClick }) {
  return (
    <div className="navbar px-8 bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Good Question</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a onClick={onClick}>Summary</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
