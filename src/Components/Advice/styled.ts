/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';

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
  margin: auto;
  border-radius: 15px;
  margin-top: 10%;

  form {
    position: relative;
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
    padding: 15px;
    padding-top: 0px;
    color: ${colors.neonGreen};
  }

  h2 {
    height: 130px;
    color: ${colors.lightCyan};
    padding: 10px;
  }
`;

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
`;

export const Footer = styled.footer`
  text-align: center;
  display: flex;
  justify-content: center;
  text-indent: 3px;
  align-items: center;
  color: ${colors.lightCyan};
  padding-top: 11px;
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
