export function SimpleThemeTest() {
  const toggleDarkMode = () => {
    const html = document.documentElement;
    html.classList.toggle('dark');
    console.log('Dark class toggled. HTML classes:', html.className);
  };

  return (
    <div className="fixed top-20 right-4 z-50 p-4 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg">
      <h3 className="font-bold mb-2 text-gray-900 dark:text-white">Simple Dark Mode Test</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3">This should change color when you click the button below:</p>
      <div className="p-3 mb-3 bg-gray-100 dark:bg-gray-700 rounded text-gray-800 dark:text-gray-200">
        Test background: light gray → dark gray
      </div>
      <button
        onClick={toggleDarkMode}
        className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded font-medium transition-colors"
      >
        Toggle Dark Mode Manually
      </button>
      <div className="mt-2 text-xs text-gray-500 dark:text-gray-400">
        HTML dark class: {document?.documentElement?.classList?.contains('dark') ? 'YES' : 'NO'}
      </div>
    </div>
  );
}
