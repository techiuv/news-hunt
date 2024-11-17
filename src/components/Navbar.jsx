import React, { useState } from 'react';

const Navbar = ({ setCategory }) => {

    const [isOpen, setIsOpen] = useState(false); // State to control off-canvas visibility

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    const closeOffCanvas = () => {
        setIsOpen(false);
    };

    return (
        <nav className="w-[100vw] flex justify-between items-center p-2 px-2 md:px-4 lg:px-6 bg-gray-100 text-gray-800 min-h-[8vh] fixed top-0 z-10">
            {/* Brand name */}
            <div className='flex'>
                <a href="#" className="cursor-pointer text-[1rem] sm:text-lg px-1 flex justify-center items-center gap-1 font-medium">
                    <svg height="30px" width="30px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--emojione-monotone" preserveAspectRatio="xMidYMid meet">
                        <path d="M57.247 24.222c.973-2.628 1.254-5.134.555-7.383c-.322.029-.656.044-.998.044C46.562 16.883 28.46 4.006 27.09 2C21.445 10.223 9.613 16.545 4.265 23.635c-2.164 2.869-3.246 5.004-1.093 8.286l22.549 28.973c1.017 1.377 3.01 1.489 4.429.219c0 0 18.492-23.729 31.851-31.071c-1.004-1.961-2.675-3.918-4.754-5.82M25.328 54.754l-.094.065l-.085.074a5.768 5.768 0 0 0-.912 1.041L4.699 30.831c-1.407-2.177-1.008-3.323 1.063-6.067c2.349-3.113 6.103-6.135 10.078-9.334c4.132-3.326 8.388-6.75 11.514-10.646c5.16 4.246 19.593 13.621 28.932 13.964c1.12 10.997- 21.682 29.536-30.958 36.006" fill="#1f2937"></path>
                        <path d="M19.993 14.158l25.205 19.75l.898-.804L20.649 13.57z" fill="#1f2937"></path>
                        <path d="M28.207 24.671l-10.316-8.632s-3.59 2.292-7.938 7.319l9.152 9.462l9.102-8.149" fill="#1f2937"></path>
                        <path d="M5.606 28.06l19.468 23.861l3.595-3.217L7.913 24.973s-1.809.979-2.307 3.087" fill="#1f2937"></path>
                        <path d="M27.42 29.428l11.309 10.27l3.593-3.217l-11.775-9.852z" fill="#1f2937"></path>
                        <path d="M21.166 35.027l10.377 11.104l3.592-3.216l-10.842-10.687z" fill="#1f2937"></path>
                        <path d="M27.857 10.756l-1.525 4.282l.956.696l4.855-4.347l-.95-.598l-3.345 2.995l1.479-4.174l-.992-.626l-4.627 4.142l.829.603z" fill="#1f2937"></path>
                        <path d="M32.012 19.179l.926-.831l-2.825-2.008l1.281-1.146l2.509 1.718l.891-.799l-2.537-1.694l1.058-.946l2.809 1.817l.912-.815l-3.884-2.452l-4.918 4.403z" fill="#1f2937"></path>
                        <path d="M35.021 21.371l3.839-2.325l1.257-.796l-.834 1.078l-2.47 3.351l1.193.869l7.388-3.799l-1.402-.885l-4.051 2.318l-1.034.626l.694-.913l2.401-3.287l-1.348-.85l-3.745 2.321l-.995.629l.685-.871l2.268-3.207l-1.264-.798l-3.661 5.753z" fill="#1f2937"></path>
                        <path d="M48.907 21.705c-.909-.571-1.758-.844-2.552-.828c-.788.017-1.434.254-1.943.71c-.559.5-.747 1.019-.563 1.557c.108.323.452.79 1.039 1.408l.607.638c.362.376.595.684.697.92c.1.239.051.448-.146.624c-.337.301-.776.358-1.315.174a3.844 3.844 0 0 1-.938-.515c-.57-.406-.847-.797-.84-1.174c.004-.206.117-.442.338-.708l-1.311-.914c-.591.529-.815 1.119-.667 1.774c.149.661.656 1.313 1.536 1.955c.877.643 1.75.987 2.608 1.025c.867.037 1.581-.191 2.131-.686c.54-.482.732-1 .578-1.551c-.098-.353-.373-.764-.817-1.232l-.995-1.05c-.379-.396-.605-.671-.682-.828c-.12-.239-.077-.45.13-.634c.225-.202.513-.284.865-.249c.357.035.729.178 1.118.428c.353.228.602.464.741.708c.215 .368.155.723-.175 1.06l1.477.973c.614-.592.806-1.219.577-1.878c-.224-.653-.725-1.223-1.498-1.707" fill="#1f2937"></path>
                    </svg>
                    hunt.
                </a>
            </div>

            {/* Category Links */}
            <div className='md:flex hidden'>
                <ul className="flex justify-center text-balance font-normal items-center capitalize gap-1 sm:gap-2">
                    <li key="general">
                        <div onClick={() => setCategory('general')} role="button" tabIndex={0} aria-label="Select General Category">
                            General
                        </div>
                    </li>
                    <li key="sports">
                        <div onClick={() => setCategory('sports')} role="button" tabIndex={0} aria-label="Select Sports Category">
                            Sports
                        </div>
                    </li>
                    <li key="technology">
                        <div onClick={() => setCategory('technology')} role="button" tabIndex={0} aria-label="Select Technology Category">
                            Technology
                        </div>
                    </li>
                    <li key="health">
                        <div onClick={() => setCategory('health')} role="button" tabIndex={0} aria-label="Select Health Category">
                            Health
                        </div>
                    </li>
                    <li key="entertainment">
                        <div onClick={() => setCategory('entertainment')} role="button" tabIndex={0} aria-label="Select Entertainment Category">
                            Entertainment
                        </div>
                    </li>
                </ul>
            </div>

            {/* Hamburger Icon */}
            <button className="flex md:hidden" onClick={toggleOffCanvas} aria-label="Toggle Menu">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </button>

            {/* Off-Canvas Menu for Small Screens */}
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}
                onClick={closeOffCanvas}
                role="presentation"
            ></div>

            <div
                className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
                aria-hidden={!isOpen}
            >
                <section className="flex flex-col p-4">
                    <h2 id="off-canvas-menu" className="text-xl font-semibold mb-4">Categories</h2>
                    <ul className="space-y-4">
                        <li>
                            <div onClick={() => { setCategory('general'); closeOffCanvas(); }} role="button" tabIndex={0} aria-label="Select General Category">
                                General
                            </div>
                        </li>
                        <li>
                            <div onClick={() => { setCategory('sports'); closeOffCanvas(); }} role="button" tabIndex={0} aria-label="Select Sports Category">
                                Sports
                            </div>
                        </li>
                        <li>
                            <div onClick={() => { setCategory('technology'); closeOffCanvas(); }} role="button" tabIndex={0} aria-label="Select Technology Category">
                                Technology
                            </div>
                        </li>
                        <li>
                            <div onClick={() => { setCategory('health'); closeOffCanvas(); }} role="button" tabIndex={0} aria-label="Select Health Category">
                                Health
                            </div>
                        </li>
                        <li>
                            <div onClick={() => { setCategory('entertainment'); closeOffCanvas(); }} role="button" tabIndex={0} aria-label="Select Entertainment Category">
                                Entertainment
                            </div>
                        </li>
                    </ul>
                </section>
            </div>


        </nav>
    );
};

export default Navbar;