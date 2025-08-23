import { useState } from 'preact/hooks'
import preactLogo from './assets/preact.svg'
import viteLogo from '/vite.svg'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div class="min-h-screen bg-gray-100 dark:bg-gray-900 flex items-center justify-center">
      <div class="max-w-2xl mx-auto p-8 text-center">
        <div class="flex justify-center space-x-4 mb-8">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} class="h-24 w-24 hover:opacity-75 transition-opacity" alt="Vite logo" />
          </a>
          <a href="https://preactjs.com" target="_blank">
            <img src={preactLogo} class="h-24 w-24 hover:opacity-75 transition-opacity animate-spin-slow" alt="Preact logo" />
          </a>
        </div>
        
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Vite + Preact + Tailwind
        </h1>
        
        <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg mb-6">
          <button 
            class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors"
            onClick={() => setCount((count) => count + 1)}
          >
            count is {count}
          </button>
          <p class="mt-4 text-gray-600 dark:text-gray-300">
            Edit <code class="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">src/app.tsx</code> and save to test HMR
          </p>
        </div>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          Check out{' '}
          <a
            href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
            target="_blank"
            class="text-blue-500 hover:text-blue-600 underline"
          >
            create-preact
          </a>
          , the official Preact + Vite starter
        </p>
        
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Click on the Vite and Preact logos to learn more
        </p>
      </div>
    </div>
  )
}
