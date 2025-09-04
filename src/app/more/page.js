"use client"
import React from 'react'

const page = () => {
    return (
        <section className="py-20 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white min-h-screen">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    Link Shortener & Profile Sharing App
                </h1>
                
                {/* Hero Section with Text and Image */}
                <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
                    <div className="space-y-6 flex-1 text-gray-300 text-lg leading-relaxed">
                        <p className="text-xl text-gray-200 font-medium">
                            This application is designed to streamline how users create, manage, and share short links tied to a personal profile. Every user is assigned a unique username upon registration, ensuring easy access and shareability of public-facing content.
                        </p>

                        <p>
                            All link shortening is handled securely on the server side using Next.js API routes, ensuring fast and reliable responses with minimal exposure to client-side vulnerabilities. The app integrates with MongoDB to persist user data and links efficiently.
                        </p>

                        <p>
                            Users can authenticate via Google or GitHub using OAuth, enabling a frictionless and secure sign-in experience. Once logged in, they gain access to a personal dashboard where they can view, manage, and delete their generated short links.
                        </p>

                        <p>
                            The customizable profile section allows users to set their bio, upload a profile picture, and add social links, which are displayed on a clean, shareable page. Whether you&apos;re an individual promoting your portfolio or a business organizing shareable resources, this app offers an elegant and modern solution.
                        </p>

                        <p>
                            The entire frontend is built with responsive and utility-first Tailwind CSS, ensuring a seamless user experience across devices. Coupled with Next.js and MongoDB, the application is scalable, performant, and production-ready.
                        </p>
                    </div>
                    
                    {/* Responsive Image Container */}
                    <div className="flex-1 max-w-lg lg:max-w-none">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-gray-700 bg-gray-800">
                            <img 
                                src='/gifBitlinks.gif' 
                                alt='Link Shortener App Demo' 
                                className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* Features and Tech Stack */}
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Key Features</h2>
                        </div>
                        <ul className="space-y-4 text-gray-300">
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Secure link shortening handled server-side via Next.js API routes</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>OAuth authentication using Google and GitHub</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Each user gets a default unique username</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Fully customizable profile page (bio, picture, social links)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Dashboard to manage all generated links (view/delete)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Public or private profile options for user control</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>Mobile-first responsive UI using Tailwind CSS</span>
                            </li>
                            <li className="flex items-start">
                                <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                <span>MongoDB integration for secure and scalable data storage</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300">
                        <div className="flex items-center mb-6">
                            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mr-4">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                </svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Technology Stack</h2>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-4 rounded-xl text-center font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105">
                                Next.js
                            </div>
                            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-4 rounded-xl text-center font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105">
                                Tailwind CSS
                            </div>
                            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-4 rounded-xl text-center font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105">
                                MongoDB
                            </div>
                            <div className="bg-gradient-to-r from-gray-700 to-gray-600 px-6 py-4 rounded-xl text-center font-semibold text-white hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105">
                                OAuth
                            </div>
                        </div>
                        <div className="mt-6 text-center">
                            <div onClick={() => window.open('https://profileshorten.gteck45.cloud/', '_blank')} className="inline-flex items-center px-4 py-2 bg-gradient-to-r cursor-pointer from-blue-500 to-purple-600 rounded-full text-white font-medium">
                                <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                Live Demo
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
              
            </div>
        </section>
    )
}

export default page