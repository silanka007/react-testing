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
        <Title heading="Main Section" desc="The main section body is contained!" tempArr={tempArr} />
      </section>
    </div>
  );
}

export default App;
