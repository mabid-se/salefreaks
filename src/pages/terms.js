import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/theme/saas';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Saas/saas.style';
import PromoBanner from 'containers/Saas/PromoBanner'
import Navbar from 'containers/Saas/Navbar';
import Footer from 'containers/Saas/Footer';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import TermSection from 'containers/Saas/TermSection';

export default function Terms() {
    return (
        <ThemeProvider theme={saasTheme}>
            <Head>
                <title>SaleFreaks - The #1 Fully-Automated Amazon To eBay Dropshipping Side-Hustle Tool</title>
                <meta name="Description" content="Build Your Dropshipping Empire With SaleFreaks The World's Most Powerful Non-API and API Dropshipping Software" />
                <meta name="theme-color" content="#adf8af" />
                <meta name="facebook-domain-verification" content="01bkla13zbg9l0lz0o46vc62ujsxpn" />
                {/* Load google fonts */}
                <link
                    href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
                    rel="stylesheet"
                />
            </Head>

            <ResetCSS />

            <GlobalStyle />

            <ContentWrapper>
                <PromoBanner />
                <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
                    <DrawerProvider>
                        <Navbar />
                    </DrawerProvider>
                </Sticky>
                <TermSection />
                <Footer />
            </ContentWrapper>
        </ThemeProvider>
    );
}