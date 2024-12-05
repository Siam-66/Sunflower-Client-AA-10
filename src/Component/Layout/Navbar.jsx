import { NavLink } from "react-router-dom";
// import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
    const links = (
        <>
          <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
            <NavLink
              to="allVisas"
              className={({ isActive }) =>
                isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
              }
            >
              All visas
            </NavLink>
          </li>
          {/* {user?.email && (
            <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
              <NavLink
                to="tutorials"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
                }
              >
                Tutorials
              </NavLink>
            </li>
          )} */}
                      <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
              <NavLink
                to="addVisa"
                className={({ isActive }) =>
                  isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
                }
              >
                Add Visa
              </NavLink>
            </li>
          <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
            <NavLink
              to="myAddedVisas"
              className={({ isActive }) =>
                isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
              }
            >
              My added visas
            </NavLink>
          </li>
          <li className="hover:bg-sky-400 hover:text-white hover:rounded-2xl">
            <NavLink
              to="myVisaApplications"
              className={({ isActive }) =>
                isActive ? "bg-sky-500 text-white rounded-2xl px-3 py-2" : "px-3 py-2"
              }
            >
              My Visa applications
            </NavLink>
          </li>
        </>
      );
    return (
        <div>
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <div
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {links}
              </div>
            </div>
            <div className="flex items-center justify-start">
              <NavLink to="/" className="flex items-center justify-start cursor-pointer">
                <img className="w-20" src="https://i.ibb.co.com/xYFHPrm/1jp-card.jpg" alt="Lingo Bingo Logo" />
                <div className="font-semibold md:text-3xl text-lg">Lingo Bingo</div>
              </NavLink>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <div className="menu menu-horizontal gap-2 px-1 text-xl">{links}</div>
          </div>
          <div className="navbar-end">
            {/* <div className="flex items-center border-2 p-2 rounded-3xl border-sky-300">
              <div>
                {user?.email ? (
                  <NavLink to="myProfile">
                    <div className="w-12 hover:scale-105 duration-[0.5s] mr-2 border-2 p-[2px] rounded-full border-sky-500">
                      <img
                        className="rounded-full"
                        alt={user?.displayName}
                        src={user?.photoURL}
                      />
                    </div>
                  </NavLink>
                ) : (
                  <div className="mr-2">
                    <FaUserCircle className="size-10 text-sky-900" />
                  </div>
                )}
              </div>
              <div className="flex flex-col items-start">
  
                <div>
                  {user?.email ? (
                    <button
                      onClick={logOut}
                      className="px-5 py-2 rounded-3xl md:text-xl text-sl font-semibold border-sky-500 hover:bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 hover:text-white border"
                    >
                      Log Out
                    </button>
                  ) : (
                    <NavLink
                      to="login"
                      className="px-5 py-2 rounded-3xl md:text-xl text-sl font-semibold border-sky-500 hover:bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 hover:text-white border"
                    >
                      Log in
                    </NavLink>
                  )}
                </div>
              </div>
            </div> */}
                <NavLink to="login"
                      className="px-5 py-2 rounded-3xl md:text-xl text-sl font-semibold border-sky-500 hover:bg-gradient-to-r from-sky-300 via-sky-400 to-blue-500 hover:text-white border"
                    >
                      Log in
                    </NavLink>
          </div>
        </div>
      </div>
    );
};

export default Navbar;