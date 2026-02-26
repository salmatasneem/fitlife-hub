import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Dumbbell } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Workouts", path: "/workouts" },
  { label: "Blog", path: "/blog" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <Dumbbell className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight">
            Fit<span className="text-primary">Life</span> Hub
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-primary ${
                location.pathname === item.path ? "text-primary" : "text-foreground/70"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/auth"
            className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Join Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider ${
                    location.pathname === item.path ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/auth"
                onClick={() => setIsOpen(false)}
                className="bg-primary text-primary-foreground px-5 py-2 rounded-lg text-sm font-bold uppercase tracking-wider text-center"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
