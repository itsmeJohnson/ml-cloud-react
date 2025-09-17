import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules'; // ✅ Correct for Swiper v11

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CloudCarousel = () => {
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
                            {/* left side text */}
                            <div className="w-full md:w-1/2 h-full animate-slide-up text-white flex flex-col items-start justify-center gap-6">
                                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3">
                                    Azure Development Expertise
                                </h2>

                                <p className="text-gray-300 text-lg px-3">
                                    Certified Azure developer focused on scalable cloud solutions and efficient application development.                                </p>
                            </div>

                            {/* right side image */}
                            <img
                                src="/cd1.jpg"
                                alt="Functional Safety "
                                className="w-full md:w-1/2 rounded-lg object-cover animate-slide-up"
                            />
                        </div>
                    </div>

                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/4">
                            {/* left side text */}
                            <div className="w-full md:w-1/2 h-full animate-slide-up text-white flex flex-col items-start justify-center gap-6">
                                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3">
                                    DevOps Implementation Services
                                </h2>

                                <p className="text-gray-300 text-lg px-3">
                                    Streamlining your development processes with proven Azure DevOps strategies for maximum efficiency.                                             </p>
                            </div>

                            {/* right side image */}
                            <img
                                src="/cd2.jpg"
                                alt="Functional Safety "
                                className="w-full md:w-1/2 rounded-lg object-cover animate-slide-up"
                            />
                        </div>
                    </div>

                </SwiperSlide>



                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="flex justify-center">
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-3/4">
                            {/* left side text */}
                            <div className="w-full md:w-1/2 h-full animate-slide-up text-white flex flex-col items-start justify-center gap-6">
                                <h2 className="text-2xl font-semibold mb-4 px-3 pt-3">
                                    Continuous Learning Commitment                                </h2>

                                <p className="text-gray-300 text-lg px-3">
                                    Commitment to learning and excellence through continuous skill enhancement and up-to-date methodologies.</p>                            </div>

                            {/* right side image */}
                            <img
                                src="/cd3.jpg"
                                alt="Functional Safety "
                                className="w-full md:w-1/2 rounded-lg object-cover animate-slide-up"
                            />
                        </div>
                    </div>

                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default CloudCarousel;
