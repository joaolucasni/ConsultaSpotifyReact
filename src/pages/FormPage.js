import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.module.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';

function FormPage(props) {
  // Definindo os estados para os campos do formulário
  const [nome, setNome] = useState('');
  const artistName = props.artistName;
  const [endereco, setEndereco] = useState('');
  const [data, setData] = useState('');
  const [cache, setCache] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode fazer algo com os dados do formulário, como enviar para um servidor ou exibir em um alerta
    console.log('Nome:', nome);
    console.log('Endereco:', endereco);    
    console.log('Cachê:', cache);
    console.log('Data:', data);
    // Limpando os campos após o envio
    setNome('');
    setEndereco('');
    setData('');
    setCache('');
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-1">
          <label htmlFor="nome" className="form-label">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>
        <div className="App">
      {console.log(artistName)}
    </div>
        <div className="mb-1">
          <label htmlFor="cache" className="form-label">Cachê:</label>
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
          <label htmlFor="data" className="form-label">Data:</label>
          <br/>
        <DatePicker selected={data} onChange={data => setData(data)}/>
        </div>
        <div className="mb-1">
          <label htmlFor="endereco" className="form-label">Endereço:</label>
          <input
            type="text"
            className="form-control"
            id="endereco"
            value={endereco}
            onChange={(event) => setEndereco(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
        <Link to="/">
        <button>Voltar para a Página Inicial</button>
        </Link>
      </form>
    </div>
  );
}

export default FormPage;
