'use client'
import React, { useEffect, useState } from 'react';

interface BlogItem {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    content: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yoogiitaa');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data.items);
            } catch (error) {
                console.error('Error fetching blogs:', error);
            }
        };

        fetchBlog();
    }, []);

    // Function to remove HTML tags from text
    const removeTags = (html: string) => {
        const doc = new DOMParser().parseFromString(html, 'text/html');
        return doc.body.textContent || "";
    };

    const extractImageUrl = (content: string) => {
        const html = new DOMParser().parseFromString(content, 'text/html');
        const imgElement = html.querySelector('img');
        return imgElement ? imgElement.src : ''; // Return image URL or empty string if not found
    };

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 text-center capitalize lg:text-6xl dark:text-white">Blogs</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {blogs.map((blog, index) => (
                        <div key={index} className="lg:flex">
                            <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={extractImageUrl(blog.content)} alt="" />
                            <div className="flex flex-col justify-between py-6 lg:mx-6">
                                <a href={blog.link} className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">{blog.title}</a>
                                <p className='line-clamp-3'>{removeTags(blog.description)}</p>
                                <span className="text-sm text-gray-500 dark:text-gray-300">On: {new Date(blog.pubDate).toLocaleDateString()}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
