import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  // Update windowWidth on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine background image based on screen width
  const getBackgroundImage = () => {

    if (windowWidth < 416) {
      return '/smallscreen.png'; // Small screen image
    } else if (windowWidth >= 416 && windowWidth < 530) {
      return '/smallscreen1.png'; // Medium screen image
    }
    else if (windowWidth >= 530 && windowWidth < 769) {
      return '/mediumscreen.png'; // Medium screen image
    } else if (windowWidth >= 769 && windowWidth < 1030) {
      return '/mobile.png'; // Mobile screen image
    } else {
      return '/Desktop-1.png'; // Desktop image
    }
  };

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen bg-cover bg-no-repeat flex flex-col pt-20 w-full"
        style={{
          backgroundImage: `url(${getBackgroundImage()})`,
          backgroundPosition: windowWidth < 1030 ? '50% right 400px' : 'right center', // Adjust background position for smaller screens
          backgroundSize: '100% 100%',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Navbar */}
        <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 z-50">
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
            <p className="text-base md:text-lg text-gray-100 leading-relaxed">
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
        </main>

      </section>
      <>
        <section
          className="w-full min-h-screen"
          style={{
            background:
              "linear-gradient(160deg,rgba(35, 35, 56, 1) 33%, rgba(86, 96, 141, 0.93) 74%)",
          }}
        >
          {/* Fog Overlay Join */}
          <div className="relative w-full h-40 bg-gradient-to-b from-black/80 via-black/60 to-transparent blur-2xl -mt-20 z-20 pointer-events-none"></div>

          {/* divs group */}
          <div className="w-full min-h-screen grid grid-cols-2 md:grid-cols-2  ">
            <div className="hidden lg:flex lg:w-full lg:h-auto p-8 space-y-2 flex flex-col justify-center items-end transform rotate-[-7.55deg] skew-x-[10deg] skew-y-[0deg] ">
              <>
                {/* Row 1: 3 divs (408x188) */}
                <div className="flex gap-4 ">
                  <div
                    className="bg-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '408px', height: '184px', borderRadius: '20px' }}
                  >
                    {/* Content for first div */}

                  </div>

                  <div
                    className="bg-gray-200 shadow-lg p-4 flex flex-col items-start justify-center transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '408px', height: '184px', borderRadius: '20px' }}
                  >
                    <img
                      src="/icon-1.png" // Replace with your actual image path
                      alt="Azure AI"
                      className="w-10 h-10 mb-2"
                    />
                    <h5 className="text-black text-lg font-semibold mb-1">
                      Azure AI Foundry Agent Service
                    </h5>
                    <p className="text-black text-sm">
                      A fully-managed service to help you build, deploy, and scale fast, secure, and extensible AI agents.
                    </p>
                  </div>


                  <div
                    className="bg-gray-200 shadow-lg p-4 flex flex-col items-start justify-center transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '408px', height: '184px', borderRadius: '20px' }}
                  >
                    <img
                      src="/icon-2.svg" // Replace with your actual image path
                      alt="Azure AI"
                      className="w-10 h-10 mb-2"
                    />
                    <h5 className="text-black text-lg font-semibold mb-1">
                      Azure AI Foundry Agent Models
                    </h5>
                    <p className="text-black text-sm">
                      Industry-leading coding and language AI models that you can fine-tune to your specific needs.
                    </p>
                  </div>
                </div>


                {/* Row 2: 4 divs (268x111) with image and h5 */}
                <div className="flex gap-4">
                  <div
                    className="bg-gray-200 shadow-lg p-3 flex items-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                  </div>

                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Inline SVG instead of image */}
                    <svg
                      className="w-10 h-10 text-black"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10 3c-1.53 0-2.8.4-3.82 1H10a6.5 6.5 0 0 1 5.3 2.62 8.73 8.73 0 0 1 1.38 2.62c.05.14.06.22.07.25v.01a6.5 6.5 0 0 1-.32.94c-.24.57-.6 1.26-1.14 1.94A6.5 6.5 0 0 1 10 15H6.18c1.03.6 2.29 1 3.82 1a7.44 7.44 0 0 0 6.08-3 9.74 9.74 0 0 0 1.56-2.96c.06-.2.11-.4.11-.54s-.05-.35-.1-.54A9.73 9.73 0 0 0 16.08 6 7.44 7.44 0 0 0 10 3Zm0 3H3.92c.27-.34.57-.68.92-1H10v1Zm0 7a3.5 3.5 0 1 0 0-7v1H3.24c-.21.35-.38.7-.52 1H8a2.5 2.5 0 1 1 0 3H2.72c.14.3.3.65.52 1H10v1Zm0 0H3.92c.27.34.57.68.92 1H10v-1ZM7.55 9h-5.2c-.06.18-.1.37-.1.5s.04.32.1.5h5.2a2.51 2.51 0 0 1 0-1Z"></path>
                    </svg>

                    <h5 className="text-black text-base font-semibold">
                      Vision + Document
                    </h5>
                  </div>


                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Inline SVG instead of image */}
                    <svg
                      className="w-10 h-10 text-black"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >                  <path d="M9.5 2a.5.5 0 0 0 0 1H13v1.86C13 6.03 11.83 7 10.5 7a.5.5 0 0 0 0 1C12.21 8 14 6.74 14 4.86V2.5a.5.5 0 0 0-.5-.5h-4ZM7.96 5.3a.5.5 0 0 0-.92 0l-5 12a.5.5 0 1 0 .92.4L4.5 14h6l1.54 3.7a.5.5 0 1 0 .92-.39l-1.66-3.99v-.02l-3.34-8Zm2.12 7.7H4.92L7.5 6.8l2.58 6.2ZM15.5 2c.28 0 .5.22.5.5V6h1.5a.5.5 0 0 1 0 1H16v6.5a.5.5 0 1 1-1 0v-11c0-.28.23-.5.5-.5Z" fill="currentColor"></path></svg>

                    <h5 className="text-black text-base font-semibold">
                      Language
                    </h5>
                  </div>


                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '268px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Inline SVG instead of image */}
                    <svg
                      className="w-10 h-10 text-black"
                      fill="currentColor"
                      aria-hidden="true"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >                    <path d="M10 2c.28 0 .5.22.5.5v15a.5.5 0 0 1-1 0v-15c0-.28.22-.5.5-.5Zm3.5 3c.28 0 .5.22.5.5v9a.5.5 0 0 1-1 0v-9c0-.28.22-.5.5-.5ZM7 5.5a.5.5 0 0 0-1 0v9a.5.5 0 0 0 1 0v-9ZM16.5 8c.28 0 .5.22.5.5v3a.5.5 0 0 1-1 0v-3c0-.28.22-.5.5-.5ZM4 8.5a.5.5 0 0 0-1 0v3a.5.5 0 0 0 1 0v-3Z" fill="currentColor"></path></svg>

                    <h5 className="text-black text-base font-semibold">
                      Speech
                    </h5>
                  </div>

                </div>


                {/* Row 3: 4 divs (268x111) */}
                <div className="flex gap-4">
                  <div
                    className="bg-gray-200 shadow-lg transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Content for div 1 */}
                  </div>

                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Inline SVG instead of image */}
                    <img
                      src="/icon-3.svg" // Replace with your actual image path
                      alt="Azure AI"
                      className="w-10 h-10 mb-2"
                    />
                    <h5 className="text-black text-base font-semibold">
                      Azure Machine Learning
                    </h5>
                  </div>

                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    {/* Inline SVG instead of image */}
                    <img
                      src="/icon-4.svg" // Replace with your actual image path
                      alt="Azure AI"
                      className="w-10 h-10 mb-2"
                    />
                    <h5 className="text-black text-base font-semibold">
                      Azure AI Search
                    </h5>
                  </div>

                  <div
                    className="bg-gray-200 shadow-lg p-3 flex flex-col items-center justify-center gap-3 transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{ width: '301px', height: '111px', borderRadius: '12px' }}
                  >
                    <img
                      src="/icon-5.svg"
                      alt="Azure AI"
                      className="w-10 h-10 mb-2"
                    />
                    <h5 className="text-black text-base font-semibold">
                      Azure AI Content Safety
                    </h5>
                  </div>
                </div>


                {/* Row 4: 3 divs (408x82) */}
                <div className="flex gap-4">
                   <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="XAI.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>Grok-3</span>
                      <span>•</span>
                      <div
                        style={{
                          color:'red',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.17 2.38c.28-.14.55-.24.8-.3.02.54.18 1.08.41 1.59a16.63 16.63 0 0 0 1.32 2.25c.46.7.9 1.38 1.24 2.06.35.7.56 1.38.56 2.02 0 1.15-.34 2.15-.99 2.85a3.92 3.92 0 0 1-3 1.15c-1.4 0-2.37-.4-3.05-1.03a4.84 4.84 0 0 1-1-5.43l.13.25c.38.76 1.3 1.07 2.07.7.84-.43 1.08-1.47.72-2.24-.37-.81-.66-1.81-.4-2.6.2-.58.65-1 1.19-1.27ZM4.1 6.18v.01l-.02.03a3.08 3.08 0 0 0-.22.33 5.33 5.33 0 0 0-.74 4.06c.26 1.19.77 2.3 1.65 3.1A5.3 5.3 0 0 0 8.5 15c1.62 0 2.89-.54 3.75-1.47A5.12 5.12 0 0 0 13.5 10c0-.86-.28-1.69-.67-2.46a21.42 21.42 0 0 0-1.35-2.25c-.47-.73-.9-1.4-1.19-2.03A2.77 2.77 0 0 1 10 1.6.5.5 0 0 0 9.5 1c-.42 0-1.12.15-1.79.5a3.3 3.3 0 0 0-1.68 1.84c-.4 1.17.06 2.5.44 3.32.17.38.02.79-.26.93a.54.54 0 0 1-.73-.24l-.53-1.07a.5.5 0 0 0-.84-.1Z" fill="currentColor"></path></svg>
                        <span>Hot</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Text-generation</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>


                  <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="Deepseek.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>Deepseek-R1</span>
                      <span>•</span>
                      <div
                        style={{
                          color: 'red', 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" style={{ color: 'red' }}><path d="M8.17 2.38c.28-.14.55-.24.8-.3.02.54.18 1.08.41 1.59a16.63 16.63 0 0 0 1.32 2.25c.46.7.9 1.38 1.24 2.06.35.7.56 1.38.56 2.02 0 1.15-.34 2.15-.99 2.85a3.92 3.92 0 0 1-3 1.15c-1.4 0-2.37-.4-3.05-1.03a4.84 4.84 0 0 1-1-5.43l.13.25c.38.76 1.3 1.07 2.07.7.84-.43 1.08-1.47.72-2.24-.37-.81-.66-1.81-.4-2.6.2-.58.65-1 1.19-1.27ZM4.1 6.18v.01l-.02.03a3.08 3.08 0 0 0-.22.33 5.33 5.33 0 0 0-.74 4.06c.26 1.19.77 2.3 1.65 3.1A5.3 5.3 0 0 0 8.5 15c1.62 0 2.89-.54 3.75-1.47A5.12 5.12 0 0 0 13.5 10c0-.86-.28-1.69-.67-2.46a21.42 21.42 0 0 0-1.35-2.25c-.47-.73-.9-1.4-1.19-2.03A2.77 2.77 0 0 1 10 1.6.5.5 0 0 0 9.5 1c-.42 0-1.12.15-1.79.5a3.3 3.3 0 0 0-1.68 1.84c-.4 1.17.06 2.5.44 3.32.17.38.02.79-.26.93a.54.54 0 0 1-.73-.24l-.53-1.07a.5.5 0 0 0-.84-.1Z" fill="currentColor"></path></svg>
                        <span>Hot</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Text-generation</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>


                  <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="icon-2.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>GPT-4.1</span>
                      <span>•</span>
                      <div
                         style={{
                          color: 'rgb(234, 56, 166)', 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.47 9.83a.92.92 0 0 0 1.4-.46l.35-1.07A1.72 1.72 0 0 1 8.3 7.22l1.09-.35a.92.92 0 0 0-.04-1.75l-1.07-.35A1.7 1.7 0 0 1 7.2 3.7L6.85 2.6a.92.92 0 0 0-.87-.6c-.2 0-.38.05-.53.16a.92.92 0 0 0-.35.46l-.35 1.09A1.71 1.71 0 0 1 3.7 4.77l-1.08.36a.92.92 0 0 0 0 1.74l1.08.35A1.71 1.71 0 0 1 4.78 8.3l.35 1.08c.06.18.18.34.34.45ZM4 6.26 3.15 6l.87-.28A2.72 2.72 0 0 0 5.7 4l.26-.86.28.87a2.7 2.7 0 0 0 1.72 1.71l.88.27-.86.28a2.7 2.7 0 0 0-1.72 1.72l-.26.85-.28-.86A2.7 2.7 0 0 0 4 6.26Zm6.52 7.6c.14.09.3.14.47.14a.81.81 0 0 0 .76-.55l.25-.76a1.09 1.09 0 0 1 .68-.68l.77-.25a.8.8 0 0 0-.02-1.53l-.77-.25a1.08 1.08 0 0 1-.68-.67l-.25-.78A.8.8 0 0 0 11.1 8a.8.8 0 0 0-.88.54l-.25.77a1.1 1.1 0 0 1-.66.67l-.78.26a.8.8 0 0 0-.38 1.22c.1.14.23.24.4.3l.76.25a1.09 1.09 0 0 1 .68.68l.25.77c.06.16.16.3.3.4Zm-.91-2.8L9.44 11l.19-.06a2.09 2.09 0 0 0 1.3-1.32l.05-.18.06.18a2.08 2.08 0 0 0 1.32 1.32l.2.06-.18.06a2.08 2.08 0 0 0-1.32 1.32l-.06.18-.06-.18a2.07 2.07 0 0 0-1.32-1.32Z" fill="currentColor"></path></svg>
                        <span>New</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Multimodal</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>
                </div>


                {/* Row 5: 3 divs (408x82) */}
                <div className="flex gap-4">
                   <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="XAI.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>Grok-3</span>
                      <span>•</span>
                      <div
                        style={{
                          color:'red',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.17 2.38c.28-.14.55-.24.8-.3.02.54.18 1.08.41 1.59a16.63 16.63 0 0 0 1.32 2.25c.46.7.9 1.38 1.24 2.06.35.7.56 1.38.56 2.02 0 1.15-.34 2.15-.99 2.85a3.92 3.92 0 0 1-3 1.15c-1.4 0-2.37-.4-3.05-1.03a4.84 4.84 0 0 1-1-5.43l.13.25c.38.76 1.3 1.07 2.07.7.84-.43 1.08-1.47.72-2.24-.37-.81-.66-1.81-.4-2.6.2-.58.65-1 1.19-1.27ZM4.1 6.18v.01l-.02.03a3.08 3.08 0 0 0-.22.33 5.33 5.33 0 0 0-.74 4.06c.26 1.19.77 2.3 1.65 3.1A5.3 5.3 0 0 0 8.5 15c1.62 0 2.89-.54 3.75-1.47A5.12 5.12 0 0 0 13.5 10c0-.86-.28-1.69-.67-2.46a21.42 21.42 0 0 0-1.35-2.25c-.47-.73-.9-1.4-1.19-2.03A2.77 2.77 0 0 1 10 1.6.5.5 0 0 0 9.5 1c-.42 0-1.12.15-1.79.5a3.3 3.3 0 0 0-1.68 1.84c-.4 1.17.06 2.5.44 3.32.17.38.02.79-.26.93a.54.54 0 0 1-.73-.24l-.53-1.07a.5.5 0 0 0-.84-.1Z" fill="currentColor"></path></svg>
                        <span>Hot</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Text-generation</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>


                  <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="mistral.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>mistralai-Mixtral-8x7B</span>
                      <span>•</span>
                      <div
                         style={{
                          color: 'rgb(234, 56, 166)', 
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.47 9.83a.92.92 0 0 0 1.4-.46l.35-1.07A1.72 1.72 0 0 1 8.3 7.22l1.09-.35a.92.92 0 0 0-.04-1.75l-1.07-.35A1.7 1.7 0 0 1 7.2 3.7L6.85 2.6a.92.92 0 0 0-.87-.6c-.2 0-.38.05-.53.16a.92.92 0 0 0-.35.46l-.35 1.09A1.71 1.71 0 0 1 3.7 4.77l-1.08.36a.92.92 0 0 0 0 1.74l1.08.35A1.71 1.71 0 0 1 4.78 8.3l.35 1.08c.06.18.18.34.34.45ZM4 6.26 3.15 6l.87-.28A2.72 2.72 0 0 0 5.7 4l.26-.86.28.87a2.7 2.7 0 0 0 1.72 1.71l.88.27-.86.28a2.7 2.7 0 0 0-1.72 1.72l-.26.85-.28-.86A2.7 2.7 0 0 0 4 6.26Zm6.52 7.6c.14.09.3.14.47.14a.81.81 0 0 0 .76-.55l.25-.76a1.09 1.09 0 0 1 .68-.68l.77-.25a.8.8 0 0 0-.02-1.53l-.77-.25a1.08 1.08 0 0 1-.68-.67l-.25-.78A.8.8 0 0 0 11.1 8a.8.8 0 0 0-.88.54l-.25.77a1.1 1.1 0 0 1-.66.67l-.78.26a.8.8 0 0 0-.38 1.22c.1.14.23.24.4.3l.76.25a1.09 1.09 0 0 1 .68.68l.25.77c.06.16.16.3.3.4Zm-.91-2.8L9.44 11l.19-.06a2.09 2.09 0 0 0 1.3-1.32l.05-.18.06.18a2.08 2.08 0 0 0 1.32 1.32l.2.06-.18.06a2.08 2.08 0 0 0-1.32 1.32l-.06.18-.06-.18a2.07 2.07 0 0 0-1.32-1.32Z" fill="currentColor"></path></svg>
                        <span>New</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Text-generation</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>


                  <div
                    className="bg-gray-200 shadow-lg text-black transition-transform duration-300 transform hover:scale-105 origin-bottom-left"
                    style={{
                      width: '408px',
                      height: '82px',
                      borderRadius: '12px',
                      padding: '10px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      gap: '8px'
                    }}
                  >
                    {/* 1st line */}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px'
                      }}
                    >
                      <img
                        src="XAI.svg"
                        alt="icon"
                        style={{ width: '24px', height: '24px' }}
                      />
                      <span>Grok-3</span>
                      <span>•</span>
                      <div
                        style={{
                          color:'red',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px'
                        }}
                      >
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8.17 2.38c.28-.14.55-.24.8-.3.02.54.18 1.08.41 1.59a16.63 16.63 0 0 0 1.32 2.25c.46.7.9 1.38 1.24 2.06.35.7.56 1.38.56 2.02 0 1.15-.34 2.15-.99 2.85a3.92 3.92 0 0 1-3 1.15c-1.4 0-2.37-.4-3.05-1.03a4.84 4.84 0 0 1-1-5.43l.13.25c.38.76 1.3 1.07 2.07.7.84-.43 1.08-1.47.72-2.24-.37-.81-.66-1.81-.4-2.6.2-.58.65-1 1.19-1.27ZM4.1 6.18v.01l-.02.03a3.08 3.08 0 0 0-.22.33 5.33 5.33 0 0 0-.74 4.06c.26 1.19.77 2.3 1.65 3.1A5.3 5.3 0 0 0 8.5 15c1.62 0 2.89-.54 3.75-1.47A5.12 5.12 0 0 0 13.5 10c0-.86-.28-1.69-.67-2.46a21.42 21.42 0 0 0-1.35-2.25c-.47-.73-.9-1.4-1.19-2.03A2.77 2.77 0 0 1 10 1.6.5.5 0 0 0 9.5 1c-.42 0-1.12.15-1.79.5a3.3 3.3 0 0 0-1.68 1.84c-.4 1.17.06 2.5.44 3.32.17.38.02.79-.26.93a.54.54 0 0 1-.73-.24l-.53-1.07a.5.5 0 0 0-.84-.1Z" fill="currentColor"></path></svg>
                        <span>Hot</span>
                      </div>
                    </div>

                    {/* 2nd line */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '24px',
                        alignItems: 'center',
                      }}
                    >
                      {/* First div: svg + text inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        {/* svg icon */}
                        <svg fill="currentColor" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm0 2.5a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3Zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5Zm-1-8A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2h-7ZM3 4.5C3 3.67 3.67 3 4.5 3h7c.83 0 1.5.67 1.5 1.5v7c0 .83-.67 1.5-1.5 1.5h-7A1.5 1.5 0 0 1 3 11.5v-7Z" fill="currentColor"></path></svg>
                        {/* nested text div */}
                        <div>Text-generation</div>
                      </div>

                      {/* Second div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor" class="___12fm75w f1w7gpdv fez10in fg4l7m0" aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M7.2 2.1a.9.9 0 0 1 1.6 0l1.53 3.08 3.4.5a.9.9 0 0 1 .5 1.53l-2.46 2.4.58 3.39a.9.9 0 0 1-1.3.95L8 12.35l-3.04 1.6a.9.9 0 0 1-1.3-.95l.57-3.39-2.46-2.4a.9.9 0 0 1 .5-1.53l3.4-.5L7.2 2.1Zm.8.63L6.55 5.67a.9.9 0 0 1-.68.5l-3.25.47 2.35 2.3c.21.2.3.5.26.79l-.56 3.24 2.91-1.53a.9.9 0 0 1 .84 0l2.9 1.53-.55-3.24a.9.9 0 0 1 .26-.8l2.36-2.3-3.26-.46a.9.9 0 0 1-.67-.5L8 2.73Z" fill="currentColor"></path></svg>
                        <div>561</div>
                      </div>

                      {/* Third div: svg + 561 inside nested div */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <svg fill="currentColor"  aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M5.75 3.06A.5.5 0 0 0 5 3.5v9c0 .38.41.62.75.44l8-4.5a.5.5 0 0 0 0-.88l-8-4.5ZM4 3.5a1.5 1.5 0 0 1 2.24-1.3l8 4.5a1.5 1.5 0 0 1 0 2.6l-8 4.5A1.5 1.5 0 0 1 4 12.5v-9Z" fill="currentColor"></path></svg>
                        <div>154</div>
                      </div>
                    </div>

                  </div>
                </div>
              </>
            </div>

            {/* Right: Text */}
            <div className="flex flex-col items-start justify-center p-8 text-white space-y-10 ">              
              <h2 className="text-4xl font-bold">
              Simple Setup
            </h2>

              <p className="text-lg text-gray-200 max-w-lg">
                Get started quickly with over 200 enterprise-ready Azure services
                along with more than 11,000+ models for your next AI app.
              </p>

              <a
                href="#foundry"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all"
              >
                Browse Foundry Models
              </a>
            </div>

          </div>

          {/* Section 2 */}
          <div className="w-full min-h-screen grid grid-cols-1 md:grid-cols-[40%_60%]">
            <div className="flex flex-col items-start justify-center p-8 text-white space-y-10 text-right md:items-end">
              <h2 className="text-4xl font-bold">
                Code with precision
              </h2>

              <p className="text-lg text-gray-200 max-w-lg">
                An easy-to-use, unified API and SDK allows you to build faster and smarter while getting you to production with confidence.
              </p>

              <a
                href="#foundry"
                className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-all"
              >
                Download the Azure AI Foundry SDK
              </a>
            </div>

            {/* Right: Image */}
            <div className="hidden lg:flex lg:w-full lg:h-auto flex items-center justify-start p-8 overflow-hidden order-1 md:order-2 ">
              <img
                src="/3codespage.png"
                alt="Example"
                className="min-w-[150%] h-auto object-cover object-left"
              />
            </div>

          </div>

          {/* Section 3 */}
          <div className="w-full min-h-screen flex flex-col">
            {/* Top: Text */}
            <div className="flex items-center justify-center flex-1 p-8 text-white">
              <h2 className="text-4xl font-bold">Section 3: Text Top + Image Bottom</h2>
            </div>
            {/* Bottom: Image */}
            <div className="flex items-center justify-center flex-1 p-8">
              <img
                src="/your-image3.png"
                alt="Example"
                className="max-w-full h-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

      </>


    </>
  );
}
