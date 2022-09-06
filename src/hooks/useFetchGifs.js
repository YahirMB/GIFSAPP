import { useEffect, useState } from 'react'
import { getGif } from '../helpers/getGif';

export const useFetchGifs = (categorias) => {   //hook es solamente una funcion que no regresa un componente
                                                //es decir no es un funtional component
    
    const [imagenes, setImagenes] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    const getImagenes = async () =>{
        const nuevaImagen = await getGif(categorias);
        setImagenes(nuevaImagen);
        setIsLoading(false)
    }
    useEffect(() => {
        // getGif(categoria).then(gifs => setImagenes(gifs)
        // );
        getImagenes();
    }, []);

    return {
        imagenes,
        isLoading
    }

}
