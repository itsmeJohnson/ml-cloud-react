import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CloudCarousel = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={15}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                {[{
                    title: "Azure Development Expertise",
                    text: "Certified Azure developer focused on scalable cloud solutions and efficient application development.",
                    img: "/cd1.jpg"
                }, {
                    title: "DevOps Implementation Services",
                    text: "Streamlining your development processes with proven Azure DevOps strategies for maximum efficiency.",
                    img: "/cd2.jpg"
                }, {
                    title: "Continuous Learning Commitment",
                    text: "Commitment to learning and excellence through continuous skill enhancement and up-to-date methodologies.",
                    img: "/cd3.jpg"
                }].map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col md:flex-row items-center gap-6 w-full md:w-4/5 mx-auto">
                            {/* Left side text */}
                            <div className="w-full md:w-1/2 text-white flex flex-col items-start justify-center gap-4">
                                <h2 className="text-xl sm:text-2xl md:text-2xl font-semibold mb-2">
                                    {item.title}
                                </h2>
                                <p className="text-base sm:text-lg text-gray-300">
                                    {item.text}
                                </p>
                            </div>

                            {/* Right side image */}
                            <img
                                src={item.img}
                                alt={item.title}
                                className="w-full md:w-1/2 rounded-lg object-cover"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default CloudCarousel;
