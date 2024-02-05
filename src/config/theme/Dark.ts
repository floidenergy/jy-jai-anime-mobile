import Colors from "./Colors"
import { IThemeData } from "../../type/theme"

const data: IThemeData = {
  colors: {
    bg: {
      primary: Colors.darkBlack,
      secondary: Colors.orange,
      tertiary: Colors.lightBlack,
      inverted: Colors.white,
    },
    text: {
      primary: Colors.white,
      white: Colors.white,
      dark: Colors.darkBlack,
      inverted: Colors.darkBlack
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