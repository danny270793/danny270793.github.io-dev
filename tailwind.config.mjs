/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f0f4ff',
					100: '#e0e9ff',
					200: '#c7d7fe',
					300: '#a4bcfc',
					400: '#8094f7',
					500: '#667eea',
					600: '#4f5bd5',
					700: '#434db3',
					800: '#3b4391',
					900: '#323974',
				},
				secondary: {
					50: '#fdf2f8',
					100: '#fce7f3',
					200: '#fbcfe8',
					300: '#f9a8d4',
					400: '#f472b6',
					500: '#ec4899',
					600: '#db2777',
					700: '#be185d',
					800: '#9d174d',
					900: '#831843',
				},
				accent: {
					50: '#f0fdfa',
					100: '#ccfbf1',
					200: '#99f6e4',
					300: '#5eead4',
					400: '#2dd4bf',
					500: '#14b8a6',
					600: '#0d9488',
					700: '#0f766e',
					800: '#115e59',
					900: '#134e4a',
				},
			},
			fontFamily: {
				'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'mono': ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
				'display': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			animation: {
				'fade-in-up': 'fadeInUp 0.8s ease-out',
				'fade-in-left': 'fadeInLeft 0.8s ease-out',
				'fade-in-right': 'fadeInRight 0.8s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
				'bounce-gentle': 'bounceGentle 2s infinite',
				'gradient': 'gradient 8s linear infinite',
				'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
			},
			keyframes: {
				fadeInUp: {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				fadeInLeft: {
					'0%': { opacity: '0', transform: 'translateX(-30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				fadeInRight: {
					'0%': { opacity: '0', transform: 'translateX(30px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				bounceGentle: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				gradient: {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				typing: {
					'0%': { width: '0' },
					'100%': { width: '100%' }
				},
			},
			backgroundImage: {
				'hero-pattern': "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%239C92AC\" fill-opacity=\"0.05\"%3E%3Ccircle cx=\"30\" cy=\"30\" r=\"4\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			boxShadow: {
				'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
				'medium': '0 8px 30px rgba(0, 0, 0, 0.12)',
				'strong': '0 20px 60px rgba(0, 0, 0, 0.15)',
				'glow': '0 0 30px rgba(102, 126, 234, 0.3)',
				'glow-accent': '0 0 30px rgba(20, 184, 166, 0.3)',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
