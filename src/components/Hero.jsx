import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen bg-zinc-950 flex flex-col pt-20"
    >
      {/* Navbar */}
<header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-zinc-950/90 backdrop-blur-md z-50 shadow-lg">
  {/* Logo */}
  <div className="flex items-center gap-2">
    <img
      src="/logo.avif"
      alt="Logo"
      className="h-8 w-8 object-cover rounded-full shadow-lg"
    />
    <span className="text-white font-semibold text-base md:text-lg">
      ML Cloud Design Labs Inc
    </span>
  </div>

  {/* Desktop Nav */}
  <nav className="hidden md:flex items-center gap-4">
    <ul className="flex gap-6 text-gray-300">
      <li><a href="#home" className="hover:text-blue-400">Home</a></li>
      <li><a href="#services" className="hover:text-blue-400">Services</a></li>
      <li><a href="#about" className="hover:text-blue-400">About</a></li>
      <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
    </ul>
    <a
      href="#signin"
      className="px-4 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-medium shadow hover:opacity-90 text-sm md:text-base"
    >
      Sign in
    </a>
  </nav>

  {/* Mobile Hamburger */}
  <button
    className="md:hidden text-white"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <X size={28} /> : <Menu size={28} />}
  </button>
</header>


      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden fixed top-16 left-0 w-full bg-zinc-950 border-t border-zinc-800 shadow-lg z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-gray-300">
            <li><a href="#home" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#services" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Services</a></li>
            <li><a href="#about" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" className="hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</a></li>
            <li>
              <a
                href="#signin"
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white rounded-full font-medium shadow hover:opacity-90 text-sm"
                onClick={() => setMenuOpen(false)}
              >
                Sign in
              </a>
            </li>
          </ul>
        </div>
      )}

      {/* Hero Section */}
      <main className="flex flex-1 items-center justify-between px-6 lg:px-20 flex-col lg:flex-row gap-12 lg:gap-0">
        {/* Left Side */}
        <div className="max-w-xl text-white space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            Create <br className="hidden md:block" /> without <br className="hidden md:block" /> boundaries
          </h1>
          <p className="text-base md:text-lg text-gray-400 leading-relaxed">
            Azure AI Foundry has everything you need to design, customize, and
            manage AI applications and agents built in GitHub, Visual Studio,
            Copilot Studio, and Microsoft Fabric with APIs for all your needs.
          </p>
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all text-sm md:text-base"
          >
            Sign in to get started
          </a>
        </div>

        {/* Right Side - Screenshot */}
        <div className="relative w-full max-w-md lg:max-w-2xl hover:scale-105 transition-all">
          <img
            src="/screenshot.png"
            alt="App Preview"
            className="rounded-xl shadow-lg bg-zinc-900/50 hover:bg-zinc-800/80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl" />
        </div>
      </main>
    </section>
  );
}
