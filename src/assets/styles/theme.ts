const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "12px",
    base: "16px",
    lg: "18px",
    xl: "25px",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};

const color = {
  primary: "#363062",
  secondary: "#4D4C7D",
  tertiary: "#827397",
  quaternary: "#E9D5DA",
  gray: "#EBEBEF",
  gray2: "#D8D8DF",
  gray3: "#C1C1CD",
  darkgray: "#8A8A8A",
  red: "#F10406",
};

export const theme = { fonts, color };

export type Theme = typeof theme;
