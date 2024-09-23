import { Link } from "react-router-dom";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  return (
    <header className="flex">
      <nav
        aria-label="Global"
        className="flex justify-center items-center w-full"
      >
        <ul className="flex items-center gap-6">
          <li>
            <Link className="transition hover:text-gray-500/75" to="/">
              Presentación
            </Link>
          </li>

          <li>
            <Link className="transition hover:text-gray-500/75" to="/proyecto">
              Proyecto
            </Link>
          </li>
        </ul>
      </nav>
      <div className="ml-auto">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Navbar;
