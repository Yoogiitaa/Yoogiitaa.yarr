'use client'
import emailjs from 'emailjs-com';
import Image from 'next/image';
import { useState } from 'react';
import data from '../../data.json';
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
    emailjs.sendForm('service_mzyfdsg', 'template_nmsi0mr', e.target, 'b0zRfKrsS0kwANODN')
      .then((result) => {
        console.log(result.text);
        // Clear form fields after successful submission
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.error(error.text);
      });

      setTimeout(() => {
        setCheck(false);
      },2000)

      setCheck(true);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 to-fuchsia-100">
      <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center md:space-x-8">
        <div>
          <Image width={1080} height={1080} src={data.contactImg} alt="Contact" className="w-auto h-96 rounded-full" />
        </div>
        <div className="w-full md:w-96">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Reach Me Out</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-4">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
            </div>
            <div className="mb-6">
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows={4} className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500" required />
            </div>
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-md transition duration-300">Submit</button>
            {check && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
