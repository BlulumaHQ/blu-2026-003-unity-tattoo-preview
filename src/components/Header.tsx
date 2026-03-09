import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Instagram } from "lucide-react";
import logo from "@/assets/unity-tattoo-logo.svg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Artists", path: "/artists" },
  { label: "The Shop", path: "/the-shop" },
  { label: "Aftercare", path: "/aftercare" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-3" onClick={() => setMobileOpen(false)}>
          <img src={logo} alt="Unity Tattoo" className="h-12 md:h-14 w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-300 hover:text-primary ${
                location.pathname === link.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://www.instagram.com/unity_tattoo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="flex flex-col items-center py-6 gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`text-sm tracking-[0.2em] uppercase font-medium transition-colors hover:text-primary ${
                  location.pathname === link.path ? "text-primary" : "text-foreground/70"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/unity_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
