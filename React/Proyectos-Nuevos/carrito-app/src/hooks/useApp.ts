import { useEffect, useState } from "react";
import { menuItems } from "../data/db";
import { MenuItem, OrderItem } from "../types";

export function useApp() {
  // Función para obtener el estado inicial de la orden
  const initialOrder = (): OrderItem[] => {
    // Obtiene el valor almacenado en el localStorage
    const localStorageOrder = localStorage.getItem("order");
    // Si existe el valor retorna el arreglo, sino, un arreglo vacio
    return localStorageOrder ? JSON.parse(localStorageOrder) : [];
  };

  // Inicializa el estado con los datos del menú
  const [data] = useState(menuItems);
  // Inicializa el estado obteniendo los datos del local storage
  const [order, setOrder] = useState(initialOrder);

  // Guarda en localStorage el estado order, cada vez que "order" cambie
  useEffect(() => {
    localStorage.setItem("orden", JSON.stringify(order));
  }, [order]);

  const MAX_ITEMS = 5;

  // Función para agregar productos al estado "order"
  function addToOrder(item: MenuItem) {
    // Busca el indice del producto en el estado "order" comparando su "ID" con el parametro de entrada "item"
    const itemExist = order.findIndex((product) => product.id === item.id);

    // Si el producto existe en el estado "order"
    if (itemExist >= 0) {
      // Verifica si la cantidad actual del producto alcanzó el límite máximo
      if (order[itemExist].quantity >= MAX_ITEMS) return;

      // Crea una copía del estado actual y actualiza la cantidad del producto
      const updateOrder = [...order];
      updateOrder[itemExist].quantity++;
      setOrder(updateOrder);
    } else {
      // Si el producto no existe, crea un nuevo producto con la cantidad inicial de 1
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
