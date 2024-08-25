import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Home />
        <Services />
        <About />
        <Popular />
        <Review />
        <Footer />
      </main>
    </>
  );
};

export default App;
