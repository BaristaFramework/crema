/**
 * Progress chart Helpers
 */

/**
 * Progress Item Helpers
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

export const numberValueFormatter = (value, idx) => {
  if (isNaN(value)) {
    return '-';
  }

  return Number(value).toLocaleString();
};
