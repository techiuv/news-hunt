import { useState } from 'react';

const Navbar = () => {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);

    const toggleOffcanvas = () => {
        setIsOffcanvasOpen(!isOffcanvasOpen);
    };

    return (
        <nav className="bg-gray-100 shadow-md">
            <div className="container mx-auto px-4 py-2 flex justify-between items-center">
                <a className="text-2xl font-bold text-gray-800" href="#">NewsHunt</a>
                <button 
                    className="text-gray-500 md:hidden" 
                    onClick={toggleOffcanvas}
                    aria-label="Toggle navigation">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                    </svg>
                </button>
                <div className="hidden md:flex space-x-4">
                    <a className="text-gray-700 hover:text-gray-900" href="#">General</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Business</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Sports</a>
                    <a className="text-gray-700 hover:text-gray-900" href="#">Politics</a>
                </div>
            </div>
            {/* Offcanvas Menu */}
            {isOffcanvasOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
                    <div className="absolute top-0 left-0 right-0 bg-white shadow-lg p-4 z-50">
                        <button 
                            className="text-gray-500 mb-4" 
                            onClick={toggleOffcanvas} 
                            aria-label="Close navigation">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <ul className="space-y-2">
                            <li><a className="block text-gray-700 hover:text-gray-900" href="#">General</a></li>
                            <li><a className="block text-gray-700 hover:text-gray-900" href="#">Business</a></li>
                            <li><a className="block text-gray-700 hover:text-gray-900" href="#">Sports</a></li>
                            <li><a className="block text-gray-700 hover:text-gray-900" href="#">Politics</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
