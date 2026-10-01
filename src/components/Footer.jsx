/** @format */

import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#122e24] text-[#f5f3ec] border-t border-white/10 py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-16">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          {/* Brand & Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/image/vitala-logo-white.png"
              alt="Vitala Outdoor"
              className="h-7 w-auto object-contain"
            />
            <span className="text-sm font-medium tracking-wider text-white">
              VITALA
            </span>
          </div>

          {/* Simple Navigation */}
          <nav className="flex items-center gap-6 text-xs font-mono text-white/60">
            <Link to="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link to="/classes" className="hover:text-white transition-colors">
              Expeditions
            </Link>
            <Link to="/benefits" className="hover:text-white transition-colors">
              Benefits
            </Link>
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-[11px] font-mono text-white/40">
            © {new Date().getFullYear()} Vitala. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
}