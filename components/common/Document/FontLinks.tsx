import React from "react";
import { allFonts } from 'constants/document';

const FontLinks = () => (
    <>
        {allFonts.map(font => (
            <link
                as="font"
                rel="preload"
                key={font.name}
                crossOrigin="anonymous"
                href={`/static/fonts/${font.name}/${font.name}.woff`}
            />
        ))}
    </>
);

export default FontLinks;
