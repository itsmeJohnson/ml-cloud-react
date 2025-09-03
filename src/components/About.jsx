export default function About() {
    return (
      <section id="about" className="py-16 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
            About Us
          </h2>
  
          <p className="text-lg text-center text-gray-300 max-w-3xl mx-auto mb-12">
            Empowering businesses with cutting-edge Microsoft technologies and expert Azure development services,
            as well as Automotive Functional Safety Consulting.
          </p>
  
          <div className="grid md:grid-cols-2 gap-8">
            {/* Office 1 */}
            <div className="p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-blue-400 mb-2">Toronto Downtown Office</h3>
              <p className="text-gray-300">2016 565 Sherbourne Street M4X1W7</p>
              <p className="text-gray-400">Hours: 9 AM - 5 PM EST</p>
            </div>
  
            {/* Office 2 */}
            <div className="p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
              <h3 className="text-xl font-semibold text-pink-400 mb-2">Eglinton Business Center</h3>
              <p className="text-gray-300">1129-120 Eglinton Business Center Toronto M4P 1E2</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  