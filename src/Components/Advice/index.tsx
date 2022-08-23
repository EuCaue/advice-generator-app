import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Container, DividerImg, DiceImg, DiceButton } from './styled';
import diceSvg from '../../assets/images/icon-dice.svg';
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg';

export default function Advice() {
  interface AdviceSlip {
    slip: {
      advice: string;
      id: number;
    };
  }

  const [slip, setSlip] = useState('');
  const [id, setID] = useState<number>();

  async function handleSubmit(event?: FormEvent): Promise<void> {
    event?.preventDefault();
    try {
      const { data } = await axios.get<AdviceSlip>(
        `https://api.adviceslip.com/advice`,
      );

      setSlip(data.slip.advice);
      setID(data.slip.id);
    } catch (err) {
      console.log(err);
    }
  }

  async function adviceTest(): Promise<void> {
    try {
      const { data } = await axios.get<AdviceSlip>(
        `https://api.adviceslip.com/advice/${41}`,
      );

      setSlip(data.slip.advice);
      setID(data.slip.id);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    adviceTest();
  }, []);

  return (
    <>
      <Container>
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1> ADVICE # {id} </h1>
          <h2>{`\u{201C} ${slip}\u{201D}`}</h2>

          <DividerImg src={dividerDesktop} alt="Divider" />

          <DiceButton type="submit">
            <DiceImg src={diceSvg} alt="Dice" />
          </DiceButton>
        </form>
      </Container>

      <Footer style={{ display: 'none' }}>
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
