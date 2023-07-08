import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import "./styles/global.css";
import "material-icons/iconfont/material-icons.css";
import { Home } from "./Routes/Home";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
