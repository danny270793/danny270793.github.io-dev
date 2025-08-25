import { useTranslation } from 'react-i18next';
import type { SocialNetwork, Profile } from '../types';
import Youtube from "../images/social/youtube.png";
import Github from "../images/social/github.svg";
import LinkedIN from "../images/social/linkedin.png";

interface ContactProps {
  socialNetworks: SocialNetwork[];
  profile: Profile;
}

export function Contact({ socialNetworks, profile }: ContactProps) {
  const { t } = useTranslation();
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Information */}
          <div className="text-center lg:text-left">
            <h3 className="text-2xl font-bold text-white mb-6">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-2xl">✉️</span>
                <a 
                  href={`mailto:${profile.email}`}
                  className="text-indigo-100 hover:text-white text-lg transition-colors"
                >
                  {profile.email}
                </a>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-2xl">📍</span>
                <span className="text-indigo-100 text-lg">{profile.location}</span>
              </div>
            </div>
          </div>

          {/* Social Networks */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-6">
              Follow Me
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {socialNetworks.map(social => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="text-center">
                    <div className="mx-auto mb-3 flex items-center justify-center">
                      {social.name === 'GitHub' && <span className="text-3xl text-white">
                        <img
                          src={Github}
                          alt={social.name}
                          className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </span>}
                      {social.name === 'LinkedIn' && <span className="text-3xl text-white">
                        <img
                          src={LinkedIN}
                          alt={social.name}
                          className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </span>}
                      {social.name === 'Youtube' && <span className="text-3xl text-white">
                        <img
                          src={Youtube}
                          alt={social.name}
                          className="w-24 h-24 object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </span>}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-indigo-500 text-center">
          <p className="text-indigo-100">
            © 2025 {profile.name}. Built with Preact + Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
