import { applyTheme } from '@/utils/applyTheme';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Theme = 'dark' | 'light' | 'system';

interface ThemeState {
  theme: Theme;
}
const initializeTheme = (): Theme => {
  const theme = (localStorage.getItem('theme') as Theme) || 'system';
  applyTheme(theme);
  return theme;
};

const initialState: ThemeState = {
  theme: initializeTheme(),
};
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    // action ere is refering to the parameter we could pass when the function is being called
    // That's why we gave a it a type of 'Theme'
    setTheme: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload;
      applyTheme(action.payload);
      localStorage.setItem('theme', action.payload);
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
