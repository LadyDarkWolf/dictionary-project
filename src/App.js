import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="wolf" />
        </main>
        <footer className="App-footer">
          Coded by Lisa Wolf. Open sourced with source code at{" "}
          <a
            href="https://github.com/LadyDarkWolf/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
