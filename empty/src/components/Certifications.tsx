import { useState } from 'preact/hooks';
import { useTranslation } from 'react-i18next';
import type { Certification } from '../types';

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState(t('filters.all'));

  const categories = [...Array.from(new Set(certifications.map(cert => cert.category))), t('filters.all')];
  const filteredCertifications = activeFilter === t('filters.all') 
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
            cert.credentialUrl ? (
              <a
                key={cert.id}
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group"
              >
                {/* Certification Image */}
                <div className="flex justify-center mb-6">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Certification Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-2">
                    {cert.provider}
                  </p>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-sm text-gray-500 dark:text-gray-400">Earned on:</span>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded">
                      {cert.date}
                    </span>
                  </div>
                  
                  {/* Category Badge */}
                  {/* <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                    cert.category === 'Cloud' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                    cert.category === 'DevOps' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    cert.category === 'Database' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    cert.category === 'Frontend' ? 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200' :
                    cert.category === 'Data' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    cert.category === 'AI' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    cert.category === 'Development' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    cert.category === 'Automation' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    cert.category === 'Deployment' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' :
                    cert.category === 'Data Privacy' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                    {cert.category}
                  </span> */}
                </div>
              </a>
            ) : (
              <div
                key={cert.id}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg opacity-75"
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
                    cert.category === 'Data' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                    cert.category === 'AI' ? 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200' :
                    cert.category === 'Development' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                    cert.category === 'Automation' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200' :
                    cert.category === 'Deployment' ? 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200' :
                    cert.category === 'Data Privacy' ? 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200' :
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                  }`}>
                    {cert.category}
                  </span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
