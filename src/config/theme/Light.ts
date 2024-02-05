import Colors from "./Colors"
import { IThemeData } from "../../type/theme"

const data: IThemeData = {
  colors: {
    bg: {
      primary: Colors.white,
      secondary: Colors.orange,
      tertiary: Colors.darkWhite,
      inverted: Colors.darkBlack
    },
    text: {
      primary: Colors.darkBlack,
      white: Colors.white,
      dark: Colors.darkBlack,
      inverted: Colors.white
    },
    button: {
      primary: Colors.orange
    }
  },
  font: {
    bold: "",
    regular: "",
  }
}

export default data;