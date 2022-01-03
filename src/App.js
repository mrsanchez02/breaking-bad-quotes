import React,{useState, useEffect} from 'react';
import styled from '@emotion/styled';
import Quote from './components/Quote';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .8s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;



function App() {

  const [quote, setQuote] = useState({});
  
  const queryAPI = async () => {
    const API = await fetch('https://breakingbadapi.com/api/quote/random?series=Breaking+Bad');
    const quote = await API.json();
    setQuote(quote[0]);
  }
  
  useEffect(() => {
    queryAPI()
  }, [])

  return (
    <>
      <Contenedor>
        <Quote quote={quote}/>
        <Boton
          onClick={queryAPI}
        >
          Generate!
        </Boton>
      </Contenedor>
    </>
  );
}

export default App;
