import { Container } from "reactstrap"
import { Link } from "react-router-dom"
export const Home =()=>{

    return(
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Página Inicial</h1>
                    </div>
                    <div className="p-2">
                        <Link to = "/Listar-clientes" className="m-auto btn
                        btn-outline-info btn-sm">Clientes</Link>
                    </div>
                </div>

            </Container>
        </div>
    )
}