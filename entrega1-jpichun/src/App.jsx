import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';
import Detalle from './components/Detalle';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Cart from "./components/Cart";
import Checkout from './components/Checkout';






function App() {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Nosotros" element={<Nosotros />} />
          <Route path="producto/:id" element={<Detalle />} /> {/* ✅ Ruta de detalle */}
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />

        </Route>
      </Routes>
   
 </BrowserRouter>
  );
}

export default App;



