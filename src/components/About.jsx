export default function About() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 bg-zinc-950">
      <div className="max-w-6xl mx-auto flex flex-col space-y-12">

        {/* About Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          About Us
        </h2>

        {/* Two Column Layout */}
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Left Side */}
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 leading-tight">
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">Innovative</span> 
              Software Development Solutions & Automotive Functional 
              <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent"> Safety</span> Consulting
            </h1>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex flex-col space-y-6">
            <p className="text-lg sm:text-xl text-gray-300 p-4 bg-zinc-800/80 rounded-lg">
              Empowering businesses with cutting-edge Microsoft technologies and expert Azure development services, as well as Automotive Functional Safety Consulting.
            </p>

            {/* Offices */}
            <div className="grid gap-4 sm:gap-6">
              <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold text-blue-400 mb-1">Toronto Downtown Office</h3>
                <p className="text-gray-300 text-sm sm:text-base">2016 565 Sherbourne Street M4X1W7</p>
                <p className="text-gray-400 text-sm sm:text-base">Hours: 9 AM - 5 PM EST</p>
              </div>
              <div className="p-4 sm:p-6 rounded-xl bg-zinc-900/50 hover:bg-zinc-800/80 shadow-lg transition-all hover:scale-105">
                <h3 className="text-lg sm:text-xl font-semibold text-pink-400 mb-1">Eglinton Business Center</h3>
                <p className="text-gray-300 text-sm sm:text-base">1129-120 Eglinton Business Center Toronto M4P 1E2</p>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Map */}
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 text-center">
            ML Cloud Design Labs
          </h1>

          <div className="w-full">
            <iframe
              title="Toronto Downtown Office Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.3048467396764!2d-79.37753668450389!3d43.67278197912073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d3a5b1e3f3%3A0xf00ef622f9e9630!2s565%20Sherbourne%20St%2C%20Toronto%2C%20ON%20M4X%201W7%2C%20Canada!5e0!3m2!1sen!2sus!4v1631123456789!5m2!1sen!2sus"
              width="100%"
              height="300"
              className="rounded-lg border-2 border-zinc-700 sm:h-64 md:h-80 lg:h-[500px]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
}
