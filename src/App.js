import Header from "./components/header";
import Title from "./components/title";

function App() {
  return (
    <div className="App">
      <Header />
      <section>
        <Title heading="Main Section" desc="The main section body is contained!" />
      </section>
    </div>
  );
}

export default App;
