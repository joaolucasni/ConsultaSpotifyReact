import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.module.css";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Row,
  Card,
} from "react-bootstrap";

function FormPage() {
  // Definindo os estados para os campos do formulário
  const {artistName} = useParams();
  const [nome, setNome] = useState("");
  const [artista, setArtista] = useState(artistName);
  const [endereco, setEndereco] = useState("");
  const [date, setDate] = useState("");
  const [cache, setCache] = useState("");
  

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor ou exibir em um alerta
    console.log("Nome:", nome);
    console.log("Artista:", artista);
    console.log("Endereco:", endereco);
    console.log("Cachê:", cache);
    console.log("Date:", date);
    // Limpando os campos após o envio
    setNome("");
    setArtista("");
    setEndereco("");
    setDate("");
    setCache("");
  };

  return (
    <div className="container mt-5">
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
          <DatePicker selected={date} onChange={(date) => setDate(date)} />
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
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
        <Link to="/">
          <button>Voltar para a Página Inicial</button>
        </Link>
      </form>
    </div>
  );
}

export default FormPage;
