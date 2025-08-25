import type { Profile } from '../types';
import { useTranslation } from 'react-i18next';

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const { t } = useTranslation();
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900 flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="order-2 lg:order-1 flex justify-center">
            <div className="relative">
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-80 h-80 rounded-full object-cover shadow-2xl border-8 border-white dark:border-gray-800"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">✨</span>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {profile.name}
            </h1>
            <h2 className="text-2xl lg:text-3xl font-semibold text-indigo-600 dark:text-indigo-400 mb-6">
              {profile.title}
            </h2>
            <p className="text-l text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              {profile.description.split('\n').map((line, index) => (
                <span key={index}>
                  {line}
                  <br />
                  <br />
                </span>
              ))}
            </p>

            {/* Location and Contact */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-xl">📍</span>
                <span>{profile.location}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <span className="text-xl">✉️</span>
                <a 
                  href={`mailto:${profile.email}`}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {profile.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
