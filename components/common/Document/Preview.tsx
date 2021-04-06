import React, { useEffect } from "react";

const id = 'preview-loading';

const Preview = () => {
    useEffect(() => {
        (document as any).fonts.ready
            .then(() => {
                const preview = document.getElementById(id);
                preview.classList.add('loaded');
            });
    }, []);
    return <div id={id}/>;
};

export default Preview;
