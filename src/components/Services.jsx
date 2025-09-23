import Carousel from "./Carousel";
import CloudCarousel from "./cloudCarousel";
import TabComponent from "./TabComponent";

export default function Services() {
  return (
    <section id="services" className="py-12 px-4 sm:px-6 md:px-8 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Our Services
        </h2>

        {/* Tabs */}
        <div className="mb-12">
          <TabComponent />
        </div>
      </div>

      {/* Azure Solutions */}
      <div className="pt-12 px-4 sm:px-6 md:px-8 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Azure Solutions
        </h2>
        <p className="text-gray-300 mb-8 text-base sm:text-lg md:text-xl text-center max-w-3xl">
          Expertise in Microsoft technologies for innovative software development.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 w-full max-w-4xl">
          <div className="mt-4 sm:mt-0 w-full sm:w-1/2 p-6 sm:p-8 h-auto sm:h-[200px] flex flex-col justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">
              DevOps Practices
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              Implementing best practices in Azure DevOps for streamlined workflows.
            </p>
          </div>

          <div className="mt-4 sm:mt-0 w-full sm:w-1/2 p-6 sm:p-8 h-auto sm:h-[200px] flex flex-col justify-center bg-gray-800 hover:bg-gray-700 rounded-lg transition-all">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-white">
              Certified Experts
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200">
              Microsoft certified professionals dedicated to enhancing your cloud development experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
