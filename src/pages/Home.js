import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FormPage from './FormPage';


// Cliente id and Client Secret provided by Spotify
const CLIENT_ID = "daae66d44bf74bffb738dbf1e8182b2b";
const CLIENT_SECRET = "595c24505b7d4020b4cf07086421bec7";

function Home() {

  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccesToken] = useState("");
  const [artists, setArtists] = useState([]);
  const [artistName, setArtistName] = useState("");


  // Connecting to the API
  useEffect(() => {
    // Parameters required for API authentication according to the documentation
    var authParameters = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' + CLIENT_SECRET
    }
    // Sending information for authentication in the api
    fetch('https://accounts.spotify.com/api/token', authParameters)
      // Returning API access token
      .then(result => result.json())
      // Storing the access token
      .then(data => setAccesToken(data.access_token))
  }, [])

  // Search function
  async function search() {
    // Search artist id by name
    var artistParameters = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + accessToken
      }
    }
    // Using the text value to perform the search
    var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist', artistParameters)
      .then(response => response.json())
      // Returning the result of artist IDs to be stored
      .then(data => { setArtists(data.artists.items) })
    console.log(artists);
  }
  return (
    <div className="App">
      {/*Creating a container with text input and the button to perform the search*/}
      <Container className='Nav'>
        <InputGroup className="mb-3" size="lg">
          <FormControl
            placeholder="Search for Artist"
            type="input"
            // Defining the event, perform the search by pressing enter
            onKeyPress={event => {
              if (event.key == "Enter") {
                search();
              }
            }}
            onChange={event => setSearchInput(event.target.value)}
          />
          {/*Setting the button event to search when pressed*/}
          <Button onClick={search}>
            Search
          </Button>
        </InputGroup>
      </Container>

      {/*Generating container that will receive the research information, with the name and photo of the artist*/}
      <div className='Background'>
        <Container className='Content'>
          <Row className="mx-2 row row-cols-4">
            {artists.map((artist, i) => {
              const handleArtistName = (name) => {
                setArtistName(name);
              };
              return (
                <Card>
                  {/*Generating a card for each query result*/}
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
        {/*Setting the route to the form page*/}
        <Routes>
          <Route path="/form/:artistName" element={<FormPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Home;