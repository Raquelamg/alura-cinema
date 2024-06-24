import Banner from "components/Banner/Index";
import styles from "./Player.module.css"
import Titulo from "components/Titulo";
import { useParams } from "react-router-dom";
import videos from "data/db.json"
import NotFound from "pages/NotFound/Index";
import { useEffect, useState } from "react";

function Player(){
const [video,setVideo]= useState([]) 


    const parametros = useParams()
    useEffect(()=>{
        fetch(`https://my-json-server.typicode.com/Raquelamg/alura-cinema-api/videos?id=${parametros.id}`)
        .then(response=>response.json())
        .then(data=>{
            setVideo(...data)
        })
    },[])
 //const video= videos.find(video=> video.id === Number(parametros.id))
 console.log(video);
 if(!video)return <NotFound/>



    return(
        <>
             <Banner img="player" color="#58b9AE"/>
        <Titulo>
            <h1>Player</h1>
        </Titulo>
        <section className={styles.container}>
        <iframe width="100%" height="100%" 
        src={video.link}
         title={video.titulo} 
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
         referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        </section>

        
        </>
   
    )
}

export default Player;