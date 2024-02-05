import { ColorSchemeName, ColorValue } from 'react-native';

export interface IThemeData {
  colors: {
    bg: {
      primary: ColorValue;
      inverted: ColorValue;
      secondary: ColorValue;
      tertiary: ColorValue;
    };
    text: {
      primary: ColorValue;
      white: ColorValue;
      dark: ColorValue;
      inverted: ColorValue
    };
    button: {
      primary: ColorValue;
    };
  };
  font: {
    bold: String;
    regular: String;
  };
}

export default interface ITheme {
  schema: ColorSchemeName;
  theme: IThemeData;
}
