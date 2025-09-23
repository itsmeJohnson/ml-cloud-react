import { useState } from "react";
import { Menu, X } from "lucide-react";
import useScrolled from "./useScrolled";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(50);

  // Smooth scroll with animation
  const smoothScrollTo = (targetId, duration = 800) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const headerOffset = 80; // navbar height
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = startPosition + distance * easeInOutQuad(Math.min(timeElapsed / duration, 1));
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    requestAnimationFrame(animation);
    setMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50 transition-all duration-300 ${
          scrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : "bg-zinc-900/70 backdrop-blur-md"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.avif" alt="Logo" className="h-8 w-8 object-cover rounded-full shadow-lg" />
          <span className="text-white font-semibold text-base md:text-lg">ML Cloud Design Labs Inc</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          <ul className="flex gap-6 text-gray-300">
            {["home", "services", "about", "contact"].map((section) => (
              <li key={section}>
                <button onClick={() => smoothScrollTo(section)} className="hover:text-blue-400 capitalize">
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => smoothScrollTo("signin")}
            className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-medium shadow hover:opacity-90 text-sm md:text-base"
          >
            Sign in
          </button>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-zinc-950 border-t border-zinc-800 shadow-lg z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300">
            {["home", "services", "about", "contact"].map((section) => (
              <li key={section}>
                <button onClick={() => smoothScrollTo(section)} className="hover:text-blue-400 capitalize">
                  {section}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => smoothScrollTo("signin")}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-medium shadow hover:opacity-90 text-sm"
              >
                Sign in
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
