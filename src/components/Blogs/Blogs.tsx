'use client'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface BlogItem {
    title: string;
    description: string;
    pubDate: string;
    link: string;
    content: string;
}

const Blogs: React.FC = () => {
    const [blogs, setBlogs] = useState<BlogItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@yoogiitaa');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setBlogs(data.items);
                setLoading(false);
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
        <section className="bg-white">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-3xl font-semibold text-gray-800 text-center capitalize lg:text-6xl ">Blogs</h1>

                <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
                    {loading ? (
                        // Skeleton Loading
                        Array.from(Array(4).keys()).map((index) => (
                            <div key={index} className="animate-pulse bg-gray-200 rounded-lg overflow-hidden shadow-md">
                                <div className="w-full h-56 bg-gray-400 "></div>
                                <div className="p-6">
                                    <div className="w-3/4 h-6 mb-4 bg-gray-400 "></div>
                                    <div className="w-full h-4 mb-4 bg-gray-400 "></div>
                                    <div className="w-1/2 h-4 bg-gray-400 "></div>
                                </div>
                            </div>
                        ))
                    ) : (
                        // Display Blogs
                        blogs.map((blog, index) => (
                            <motion.div
                                key={index}
                                className="lg:flex"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Image height={1080} width={1080} className="object-cover w-full h-56 rounded-lg lg:w-64" src={extractImageUrl(blog.content)} alt="" />
                                <div className="flex flex-col justify-between py-6 lg:mx-6">
                                    <a href={blog.link} className="text-xl font-semibold text-gray-800 hover:underline ">{blog.title}</a>
                                    <p className='line-clamp-3'>{removeTags(blog.description)}</p>
                                    <span className="text-sm text-gray-500">On: {new Date(blog.pubDate).toLocaleDateString()}</span>
                                </div>
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};

export default Blogs;
