import NavBar from "./components/NavBar";
import GameService from "./services/game-service";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <div className="col-sm-4">Aside</div>
        <div className="col-sm-8">
          <GameService />
        </div>
      </div>
    </div>
  );
}

export default App;
