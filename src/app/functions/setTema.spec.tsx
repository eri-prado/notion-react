import { setTema } from './setTema';

describe('setTema function', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark');
  });

  test('should set theme to dark', () => {
    setTema('dark');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('should set theme to light', () => {
    setTema('light');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  test('should set theme to system (dark)', () => {
    const prefersDarkMode = {
      matches: true,
    };
    window.matchMedia = jest.fn().mockReturnValue(prefersDarkMode);

    setTema('system');
    expect(document.documentElement.classList.contains('dark')).toBe(true);
  });

  test('should set theme to system (light)', () => {
    const prefersDarkMode = {
      matches: false,
    };
    window.matchMedia = jest.fn().mockReturnValue(prefersDarkMode);

    setTema('system');
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
