'use client';

import React from 'react';
import CustomCursor from './CustomCursor';
import Navbar from './Navbar';

interface ClientWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const ClientWrapper = ({ children, className }: ClientWrapperProps) => {
  return (
    <div className={className}>
      <CustomCursor />
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
    </div>
  );
};

export default ClientWrapper; 