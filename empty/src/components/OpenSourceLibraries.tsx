import { useState } from 'preact/hooks';
import type { OpenSourceLibrary } from '../types';

interface OpenSourceLibrariesProps {
  libraries: OpenSourceLibrary[];
}

export function OpenSourceLibraries({ libraries }: OpenSourceLibrariesProps) {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = ['All', ...Array.from(new Set(libraries.map(lib => lib.category)))];
  const filteredLibraries = activeFilter === 'All' 
    ? libraries 
    : libraries.filter(lib => lib.category === activeFilter);

  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Open Source Libraries
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Contributing to the developer community with useful tools and libraries
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-indigo-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Libraries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredLibraries.map(library => (
            <div
              key={library.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                {/* Library Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center text-3xl shadow-lg">
                    {library.logo}
                  </div>
                </div>

                {/* Library Content */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {library.title}
                    </h3>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      library.category === 'React' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      library.category === 'TypeScript' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      library.category === 'Node.js' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      library.category === 'DevOps' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-600 dark:text-gray-200'
                    }`}>
                      {library.category}
                    </span>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {library.description}
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 mb-4">
                    {library.downloads && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>📥</span>
                        <span>{library.downloads}</span>
                      </div>
                    )}
                    {library.stars && (
                      <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                        <span>⭐</span>
                        <span>{library.stars}</span>
                      </div>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <a
                      href={library.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 dark:bg-gray-600 hover:bg-gray-900 dark:hover:bg-gray-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                    >
                      <span>🐙</span>
                      GitHub
                    </a>
                    {library.npmUrl && (
                      <a
                        href={library.npmUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2"
                      >
                        <span>📦</span>
                        npm
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
