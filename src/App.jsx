import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Services />
        <About />
      </main>
    </>
  );
};

export default App;
