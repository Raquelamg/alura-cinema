
import Favoritos from "pages/Favoritos/Index";
import NotFound from "pages/NotFound/Index";
import PaginaBase from "pages/PaginaBase/Index";
import Player from "pages/Player/Index";
import Inicio from "pages/inicio";
import { BrowserRouter, Routes, Route }  from "react-router-dom"



function AppRoutes(){
    return(
        <BrowserRouter>
      
        <Routes>
            <Route path="/" element={<PaginaBase/>}>
            <Route index element={<Inicio/>}></Route>
            <Route path="favoritos" element={<Favoritos/>}></Route>
            <Route path=":id" element={<Player/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
            </Route>
            
        </Routes>
      
        
        </BrowserRouter>
    )
}

export default AppRoutes;