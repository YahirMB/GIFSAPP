import { useState } from "react"





export const AddCategories = ({onNewCategoria}) => {

  const [inputValue, setInputValue] = useState('');

  const cmabiarInput = (e) => {
    setInputValue(e.target.value)  // recive lo que tiene el evento y lo cambios con setInputValue 
  }

  const onSubmit = (e) =>{
    e.preventDefault(); // el evento. con el este metodo hace que no recarge la pagina

    if(inputValue.trim().length <2) return;
    //setCategorias(categories => [inputValue,...categories]);

    onNewCategoria(inputValue.trim());
    
    setInputValue('');
    
    

  }

  return (

    //el form recarga de nuevo la pagina 
    <form onSubmit={onSubmit}>  
      <input
        type="text"
        placeholder="Buscar GIFS"
        value={inputValue}
        onChange={cmabiarInput}
      />
    </form>

  )
}
