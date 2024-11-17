import React from 'react'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-100 min-h-[8vh] shadow-md py-4 mt-8">
            <div className="container mx-auto px-4 flex justify-between items-center  text-center">
                <p className="text-gray-700">&copy; {currentYear} NewsHunt. All Rights Reserved.</p>
                <button
                    onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-2 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700"
                    aria-label="Scroll to top"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            </div>
        </footer>
    )
}

export default Footer
