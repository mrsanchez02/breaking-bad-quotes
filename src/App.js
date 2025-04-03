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

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  height: 400px;
  width: 800px;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

function App() {

  const [quote, setQuote] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const queryAPI = async () => {
    // setIsLoading(true);
    try {
      const API = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
      const quote = await API.json();
      console.log("🚀 ~ queryAPI ~ quote:", quote[0])
      setQuote(quote[0]);
    } catch (error) {
      console.log("🚀 ~ queryAPI ~ error:", error)
    } finally {
      setIsLoading(false);
    }
  }
  
  useEffect(() => {
    queryAPI()
  }, [])

  return (
    <>
      <Contenedor>
        <Box>
          <Quote quote={quote} isLoading={isLoading} />
        </Box>
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
