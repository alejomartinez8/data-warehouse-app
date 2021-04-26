const colors = {
  default: '#495057',
  primary: '#1ab394',
  secondary: '#676a6c',
  success: '#1c84c6',
  info: '#23c6c8',
  warning: '#f8ac59',
  danger: '#ED5565',
  white: '#ffffff',
  gray: '#f3f3f4',
  border: '#e5e6e7',
};

export declare type ColorType = keyof typeof colors;

const baseTheme = {
  colors,
};

export type BaseTheme = typeof baseTheme;
export default baseTheme;
