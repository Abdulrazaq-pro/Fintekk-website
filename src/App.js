import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

function App() {
  return (
    <div className="App max-w-screen">
      <Header />
      <Hero />
      <Services/>
    </div>
  );
}

export default App;
