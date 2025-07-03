import { createContext, useState } from "react";

// Crear el contexto
export const CartContext = createContext();

// Crear el proveedor
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cantidad) => {
    const itemExistente = cart.find(prod => prod.id === item.id);

    if (itemExistente) {
      const actualizado = cart.map(prod =>
        prod.id === item.id
          ? { ...prod, cantidad: prod.cantidad + cantidad }
          : prod
      );
      setCart(actualizado);
    } else {
      setCart([...cart, { ...item, cantidad }]);
    }
  };

  const removeItem = (id) => {
    setCart(cart.filter(prod => prod.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalUnidades = () =>
    cart.reduce((acc, prod) => acc + prod.cantidad, 0);

  const totalPrecio = () =>
    cart.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItem,
        clearCart,
        totalUnidades,
        totalPrecio,
        getTotalItems: () => cart.reduce((acc, prod) => acc + prod.cantidad, 0)
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
