import React from 'react'

const OurService = () => {
  return (
    <section className="bg-gradient-to-b from-primary-50 to-white dark:from-primary-900 dark:to-primary-800">
        <div className="container px-6 py-10 mx-auto">
            <h1 className="text-2xl font-semibold text-center capitalize lg:text-3xl mb-12">
                <span className="relative inline-block">
                    <span className="relative z-10 inline-block bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 bg-clip-text text-transparent">
                        explore our awesome
                    </span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                </span>
                <br /> 
                <span className="bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Services</span>
            </h1>

        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Copy & paste components</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Zero Configuration</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Simple & clean designs</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Simple & clean designs</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>

            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Copy & paste components</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>
            
            <div className="flex flex-col items-center p-6 space-y-3 text-center rounded-xl bg-white dark:bg-primary-800/50 hover:bg-gradient-to-br hover:from-primary-50 hover:to-accent-50/20 dark:hover:from-primary-800 dark:hover:to-accent-800/50 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl group">
                <span className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 text-white rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h2 className="text-xl font-semibold capitalize text-primary-900 dark:text-primary-100 group-hover:text-primary-700">Copy & paste components</h2>

                <p className="text-primary-600 dark:text-primary-300 group-hover:text-primary-700">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet
                </p>
            </div>
        </div>
    </div>
</section>
  );
}

export default OurService