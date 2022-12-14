import React, { FormEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { Footer, Container, DividerImg, DiceImg, DiceButton } from './styled';
import diceSvg from '../../assets/images/icon-dice.svg';
import dividerDesktop from '../../assets/images/pattern-divider-desktop.svg';
import Loading from '../../components/Loading';

export default function Advice() {
  interface AdviceSlip {
    slip: {
      advice: string;
      id: number;
    };
  }

  const [slip, setSlip] = useState('');
  const [id, setID] = useState<number>();
  const [isLoading, setIsLoading] = useState(false);

  // Function no get a random advice on the API
  async function handleSubmit(event?: FormEvent): Promise<void> {
    setIsLoading(true);
    event?.preventDefault();
    try {
      const { data } = await axios.get<AdviceSlip>(
        `https://api.adviceslip.com/advice`,
      );

      setSlip(data.slip.advice);
      setID(data.slip.id);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  // The default/first advice load on the site
  async function adviceDefault(): Promise<void> {
    setIsLoading(true);
    try {
      const { data } = await axios.get<AdviceSlip>(
        `https://api.adviceslip.com/advice/${66}`,
      );

      setSlip(data.slip.advice);

      setID(data.slip.id);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    adviceDefault();
  }, []);

  return (
    <>
      <Container>
        <Loading isLoading={isLoading} />
        <form onSubmit={(e) => handleSubmit(e)}>
          <h1> ADVICE # {id} </h1>
          <h2>{`\u{201C} ${slip}\u{201D}`}</h2>

          <DividerImg src={dividerDesktop} alt="Divider" />

          <DiceButton type="submit">
            <DiceImg src={diceSvg} alt="Dice" />
          </DiceButton>
          <div></div>
        </form>
      </Container>

      <Footer>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        Coded by
        <a
          href="https://github.com/EuCaue"
          target="_blank"
          rel="noopener noreferrer"
        >
          Cau?? Souza
        </a>
      </Footer>
    </>
  );
}
