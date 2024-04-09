import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/App.css";
import "../styles/Login.css";
import "../services/connectionFirebase"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";

function FormPage() {
  // Definindo os estados para os campos do formulário
  const {artistName} = useParams();
  const [nome, setNome, getNome] = useState("");
  const [artista, setArtista] = useState(artistName);
  const [endereco, setEndereco] = useState("");
  const [date, setDate] = useState("");
  const [cache, setCache] = useState("");
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  

  return (
    <div className="Body">
      <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="nome" className="form-label">
            Nome:
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
            Artista:
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
            required
          />
        </div>
        <div className="mb-1">
          <label htmlFor="date" className="form-label">
            Data:
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
            required
          />
        </div>
        <button style={{width: "95%"}} type="submit" className="button">
          Enviar
        </button>
        <br/>
        <Link className="link" to="/">
          Voltar para a Página Inicial
        </Link>
      </form>
      </div>
    </div>
  );
}

export default FormPage;
