import { useState } from "react";
import { MapPin, Search, User, Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (search.trim()) {
      alert(`Searching for: ${search}`);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="/" className="logo">
          <span className="logo-icon">🍔</span>
          <span>food<span className="logo-highlight">wagon</span></span>
        </a>

        <div className="delivery-location">
          <strong>Deliver to:</strong>
          <MapPin size={17} color="#ffb30e" />
          <span>Current Location</span>
          <strong>Mandya Bus Stand, Karnataka</strong>
        </div>

        <div className={`header-actions ${menuOpen ? "show-menu" : ""}`}>
          <form className="header-search" onSubmit={handleSearch}>
            <Search size={17} />
            <input
              type="search"
              placeholder="Search Food"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              aria-label="Search food"
            />
          </form>

          <button className="login-button" type="button">
            <User size={16} />
            Login
          </button>
        </div>

        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen((value) => !value)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
    </header>
  );
}

export default Header;
