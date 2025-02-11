import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";

function App() {
  return (
    <div id="app">
      <Header />

      <div className="pt-20">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
