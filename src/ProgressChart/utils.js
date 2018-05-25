const COLORS = ['#8dd3c7', '#ffffb3', '#bebada', '#fb8072', '#80b1d3', '#fdb462', '#b3de69', '#fccde5', '#d9d9d9'];

export const qualitativeColorFormatter = (value, idx) => {
  return COLORS[idx % COLORS.length];
};

export const numberValueFormatter = (value, idx) => {
  if (isNaN(value)) {
    return '-';
  }

  return Number(value).toLocaleString();
};
