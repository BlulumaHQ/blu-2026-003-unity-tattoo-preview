import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import logo from "@/assets/unity-tattoo-logo.svg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo & Contact */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <img src={logo} alt="Unity Tattoo" className="h-16 w-auto" />
            <div className="text-muted-foreground text-sm text-center md:text-left space-y-1">
              <p>1395 Commercial Drive</p>
              <p>Vancouver, BC Canada</p>
              <p>604-423-3343</p>
              <a href="mailto:unitytattoo@gmail.com" className="hover:text-primary transition-colors">
                unitytattoo@gmail.com
              </a>
            </div>
            <a
              href="https://www.instagram.com/unity_tattoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors mt-2"
            >
              <Instagram size={22} />
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-foreground mb-2">Quick Links</h4>
            {[
              { label: "Home", path: "/" },
              { label: "Artists", path: "/artists" },
              { label: "The Shop", path: "/the-shop" },
              { label: "Aftercare", path: "/aftercare" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Artists */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-xs tracking-[0.2em] uppercase font-semibold text-foreground mb-2">Our Artists</h4>
            {["Heather Drew", "Paige McGrath", "Bronson Ramos", "Jesse Kvarnstrom", "Soodie Yang", "Brianne Throne", "Atisha Rainey", "Jay Skeletons"].map((name) => (
              <Link
                key={name}
                to={`/artists/${name.toLowerCase().replace(/\s+/g, "-")}`}
                className="text-sm text-muted-foreground hover:text-primary transition-colors tracking-wide"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-border py-3">
        <p className="text-center text-xs text-muted-foreground tracking-wide">
          © {currentYear} Unity Tattoo | Web Design by{" "}
          <a
            href="https://www.bluluma.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            Bluluma.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
