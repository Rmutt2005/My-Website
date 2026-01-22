import { NavLink } from "@/components/NavLink";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className=" flex mr-5 fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center h-16 gap-60 ">
          {/* Logo */}
          <NavLink to="/" className="text-xl font-bold text-gradient">
            Portfolio
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-primary/90" asChild>
              <a
                href="https://mail.google.com/mail/?view=cm&to=rmuttmail2005@email.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact Me
              </a>
            </Button>
          </div>
        </div>
      </div>
      {/* Theme Toggle */}
      <div className="hidden md:block pt-3">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
