import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-sm-3">Aside</div>
          <div className="col-sm-9">
            <div className="row">
              <GameCard />
            </div>            
          </div>
            
        </div>
      </div>
    </>
  );
}

export default App;
