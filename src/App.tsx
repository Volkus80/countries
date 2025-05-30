import { Flags } from "./components/Flags";
import { Header } from "./components/Header";
import { Wrapper } from "./components/Wrapper";
import { ThemeContext } from "./styles/ThemeProvider";


function App() {

  return (
    <ThemeContext>
      <Wrapper>
        <Header />
        <Flags />
      </Wrapper>
    </ThemeContext>
  )
}

export default App
