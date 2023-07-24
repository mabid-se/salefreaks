import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { saasTheme } from 'common/theme/saas';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Saas/saas.style';
import PromoBanner from 'containers/Saas/PromoBanner'
import Navbar from 'containers/Saas/Navbar';
import BannerSection from 'containers/Saas/BannerSection';
import ServicesSection from 'containers/Saas/ServicesSection';
import TrainingSection from 'containers/Saas/TrainingSection';
import FeaturesDetailed from 'containers/Saas/FeaturesDetailed';
import FeaturesGrid from 'containers/Saas/FeaturesGrid';
import Footer from 'containers/Saas/Footer';
import PricingSection from 'containers/Saas/PricingSection';
import TrialSection from 'containers/Saas/TrialSection';
import StatsSection from 'containers/Saas/StatsSection';
import TestimonialSection from 'containers/Saas/TestimonialSection';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import FaqSection from 'containers/Saas/FaqSection';
import MorePackagesSection from 'containers/Saas/MorePackagesSection';

const Saas = () => {
  return (
    <ThemeProvider theme={saasTheme}>
      <Fragment>
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
          <BannerSection />
          <ServicesSection />
          <StatsSection />
          <FeaturesGrid />
          <FeaturesDetailed />
          <TrainingSection />
          <PricingSection />
          <MorePackagesSection />
          <FaqSection />
          <TestimonialSection />
          <TrialSection />
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default Saas;
