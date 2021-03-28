const colors = {
  default: "#282a3c",
  primary: "#177dff",
  secondary: "#716aca",
  success: "#35cd3a",
  info: "#05b4d8",
  warning: "#ffa534",
  danger: "#f3545d",
  white: "#ffffff",
};

export declare type ColorType = keyof typeof colors;

const baseTheme = {
  colors,
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
