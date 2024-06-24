
import { useFavoritosContext } from "Contexto/Favoritos";
import styles from "./Card.module.css"
import iconFavorito from "./iconfavorito.png"
import iconnoFavorito from "./iconnofavorito.png"
import { Link } from "react-router-dom";


function Card({id, capa, titulo}){
    const {favorito, agregarFavorito}= useFavoritosContext()
    const isFavorito = favorito.some(fav=> fav.id === id)
    const icon = isFavorito ? iconFavorito : iconnoFavorito


    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`} >
            <img src={capa} alt={titulo} className={styles.capa}/>
            <h2>{titulo}</h2>
            </Link>
            <img 
            src={icon} alt="Icono Favorito" className={styles.favorito} 
            onClick={()=> agregarFavorito({id, titulo, capa})}
            />
            

        </div>
    )
}

export default Card;