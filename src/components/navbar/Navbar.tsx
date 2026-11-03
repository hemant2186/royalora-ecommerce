'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, ShoppingBag, Heart, Menu, X, ShieldCheck } from 'lucide-react';
import { useCart } from '../cart/CartContext';
import { useWishlist } from '../wishlist/WishlistContext';
import { PRODUCTS } from '@/data/products';

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { totalItems, toggleCart } = useCart();
  const { totalWishlistItems } = useWishlist();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Filter products for search
  const filteredProducts = searchQuery.trim()
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'About Us', href: '/about' },
    { label: 'Our Quality', href: '/our-quality' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F1E5]/95 backdrop-blur-md shadow-md border-b border-[#C49A42]/20 py-2 sm:py-3'
            : 'bg-[#F8F1E5] border-b border-[#C49A42]/15 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button (Left on mobile) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-[#321B11] p-1.5 rounded-md hover:text-[#C49A42] transition-colors"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

            {/* Brand Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="group flex items-center gap-3">
                <div className="relative h-11 sm:h-14 w-36 sm:w-44 transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src="/images/royalora-logo.png"
                    alt="ROYALORA - A Royal Touch of Nutrition"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </Link>
            </div>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm tracking-widest uppercase transition-colors relative py-1 ${
                      isActive
                        ? 'text-[#C49A42] font-semibold'
                        : 'text-[#321B11] hover:text-[#C49A42] font-medium'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C49A42]" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action Icons */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setSearchOpen(true)}
                className="text-[#321B11] hover:text-[#C49A42] p-1.5 transition-colors"
                aria-label="Search products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="text-[#321B11] hover:text-[#C49A42] p-1.5 relative transition-colors"
                aria-label="View Wishlist"
              >
                <Heart className="w-5 h-5" />
                {totalWishlistItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#C49A42] text-[#321B11] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
                    {totalWishlistItems}
                  </span>
                )}
              </Link>

              {/* Shopping Bag / Cart */}
              <button
                type="button"
                onClick={toggleCart}
                className="text-[#321B11] hover:text-[#C49A42] p-1.5 relative transition-colors flex items-center"
                aria-label="Open Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-[#321B11] text-[#E9D9BA] border border-[#C49A42] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center shadow">
                    {totalItems}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#C49A42]/20 bg-[#F8F1E5] px-4 pt-3 pb-6 shadow-xl animate-fadeIn">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-sm tracking-wider uppercase py-2 px-3 rounded ${
                      isActive
                        ? 'bg-[#E9D9BA]/50 text-[#C49A42] font-semibold'
                        : 'text-[#321B11] hover:bg-[#E9D9BA]/30'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <div className="pt-3 border-t border-[#C49A42]/20 flex flex-col space-y-2">
                <Link
                  href="/wishlist"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between text-xs tracking-wider uppercase text-[#321B11] py-2 px-3 hover:bg-[#E9D9BA]/30 rounded"
                >
                  <span className="flex items-center gap-2">
                    <Heart className="w-4 h-4 text-[#C49A42]" /> Wishlist
                  </span>
                  <span className="font-semibold">{totalWishlistItems}</span>
                </Link>
                <div className="p-3 bg-[#E9D9BA]/30 rounded text-xs text-[#321B11]/80 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C49A42] flex-shrink-0" />
                  <span>100% Pure California & Sourced Dry Fruits</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Interactive Quick Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 bg-[#321B11]/70 backdrop-blur-sm flex items-start justify-center pt-20 px-4">
          <div className="bg-[#FAF6EF] w-full max-w-2xl rounded-xl shadow-2xl border border-[#C49A42]/40 overflow-hidden animate-fadeIn">
            <div className="p-4 border-b border-[#C49A42]/20 flex items-center justify-between bg-[#F8F1E5]">
              <div className="flex items-center gap-3 flex-1">
                <Search className="w-5 h-5 text-[#C49A42]" />
                <input
                  type="text"
                  placeholder="Search Almond, Cashew, Pistachio powder..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent border-none focus:outline-none text-base text-[#321B11] placeholder:text-[#7A685A]"
                />
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[#321B11] hover:text-[#C49A42] p-1"
                aria-label="Close search"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto">
              {searchQuery.trim() === '' ? (
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#7A685A] font-semibold mb-3">
                    Popular Searches
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['Almond Powder', 'Cashew Powder', 'Pistachio Powder', 'Trio Gift Box', '100% Pure Badam'].map(
                      (tag) => (
                        <button
                          key={tag}
                          onClick={() => setSearchQuery(tag)}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#E9D9BA]/60 text-[#321B11] hover:bg-[#C49A42] hover:text-white transition-colors"
                        >
                          {tag}
                        </button>
                      )
                    )}
                  </div>
                </div>
              ) : filteredProducts.length > 0 ? (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-wider text-[#7A685A] font-semibold">
                    Matching Products ({filteredProducts.length})
                  </p>
                  {filteredProducts.map((p) => (
                    <Link
                      key={p.id}
                      href={`/product/${p.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 p-2.5 rounded-lg hover:bg-[#E9D9BA]/40 transition-colors group"
                    >
                      <div className="relative w-14 h-14 rounded-md overflow-hidden bg-white flex-shrink-0 border border-[#C49A42]/20">
                        <Image
                          src={p.images[0]}
                          alt={p.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-serif text-sm font-semibold text-[#321B11] group-hover:text-[#C49A42] transition-colors">
                          {p.name}
                        </h4>
                        <p className="text-xs text-[#7A685A] line-clamp-1">{p.shortDescription}</p>
                        <p className="text-xs font-semibold text-[#C49A42] mt-0.5">
                          From ₹{p.packOptions[0]?.price}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-sm text-[#7A685A]">
                    No products found matching &quot;{searchQuery}&quot;.
                  </p>
                  <p className="text-xs text-[#C49A42] mt-1">
                    Try searching for Almond, Cashew, or Pistachio.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
