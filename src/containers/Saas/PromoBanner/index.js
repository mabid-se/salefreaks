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
import PromoBannerWrapper, {
  DiscountLabel,
  BannerObject,
} from './promoBanner.style';

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
  return (
    <PromoBannerWrapper>
      <Text content="100% FREE Dropshipping Course" {...offerText} />
      <Link href="https://forms.gle/tGJbJ9Zz7MXPQiQ56">
        <a>
          <Text content="Click Here" {...offerAnchor} />
        </a>
      </Link>
    </PromoBannerWrapper>
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
  offerText: {
    fontSize: ['14px', '14px'],
    color: '#182b37',
    mb: 0,
    as: 'span',
    mr: '0.4em',
    fontWeight: 700,
  },
  offerAnchor: {
    fontSize: ['14px', '14px'],
    bg: '#adf8af',
    color: '#182b37',
    mb: 0,
    as: 'span',
    fontWeight: 500,
    padding: '7px',
    borderRadius: '5px',
  },
};

export default BannerSection;
