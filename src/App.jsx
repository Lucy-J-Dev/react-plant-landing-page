import About from "./components/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Popular from "./components/Popular";
import Review from "./components/Review";
import Services from "./components/Services";
import ScrollUpButton from "./components/common/ScrollUpButton";

const App = () => {
  const menuLinks = [
    { id: 1, name: "Home", reference: "home", active: true },
    { id: 2, name: "About", reference: "about", active: false },
    { id: 3, name: "Popular", reference: "popular", active: false },
    { id: 4, name: "Review", reference: "review", active: false },
  ];

  return (
    <>
      <Header menuLinks={menuLinks} />
      <main>
        <Home />
        <Services />
        <About />
        <Popular />
        <Review />
        <Footer />
        <ScrollUpButton />
      </main>
    </>
  );
};

export default App;
