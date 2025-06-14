import { useEffect, useState, useMemo } from "react";

const useCart = () => {
  const [carts, setCarts] = useState(() => {
    const items = localStorage.getItem("carts");
    return items ? JSON.parse(items) : [];
  });

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  const addToCart = (product) => {
    setCarts((prevCarts) => {
      const existingItem = prevCarts.find((p) => p.id === product.id);
      if (existingItem) {
        return prevCarts.map((p) =>
          p.id === product.id ? { ...p, count: (p.count || 0) + 1 } : p
        );
      } else {
        return [...prevCarts, { ...product, count: 1 }];
      }
    });
  };

  const removeFromCart = (product) => {
    setCarts((prevCarts) => {
      const existingItem = prevCarts.find((p) => p.id === product.id);
      if (existingItem && existingItem.count > 1) {
        return prevCarts.map((p) =>
          p.id === product.id ? { ...p, count: p.count - 1 } : p
        );
      } else {
        return prevCarts.filter((p) => p.id !== product.id);
      }
    });
  };

  const clearCart = () => {
    setCarts([]);
  };

  const cartCount = useMemo(() => carts.length, [carts]);

  const getCartTotal = useMemo(() => {
    return carts
      .reduce((acc, product) => acc + product.new_price * (product.count || 1), 0)
      .toFixed(2);
  }, [carts]);

  return {
    addToCart,
    cartCount,
    carts,
    removeFromCart,
    getCartTotal,
    clearCart
  };
};

export default useCart;