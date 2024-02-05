import { ColorSchemeName, useColorScheme } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
// DATA
import darkTheme from '../../config/theme/Dark';
import lightTheme from '../../config/theme/Light';
// TYPES
import ITheme from "../../type/theme";

const _ThemeData = {
  dark: darkTheme,
  light: lightTheme
}

const getColorScheme = () => {
  const schema = useColorScheme() || 'light';
  return schema
}

// const fetchInitialState = async (): Promise<ITheme | undefined> => {
const fetchInitialState = (): ITheme => {

  // try {
  // const dataInStorage = await AsyncStorage.getItem('theme');
  // if (dataInStorage) return JSON.parse(dataInStorage);


  const schema = 'dark'

  const data: ITheme = {
    schema,
    theme: _ThemeData[schema as keyof typeof _ThemeData]
  }

  return data;
  // } catch (error) {
  //   console.log("error =========== ", error);

  // }
}

const initialState = fetchInitialState()

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    set: state => {
      if (state.schema == 'light')
        state.schema = 'dark'
      else
        state.schema = 'light'
      state.theme = _ThemeData[state.schema];
    }
  }
})

export const { set } = themeSlice.actions;
export default themeSlice.reducer;