import { useContext } from "react"
import { ThemeProvider } from "../styles/ThemeProvider"
import { darkTheme } from "../styles/darkTheme";
import { lightTheme } from "../styles/lightTheme";

const useTheme = () => {
    const themeprovider = useContext(ThemeProvider);
    const type = themeprovider.type
    const theme = type === "dark" ? darkTheme : lightTheme;
    const toggle = themeprovider.toggle;


    return { theme, toggle, type }
}

export { useTheme }