import Document, { Head, Main, NextScript, Html } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import React from 'react';
import Meta from 'components/common/Document/Meta';
import FontLinks from 'components/common/Document/FontLinks';
import { fonts } from 'public/static/fonts/style';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <Meta/>
                    <FontLinks/>
                    <link rel="shortcut icon" href="/static/favicon.ico" />
                    <link rel="manifest" href="/static/manifest.json" />
                    <React.Fragment><title>Email Automation</title></React.Fragment>
                </Head>
                <body>
                <Main />
                <NextScript />
                <div id="modals_presentation"/>
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
        ctx.renderPage = () => originalRenderPage({
            enhanceApp: App => props => sheets.collectStyles(
                <App {...props} />,
            ),
        });
        const initialProps = await Document.getInitialProps(ctx);

        return {
            ...initialProps,
            styles: (
                <>
                    {/* eslint-disable-next-line react/no-danger */}
                    <style dangerouslySetInnerHTML={{ __html: fonts }}/>
                    {initialProps.styles}
                    {sheets.getStyleElement()}
                </>
            ),
        };
    } finally {
        sheets.seal();
    }
};
