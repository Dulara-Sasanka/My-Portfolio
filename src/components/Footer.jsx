import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = ({ darkMode }) => {
    const currentYear = new Date().getFullYear();
return (
    <footer
    style={{
        background: darkMode
        ? 'linear-linear(to bottom, #000000, #111827'
        : 'linear-linear(to bottom, #f3f4f6, #e5e7eb',
        borderColor: darkMode ? '#374151' : '#d1d5db'
    }}
    className="border-t"
    >
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 
                    className="text-2xl font-bold mb-2 text-orange-500 dark:text-white">
                        Portfolio
                    </h3>
                    <p 
                     className="text-sm"
                     style={{
                        color: darkMode ? '#9ca3af' : '#6b7280'
                     }}>
                        Full Stack Developer & UI/UX Designer
                     </p>
                </div>
                <div className="flex gap-4">
                    <a
                    href="https://github.com/Dulara-Sasanka"
                    target="_blank"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaGithub />
                    </a>

                    <a
                    href="https://www.linkedin.com/in/dulara-sasanka-5b4a212a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                    target="_blank"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r hover:from-orange-500 hover:to-amber-500 hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-white dark:text-[#374151]">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="text-center md:text-right">
                    <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
                        @ {currentYear} Made By <span
                        className="mt-0 text-[#f97316]">
                            Dulara Sasanka
                        </span>
                    </p>
                </div>
            </div>       
        </div>
    </footer>
);
};
export default Footer