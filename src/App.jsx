//! STYLES IMPORT
import "./App.css";
//! COMPONENTS IMPORT
import Hero from "./components/Hero";
import Demo from "./components/Demo";

const App = () => (
  <main>
    <div className="main">
      <div className="gradient" />
    </div>
    <div className="app">
      <Hero />
      <Demo />
    </div>
  </main>
);

export default App;
