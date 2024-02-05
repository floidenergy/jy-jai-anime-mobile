import { useSelector } from "react-redux";
import ITheme from "../type/theme";

const useTheme = (): ITheme => useSelector((state: any) => state.theme)

export default useTheme;