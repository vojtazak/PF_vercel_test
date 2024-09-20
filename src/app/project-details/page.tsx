"use client";

import Head from "next/head";
import Header from '../header';
import Carousel from '../carousel_hero';


const ProjectDetails = () => {
  return (
    <div>
        <Head>
            <title>Project-details</title>
        </Head>
      <Header />

      {/* Hero Section */}
      <section >
        <Carousel />
      </section>

      {/* Workshops Section */}
      <section id="workshops" className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">Workshops</h2>
          <p className="text-lg">Join our action-packed workshops for all levels...</p>
        </div>
      </section>
      
    </div>
  );
};

export default ProjectDetails;