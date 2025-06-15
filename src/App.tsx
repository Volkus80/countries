import { RouterProvider } from "react-router";
import { ThemeContext } from "./styles/ThemeProvider";
import { router } from "./routes/router";


function App() {

  return (
    <ThemeContext>
      <RouterProvider router={router} />
    </ThemeContext>
  )
}

export default App
