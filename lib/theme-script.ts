export const themeScript = `
(function() {
  function getThemePreference() {
    if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
      return localStorage.getItem('theme');
    }
    return 'light';
  }
  
  const theme = getThemePreference();
  
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
  
  // Store theme for SSR
  document.documentElement.setAttribute('data-theme', theme);
})();
`
