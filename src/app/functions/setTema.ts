export function setTema(mode: 'dark' | 'light' | 'system' = 'system') {
  if (mode === 'system') {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersDarkMode.matches) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } else {
    if (mode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
