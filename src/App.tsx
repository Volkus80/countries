import { RouterProvider } from "react-router";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { ThemeContext } from "./styles/ThemeProvider";
import { router } from "./routes/router";


function App() {

  return (
    <ThemeContext>
      <>
        <Header />
        <RouterProvider router={router} />
      </>
    </ThemeContext>
  )
}

export default App
