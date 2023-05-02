import Header from "./components/Header";
import FinancingOptions from "./components/FinancingOptions";
import Results from "./components/Results";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <div className="app__body">
        <FinancingOptions></FinancingOptions>
        <Results></Results>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
