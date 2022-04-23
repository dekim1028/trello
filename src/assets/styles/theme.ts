const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem",
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
};

export const theme = { fonts, color };

export type Theme = typeof theme;
