import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Productos from './components/Productos';
import Nosotros from './components/Nosotros';

import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Productos" element={<Productos />} />
          <Route path="Nosotros" element={<Nosotros />} />
        </Route>
      </Routes>
   
 </BrowserRouter>
  );
}

export default App;



