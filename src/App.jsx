import Card from "./components/Card";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
