import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import project1 from '../assets/Restaurant.png'
import project2 from '../assets/Pos.png'
import project3 from '../assets/Task.png'


const Projects = ({ darkMode }) => {
    const projects = [
        {
            id: 1,
            title: 'Restaurant Management System',
            desc: 'A web-based system for managing restaurant operations including orders, menu items, billing, inventory, and staff management.',
            image: project1,
            tags: ['Laravel', 'PHP', 'MySql'],
            codeLink: 'https://github.com/Dulara-Sasanka/Laravel.git'

        },
        {
            id: 2,
            title: 'POS System (Group)',
            desc: 'A Point of Sale system designed to handle sales transactions, generate invoices, manage products, and track daily revenue efficiently.',
            image: project2,
            tags: ['Laravel', 'PHP', 'MySql'],
            codeLink: 'https://github.com/tharaka-prasad/point-of-sales.git'
            
        },
        {
            id: 3,
            title: 'Task Management System',
            desc: 'A full-stack task management application that allows users to create, assign, track, and manage tasks with real-time updates.',
            image: project3,
            tags: ['Raect', 'Node.js', 'MongoDB'],
            codeLink: 'https://github.com/Dulara-Sasanka/ekrain-taskmanager-system.git'
        },
    ]
    return ( 
        <section
        id='projects'
        style={{
            backgroundColor: darkMode ? '#111827' : '#f9fafb'
        }}
        className='relative py-24'>
            <div className='container mx-auto px-4'>
                <div className='text-center sm:text-4xl font-bold mb-3' 
                    data-aos='fade-up'
                    data-aos-delay='300'>
                    <h2
                    className='text-3xl sm:text-4xl font-bold mb-3'
                    style={{
                        color: darkMode ? 'white' : '#1f2937'
                    }}>
                        My 
                        <span
                        style={{ 
                            background: 'linear-gradient(to right, #f97316, #f59e0b)',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            color: 'transparent'
                        }}> Projects
                        </span>
                    </h2>
                    <p 
                    className='max-w-xl mx-auto'
                    style={{
                        color: darkMode ? '#d1d5db' : '#6b7280'
                    }}>
                        A showcase of my recent work 
                    </p>
                </div>
                <div
                className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12'>
                    {projects.map((project, index) => (
                        <div
                        key={project.id}
                        style={{
                            background: darkMode
                            ? 'linear-gradient(to right, #1f2937, #111827)'
                            : 'linear-gradient(to right, #ffffff, #f9fafb)',
                            borderColor: darkMode ? '#374151' : '#e5e7eb'
                        }}
                        className='group rounded-xl border duration-300 hover:border-orange-500/50 transition-all'
                        data-aos='fade-up'
                        data-aos-delay={index * 100}>
                            <div
                            className='h-36 overflow-hidden rounded-t-xl'>
                                <img 
                                src={project.image}
                                alt={project.title}
                                className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' />
                            </div>
                            <div className='p-4'>
                                <h3
                                className='text-lg font-bold mb-2'
                                style={{
                                    color: darkMode ? 'white' : '#1f2937'
                                }}>
                                    {project.title}
                                </h3>
                                <p
                                className='text-sm mb-3'
                                style={{
                                    color: darkMode ? '#d1d5db' : '#6b7280'
                                }}>
                                    {project.desc}
                                </p>
                                <div
                                className='flex flex-wrap gap-1.5 mb-4'>
                                    {project.tags.map((tag, idx) => (
                                        <span
                                        key={idx}
                                        style={{
                                            backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                            color: darkMode ? '#d1d5db' : '#4b5563'
                                        }}
                                        className='px-2 py-1 text-xs rounded-full'>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className='flex gap-2'>
                                    <a 
                                    href={project.codeLink}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    style={{
                                        backgroundColor: darkMode ? '#374151' : '#f3f4f6',
                                        color: darkMode ? 'white' : '#374151'
                                    }}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-sm rounded-lg hover:opacity-90 transition-colors'
                                    data-aos='zoom-in'
                                    data-aos-delay='300'>
                                        <FaGithub className='text-sm'/>
                                        <span>Code</span>
                                    </a>
                                    {/* Demo 
                                    <a 
                                    href="#"
                                    style={{
                                        background: 'linear-gradient(to right, #f97316, #f59e0b)', 
                                    }}
                                    className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 text-white text-sm rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                                    data-aos='zoom-in'
                                    data-aos-delay='300'>
                                        <FaExternalLinkAlt className='text-sm'/>
                                        <span>Demo</span>
                                    </a>*/}
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                className='text-center mt-10'>
                    <a 
                    href="https://github.com/Dulara-Sasanka?tab=repositories"
                    style={{
                    background: 'linear-gradient(to right, #f97316, #f59e0b)', 
                    }}
                    className='inline-flex items-center font-semibold gap-2 px-7 py-4 text-white text-sm rounded-full hover:shadow-lg hover:shadow-orange-500/25 transition-all'
                    data-aos='zoom-in'
                    data-aos-delay='300'>
                        <FaGithub />
                        <span>View All Projects</span>
                    <FaExternalLinkAlt className='text-sm'/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects