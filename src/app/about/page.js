import React from 'react';
import Link from 'next/link';
import { Code, Database, Globe, Award, GraduationCap, MapPin, Mail, Phone, Target, Zap, Users, Lightbulb } from 'lucide-react';

const About = () => {
    const whyHireMe = [
        {
            icon: <Code className="w-8 h-8" />,
            title: "Full Stack Expertise",
            description: "Complete MERN stack proficiency with hands-on experience in building scalable applications from frontend to backend."
        },
        {
            icon: <Zap className="w-8 h-8" />,
            title: "Performance Focused",
            description: "Specialized in optimizing application performance through efficient state management and modern development practices."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "User-Centric Approach",
            description: "Strong focus on creating intuitive user experiences with responsive design and accessibility best practices."
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Problem Solver",
            description: "Proven ability to tackle complex technical challenges and deliver robust solutions using modern web technologies."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Continuous Learner",
            description: "Committed to staying updated with latest technologies and best practices through continuous learning and certification."
        },
        {
            icon: <Globe className="w-8 h-8" />,
            title: "Modern Tech Stack",
            description: "Proficient in cutting-edge technologies including React.js, Node.js, MongoDB, and secure OAuth authentication systems."
        }
    ];
    const skills = {
        frontend: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS'],
        backend: ['Node.js', 'Express.js'],
        database: ['MongoDB'],
        tools: ['Postman', 'REST API', 'OAuth (Google, GitHub)']
    };

    const certifications = [
        { name: 'MongoDB Bootcamp', provider: 'Letsupgrade', date: 'May 2025' },
        { name: 'Node.js Bootcamp', provider: 'Letsupgrade', date: 'April 2025' },
        { name: 'JavaScript Bootcamp', provider: 'Letsupgrade', date: 'March 2025' },
        { name: 'HTML & CSS Bootcamp', provider: 'Letsupgrade', date: 'March 2025' },
        { name: 'Getting Started with Full Stack Java Development', provider: 'Simplilearn', date: 'February 2025' },
        { name: 'JavaScript for Beginners', provider: 'Simplilearn', date: 'December 2024' }
    ];

    const education = [
        { degree: 'Bachelor of Computer Applications', institution: 'IGNOU', status: 'Expected Completion: July 2026' },
        { degree: 'Senior Secondary (12th Grade)', institution: 'HBSE Board', status: '2023' },
        { degree: '10th Grade', institution: 'HBSE Board', status: '2021' }
    ];

    return (
        <>
            <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
            <div className="min-h-screen bg-gray-900 text-white py-16 px-4 max">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            About Me
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-8"></div>
                        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                            Aspiring Full Stack MERN Developer with strong practical experience in building responsive,
                            scalable web applications using MongoDB, Express.js, React.js, and Node.js.
                        </p>
                    </div>

                    {/* Personal Info & Introduction */}
                    <div className="grid lg:grid-cols-3 gap-12 mb-16">
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
                                <h2 className="text-3xl font-bold mb-6 text-blue-400">
                                    <Code className="inline-block mr-3" size={32} />
                                    Who I Am
                                </h2>
                                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                    I&apos;m a passionate Full Stack Developer specializing in the MERN stack with a strong foundation
                                    in modern web technologies. I love creating user-focused features, integrating APIs, and
                                    optimizing performance through effective state management.
                                </p>
                                <p className="text-gray-300 text-lg leading-relaxed">
                                    My expertise spans from crafting responsive frontends with React.js and Tailwind CSS to
                                    building robust backends with Node.js and Express, all while ensuring secure data management
                                    with MongoDB and OAuth authentication systems.
                                </p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-bold mb-4 text-purple-400">Contact Info</h3>
                                <div className="space-y-3">
                                    <div className="flex items-center text-gray-300">
                                        <MapPin className="mr-3 text-blue-400" size={20} />
                                        <span>Faridabad, Haryana</span>
                                    </div>
                                   
                                    <div className="flex items-center text-gray-300">
                                        <Mail className="mr-3 text-blue-400" size={20} />
                                        <span>this@princebidhuri.com</span>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700">
                                <h3 className="text-xl font-bold mb-4 text-green-400">Quick Stats</h3>
                                <div className="space-y-2">
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Focus:</span> MERN Stack
                                    </div>
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Experience:</span> Full Stack Development
                                    </div>
                                    <div className="text-gray-300">
                                        <span className="font-semibold text-white">Speciality:</span> React.js & Node.js
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold mb-8 text-center">
                            <Globe className="inline-block mr-3 text-blue-400" size={32} />
                            Technical Skills
                        </h2>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-blue-500 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-blue-400">Frontend</h3>
                                <div className="space-y-2">
                                    {skills.frontend.map((skill, index) => (
                                        <span key={index} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-green-500 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-green-400">Backend</h3>
                                <div className="space-y-2">
                                    {skills.backend.map((skill, index) => (
                                        <span key={index} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-purple-500 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-purple-400">
                                    <Database className="inline-block mr-2" size={20} />
                                    Database
                                </h3>
                                <div className="space-y-2">
                                    {skills.database.map((skill, index) => (
                                        <span key={index} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-yellow-500 transition-colors">
                                <h3 className="text-xl font-bold mb-4 text-yellow-400">Tools & Others</h3>
                                <div className="space-y-2">
                                    {skills.tools.map((skill, index) => (
                                        <span key={index} className="inline-block bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm mr-2 mb-2">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Education & Certifications */}
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Education */}
                        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
                            <h2 className="text-3xl font-bold mb-6 text-blue-400">
                                <GraduationCap className="inline-block mr-3" size={32} />
                                Education
                            </h2>
                            <div className="space-y-6">
                                {education.map((edu, index) => (
                                    <div key={index} className="border-l-4 border-blue-400 pl-6">
                                        <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                                        <p className="text-gray-400 mb-1">{edu.institution}</p>
                                        <p className="text-gray-500 text-sm">{edu.status}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Certifications */}
                        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl border border-gray-700">
                            <h2 className="text-3xl font-bold mb-6 text-purple-400">
                                <Award className="inline-block mr-3" size={32} />
                                Certifications
                            </h2>
                            <div className="space-y-4 max-h-96 overflow-y-auto scrollbar-hide">
                                {certifications.map((cert, index) => (
                                    <div key={index} className="bg-gray-700 rounded-lg p-4 border-l-4 border-purple-400">
                                        <h3 className="font-semibold text-white text-lg mb-1">{cert.name}</h3>
                                        <p className="text-gray-400 text-sm mb-1">{cert.provider}</p>
                                        <p className="text-gray-500 text-xs">{cert.date}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Why Should You Hire Me Section */}
                    <div className="mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                                Why Should You Hire Me?
                            </h2>
                            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-500 mx-auto mb-6"></div>
                            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                                Here&apos;s what makes me the perfect fit for your next project
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {whyHireMe.map((item, index) => (
                                <div key={index} className="bg-gray-800 rounded-xl p-6 shadow-2xl border border-gray-700 hover:border-green-500 transition-all duration-300 hover:transform hover:scale-105 text-center">
                                    <div className="text-green-400 mb-4 flex justify-center">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                                    <p className="text-gray-300 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="text-center mt-16">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 shadow-2xl">
                            <h2 className="text-3xl font-bold mb-4">Let&apos;s Build Something Amazing Together</h2>
                            <p className="text-xl mb-6 opacity-90">
                                Ready to bring your ideas to life with modern web technologies
                            </p>
                            <div className="space-x-4">
                                <Link href={'/'} className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"  >
                                    View My Projects
                                </Link>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;