import Homepage from "./Pages/HomePage";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";

function App() {
  const appStyles = {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  };

  return (
    <BrowserRouter>
      <div style={appStyles}>
        <Header />
        <Route path="/" component={Homepage} exact />
        <Route path="/coins/:id" component={CoinPage} exact />
      </div>
    </BrowserRouter>
  );
}

export default App;
