import "./App.css";
import Cards from "./components/Cards";
import Filter from "./components/Filter";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Filter />
      <Cards />
    </div>
  );
}

export default App;
