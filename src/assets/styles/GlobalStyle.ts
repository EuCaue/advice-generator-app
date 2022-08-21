import { createGlobalStyle } from 'styled-components';
import * as colors from './configColors/colors';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 28px;
    font-family: 'Manrope', sans-serif;
    font-weight: 800;
}

html, body, #root {
  height: 100%;
  background-color: ${colors.darkGrayishBlue};
}
`;
