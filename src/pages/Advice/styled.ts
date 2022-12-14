import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';
// import dividerImgMobile from '../../assets/images/pattern-divider-mobile.svg';

export const DividerImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(250%);
`;

export const DiceImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
  padding: 5%;
  width: 25px;
  height: 25px;
`;

export const DiceButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.neonGreen};
  width: 2em;
  height: 2em;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transform: translateY(130%);

  :hover {
    box-shadow: 0px 0px 36px 2px ${colors.neonGreen};
  }
`;

export const Container = styled.section`
  -webkit-box-shadow: 0px 6px 36px -5px rgba(0, 0, 0, 0.77);
  -moz-box-shadow: 0px 6px 36px -5px rgba(0, 0, 0, 0.77);
  box-shadow: 0px 6px 36px -5px rgba(0, 0, 0, 0.77);
  background-color: ${colors.darkGrayishBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 20em;
  height: 12em;
  flex-direction: column;
  margin: auto;
  border-radius: 15px;
  margin-top: 10%;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    padding: 10px;
  }

  h1 {
    letter-spacing: 4px;
    font-size: 14px;
    padding: 2.8%;
    /* padding: 15px; */
    padding-top: 0;
    color: ${colors.neonGreen};
  }

  h2 {
    height: 5em;
    color: ${colors.lightCyan};
    padding: 10px;
  }

  /*  Media Queries */
  @media only screen and (max-width: 40em) {
    width: 15.4em;
    height: 14.4em;

    ${DividerImg} {
      width: 13em;
      transform: translateY(3.2em);
    }

    form {
      padding-bottom: 2em;
    }

    ${DiceButton} {
      transform: translateY(4.6em);
    }
  }

  @media screen and (max-width: 25em) {
    width: 13.5em;

    h2 {
      font-size: 24px;
    }

    ${DividerImg} {
      width: 12em;
      transform: translateY(3.5em);
    }

    ${DiceButton} {
      transform: translateY(5em);
    }
  }

  @media screen and (max-width: 20em) {
    width: 11em;
    height: 12.4em;

    ${DividerImg} {
      width: 10.3em;
      transform: translateY(3.7em);
    }

    h1 {
      font-size: 13px;
    }

    h2 {
      font-size: 23px;
      padding: 0;
    }

    ${DiceButton} {
      transform: translateY(4.4em);
    }
  }
`;

export const Footer = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: ${colors.lightCyan};
  padding-top: 7em;
  text-align: center;
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1.1em;
    :link {
      color: ${colors.neonGreen};
    }

    :visited {
      color: ${colors.grayishBlue};
    }

    :active {
      color: ${colors.neonGreen};
    }
  }
`;
