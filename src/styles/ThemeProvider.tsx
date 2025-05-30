import { createContext, useState, type FunctionComponent, type ReactNode } from "react";
import type { ThemeName } from "../types/ThemeName";

interface ThemeProviderValueType {
    type: ThemeName,
    toggle: () => void
}

interface ElemChildren {
    children: ReactNode
}

const providerInitialValue = { type: "light" as ThemeName, toggle: () => { } }

const ThemeProvider = createContext<ThemeProviderValueType>(providerInitialValue);


const ThemeContext: FunctionComponent<ElemChildren> = ({ children }) => {
    const [theme, setTheme] = useState("light");
    const toggle = () => theme === "light" ? setTheme("dark") : setTheme("light");

    return <ThemeProvider.Provider value={{ type: theme as ThemeName, toggle: toggle }}>
        {children}
    </ThemeProvider.Provider>
}

export { ThemeContext, ThemeProvider }