/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import * as colors from '../../assets/styles/configColors/colors';

export const Container = styled.section`
  background-color: ${colors.grayishBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 60%;
  height: 50%;
  margin: auto;

  h1 {
    display: flex;
    font-size: 15px;
  }
`;

export const Footer = styled.footer`
  background: ${colors.darkGrayishBlue};
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
      color: ${colors.darkGrayishBlue};
    }

    :visited {
      color: ${colors.neonGreen};
    }

    :active {
      color: ${colors.darkBlue};
    }
  }
`;
