import { useState } from 'preact/hooks';
import type { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  const [activeFilter, setActiveFilter] = useState('Development');
  
  const categories = [...Array.from(new Set(certifications.map(cert => cert.category))), 'All'];
  const filteredCertifications = activeFilter === 'All' 
    ? certifications 
    : certifications.filter(cert => cert.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Professional certifications demonstrating expertise across various technologies
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
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-indigo-50 dark:hover:bg-gray-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCertifications.map(cert => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Certification Image */}
              <div className="flex justify-center mb-6">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-24 h-24 object-contain"
                />
              </div>

              {/* Certification Content */}
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                  {cert.provider}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Earned:</span>
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                    {cert.date}
                  </span>
                </div>
                
                {/* Category Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                  cert.category === 'Cloud' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                  cert.category === 'DevOps' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                  cert.category === 'Database' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                  cert.category === 'Frontend' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                  'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {cert.category}
                </span>

                {/* Credential Link */}
                {cert.credentialUrl && (
                  <div className="mt-4">
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 text-sm font-medium underline"
                    >
                      View Credential
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
