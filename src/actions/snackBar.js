export const OPEN_SNACK_BAR = 'OPEN_SNACK_BAR';

export function openSnackBar(content) {
  return {
    type: OPEN_SNACK_BAR,
    content,
  };
}