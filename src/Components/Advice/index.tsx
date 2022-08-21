import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Container } from './styled';
import diceSvg from '../../assets/images/icon-dice.svg';

export default function Advice() {
  console.log('Carregou');

  interface AdviceSlip {
    slip: {
      advice: string;
      id: number;
    };
  }

  const [slip, setSlip] = useState('');

  async function handleSubmit(event?: FormEvent): Promise<void> {
    event?.preventDefault();
    try {
      const { data } = await axios.get<AdviceSlip>(
        `https://api.adviceslip.com/advice`,
      );

      setSlip(data.slip.advice);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1> Advice# </h1>
          <h2>{slip}</h2>

          <button type="submit">
            <img src={diceSvg} alt="Dice" />
          </button>
        </form>
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
