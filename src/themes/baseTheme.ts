const colors = {
  primary: "#007bff",
  secondary: "#5a6169",
  success: "#17c671",
  info: "#00b8d8",
  warning: "#ffb400",
  danger: "#c4183c",
  dark: "#212529",
  white: "#ffffff",
};

export declare type ColorType = keyof typeof colors;

const baseTheme = {
  colors,
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
