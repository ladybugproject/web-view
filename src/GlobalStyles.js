import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const globalStyles = createGlobalStyle`
${reset};
/* Other Global Styles */
body { background-color: ivory; }
`;

export default globalStyles;
