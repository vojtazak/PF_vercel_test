
"use client";

import Head from "next/head";
import Header from '@/components/header';
import Carousel from './carousel_hero';
import Members from './members';
import Workshops from './workshops_gal';
import Contact from './contact';
import Footer from '@/components/footer';
import FAQ from './faq';


const Home = () => {

  return (
    <div className="pt-[80px]">
      <Head>
        <title>PlayFight</title>
      </Head>
      <Header /> {/* top menu */}
      <Carousel /> {/* welcome pics */}
      <Members /> {/* team members */}
      <Workshops /> {/* workshops */}
      <FAQ /> {/* faq */}
      <Contact /> {/* contact */}
      <Footer /> {/* footer */}
    </div>
  );
};

export default Home;
