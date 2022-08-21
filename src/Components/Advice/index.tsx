import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Container } from './styled';
import diceSvg from '../../assets/images/icon-dice.svg';

export default function Advice() {
  interface AdviceSlip {
    slip: {
      advice: string;
      id: number;
    };
  }

  const [slip, setSlip] = useState('');

  async function getAdvice(): Promise<void> {
    try {
      const { data } = await axios.get<AdviceSlip>(
        'https://api.adviceslip.com/advice',
      );
      setSlip(data.slip.advice);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Container>
        <h1> Advice# </h1>
        <h2>{slip}</h2>

        <button onClick={getAdvice}>
          <img src={diceSvg} alt="Dice" />
        </button>
      </Container>
      <Footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a
          href="https://github.com/EuCaue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cauê Souza
        </a>
      </Footer>
    </>
  );
}
