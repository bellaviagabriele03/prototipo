import { Link } from "react-router-dom"
import { viaggi } from "../assets/data.js"
import { useState } from "react"


export default function Viaggi() {

    const [travels, setTravels] = useState(viaggi)
    const [round, setRound] = useState()


    function update(event) {
        event.preventDefault();
        const filterViaggio = viaggi.filter((viaggio) => viaggio.localita === round ? viaggio : "")
        setTravels(filterViaggio)
    }

    return (
        <>
            <h1 className="text-center my-3">PAGINA DEI VIAGGI</h1>
            <div className="container">
                <div className="row">

                    <div className="col-6">
                        <form onSubmit={update}>

                            <label className="form-label" htmlFor="">DESTINAZIONE VIAGGIO:</label>
                            <div className="d-flex">
                                <input className="form-control" type="text" placeholder="es: Londra" onChange={(event) => setRound(event.target.value)} />
                                <button className="btn btn-success ms-2" type="submit">CERCA</button>
                            </div>

                        </form>
                    </div>
                    <div className="col-12 mt-4">
                        {travels.map((viaggio) => {
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