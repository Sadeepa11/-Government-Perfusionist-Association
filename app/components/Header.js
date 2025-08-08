'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const closeMenu = () => {
        setIsMenuOpen(false)
    }

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-3 group">
                        <div className="relative overflow-hidden rounded-full transition-transform duration-300 group-hover:scale-110">
                            <img 
                                src="/images/logo/logo.jpeg" 
                                width={40} 
                                height={40} 
                                alt="Perfusion Logo" 
                                className="w-10 h-10 object-cover transition-transform duration-300 group-hover:rotate-12" 
                            />
                        </div>
                        <div className="hidden sm:block">
                            <span className="font-bold text-lg lg:text-xl text-sky-800 transition-colors duration-300 hover:text-sky-600">
                                Government Perfusionist Association
                            </span>
                            <div className="text-sm text-gray-600 font-medium">Sri Lanka</div>
                        </div>
                        <div className="sm:hidden">
                            <span className="font-bold text-lg text-sky-800">GPASL</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-8">
                        {['Home', 'About', 'Services', 'Overview','Gallery', 'Contact'].map((item, index) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="relative text-gray-600 font-medium transition-all duration-300 hover:text-sky-800 group"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {item}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sky-600 transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 rounded-lg transition-all duration-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-sky-500"
                        aria-label="Toggle menu"
                    >
                        <div className="relative w-6 h-6">
                            <span className={`absolute block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                                isMenuOpen ? 'top-3 rotate-45' : 'top-1'
                            }`}></span>
                            <span className={`absolute block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                                isMenuOpen ? 'opacity-0' : 'top-3'
                            }`}></span>
                            <span className={`absolute block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                                isMenuOpen ? 'top-3 -rotate-45' : 'top-5'
                            }`}></span>
                        </div>
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
                    isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                    <nav className="py-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-4">
                            {['Home', 'About', 'Services', 'Overview','Gallery', 'Contact'].map((item, index) => (
                                <a
                                    key={item}
                                    href={`#${item.toLowerCase()}`}
                                    onClick={closeMenu}
                                    className={`text-gray-600 font-medium py-2 px-4 rounded-lg transition-all duration-300 hover:text-sky-800 hover:bg-sky-50 transform ${
                                        isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                                    }`}
                                    style={{ 
                                        transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms' 
                                    }}
                                >
                                    {item}
                                </a>
                            ))}
                        </div>
                    </nav>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm -z-10 transition-opacity duration-300"
                    onClick={closeMenu}
                ></div>
            )}
        </header>
    )
}