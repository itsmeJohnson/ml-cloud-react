import React, { useState } from 'react';
import Carousel from './Carousel';
import CloudCarousel from './cloudCarousel';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => setActiveTab(tabIndex);

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Tab navigation */}
            <div className="flex flex-wrap justify-center gap-2 mb-4 items-center">
                <button
                    className={`text-base sm:text-lg md:text-xl py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
                        activeTab === 1
                            ? 'bg-gray-700 text-[#0078D4] font-semibold'
                            : 'bg-gray-700 text-white'
                    }`}
                    onClick={() => handleTabClick(1)}
                >
                    Functional Safety Support
                </button>
                <button
                    className={`text-base sm:text-lg md:text-xl py-2 px-4 sm:px-6 rounded-full transition-all duration-300 ${
                        activeTab === 2
                            ? 'bg-gray-700 text-[#f472b6] font-semibold'
                            : 'bg-gray-700 text-white'
                    }`}
                    onClick={() => handleTabClick(2)}
                >
                    Cloud Development Solutions
                </button>
            </div>

            {/* Tab content */}
            <div className="pt-6 flex flex-col items-center w-full max-w-full">
                {activeTab === 1 && (
                    <div className="tab-pane w-full">
                        <h2 className="text-base sm:text-xl lg:text-3xl font-semibold text-center mb-8 px-2 sm:px-4 md:px-8 lg:px-16">
                            End-to-End functional safety support tailored for OEMs, Tier-1s, and startups.
                        </h2>
                        <div className="w-full">
                            <Carousel />
                        </div>
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="tab-pane w-full">
                        <h2 className="text-base sm:text-xl lg:text-3xl font-semibold text-center mb-8 px-2 sm:px-4 md:px-8 lg:px-16">
                            Providing expert software development using Microsoft technologies for over 13 years of experience.
                        </h2>
                        <div className="w-full">
                            <CloudCarousel />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabComponent;
