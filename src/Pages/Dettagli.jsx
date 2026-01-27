import { useNavigate, useParams } from "react-router-dom"
import { viaggi } from "../assets/data";
import { viaggiatori } from "../assets/data";
import { useState } from "react";

export default function Dettagli() {
    const { id } = useParams();
    const [viaggio, setViaggio] = useState(viaggi[id - 1]);
    const [people, setPeople] = useState(null)
    const [btn, setBtn] = useState(false)
    const navigate = useNavigate()


    const takePeople = []

    for (let i = 0; i < viaggiatori.length; i++) {
        const curPerson = viaggiatori[i];


        if (curPerson.viaggioId === parseInt(id)) {
            takePeople.push(curPerson);
        }
    }





    let textIniziato = "";
    let textFinito = "";

    if (viaggio.stato === "in corso") {
        textIniziato = `INIZIATO  ${viaggio.dataInizio}`;
        textFinito = `FINIRA'  ${viaggio.dataFine}`;

    } else {
        textIniziato = `INIZIATO IL  ${viaggio.dataInizio}`;
        textFinito = `FINITO IL ${viaggio.dataFine}`;
    }


    function showPeople() {
        setBtn(!btn);
    }

    
    function goBack() {
        navigate(-1)
    }


    

    return (
        <>
            <h1 className="text-center my-4">{viaggio.localita}</h1>
            <div className="container">
                <div className="row">

                    <div className="col-4">
                        <div className="card">
                            <div className="card-body">

                                <h3>{textIniziato}</h3>
                                <h3>{textFinito}</h3>
                                <h3>Partecipanti: {takePeople.length}</h3>

                            </div>
                        </div>
                    </div>
                    <div className="col-8">
                        <p>immagine</p>
                    </div>
                    <div className="col-12 mt-3">
                        <div className="card">
                            <div className="card-body d-flex">

                                <div class="accordion accordion-flush" id="accordionFlushExample">
                                    <div class="accordion-item">
                                        <h2 class="accordion-header">
                                            <button class="accordion-button collapsed" onClick={showPeople} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                Vedi Partecipanti
                                            </button>
                                        </h2>
                                        <div id="flush-collapseOne" class={btn === false ? "accordion-collapse collapse" : "accordion-collapse"} data-bs-parent="#accordionFlushExample">
                                            <div class="accordion-body bg-whithe-smoke">
                                                <ul className="list-group">
                                                    {takePeople.map((person) => {
                                                        return (
                                                            <>
                                                                <li className="list-group-item"><span className="text-danger">{person.nome} {person.cognome}</span> <br />Cell: <a className="text-info">{person.telefono}</a> Email:<a className="text-info"> {person.email}</a></li>
                                                            </>
                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-12 mt-3">
                        <button className="btn btn-secondary" onClick={goBack}>Torna Indietro</button>
                                                    
                    </div>
                </div>

            </div>


        </>
    )
}