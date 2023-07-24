import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import FeatureBlock from 'common/components/FeatureBlock';
import { TrainingBlocks } from 'common/data/Saas';
import Container from 'common/components/UI/Container';
import TrainingSectionWrapper from './trainingSection.style';

const TrainingSection = ({
  row,
  col,
  sectionHeader,
  sectionTitle,
  sectionSubTitle,
  sectionParagraph,
  featureTitle,
  featureDescription,
  iconStyle,
  contentStyle,
  blockWrapperStyle,
}) => {
  return (
    <TrainingSectionWrapper id="training_section">
      <Container>
        <Box {...sectionHeader}>
          <Text content="TRAINING" {...sectionSubTitle} />
          <Heading
            content="SaleFreaks Unrivaled Up-To-Date Training & Support"
            {...sectionTitle}
          />
          <Text content="Whether you've been dropshipping on eBay for years, or if you've just started, we have 100% FREE training courses, guides and LIVE training sessions inside that will help!" {...sectionParagraph}/>
        </Box>
        <Box className="row" {...row}>
          {TrainingBlocks.map((trainingBlock, index) => (
            <Box className="col" {...col} key={index}>
              <FeatureBlock
                icon={<i className={trainingBlock.icon} />}
                wrapperStyle={blockWrapperStyle}
                iconStyle={iconStyle}
                contentStyle={contentStyle}
                title={<Heading content={trainingBlock.title} {...featureTitle} />}
                description={
                  <Text content={trainingBlock.description} {...featureDescription} />
                }
                className="saasFeature"
              />
            </Box>
          ))}
        </Box>
      </Container>
    </TrainingSectionWrapper>
  );
};

// TrainingSection style props
TrainingSection.propTypes = {
  sectionHeader: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  sectionTitle: PropTypes.object,
  sectionSubTitle: PropTypes.object,
  sectionParagraph: PropTypes.object,
  featureTitle: PropTypes.object,
  featureDescription: PropTypes.object,
};

// TrainingSection default style
TrainingSection.defaultProps = {
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
  sectionParagraph: {
    textAlign: 'center',
    mt: '40px',
    mb: '0',
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
    ml: ['auto', 'auto', 'auto', 'auto'],
    mr: ['auto', 'auto', 'auto', 'auto'],
    mb: ['20px', '20px', '20px', '30px'],
    borderBottomLeftRadius: '50%',
  },
  // feature content default style
  contentStyle: {
    textAlign: 'center',
  },
  // feature title default style
  featureTitle: {
    fontSize: ['18px', '18px'],
    fontWeight: '400',
    color: '#182b37',
    lineHeight: '1.5',
    mb: ['10px', '10px', '10px', '20px'],
    letterSpacing: '-0.020em',
  },
  // feature description default style
  featureDescription: {
    fontSize: '15px',
    lineHeight: '1.75',
    color: '#343d4ccc',
  },
};

export default TrainingSection;
