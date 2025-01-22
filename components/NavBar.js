// components/Navbar.js
"use client"
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {UserButton} from '@clerk/nextjs'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <Link href="/">Chatapp</Link>
          </div>

          {/* Hamburger Menu */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} space-x-4`}>
            <Link href="/" className="text-gray-800 hover:text-white">Home
            </Link>
            <Link href="/forums" className="text-gray-800 hover:text-white">Forums
            </Link>
            <UserButton></UserButton>
          </div>
        </div>
      </div>
    </nav>
  );
}
