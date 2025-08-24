import type { SocialNetwork, Profile } from '../types';

interface ContactProps {
  socialNetworks: SocialNetwork[];
  profile: Profile;
}

export function Contact({ socialNetworks, profile }: ContactProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Let's Connect
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            I'm always interested in new opportunities and interesting projects. 
            Let's discuss how we can work together.
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

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
              >
                Send Email
              </a>
              <button className="border border-white text-white hover:bg-white hover:text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
                Download Resume
              </button>
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
                  className="bg-white bg-opacity-10 hover:bg-opacity-20 backdrop-blur-sm border border-white border-opacity-20 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-1 group"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                      {social.name === 'GitHub' && <span className="text-3xl text-white">🐙</span>}
                      {social.name === 'LinkedIn' && <span className="text-3xl text-white">💼</span>}
                      {social.name === 'Twitter' && <span className="text-3xl text-white">🐦</span>}
                      {social.name === 'Medium' && <span className="text-3xl text-white">✍️</span>}
                      {social.name === 'Stack Overflow' && <span className="text-3xl text-white">📚</span>}
                    </div>
                    <h4 className="text-white font-semibold mb-1">
                      {social.name}
                    </h4>
                    {social.username && (
                      <p className="text-indigo-100 text-sm">
                        {social.username}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-indigo-500 text-center">
          <p className="text-indigo-100">
            © 2024 {profile.name}. Built with Preact + Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
}
