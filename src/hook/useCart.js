import { useContext } from "react";
import { CartContext } from "../components/cart/CartContext";
const useCart = () => {
  const { cart, setCart } = useContext(CartContext);
  
  const addToCart = (product, quantity) => {
    const existingProduct = cart.find(
      (item) =>
        item.id === product._id &&
        JSON.stringify(item.options) === JSON.stringify(product.options)
    );
  
    let updatedCart;
    if (existingProduct) {
      updatedCart = cart.map((item) =>
        item.id === product._id &&
        JSON.stringify(item.options) === JSON.stringify(product.options)
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
    } else {
      updatedCart = [
        ...cart,
        {
          id: product._id,
          name: product.name,
          price: product.price,
          picture: product.picture,
          quantity: quantity,
          options: product.options || [],
        },
      ];
    }
    setCart(updatedCart);
  };

  const increaseQuantity = (productId, options) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && JSON.stringify(item.options) === JSON.stringify(options)
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
    setCart(updatedCart);
  };

  const decreaseQuantity = (productId, options) => {
    const updatedCart = cart
      .map((item) =>
        item.id === productId && JSON.stringify(item.options) === JSON.stringify(options)
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    setCart(updatedCart);
  };

  const removeFromCart = (productId, options) => {
    const updatedCart = cart.filter(
      (item) => !(item.id === productId && JSON.stringify(item.options) === JSON.stringify(options))
    );
    setCart(updatedCart);
  };

  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return {
    cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalQuantity,
    totalPrice,
  };
};
export default useCart;