import "./App.css";

function App() {
  return (
    <div>
      <main>
        <h1>
          $400<span>.00</span>
        </h1>
        <form>
          <div className="basic">
            <input type="text" placeholder={"+200 new samsung tv"} />
            <input type="datetime-local" />
          </div>
          <div className="description">
            <input type="text" placeholder={"description"} />
          </div>
          <button type="submit">Add new transaction</button>
        </form>
        <div className="transactions">
          <div className="transaction">
            <div className="left">
              <div className="name">New samsung Tv </div>
              <div className="description">it was time for new tv</div>
            </div>
            <div className="right"></div>
            <div className="price">$500</div>
            <div className="datetime">2023-12-04 15:30</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
