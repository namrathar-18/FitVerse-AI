import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

