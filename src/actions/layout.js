export const LAYOUT_SECONDARY_WIDTH = 'LAYOUT_SECONDARY_WIDTH';

export function layoutChangeSecondaryWidth(width) {
  return {
    type: LAYOUT_SECONDARY_WIDTH,
    width,
  };
}