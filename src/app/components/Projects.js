import React from 'react'
import Link from 'next/link'

const Projects = () => {
    return (
        <>
            <section className="pb-16 lg:py-24" id="projects">
                <div className="container mx-auto px-4">
                    <div className="flex justify-center">
                        <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-purple-500 to-sky-400 text-center text-transparent bg-clip-text">
                            Real-world Results
                        </p>
                    </div>
                    <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 text-white">Featured Projects</h2>
                    <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
                        See how I transformed concepts into engaging digital experiences
                    </p>

                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>Link Shortener</span>
                                        <span>•</span>
                                        <span>2025</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">Profile & URL Shortening App</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Integrated Google/GitHub OAuth</span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Users can manage their links and profile dashboard</span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>All data handled securely with MongoDB</span>
                                        </li>
                                    </ul>
                                    <Link href="/more" >
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>More Detils</span>
                                        </button>
                                    </Link>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/gifBitlinks.gif"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ANOTHER password manager */}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                                // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>React Password Manager</span>
                                        <span>•</span>
                                        <span>2025</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">React Password Manager</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Full-stack password manager built with React (Vite), Redux, Node.js, Express, and CRUDCRUD API.
                                            </span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Implemented OAuth authentication using Google and GitHub.
                                            </span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Axios used for frontend-backend communication.
                                            </span>
                                        </li>
                                    </ul>
                                    <a href="https://github.com/Gteck45/Projects/tree/main/PasswordUsingAll" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Source Code</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/Passop.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another  calculator*/}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>Calculator Application
                                        </span>
                                        <span>•</span>
                                        <span>2025</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">Calculator Application
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Built with Next.js for basic arithmetic operations and responsive design.

                                            </span>
                                        </li>

                                    </ul>
                                    <a href="https://github.com/Gteck45/Projects/tree/main/calculator" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Source Code</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/Calcu.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another spotify */}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>Music Player
                                        </span>
                                        <span>•</span>
                                        <span>2024</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">Spotify Clone (Using HTML , CSS and Js )                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Frontend music player built using HTML, CSS, and JavaScript.</span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Replicated Spotify UI with audio controls, responsive design, and interactive track listing.</span>
                                        </li>

                                    </ul>
                                    <a href="https://songs.princebidhuri.com" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Live</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/spoti.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another todo */}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>ToDo List
                                        </span>
                                        <span>•</span>
                                        <span>2025</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">ToDo List Application</h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>React app with Tailwind CSS and LocalStorage for task persistence. </span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>CRUD features with real-time updates and clean UI.</span>
                                        </li>

                                    </ul>
                                    <a href="https://github.com/Gteck45/Projects/tree/main/ToDo%20list%20using%20react" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Source Code</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/iTask.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another weather  */}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>Weather

                                        </span>
                                        <span>•</span>
                                        <span>2025</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">Weather Application
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Built with React and Next.js, integrated with WeatherAPI.com </span>
                                        </li>
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Searchable forecast with detailed weather stats using Tailwind CSS</span>
                                        </li>

                                    </ul>
                                    <a href="https://github.com/Gteck45/Projects/tree/main/Weather%20using%20nextjs" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Source Code</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/weather.gif"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* another Link Checker */}
                    <div className="flex flex-col gap-20 mt-10 md:mt-20">
                        <div className="bg-gray-800 relative overflow-hidden rounded-3xl px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20">
                            <div
                                className="absolute inset-0 -z-10 opacity-5"
                            // style={{ backgroundImage: "url(https://img.freepik.com/free-vector/smiling-young-man-illustration_1308-174669.jpg)" }}
                            ></div>
                            <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                                <div className="lg:pb-16">
                                    <div className="bg-gradient-to-r from-purple-500 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                                        <span>Utility

                                        </span>
                                        <span>•</span>
                                        <span>2024</span>
                                    </div>
                                    <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5 text-white">Link Checker Tool
                                    </h3>
                                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                                    <ul className="flex flex-col mt-4 gap-4 md:mt-5">
                                        <li className="flex text-sm md:text-base text-white/50 gap-2">
                                            <span>Tool built using HTML/CSS/JavaScript to check accessibility of media URLs in real-time.</span>
                                        </li>

                                    </ul>
                                    <a href="https://this.princebidhuri.com" target="_blank" rel="noreferrer">
                                        <button className="cursor-pointer bg-white mt-8 inline-flex items-center justify-center text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold">
                                            <span>Live</span>
                                        </button>
                                    </a>
                                </div>
                                <div className="relative flex items-center justify-center ">
                                    <img
                                        alt="Project Screenshot"
                                        className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none rounded-lg pb-3"
                                        loading="lazy"
                                        decoding="async"
                                        src="/image.png"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects