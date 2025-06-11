import { RouterProvider } from "react-router";
import { Header } from "./components/Header";
import { ThemeContext } from "./styles/ThemeProvider";
import { router } from "./routes/router";
import { Wrapper } from "./components/Wrapper";


function App() {

  return (
    <ThemeContext>
      <Header />
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>

    </ThemeContext>
  )
}

export default App
