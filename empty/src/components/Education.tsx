import type { Education as EducationType } from '../types';

interface EducationProps {
  education: EducationType[];
}

export function Education({ education }: EducationProps) {
  return (
    <section className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Academic foundation that shaped my technical expertise
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-indigo-200 dark:bg-indigo-800"></div>

          <div className="space-y-12">
            {education.map((edu) => (
              <div key={edu.id} className="relative flex items-start">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-indigo-600 rounded-full border-4 border-white dark:border-gray-800 shadow-lg"></div>
                
                {/* Content */}
                <div className="ml-20 bg-gray-50 dark:bg-gray-700 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-start gap-4">
                    {/* University Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center">
                        <img
                          src={edu.avatar}
                          alt={edu.university}
                        />
                      </div>
                    </div>
                    
                    {/* Education Content */}
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.title}
                        </h3>
                      </div>
                      <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-2">
                        {edu.university}
                      </p>
                      <span className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900 px-3 py-1 rounded-full">
                        {edu.date}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
