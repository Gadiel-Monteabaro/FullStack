import { useEffect, useState } from "react";
import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export function useApp() {
  // Función para obtener el estado inicial de la order
  const initialOrder = (): OrderItem[] => {
    // Obtiene el valor almacenado en el localStorage
    const localStorageOrder = localStorage.getItem("order");
    // Si existe el valor retorna el arreglo, sino, un arreglo vacio
    return localStorageOrder ? JSON.parse(localStorageOrder) : [];
  };

  // Inicializa el estado con los datos del menú
  const [data] = useState(menuItems);
  // Inicializa el estado, obteniendo los datos del local storage
  const [order, setOrder] = useState(initialOrder);

  // Guarda en localStorage el estado order, cada vez que "order" cambie
  useEffect(() => {
    localStorage.setItem("orden", JSON.stringify(order));
  }, [order]);

  const MAX_ITEMS = 5;

  // Función para agregar productos al estado order
  function addToOrder(item: MenuItem) {
    // Devuelve el indice del producto comparando con el parametro de entrada "item"
    const itemExist = order.findIndex((product) => product.id === item.id);
    // Si el producto existe en el estado "order" aumenta la cantidad del producto
    if (itemExist >= 0) {
      if (order[itemExist].quantity >= MAX_ITEMS) return;
      const updateOrder = [...order];
      updateOrder[itemExist].quantity++;
      setOrder(updateOrder);
    } else {
      // Si no, crea el nuevo producto dentro del estado "orden"
      const newItem: OrderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }
  }

  return {
    data,
    order,
    addToOrder,
  };
}
