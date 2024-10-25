import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import "./App.css";
import About from "./components/About";
import Engagement from "./components/Engagement";
import Service from "./components/Service";
import Communication from "./components/Communication";
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Offer />
      <About />
      <Engagement />
      <Service />
      <Communication />
    </div>
  );
}

export default App;
