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
              onClick={() => window.open(library.githubUrl || library.npmUrl || '', '_blank')}
              className="cursor-pointer bg-gray-50 dark:bg-gray-700 rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                {/* Library Logo */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-white dark:bg-gray-600 rounded-lg flex items-center justify-center text-3xl shadow-lg">
                    <img
                          src={library.logo}
                          alt={library.title}
                        />
                  </div>
                </div>

                {/* Library Content */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white truncate pr-2">
                      {library.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-0 leading-relaxed text-sm overflow-hidden" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical' as any,
                    maxHeight: '4.5rem'
                  }}>
                    {library.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
