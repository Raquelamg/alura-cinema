import FavoritoProvider from "Contexto/Favoritos";
import Cabecera from "components/Cabecera/Cabecera";
import Container from "components/Container/Index";
import Pie from "components/PiePagina/Pie";
import { Outlet } from "react-router-dom";

function PaginaBase(){
    return(
        <main>
            <Cabecera/>
            <FavoritoProvider>
                <Container>
                    <Outlet/>
                </Container>
            </FavoritoProvider>
            <Pie/>
        </main>

    )
}

export default PaginaBase;