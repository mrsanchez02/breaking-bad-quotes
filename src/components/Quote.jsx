import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    max-height: 350px;
    
    @media (min-width: 992px) {
        /* margin-top: 5rem;
        margin-bottom: 5rem; */
    }

    h2 {
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;

        &::before {
            content: open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }

    p {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        text-align: right;
        color: #666;
        margin-top: 2rem;
    }

`;

const Quote = ({quote}) => {

    return (
        <ContenedorFrase>
            <h2>{quote?.quote}</h2>
            <p>{quote?.author}</p>
        </ContenedorFrase>
    )
}

Quote.propTypes = {
    quote: PropTypes.object.isRequired
}

export default Quote
