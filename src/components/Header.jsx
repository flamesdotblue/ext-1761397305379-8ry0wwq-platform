import React from 'react';
import { Shield, ArrowRight } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900 text-white ring-1 ring-slate-900/10">
            <Shield size={18} />
          </span>
          <span className="font-semibold text-lg tracking-tight group-hover:opacity-90">PrivMate</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-slate-600 hover:text-slate-900">Product</a>
          <a href="#pricing" className="text-slate-600 hover:text-slate-900">Pricing</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Docs</a>
          <a href="#" className="text-slate-600 hover:text-slate-900">Login</a>
          <a href="#get-started" className="inline-flex items-center gap-2 bg-slate-900 text-white px-4 py-2 rounded-md hover:bg-slate-800">
            Get Started
            <ArrowRight size={16} />
          </a>
        </nav>
        <button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-slate-200 text-slate-700 hover:bg-slate-50">
          <span className="sr-only">Open menu</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
