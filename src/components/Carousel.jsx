import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // ✅ Correct for Swiper v11

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/4">

              {/* Left side image */}
              <img
                src="/fs1.jpg"
                alt="Functional Safety "
                className="w-full md:w-1/2 rounded-lg object-cover animate-slide-up"
              />

              {/* Right side text */}
              <div className="w-full md:w-1/2 h-full animate-slide-up text-white flex flex-col items-start justify-center gap-6">
                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3 ">
                  Functional Safety Concept Development
                </h2>
                <ul className="list-disc list-inside pl-6 space-y-3 text-gray-300 text-sm custom-bullet">
                  <li>Item Definition</li>
                  <li>Hazard Analysis and Risk Assessment (HARA)</li>
                  <li>Functional Safety Concept (FSC)</li>
                  <li>Impact Analysis</li>
                </ul>
              </div>
            </div>
          </div>

        </SwiperSlide>

        {/* Slide 2 */}
         <SwiperSlide>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/4 pt-5">

              {/* Left side image */}
              
              <img
                src="/fs2.jpg"
                alt="Functional Safety "
                className="w-full md:w-1/2 h-80  rounded-lg object-cover"
              />

              {/* Right side text */}
              <div className="w-full md:w-1/2 h-full text-white flex flex-col items-start justify-center gap-6">
                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3 ">
                  System Design Safety and Software Safety Development
                </h2>
                <ul className="list-disc list-inside pl-6 space-y-3 text-gray-300 text-sm custom-bullet">
                  <li>Technical Safety Concept & Safety Architecture</li>
                  <li>Safety Mechanism Documentation</li>
                  <li>Software Safety Analysis (SSA)</li>
                  <li>Freedom From Interference (FFI) assessment</li>
                </ul>
              </div>
            </div>
          </div>

        </SwiperSlide>



        {/* Slide 3 */}
         <SwiperSlide>
          <div className="flex justify-center">
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/4">

              {/* Left side image */}
              <img
                src="/fs3.jpg"
                alt="Functional Safety "
                className="w-full md:w-1/2 rounded-lg object-cover"
              />

              {/* Right side text */}
              <div className="w-full md:w-1/2 h-full text-white flex flex-col items-start justify-center gap-2">
                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3">
                  Functional Safety Analysis and  General Functional Safety Lifecycle Support
                </h2>
                <ul className="list-disc list-inside pl-6 space-y-3 text-gray-300 text-sm custom-bullet">
                  <li>Failure Modes and Effects Analysis (FMEA & FMEA-MSR)</li>
                  <li>Fault Tree Analysis (FTA)</li>
                  <li>Dependent Failure Analysis (DFA)</li>
                  <li>Functional Safety Management</li>
                  <li>Safety Plan creation</li>
                  <li>Development Interface Agreement (DIA)</li>
                  <li>Safety Case development</li>
                </ul>
              </div>
            </div>
          </div>

        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Carousel;
