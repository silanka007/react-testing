import Header from "./components/header";
import Title from "./components/title";

const tempArr = [{
  age: 28,
  name: "Paul Silanka",
  stack: "full-stack",
  isProficient: true
}]

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Title heading="Posts" desc="Click the button to retrieve posts..." tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
