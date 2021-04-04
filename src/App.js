import Header from "./components/Header/Header";
import Start from "./components/Start/Start";
import Explore from "./components/Explore/Explore";
import Plans from "./components/Plans/Plans";
import Join from "./components/Join/Join";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Start />
      <Explore />
      <Plans />
      <Join />
    </div>
  );
}

export default App;
