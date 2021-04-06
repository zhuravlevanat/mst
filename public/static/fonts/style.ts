import { css } from 'styled-components';
import { allFonts, mainFontName } from 'constants/document';

export const fonts = `
    ${allFonts.map(font => (`
        @font-face {
            font-family: '${mainFontName}';
            src: url('/static/fonts/${font.name}/${font.name}.eot?v=1');
            src: local('${mainFontName}'), 
                url('/static/fonts/${font.name}/${font.name}.woff?v=1') format('woff'), 
                url('/static/fonts/${font.name}/${font.name}.ttf?v=1') format('truetype'), 
                url('/static/fonts/${font.name}/${font.name}.svg?v=1') format('svg');
            font-weight: ${font.fontWeight};
            font-style: ${font.fontStyle};
            font-display: swap;
        }
    `)).join(' ')}
`;

export default css`
  &&&& {
    ${allFonts.map(font => (`
        @font-face {
            font-family: '${mainFontName}';
            src: url('/static/fonts/${font.name}/${font.name}.eot?v=1');
            src: local('${mainFontName}'), 
                url('/static/fonts/${font.name}/${font.name}.woff?v=1') format('woff'), 
                url('/static/fonts/${font.name}/${font.name}.ttf?v=1') format('truetype'), 
                url('/static/fonts/${font.name}/${font.name}.svg?v=1') format('svg');
            font-weight: ${font.fontWeight};
            font-style: ${font.fontStyle};
            font-display: swap;
        }
    `)).join(' ')}
`;
