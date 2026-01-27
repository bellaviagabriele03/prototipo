import { Link } from "react-router-dom"
import { viaggi } from "../assets/data.js"
import { viaggiatori } from "../assets/data.js"

export default function Viaggi () {

  
    


    return (
        <>
        <h1 className="text-center my-2">Questi sono tutti i viaggi</h1>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {viaggi.map((viaggio)=> {
                        return (
                            <>
                                <div className="card mb-2">
                                    <div className="card-header">
                                        <h2 className="card-title">{viaggio.localita}</h2>
                                    </div>
                                    <div className="card-body">
                                        <p className="text-black">Stato: <span className={viaggio.stato === "in corso" ? "text-success" : "text-danger"}>{viaggio.stato}</span></p>
                                        <Link className="link" to={`/viaggi/${viaggio.id}`}>Visualizza Dettagli</Link>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>

        </>
    )
}