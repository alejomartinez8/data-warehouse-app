const colors = {
  default: '#ffffff',
  primary: '#1ab394',
  secondary: '#676a6c',
  success: '#1c84c6',
  info: '#23c6c8',
  warning: '#f8ac59',
  danger: '#ED5565',
  white: '#ffffff',
};

export declare type ColorType = keyof typeof colors;

const baseTheme = {
  colors,
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
