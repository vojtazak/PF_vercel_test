// Add "use client" at the very top of the file
"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

const Home = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <Head>
        <title>PlayFight - Unleash Creativity</title>
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <div className="text-2xl font-bold tracking-wider">PlayFight</div>
        <div className="hidden lg:flex space-x-8">
          <a href="#about" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#workshops" className="hover:text-orange-500">
            Workshops
          </a>
          <a href="#projects" className="hover:text-orange-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
          <div className="flex space-x-2">
            <button className="hover:text-orange-500">EN</button>
            <button className="hover:text-orange-500">CZ</button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="bg-black text-white p-6 lg:hidden">
          <a href="#about" className="block py-2 hover:text-orange-500">
            About Us
          </a>
          <a href="#workshops" className="block py-2 hover:text-orange-500">
            Workshops
          </a>
          <a href="#projects" className="block py-2 hover:text-orange-500">
            Projects
          </a>
          <a href="#contact" className="block py-2 hover:text-orange-500">
            Contact
          </a>
          <div className="flex space-x-2 py-2">
            <button className="hover:text-orange-500">EN</button>
            <button className="hover:text-orange-500">CZ</button>
          </div>
        </nav>
      )}

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center text-center text-white"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div>
          <h1 className="text-6xl font-bold mb-6">Welcome to PlayFight</h1>
          <p className="text-xl mb-10">Unleash Your Creativity</p>
          <a
            href="#about"
            className="inline-block px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Clickable Image Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Explore More</h2>
          <p className="text-lg mb-6">
            Click on the image below to explore our featured project!
          </p>
          {/* Clickable Image */}
          <Link href="/project-details">
              <img
                src="/featured-project.jpg" // Replace with the actual path to your image
                alt="Featured Project"
                className="mx-auto rounded-lg shadow-lg cursor-pointer hover:opacity-80 transition"
                style={{ width: '400px', height: '300px' }}
              />
          </Link>
        </div>
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Workshops</h2>
          <p className="text-lg">Join our action-packed workshops for all levels...</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Our Projects</h2>
          <p className="text-lg">We create visually stunning fight sequences...</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Contact Us</h2>
          <p className="text-lg">Get in touch with us for collaborations and inquiries.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-4 text-center text-white">
        <p>© 2024 PlayFight. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
