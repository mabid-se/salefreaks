import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Link from 'next/link';
import Text from 'common/components/Text';
import NextImage from 'common/components/NextImage';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import BannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './bannerSection.style';

import BannerObject1 from 'common/assets/image/saas/banner/bannerObject1.png';
import BannerObject2 from 'common/assets/image/saas/SF_dashboard_screenshot.png';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  offerAnchor,
  offerText,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <AnchorLink href="#pricing_section" offset="70">
        <Button title="FREE 14-DAY TRIAL" {...btnStyle} />
      </AnchorLink>
      {/* <AnchorLink href="#service_section" offset="70">
        <Button  
          className="outlined"
          title="EXPLORE MORE"
          variant="outlined"
          {...outlineBtnStyle} 
        />
      </AnchorLink> */}
    </Fragment>
  );
  return (
    <BannerWrapper id="banner_section">
      <Particles />
      <Container>
        <Box className="row" {...row}>
          <Box className="col" {...col}>
            {/* <DiscountLabel>
              <Text content="100% FREE Dropshipping Course" {...offerText} />
              <Link href="#">
                <a>
                  <Text content="Click Here" {...offerAnchor} />
                </a>
              </Link>
            </DiscountLabel> */}
            <FeatureBlock
              title={
                <Heading
                  content="The World's Most Powerful, Fully Automated, Amazon To eBay Dropshipping Software"
                  {...title}
                />
              }
              description={
                <Text
                  content="SaleFreaks Is Fully-Automated, Non-API and API, All-In-One Amazon To eBay Dropshipping Software That Powers Your Entire Business & Makes Sales 24/7 On Auto-Pilot."
                  {...description}
                />
              }
              button={<ButtonGroup />}
            />
          </Box>
        </Box>
      </Container>
      <BannerObject>
        <div className="objectWrapper">
          <NextImage src={BannerObject1} alt="BannerObject1" />
          <div className="dashboardWrapper">
            <NextImage src={BannerObject2} alt="BannerObject2" />
          </div>
        </div>
      </BannerObject>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  offerAnchor: PropTypes.object,
  offerText: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: [1, '70%', '50%', '45%'],
  },
  title: {
    fontSize: ['22px', '34px', '30px', '55px'],
    fontWeight: '700',
    color: '#182b37',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '0',
  },
  btnStyle: {
    minWidth: ['120px', '120px', '120px', '156px'],
    fontSize: ['13px', '14px'],
    fontWeight: '500',
    colors: 'primaryWithBg',
  },
  outlineBtnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#182b37',
    ml: '18px',
  },
  offerText: {
    fontSize: '14px',
    color: '#182b37',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  offerAnchor: {
    fontSize: ['13px', '14px'],
    color: '#adf8af',
    mb: 0,
    as: 'span',
    fontWeight: 500,
  },
};

export default BannerSection;
