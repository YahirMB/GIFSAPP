
import { useFetchGifs } from "../hooks/useFetchGifs";
import { DibujarImagen } from "./DibujarImagen";


export const GifGrid = ({ categoria }) => {

    const {imagenes,isLoading} = useFetchGifs(categoria);


    return (
        <>

            <h1>{categoria}</h1>
            {
                isLoading && (<h1>Loading...</h1>)
            }
            <div className="card-grid ">

                {
                    imagenes.map(img => <DibujarImagen key={img.id} {...img} />
                    )
                }
            </div>


        </>
    )
}
