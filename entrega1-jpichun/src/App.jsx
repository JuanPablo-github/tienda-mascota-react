import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import './App.css'

function App() {

  return (
    <>
      <NavBar />
      <div className="itemListContainer">
      <ItemListContainer greeting={"Bienvenidos!"} />
    
    </div>

    </>
  )
}

export default App
