import React from 'react';

const ContactSection = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Contact Form */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-extrabold text-gray-900">Contact Us</h2>
          <form action="#" method="POST" className="mt-6 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Write your message here"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Info */}
        <div className="p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-2xl font-extrabold text-gray-900">Contact Information</h2>
          <div className="mt-6 space-y-4">
            <div className="flex items-center">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 2v6h6M21 13v8a2 2 0 01-2 2H5a2 2 0 01-2-2v-8M7 10v6M17 10v6M10 14l2-2 2 2M13 14v6"></path>
              </svg>
              <span className="ml-3 text-base text-gray-500">1234 Main St, Anytown, USA</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7 4 7-4M5 6l7-4 7 4M5 10v10l7 4 7-4V10M12 6v10"></path>
              </svg>
              <span className="ml-3 text-base text-gray-500">contact@example.com</span>
            </div>
            <div className="flex items-center">
              <svg className="h-6 w-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h18M9 3v2M15 3v2m-6 16h6M9 12h6m-6 4h6"></path>
              </svg>
              <span className="ml-3 text-base text-gray-500">+1 (234) 567-890</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
