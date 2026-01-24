import React from "react";

function useLocalStorage(itemName, initialValue) {
  //hook personalizado para manejar el localStorage
  const [item, setItem] = React.useState(initialValue); //estado de las tareas
  const [loading, setLoading] = React.useState(true); //estado de carga
  const [error, setError] = React.useState(false); //estado de error

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName); //obtiene las tareas del localStorage
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue)); //si no hay tareas en el localStorage, se crean con los datos iniciales
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem); //si hay tareas en el localStorage, se parsean
          setItem(parsedItem); //se actualiza el estado de las tareas
        }

        setLoading(false); //carga completa
      } catch (error) {
        setLoading(false); //si hay un error, se detiene la carga
        setError(true); //si hay un error, se actualiza el estado de error
      }
    }, 2000); //simula un tiempo de carga
  }, []); //se ejecuta solo una vez al montar el componente
  const saveItem = (newItem) => {
    //funcion para guardar las tareas en el localStorage
    localStorage.setItem(itemName, JSON.stringify(newItem)); //guarda las tareas en el localStorage
    setItem(newItem); //actualiza el estado de las tareas
  };

  return {
    item,
    saveItem,
    loading,
    error,
  }; //retorna el estado de las tareas y la funcion para guardarlas
}
// const defaultTodos = [
//   datos iniciales de las tareas
//   { Text: "Tarea asdasdasdasdaaaaaaaaaaaaaaaaaa", completed: true },
//   { Text: "Tarea 2", completed: false },
//   { Text: "Tarea 3", completed: false },
//   { Text: "Tarea 4", completed: false },
//   { Text: "Tareá 5", completed: false },
// ];

//localStorage.setItem("TODOS_V1", JSON.stringify(defaultTodos)); //crea las tareas en el localStorage
//localStorage.removeItem("TODOS_V1"); //elimina las tareas del localStorage

export { useLocalStorage };
