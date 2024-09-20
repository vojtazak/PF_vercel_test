import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div>
        <header className="flex justify-between items-center p-6 bg-black text-white">
          <Link href="/"> 
            <div className="text-2xl font-bold tracking-wider cursor-pointer"> 
              PlayFight
            </div>
          </Link>
        <div className="hidden lg:flex space-x-8">
          <Link href="/#about" className="hover:text-orange-500">
            About Us
          </Link>
          <Link href="/#workshops" className="hover:text-orange-500">
            Workshops
          </Link>
          <Link href="/#projects" className="hover:text-orange-500">
            Projects
          </Link>
          <Link href="/#contact" className="hover:text-orange-500">
            Contact
          </Link>
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
    </div>
  )
}

export default Header;
