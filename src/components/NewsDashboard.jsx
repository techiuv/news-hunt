import React, { useState, useEffect } from 'react';

const NewsDashboard = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=6a1575b30c2a487cbca6fe280cca07bf`);
                const data = await response.json();
                setArticles(data.articles);
                setLoading(false);  // Set loading to false after fetching the data
            } catch (error) {
                console.error('Error fetching news:', error);
                setLoading(false);  
            }
        };

        fetchNews();
    }, []); 

    const truncateText = (text, maxLength) => {
        if (!text) return '';
        return text.length > maxLength ? text.slice(0, maxLength) + '...' : text;
    };

    return (
        <section className="container mx-auto p-4 mt-[8vh">
            <header className="mb-4">
                <h1 className="text-2xl font-bold text-center">Latest News</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {loading ? (
                    // Show skeleton loaders when loading
                    Array.from({ length: 10 }).map((_, index) => (
                        <article key={index} className="border p-4 rounded-lg shadow-md bg-white animate-pulse">
                            <div className="skeleton w-full h-48 bg-gray-300 rounded-md mb-2"></div>
                            <div className="skeleton w-3/4 h-6 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-full h-4 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-1/2 h-4 bg-gray-300 mb-2"></div>
                        </article>
                    ))
                ) : (
                    // Show articles once data is fetched
                    articles.length > 0 ? (
                        articles.map((article, index) => (
                            <article key={index} className="border p-4 rounded-lg shadow-md bg-white">
                                <div className="mb-4">
                                    {article.urlToImage ? (
                                        <img
                                            src={article.urlToImage}
                                            alt={article.title}
                                            className="w-full h-48 object-cover rounded-md mb-2"
                                        />
                                    ) : (
                                        <div className="skeleton w-full h-48 bg-gray-300 rounded-md mb-2"></div> // Show skeleton if no image
                                    )}
                                </div>
                                <h2 className="text-xl font-semibold">
                                    {truncateText(article.title, 30)} {/* Truncate title */}
                                </h2>
                                <p className="text-sm text-gray-500 mb-2">
                                    {truncateText(article.description, 100)} {/* Truncate description */}
                                </p>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline"
                                >
                                    Read more
                                </a>
                            </article>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No articles available.</p>
                    )
                )}
            </div>
        </section>
    );
};

export default NewsDashboard;
