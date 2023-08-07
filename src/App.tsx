import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import "material-icons/iconfont/material-icons.css";
import { Investors } from "./Routes/Investors";

function App() {
  return (
    <>
      <Header />
      <Investors />
      <Footer />
    </>
  );
}

export default App;
