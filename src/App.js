import { BrowserRouter as Router } from "react-router-dom";
import Home from "@/page/Home";

import "./index.scss";
function App() {
  return (
    <div className="App">
      <Router>
        <Home />
      </Router>
    </div>
  );
}

export default App;
