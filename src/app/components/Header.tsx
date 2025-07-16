'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { href: '#about', label: 'Nosotros' },
    { href: '#services', label: 'Servicios' },
    { href: '#issues-process', label: 'Proceso' },
    { href: '#gallery', label: 'Galería' },
    { href: '#contact', label: 'Contacto' }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 p-4 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Recovery Point Logo"
                width={48}
                height={48}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-[#273851] group-hover:text-[#18759F] transition-colors">
                RECOVERY
              </span>
              <span className="text-xs font-semibold text-[#17B4BC] -mt-1 tracking-wider">
                POINT
              </span>
            </div>
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-[#273851] hover:text-[#18759F] font-medium transition-colors duration-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Botón CTA */}
          <div className="hidden md:block">
            <button className="px-6 py-3 bg-gradient-to-r from-[#18759F] to-[#17B4BC] text-white rounded-full font-semibold hover:from-[#17B4BC] hover:to-[#18759F] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Reservar turno
            </button>
          </div>

          {/* Botón menú móvil */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-white/20 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-[#273851]" />
            ) : (
              <Menu className="w-6 h-6 text-[#273851]" />
            )}
          </button>
        </div>

        {/* Menú móvil */}
        <div className={`lg:hidden bg-white/95 backdrop-blur-md rounded-xl shadow-xl transition-all duration-300 ${
          isMenuOpen ? 'max-h-96 opacity-100 mb-4' : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="px-4 py-6 space-y-4">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block py-3 text-[#273851] hover:text-[#18759F] font-medium border-b border-gray-100 last:border-b-0"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
          </div>
        </div>
      </div>
    </header>
  );
} 