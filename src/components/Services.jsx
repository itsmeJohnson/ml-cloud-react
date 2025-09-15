import Carousel from "./Carousel";
import CloudCarousel from "./cloudCarousel";
import TabComponent from "./TabComponent";


export default function Services() {
  return (
    <section id="services" className="py-16 px-6 bg-zinc-950">

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Our Services
        </h2>
        <div>
          <TabComponent />
        </div>

      </div>

      <div className="pt-14 pl-8 flex flex-col items-start ">
        <h2 className="text-4xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
          Azure Solutions
        </h2>
        <p className="text-gray-300 mb-4 text-2xl">
          Expertise in Microsoft technologies for innovative software development.
        </p>

        <div className="flex flex-col sm:flex-row space-x-2 sm:space-x-4 mr-8 sm:mr-0">
          <div className="mt-7 w-full sm:w-1/2 p-8 h-[200px]  flex flex-col items-start justify-center bg-gray-800 hover:bg-gray-700 rounded-lg ">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">DevOps Practices</h2>
            <p className="text-lg md:text-xl text-gray-200">Implementing best practices in Azure DevOps for streamlined workflows.</p>
          </div>
          <div className="mt-7 w-full sm:w-1/2 p-8 h-[200px] flex flex-col items-start justify-center bg-gray-800 hover:bg-gray-700 rounded-lg">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">Certified Experts</h2>
            <p className="text-lg md:text-xl text-gray-200">Microsoft certified professionals dedicated to enhancing your cloud development experience.</p>
          </div>
        </div>
      </div>


    </section >
  );
}
