// pages/index.tsx
import React from 'react';

const HomePage = () => {
  return (
    <div className="relative bg-black min-h-screen flex flex-col items-center justify-center">
      {/* Elixcent Logo */}
      <div className="absolute top-0 left-8 p-8">
        <h1 className="text-2xl sm:text-3xl md:text-3xl font-bold bg-gradient-to-br from-blue-500 to-red-500 text-transparent bg-clip-text">
          Elixcent
        </h1>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center text-blue-500 mix-blend-lighten">
        AI Software Development
      </h1>
      <h2 className="text-xl sm:text-2xl text-center text-white mt-4">
        powered by Gen AI
      </h2>
      <p className="text-lg sm:text-xl text-center text-gray-400 mt-2 max-w-lg px-4 sm:px-0">
        Elixcent leverages cutting-edge Generative AI technology to develop sophisticated software solutions, enhancing innovation and efficiency in every project.
      </p>
      <div className="mt-8">
        <button className="bg-blue-600 text-white px-8 py-4 sm:px-10 sm:py-5 rounded-lg hover:bg-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default HomePage;
