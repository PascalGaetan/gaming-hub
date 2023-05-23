import NavBar from "./components/NavBar"

function App() {

  return (
    <div className="container">
      <NavBar/>
      <div className="row">
        <div className="col-sm-4">Aside</div>
        <div className="col-sm-8">Main</div>
      </div>
    </div>
  )
}

export default App