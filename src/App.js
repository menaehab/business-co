import Header from "./components/Header";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import "./App.css";
import About from "./components/About";
import Engagement from "./components/Engagement";
import Service from "./components/Service";
import Communication from "./components/Communication";
import Market from "./components/Market";
import Footer from "./components/Footer";
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
      <Market />
      <Footer />
    </div>
  );
}

export default App;
