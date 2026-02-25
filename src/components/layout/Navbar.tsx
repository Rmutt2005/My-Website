import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-md border-b border-border/60 shadow-sm shadow-primary/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gradient">
            Portfolio
          </NavLink>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                activeClassName="text-primary drop-shadow-[0_0_12px_hsl(var(--ring)_/_0.25)]"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            <Button asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&to=rmuttmail2005@email.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </Button>

            <ThemeToggle />
          </div>
        </div>

        <div
          className={
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out " +
            (isMenuOpen ? "max-h-24 opacity-100" : "max-h-0 opacity-0")
          }
        >
          <div className="pb-4 pt-2">
            <div className="flex items-center justify-center gap-6 rounded-xl border border-border/60 bg-background/40 backdrop-blur-md px-4 py-3 shadow-sm shadow-primary/10">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium"
                  activeClassName="text-primary drop-shadow-[0_0_12px_hsl(var(--ring)_/_0.25)]"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
