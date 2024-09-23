import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
      <div>
        <header className="flex justify-between items-center p-6 fixed top-0 left-0 w-full z-50 bg-[var(--secondary)]">
          <Link href="/"> 
            <div className="text-2xl font-bold tracking-wider cursor-pointer text-[var(--primary)] hover:shadow ml-12"> 
            • PlayFight •
            </div>
          </Link>
        <div className="hidden lg:flex font-bold space-x-8 mr-12">
          <Link href="/#about" className="hover:text-[var(--primary)]">
            About Us
          </Link>
          <Link href="/#workshops" className="hover:text-[var(--primary)]">
            Workshops
          </Link>
          <Link href="/#contact" className="hover:text-[var(--primary)]">
            Contact
          </Link>
          <div className="flex space-x-2">
            <button className="hover:text-[var(--primary)]">EN</button>
            <button className="hover:text-[var(--primary)]">CZ</button>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="focus:outline-none"
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
        <nav className="p-6 lg:hidden">
          <a href="#about" className="block py-2 hover:text-[var(--primary)]"> 
            About Us
          </a>
          <a href="#workshops" className="block py-2 hover:text-[var(--primary)]">
            Workshops
          </a>
          <a href="#projects" className="block py-2 hover:text-[var(--primary)]">
            Projects
          </a>
          <a href="#contact" className="block py-2 hover:text-[var(--primary)]">
            Contact
          </a>
          <div className="flex space-x-2 py-2">
            <button className="hover:text-[var(--primary)]">EN</button>
            <button className="hover:text-[var(--primary)]">CZ</button>
          </div>
        </nav>
      )}
    </div>
  )
}

export default Header;
