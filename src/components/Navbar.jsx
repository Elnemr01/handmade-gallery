import { Link } from 'react-router-dom'
import { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h1 className="text-2xl font-playfair font-semibold italic bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent hover:from-pink-300 hover:via-purple-300 hover:to-indigo-300 transition-all duration-300">
                Nahlla Gallery
              </h1>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link 
              to="/" 
              className="relative text-gray-300 hover:text-pink-400 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-400 after:left-0 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="relative text-gray-300 hover:text-pink-400 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-400 after:left-0 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              Products
            </Link>
            <Link 
              to="/about" 
              className="relative text-gray-300 hover:text-pink-400 px-2 py-2 rounded-md text-sm font-medium transition-colors duration-300 after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-pink-400 after:left-0 after:-bottom-0.5 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-pink-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500 transition-colors duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              {/* Close icon */}
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden transition-all duration-300 ease-in-out bg-gradient-to-b from-gray-800 to-gray-900`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/products"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-pink-400 hover:bg-gray-700 transition-colors duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 