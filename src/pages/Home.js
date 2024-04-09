//Importação dos componentes, bibliotecas e páginas que são necessárias para o funcionamento do projeto
//Importação da biblioteca do bootstrap.min.css
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {Container, InputGroup, FormControl, Button, Row, Card} from 'react-bootstrap';
import {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; 
import FormPage from './FormPage'



const CLIENT_ID = "576ace6fc2604d9faa727ba6d81f910a";
const CLIENT_SECRET = "a1c675937f9341909183361240b4a608";

function Home() {

    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccesToken] = useState("");
    const [artists, setArtists] = useState([]);
    const [artistName, setArtistName] = useState("");
  
    //Fazendo conexão com a API
    useEffect(() => {
      //parametros necessários para o autenticação na API de acordo com a documentação
      var authParameters ={
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'grant_type=client_credentials&client_id='+CLIENT_ID+'&client_secret='+CLIENT_SECRET
      }
      //envio de informações para autenticação na api
      fetch('https://accounts.spotify.com/api/token', authParameters)
      //retornando token de acesso da API
      .then(result => result.json())
      //Armazenando o token de acesso
      .then(data => setAccesToken(data.access_token))
    }, [])
  
    //Função de pesquisa
    async function search()
    {  
      //Buscar o id do artista pelo nome
      var artistParameters ={
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + accessToken
        }
      }
      //Utilizando o valor do texto para realziar a pesquisa
      var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
      .then(response => response.json())
      //Retornando o resultado dos IDs dos artistas para serem armazenados
      .then(data => {setArtists(data.artists.items)})
      console.log(artists);
      //Utilizando os IDs para listar os artistas
  
    }
    return (
      <div className="App">
        {/*Criando um container com o input de texto e um botão para efetuar a pesquisa*/}
         <Container className='Nav'>
          <InputGroup className="mb-3" size="lg">
            <FormControl
              placeholder="Search for Artist"
              type="input"
              //definindo o evento realizar a pesquisa apertando enter
              onKeyPress={event => {
                if (event.key == "Enter")
                {
                  search();
                }
              }}
              onChange={event => setSearchInput(event.target.value)}
            />
            {/*definindo o evento do botão para pesquisar quando pressionado*/}
         <Button onClick={search}>
          Search
        </Button>

       
          </InputGroup>
        
        
         </Container>
  
          
         {/*gerando container que receberá as informações da pesquisa, com nome e foto*/}
         <div className='Background'>
         <Container className='Content'>
          {/*definindo o número de colunas para o resultado da pesquisa*/}
          <Row className="mx-2 row row-cols-4">
            {artists.map((artist, i) => {
               const handleArtistName = (name) => {
                setArtistName(name);
              };
              return(
                <Card>
                <Card.Body>
                  {artist.images[0] ? (
                    <Card.Img src={artist.images[0].url} />
                  ) : (
                    <Card.Img src={"error.png"} />
                  )}
                  <Card.Title><Link className='Link' to={`/form/${artist.name}`}>{artist.name}</Link></Card.Title>
                </Card.Body>
              </Card>
              )
            })}
          </Row>        
         </Container>
         <Routes>
            <Route path="/form/:artistName" element={<FormPage />} />
        </Routes>
      </div>
      </div>
    );
}

export default Home;