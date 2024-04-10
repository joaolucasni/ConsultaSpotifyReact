import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Form.css";
import app from "../services/connectionFirebase"
import { getDatabase, ref, set, push} from "firebase/database";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function FormPage() {
  // Setting states for form fields
  const {artistName} = useParams();
  const [nome, setNome, getNome] = useState("");
  const [artista, setArtista] = useState(artistName);
  const [endereco, setEndereco] = useState("");
  const [date, setDate] = useState("");
  const [cache, setCache] = useState("");
  
 // Sending data to database in Firebase
  const saveData = async() => {
    // Defining the database
    const db = getDatabase(app);
    // Generating data reference
    const newDocRef = push(ref(db));
    // Inserting the bank fields and assigning the information
    set(newDocRef, {
      Nome : nome,
      Artista : artista,
      Endereco : endereco,
      Data : date,
      Cache : cache
    }).then( () => {
      alert("Data saved successfully")
    }).catch((error) => {
      alert("error: ", error.message);
    })
  }

  return (
    // Generating form fields
    <div className="Body">
      <div className="wrapper">
        <div className="mb-1">
          <label htmlFor="nome" className="form-label">
           * Nome:
          </label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="artista" className="form-label">
           * Artista:
          </label>
          <input
            type="text"
            className="form-control"
            id="artista"
            value={artista}
            onChange={(event) => setArtista(event.target.value)}
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="cache" className="form-label">
           Cachê:
          </label>
          <input
            type="text"
            className="form-control"
            id="cache"
            value={cache}
            onChange={(event) => setCache(event.target.value)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="date" className="form-label">
           * Data:
          </label>
          <br />
          <DatePicker className="form-control" selected={date} onChange={(date) => setDate(date)} />
        </div>
        <div className="mb-1">
          <label htmlFor="endereco" className="form-label">
            Endereço:
          </label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
          />
        </div>
        {/*Button with action to send data to the bank*/}
        <button style={{width: "95%"}} type="submit" className="button" onClick={saveData}>
          Enviar
        </button>
        <br/>
        {/*Setting route back to home page*/}
        <Link className="link" to="/">
          Voltar para a Página Inicial
        </Link>
      </div>
    </div>
  );
}

export default FormPage;
