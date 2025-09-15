import React, { useState } from 'react';
import Carousel from './Carousel';
import CloudCarousel from './cloudCarousel';

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState(1); // Default active tab is 1

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Tab navigation */}
            <div className="flex space-x-4 mb-4 justify-center items-center">
                <div className='p-2 bg-gray-700 rounded-full'>
                    <button
                        className={`text-xl py-2 px-6 cursor-pointer transition-all duration-300 ${activeTab === 1
                            ? 'text-[#0078D4] font-semibold'
                            : 'text-white'
                            }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Functional Safety Support
                    </button>
                </div>
                <div className='p-2 bg-gray-700 rounded-full'>
                    <button
                        className={`text-xl py-2 px-6 cursor-pointer transition-all duration-300 ${activeTab === 2
                            ? 'text-[#f472b6] font-semibold'
                            : 'text-white'
                            }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Cloud Development Solutions
                    </button>
                </div>
            </div>

            {/* Tab content */}
            <div className="pt-6 space-y-4 flex justify-center flex-col items-center">
                {activeTab === 1 && (
                    <div className="tab-pane w-full">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 px-4 md:px-8 lg:px-16">
                            End-to-End functional safety support tailored for OEMs, Tier-1s, and startups.
                        </h2>
                        <Carousel />
                    </div>
                )}

                {activeTab === 2 && (
                    <div className="tab-pane w-full">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-center mb-8 px-4 md:px-8 lg:px-16">
                            Providing expert software development using Microsoft technologies for over 13 years of experience.
                        </h2>
                        <CloudCarousel />
                    </div>
                )}
            </div>
        </div>

    );
};

export default TabComponent;
