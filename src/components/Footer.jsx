export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-gray-400 py-10 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left: Company Info */}
        <div className="text-center md:text-left space-y-1 sm:space-y-2">
          <p className="text-white font-semibold">© 2024 ML Cloud Design Labs Inc.</p>
          <p className="text-sm">All rights reserved.</p>
          <p className="text-sm">2016-565 Sherbourne Street Toronto M4X1W7</p>
          <p className="text-sm">1129-120 Eglinton Business Center Toronto M4P 1E2</p>
        </div>

        {/* Right: Links */}
        <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-6 text-sm">
          <a
            href="https://go.microsoft.com/fwlink/?linkid=521839"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Privacy &amp; Cookies
          </a>
          <a
            href="https://aka.ms/aistudio/terms"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Terms &amp; Conditions
          </a>
          <a
            href="https://go.microsoft.com/fwlink/?linkid=2196228"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Trademarks
          </a>
        </div>
      </div>
    </footer>
  );
}
