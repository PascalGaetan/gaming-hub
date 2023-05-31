import GameCard from "./components/GameCard";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <NavBar />
        </div>
        <div className="row">
          <div className="col-sm-2">Aside</div>
          <div className="col-sm-10">
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
