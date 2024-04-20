'use client'
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { useState } from 'react';
import data from '../../data.json';
import { motion } from 'framer-motion'; // Import motion from framer-motion

const ContactForm = () => {
    const [check, setCheck] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();

        // Send email using EmailJS
        emailjs.sendForm('service_mzyfdsg', 'template_nmsi0mr', e.target as HTMLFormElement, 'b0zRfKrsS0kwANODN')
            .then((result) => {
                console.log(result.text);
                // Clear form fields after successful submission
                setFormData({
                    name: '',
                    email: '',
                    message: ''
                });
                // Set check to true to display success message
                setCheck(true);
            }, (error) => {
                console.error(error.text);
            });

        // Reset check to false after 2 seconds
        setTimeout(() => {
            setCheck(false);
        }, 2000);
    };

    return (
        <div className="flex justify-center items-center py-20 md:py-0 min-h-screen bg-gradient-to-r from-pink-100 to-fuchsia-100">
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:space-x-8">
                <motion.div // Wrap the div with motion.div for animation
                    initial={{ opacity: 0, y: -50 }} // Initial animation properties
                    animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                    transition={{ duration: 0.5 }} // Transition duration
                >
                    <Image width={1080} height={1080} src={data.contactImg} alt="Contact" className="w-auto h-96 rounded-full" />
                </motion.div>
                <div className="w-full md:w-96">
                    <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Reach Me Out</h2>
                    <motion.form // Wrap the form with motion.form for animation
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 50 }} // Initial animation properties
                        animate={{ opacity: 1, y: 0 }} // Animation properties when component is mounted
                        transition={{ duration: 0.5, delay: 0.2 }} // Transition duration with delay
                    >
                        <div className="mb-4">
                            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-4">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <div className="mb-6">
                            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
                        </div>
                        <motion.button // Wrap the button with motion.button for animation
                            type="submit"
                            whileHover={{ scale: 1.05 }} // Animation when hovering
                            whileTap={{ scale: 0.95 }} // Animation when tapping
                            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300"
                        >
                            Submit
                        </motion.button>
                        {check && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
                    </motion.form>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
