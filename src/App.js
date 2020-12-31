import Button from "./components/button";
import Header from "./components/header";
import Title from "./components/title";

const tempArr = [{
  age: 28,
  name: "Paul Silanka",
  stack: "full-stack",
  isProficient: true
}]

function App() {
  const configButton= {
    buttonText: "Load Posts",
    emitEvent: () => {}
  }
  return (
    <div className="App">
      <Header />
      <section style={{padding: "2rem"}}>
        <Title heading="Posts" desc="Click the button to retrieve posts..." tempArr={tempArr} />
        <Button {...configButton} />
      </section>
    </div>
  );
}

export default App;
