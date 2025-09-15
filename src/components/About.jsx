export default function About() {
  return (
    <section id="about" className="py-16 px-6 bg-zinc-950">
      <div className="hidden max-w-6xl mx-auto">
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

      {/*2nd */}
      <div className="max-w-6xl mx-auto">
        {/* About Us (Top Center) */}
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-start p-4">
          {/* Left Side - H1 only */}
          <div>
            <h1 className="text-6xl font-semibold text-left text-gray-300 max-w-xl leading-tight">
              <span className="text-6xl mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Innovative</span> Software Development Solutions & Automotive Functional <span className="text-6xl mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Safety</span> Consulting
            </h1>
          </div>

          {/* Right Side - Paragraph + Offices */}
          <div className="flex flex-col justify-center items-start p-4">
            <p className="text-xl text-left text-gray-300 p-6 bg-zinc-800/80 rounded-lg">
              Empowering businesses with cutting-edge Microsoft technologies and expert Azure development services,
              as well as Automotive Functional Safety Consulting.
            </p>

            <div className="grid gap-8">
              {/* Office 1 */}
              <div className="p-6 mt-7 text-left rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
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
         
        </div>
         <div className="w-full flex flex-col items-center mt-12">
            {/* Centered Title */}
            <h1 className="text-4xl font-semibold text-gray-300 text-center mb-10">
              ML Cloud Design Labs
            </h1>

            {/* Embedded Google Map - Full Width */}
            <div className="w-full">
              <iframe
                title="Toronto Downtown Office Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3048467396764!2d-79.37753668450389!3d43.67278197912073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3a5b1e3f3%3A0xf00ef622f9e9630!2s565%20Sherbourne%20St%2C%20Toronto%2C%20ON%20M4X%201W7%2C%20Canada!5e0!3m2!1sen!2sus!4v1631123456789!5m2!1sen!2sus"
                width="100%"
                height="500"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg border-2 border-zinc-700"
              ></iframe>
            </div>
          </div>
      </div>

    </section>
  );
}
