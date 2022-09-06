import { useState } from "react"
import { AddCategories,GifGrid } from "./components/index";



export const GifExpertApp = () =>{

    const [categorias, setCategorias] = useState(['One Punch']);

    const agregarCategoria = (valor) =>{

        if(categorias.includes(valor)) return;
        setCategorias([valor,...categorias]);
    }
  return (
      <>
      <h1>GifExpertApp</h1> 

      <hr />
      <AddCategories 
      onNewCategoria = { valor => agregarCategoria(valor)}
      //setCategorias={setCategorias}
      />
      {/* <button onClick={agregarCategoria}>Agregar</button> */}
     
        {
            categorias.map( categorias =>(
                <GifGrid categoria={categorias} key={categorias}/>
            )
                
            )
        }
     
      </>

      
  )
}
