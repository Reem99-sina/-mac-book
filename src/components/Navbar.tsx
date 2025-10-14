
import { navLinks } from "../constants";

interface Props {}

function Navbar(props: Props) {
  const {} = props;

  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Logo" />
        <ul>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.label} className="text-white hover:underline">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
            <button>
            <img src="/cart.svg" alt="cart" />
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
