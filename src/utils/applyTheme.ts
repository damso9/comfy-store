import { Theme } from "@/features/theme/themeSlice";


// 
export const applyTheme = (theme:Theme) => {
    // This actually targets our root html tag and toggles the class property value
    const root = window.document.documentElement;
    root.classList.remove('light','dark')

    if (theme === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme:dark').matches ? 'dark' : 'light';
        root.classList.add(systemTheme)
        return;
    }
    root.classList.add(theme)
}