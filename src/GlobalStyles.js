import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset};
/* Other Global Styles */
body { background-color: #E6FAF2; }
`;

export default globalStyles;
