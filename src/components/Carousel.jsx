import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Carousel = () => {
  const slides = [
    {
      img: "/fs1.jpg",
      title: "Functional Safety Concept Development",
      items: [
        "Item Definition",
        "Hazard Analysis and Risk Assessment (HARA)",
        "Functional Safety Concept (FSC)",
        "Impact Analysis",
      ],
    },
    {
      img: "/fs2.jpg",
      title: "System Design Safety and Software Safety Development",
      items: [
        "Technical Safety Concept & Safety Architecture",
        "Safety Mechanism Documentation",
        "Software Safety Analysis (SSA)",
        "Freedom From Interference (FFI) assessment",
      ],
    },
    {
      img: "/fs3.jpg",
      title: "Functional Safety Analysis and General Functional Safety Lifecycle Support",
      items: [
        "Failure Modes and Effects Analysis (FMEA & FMEA-MSR)",
        "Fault Tree Analysis (FTA)",
        "Dependent Failure Analysis (DFA)",
        "Functional Safety Management",
        "Safety Plan creation",
        "Development Interface Agreement (DIA)",
        "Safety Case development",
      ],
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={15}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-4/5 mx-auto">
              {/* Left side image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full md:w-1/2 rounded-lg object-cover max-h-80"
              />

              {/* Right side text */}
              <div className="w-full md:w-1/2 text-white flex flex-col items-start justify-center gap-4">
                <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2 px-4 sm:px-6 pt-3">
                  {slide.title}
                </h2>
                <ul className="list-disc list-inside pl-6 space-y-2 text-gray-300 text-sm sm:text-base">
                  {slide.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
