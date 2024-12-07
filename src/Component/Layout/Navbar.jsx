import { useContext, } from "react";
import { NavLink } from "react-router-dom";
import Image1 from "/assets/Sunflower.png";
import { AuthContext } from "../../Provider/AuthProvider";
import ThemeToggle from "./ThemeToggle";
import { FaUserCircle} from "react-icons/fa";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);



  const links = (
<>
  <li className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:text-black font-semibold hover:rounded-2xl">
    <NavLink
      to="/"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      Home
    </NavLink>
  </li>
  
  <li className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:text-black font-semibold hover:rounded-2xl">
    <NavLink
      to="allVisas"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      All visas
    </NavLink>
  </li>
  {user?.email && (
  <li className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:text-black font-semibold hover:rounded-2xl">
    <NavLink
      to="addVisa"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      Add Visa
    </NavLink>
  </li>
  
    )}

{user?.email && (
  <li className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:text-black font-semibold hover:rounded-2xl">
    <NavLink
      to="myAddedVisas"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      My added visas
    </NavLink>
  </li>
)}
{user?.email && (
  <li className="hover:bg-gradient-to-r hover:from-yellow-400 hover:via-yellow-300 hover:to-yellow-500 hover:text-black font-semibold hover:rounded-2xl">
    <NavLink
      to="myVisaApplications"
      className={({ isActive }) =>
        isActive
          ? "bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black font-semibold rounded-2xl px-3 py-2"
          : "px-3 py-2"
      }
    >
      My Visa applications
    </NavLink>
  </li>
)}
</>
  );

  return (
    <div className="navbar bg-base-100  text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            aria-label="Open menu"
          >
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
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 dark:bg-gray-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink to="/" className="flex items-center cursor-pointer">
          <img className="w-20" src={Image1} alt="Sunflower Logo" />
          <span className="font-bold md:text-3xl text-lg">Sunflower</span>
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-2 px-1 text-xl">{links}</ul>
      </div>

      <div className="navbar-end flex items-center gap-4">
        {/* Dark Mode Toggle */}

        <ThemeToggle />

        {/* User Profile / Log In */}
        <div className="flex items-center  border p-2 rounded-3xl border-yellow-300">
          {user?.email ? (
            
    <NavLink to="myProfile">
      
    <img
      className="w-12 h-12 mr-1 rounded-full border-2 border-yellow-500"
      src={user?.photoURL || "/default-avatar.png"}
      alt={user?.displayName || "User Avatar"}
      title={user?.displayName || "No Name Available"}
      
    />
  </NavLink>
  
          ) : (
            <FaUserCircle className="size-10 text-yellow-500" />
          )}
          {user?.email ? (
            <button
              onClick={logOut}
              className="px-5 py-2  rounded-3xl md:text-xl text-lg font-semibold border-yellow-500 hover:bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 text-black hover:text-black border"
            >
              Log Out
            </button>
          ) : (
            <NavLink
              to="login"
              className="px-5 py-2  rounded-3xl md:text-xl text-lg font-semibold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 border"
            >
              Log In
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
