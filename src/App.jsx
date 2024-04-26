import { Routes, Route } from "react-router-dom";
import NavigationWrapper from "./components/NavigationWrapper";
import { lazy } from "react";

const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationWrapper />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
