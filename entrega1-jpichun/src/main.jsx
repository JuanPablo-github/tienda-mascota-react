import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { initializeApp } from "firebase/app";
import './index.css'
import {CartProvider} from './context/CartContext.jsx'
import App from './App.jsx'

const firebaseConfig = {
  apiKey: "AIzaSyCpsDxGlQDVEwDmTFIJHzgjDUzf0iHdWYw",
  authDomain: "tienda-mascotas-ff10d.firebaseapp.com",
  projectId: "tienda-mascotas-ff10d",
  storageBucket: "tienda-mascotas-ff10d.firebasestorage.app",
  messagingSenderId: "673393165271",
  appId: "1:673393165271:web:c453c5e76ca734b5e3c192"
};

initializeApp(firebaseConfig);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
       <App />
    </CartProvider>
   
  </StrictMode>,
)
