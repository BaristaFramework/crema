/**
 * Block chart Helpers
 */

/**
 * Block Item Helpers
 */

const COLORS = [
  '#9dbcea',
  '#e4e4ac',
  '#67c6f2',
  '#e9b198',
  '#5ad0da',
  '#eaaecf',
  '#b3e5b9',
  '#c4b7ea',
  '#bcbe8b',
  '#8fd4e6',
  '#8bc5ab',
  '#95eadc'
];

export const qualitativeColorFormatter = (value, idx) => {
  return COLORS[idx % COLORS.length];
};
