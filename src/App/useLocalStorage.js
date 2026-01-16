import React from "react";

function useLocalStorage(itemName, initialValue) {
  //hook personalizado para manejar el localStorage

  const localStorageItem = localStorage.getItem(itemName); //obtiene las tareas del localStorage

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue)); //si no hay tareas en el localStorage, se crean con los datos iniciales
    parsedItem = initialValue;
  } else {
    parsedItem = JSON.parse(localStorageItem); //si hay tareas en el localStorage, se parsean
  }

  const [item, setItem] = React.useState(parsedItem); //estado de las tareas

  const saveItem = (newItem) => {
    //funcion para guardar las tareas en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem)); //guarda las tareas en el localStorage
    setItem(newItem); //actualiza el estado de las tareas
  };

  return [item, saveItem];
}
export { useLocalStorage };
