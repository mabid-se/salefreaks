import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { Service } from 'common/data/Saas';
import Container from 'common/components/UI/Container';
import ServiceSectionWrapper from './featuresGrid.style';

const ServiceSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <ServiceSectionWrapper id="feature_section">
      <Container>
        <Box {...sectionHeader}>
          {/* <Text content="OUR FEATURES" {...sectionSubTitle} /> */}
          <Heading content="SaleFreaks Is The Most-Powerful, Most-Flexible & Most Scaleable, Non-API & API, Dropshipping Software On The Market - Here's Why!" {...sectionTitle} />
        </Box>
        <Box className="row" {...row}>
          {Service.map((feature, index) => (
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
                className="saasService"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </ServiceSectionWrapper>
  );
};

// ServiceSection style props
ServiceSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// ServiceSection default style
ServiceSection.defaultProps = {
  // section header default style
  sectionHeader: {
    ml: 'auto',
    mr: 'auto',
    width: ['100%', '100%', '100%', '60%'],
    mb: ['50px', '50px', '50px', '80px'],
  },
  // sub section default style
  sectionSubTitle: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#ffffff',
    mb: '10px',
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['24px', '30px'],
    fontWeight: '700',
    color: '#ffffff',
    letterSpacing: '-0.025em',
    mb: '0',
  },
  // feature row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
  },
  // feature col default style
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
  },
  // feature block wrapper default style
  blockWrapperStyle: {
    p: ['30px', '20px', '20px', '20px'],
  },
  // feature icon default style
  iconStyle: {
    width: ['70px', '80px'],
    height: ['70px', '80px'],
    borderRadius: '50%',
    bg: '#93d26e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: ['32px', '36px'],
    color: '#ffffff',
    overflow: 'hidden',
    mb: '30px',
    borderBottomLeftRadius: '50%',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'left',
    mt: '-5px',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '20px'],
    fontWeight: '400',
    color: '#ffffff',
    lineHeight: '1.5',
    letterSpacing: '-0.020em',
    mb: '10px',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#ffffff',
  },
};

export default ServiceSection;
