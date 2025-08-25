import { useTheme } from '../hooks/useTheme';

export function ThemeDebugger() {
  const { theme, systemTheme, effectiveTheme } = useTheme();
  
  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black dark:bg-white text-white dark:text-black p-4 rounded-lg shadow-lg text-sm">
      <h3 className="font-bold mb-2">Theme Debug</h3>
      <div>Theme: {theme}</div>
      <div>System: {systemTheme}</div>
      <div>Effective: {effectiveTheme}</div>
      <div>HTML has dark class: {document?.documentElement?.classList?.contains('dark') ? 'Yes' : 'No'}</div>
      <div className="mt-2 p-2 bg-gray-200 dark:bg-gray-800 rounded">
        This should change color!
      </div>
    </div>
  );
}
