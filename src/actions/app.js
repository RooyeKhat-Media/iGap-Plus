export const APP_ENABLE = 'APP_ENABLE';

export function appEnable(isEnable) {
  return {
    type: APP_ENABLE,
    isEnable,
  };
}