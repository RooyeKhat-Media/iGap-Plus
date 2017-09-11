export const THEME_CHANGE = 'THEME_CHANGE';

export function themeChange(theme) {
  return {
    type: THEME_CHANGE,
    theme,
  };
}

