import { useEffect, useState } from "react";
import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export function useApp() {
  // Función para obtener el estado inicial de la orden
  const initialOrder = (): OrderItem[] => {
    // Obtener el valor almacenado en el localStorage
    const localStorageOrder = localStorage.getItem("order");
    // Si existe el valor retornar el arreglo, sino, un arreglo vacio
    return localStorageOrder ? JSON.parse(localStorageOrder) : [];
  };

  // Inicializar el estado con los datos del menú
  const [data] = useState(menuItems);
  // Inicializar el estado obteniendo los datos del local storage
  const [order, setOrder] = useState(initialOrder);

  // Guardar en localStorage el estado order, cada vez que "order" cambie
  useEffect(() => {
    localStorage.setItem("orden", JSON.stringify(order));
  }, [order]);

  const MAX_ITEMS = 5;

  // Función para agregar productos al estado "order"
  function addToOrder(item: MenuItem) {
    // Buscar el indice del producto en el estado "order" comparando su "ID" con el parametro de entrada "item"
    const itemExist = order.findIndex((product) => product.id === item.id);

    // Si el producto existe en el estado "order"
    if (itemExist >= 0) {
      // Verificar si la cantidad actual del producto alcanzó el límite máximo
      if (order[itemExist].quantity >= MAX_ITEMS) return;

      // Crear una copía del estado actual y actualizar la cantidad del producto
      const updateOrder = [...order];
      updateOrder[itemExist].quantity++;
      setOrder(updateOrder);
    } else {
      // Si el producto no existe, crear un nuevo producto con la cantidad inicial de 1
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }

  // Función que devuelve el precio de un producto multiplicado por la cantidad
  function productTotal(price: number, quantity: number) {
    return price * quantity;
  }

  // Función para eliminar un producto del estado "order" segun su "id"
  function removeFromOrder(id: MenuItem["id"]) {
    // Actualizar el estado "order" para eliminar el producto con el "id" proporcionado
    setOrder((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
  }

  // Función para incrementar la cantidad de un producto
  function increaseQuantity(id: MenuItem["id"]) {
    // Recorrer el estado "order" y actualizar la cantidad del producto
    const updateOrder = order.map((item) => {
      // Si el id coincide, actualizar la cantidad
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      // Si no, devolver el item sin actualizar
      return item;
    });
    setOrder(updateOrder);
  }

  return {
    data,
    order,
    addToOrder,
    productTotal,
    removeFromOrder,
    increaseQuantity,
  };
}
