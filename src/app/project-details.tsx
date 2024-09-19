"use client";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Header from './header';

const ProjectDetails = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
        <Head>
            <title>Project-details</title>
        </Head>
      <Header />
    </div>
  );
};

export default ProjectDetails;