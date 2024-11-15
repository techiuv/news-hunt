import React, { useState, useEffect } from 'react';

const NewsContent = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');
                const data = await response.json();
                setArticles(data.articles);
            } catch (error) {
                console.error('Error fetching news:', error);
            }
        };

        fetchNews();
    }, []);

    return (
        <section className="container mx-auto p-4">
            <header className="mb-4">
                <h1 className="text-2xl font-bold text-center">Latest News</h1>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {articles.length > 0 ? (
                    articles.map((article, index) => (
                        <article key={index} className="border p-4 rounded-lg shadow-md bg-white animate-pulse">
                            <div className="skeleton w-full h-48 bg-gray-300 rounded-md mb-2"></div>
                            <div className="skeleton w-3/4 h-6 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-full h-4 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-1/2 h-4 bg-gray-300 mb-2"></div>
                        </article>
                    ))
                ) : (
                    Array.from({ length: 5 }).map((_, index) => (
                        <article key={index} className="border p-4 rounded-lg shadow-md bg-white animate-pulse">
                            <div className="skeleton w-full h-48 bg-gray-300 rounded-md mb-2"></div>
                            <div className="skeleton w-3/4 h-6 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-full h-4 bg-gray-300 mb-2"></div>
                            <div className="skeleton w-1/2 h-4 bg-gray-300 mb-2"></div>
                        </article>
                    ))
                )}
            </div>
        </section>
    );
};

export default NewsContent;
