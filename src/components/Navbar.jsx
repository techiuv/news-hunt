import React, { useState } from 'react';

const Navbar = ({ onSearch, onCategorySelect }) => {
    const [searchTerm, setSearchTerm] = useState('');

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Handle search form submission
    const handleSearchSubmit = (e) => {
        e.preventDefault();
        onSearch(searchTerm); 
    };

    // Handle category selection
    const handleCategoryClick = (category) => {
        onCategorySelect(category); 
    };

    return (
        <nav className="w-[100vw] flex justify-between items-center p-2 bg-gray-100  min-h-[8vh] fixed top-0 z-10">
            {/* Logo / Brand Name */}
            <div>
                <a href="#" className="text-gray-800 cursor-pointer text-sm sm:text-lg px-1 ">NewsHunt</a>
            </div>

            {/* Category Links */}
            <div>
                <ul className="flex justify-center text-gray-100 font-normal  items-center capitalize gap-1 sm:gap-2">
                    <li 
                        onClick={() => handleCategoryClick('general')} 
                        className="hover:underline cursor-pointer">general
                    </li>
                    <li 
                        onClick={() => handleCategoryClick('business')} 
                        className="hover:underline cursor-pointer">business
                    </li>
                    <li 
                        onClick={() => handleCategoryClick('sports')} 
                        className="hover:underline cursor-pointer">sports
                    </li>
                    <li 
                        onClick={() => handleCategoryClick('politics')} 
                        className="hover:underline cursor-pointer">politics
                    </li>
                </ul>
            </div>

            {/* Search Form */}
            <div>
                <form onSubmit={handleSearchSubmit}>
                    <input 
                        type="text" 
                        value={searchTerm} 
                        onChange={handleSearchChange} 
                        placeholder="search news...." 
                        className="bg-transparent border-none outline-none text-white text-sm sm:text-lg p-1" 
                    />
                    <button 
                        type="submit" 
                        className="text-white text-sm sm:text-lg p-1">Search
                    </button>
                </form>
            </div>
        </nav>
    );
};

export default Navbar;
