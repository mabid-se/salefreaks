import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features1 } from 'common/data/Saas';
import Container from 'common/components/UI/Container';
import FeatureSectionWrapper from './servicesSection.style';

const FeatureSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionTitleBottom,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <FeatureSectionWrapper id="service_section">
      <Container>
        <Box {...sectionHeader}>
          {/* <Text content="OUR SERVICES" {...sectionSubTitle} /> */}
          <Heading
            content="SaleFreaks Users Power Their Entire Dropship Business All The Way From Finding Highly-Profitable, Fast-Selling Products Through To Listing, Monitoring, Repricing, And Selling Products At Scale From Amazon To eBay"
            {...sectionTitle}
          />
        </Box>
        <Box className="row" {...row}>
          {Features1.map((feature, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                icon={<i className={feature.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={feature.title} {...featureTitle} />}
                description={
                  <Text content={feature.description} {...featureDescription} />
                }
                className="saasFeature"
              />
            </Box>
          ))}
        </Box>
        {/* <Box {...sectionHeader}>
          <Heading
            content="All Hands-Free, Without Buying ANY Stock Up Front, Making Sales In Your Sleep - Using Just Salefreaks!"
            {...sectionTitleBottom}
          />
        </Box> */}
      </Container>
    </FeatureSectionWrapper>
  );
};

// FeatureSection style props
FeatureSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionTitleBottom: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// FeatureSection default style
FeatureSection.defaultProps = {
  // section header default style
  sectionHeader: {
    ml: 'auto',
    mr: 'auto',
    width: ['100%', '100%', '100%', '60%'],
    mb: ['40px', '40px', '40px', '80px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#182b37',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['24px', '30px'],
    fontWeight: '700',
    color: '#182b37',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  sectionTitleBottom: {
    textAlign: 'center',
    fontSize: ['18px', '20px'],
    fontWeight: '500',
    color: '#182b37',
    letterSpacing: '-0.025em',
    mb: '0',
    mt: ['40px', '60px'],
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 4],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '75px', '75px', '84px'],
    height: ['70px', '75px', '75px', '84px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#182b37',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '30px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc',
  },
};

export default FeatureSection;
