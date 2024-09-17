import Head from 'next/head';

const Home = () => {
  return (
    <div>
      <Head>
        <title>PlayFight - Unleash Creativity</title>
      </Head>

      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-black text-white">
        <div className="text-2xl font-bold tracking-wider">PlayFight</div>
        <nav className="flex space-x-8">
          <a href="#about" className="hover:text-orange-500">About</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#contact" className="hover:text-orange-500">Contact</a>
        </nav>
      </header>

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

      {/* Content Section */}
      <section className="py-24 bg-gray-900 text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-orange-500 mb-6">
            Our Services
          </h2>
          <p className="text-lg">
            We provide the best fight choreography, production, and more...
          </p>
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
