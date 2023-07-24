import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Container from 'common/components/UI/Container';
import GlideCarousel from 'common/components/GlideCarousel';
import GlideSlide from 'common/components/GlideCarousel/glideSlide';
import PricingTable, {
  PricingRibbon,
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  PricingButtonWrapper,
} from './pricing.style';
// data import
import { GBP_PRICING_TABLE, YEARLY_PRICING_TABLE } from 'common/data/Saas';
// GlideCarousel options
const pricingCarouselOptions = {
  type: 'slider',
  perView: 3,
  gap: 30,
  breakpoints: {
    1199: {
      perView: 2,
      peek: {
        before: 100,
        after: 100,
      },
    },
    990: {
      perView: 1,
      peek: {
        before: 160,
        after: 160,
      },
    },
    767: {
      perView: 1,
      peek: {
        before: 80,
        after: 80,
      },
    },
    575: {
      perView: 1,
      gap: 15,
      peek: {
        before: 20,
        after: 20,
      },
    },
  },
};

const PricingSection = ({
  sectionWrapper,
  row,
  secTitleWrapper,
  secHeading,
  sectionParagraph,
  secText,
  ribbonStyle,
  nameStyle,
  descriptionStyle,
  priceStyle,
  priceLabelStyle,
  buttonStyle,
  buttonFillStyle,
  listContentStyle,
}) => {
  const [state, setState] = useState({
    data: GBP_PRICING_TABLE,
    active: true,
  });
  const data = state.data;
  const activeStatus = state.active;

  return (
    <Box {...sectionWrapper} id="pricing_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} />
          <Heading {...secHeading} />
        </Box>
        <Box {...secTitleWrapper}>
          <Heading {...secHeading} content="14-Day Free Trial."/>
          <Text {...sectionParagraph} content="Every SaleFreaks fully-automated dropshipping package comes with a free 14-day trial so you can try it first, and every package can be upgraded or downgraded if and when you need more or less services." />
          <Text {...sectionParagraph} content="We are 100% transparent with our pricing. Each package includes EVERYTHING you need to fully automate your own dropshipping store." />
          <PricingButtonWrapper>
            <Button
              title="GBP"
              className={activeStatus ? 'active-item' : ''}
              onClick={() =>
                setState({ data: GBP_PRICING_TABLE, active: true })
              }
            />
            <Button
              title="USD"
              className={activeStatus === false ? 'active-item' : ''}
              onClick={() =>
                setState({ data: YEARLY_PRICING_TABLE, active: false })
              }
            />
          </PricingButtonWrapper>
        </Box>
        <Box {...row}>
          <GlideCarousel
            carouselSelector="pricing-carousel"
            options={pricingCarouselOptions}
            controls={true}
            bullets={true}
            numberOfBullets={3}
          >
            <>
              {data.map((pricingTable, index) => (
                <GlideSlide key={`pricing-table-${index}`}>
                  <PricingTable
                    freePlan={pricingTable.freePlan}
                    className={pricingTable.ribbon ? (
                      "pricing_table--ribbon"
                    ) : (
                      "pricing_table"
                    )}
                  >
                    {pricingTable.ribbon ? (
                      <PricingRibbon>
                        <div className='ribbon-wrapper'>
                          <Text content="BEST SELLER" {...ribbonStyle} />
                        </div>
                      </PricingRibbon>
                    ) : (<div></div>)}
                    <PricingHead>
                      <Heading content={pricingTable.name} {...nameStyle} />
                      <i><Text
                        content={pricingTable.description}
                        {...descriptionStyle}
                      /></i>
                    </PricingHead>
                    <PricingPrice>
                      <Text content={pricingTable.price} {...priceStyle} />
                      {pricingTable.vatLabel ? (
                        <span>+VAT</span>
                      ) : (
                        <span></span>
                      )}
                      <Text
                        content={pricingTable.priceLabel}
                        {...priceLabelStyle}
                      />
                    </PricingPrice>
                    <PricingButton>
                      <Link href={pricingTable.url}>
                        <a>
                          {pricingTable.freePlan ? (
                            <Button
                              title={pricingTable.buttonLabel}
                              {...buttonStyle}
                            />
                          ) : (
                            <Button
                              title={pricingTable.buttonLabel}
                              {...buttonFillStyle}
                            />
                          )}
                        </a>
                      </Link>
                    </PricingButton>
                    <PricingList>
                      {pricingTable.listItems.map((item, index) => (
                        <ListItem key={`pricing-table-list-${index}`}>
                          <Icon
                            icon={checkmark}
                            className="price_list_icon"
                            size={13}
                          />
                          <Text content={item.content} {...listContentStyle} />
                        </ListItem>
                      ))}
                    </PricingList>
                  </PricingTable>
                </GlideSlide>
              ))}
            </>
          </GlideCarousel>
        </Box>
      </Container>
    </Box>
  );
};

PricingSection.propTypes = {
  sectionWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  sectionParagraph: PropTypes.object,
  ribbonStyle: PropTypes.object,
  nameStyle: PropTypes.object,
  descriptionStyle: PropTypes.object,
  priceStyle: PropTypes.object,
  priceLabelStyle: PropTypes.object,
  listContentStyle: PropTypes.object,
};

PricingSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['60px', '80px', '80px', '80px', '80px'],
    pb: ['20px', '20px', '20px', '80px'],
    bg: '#182b37'
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  secTitleWrapper: {
    ml: 'auto',
    mr: 'auto',
    mb: ['50px', '60px'],
    width: ['100%', '100%', '100%', '60%'],
  },
  secText: {
    content: 'PRICING PLANS',
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '14px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#fff',
    mb: '10px',
  },
  secHeading: {
    content: 'SaleFreaks "All-In-One" Package Pricing',
    textAlign: 'center',
    fontSize: ['24px', '30px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: '20px',
  },
  sectionParagraph: {
    color: '#fff',
    textAlign: 'center',
  },
  col: {
    width: [1, 1 / 2, 1 / 2, 1 / 3],
    pr: '15px',
    pl: '15px',
  },
  ribbonStyle: {
    fontSize: ['16px', '16px', '18px', '18px', '18px'],
    fontWeight: '500',
    color: '#182b37',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '0',
  },
  nameStyle: {
    fontSize: ['20px', '20px', '22px', '22px', '22px'],
    fontWeight: '500',
    color: '#fff',
    letterSpacing: '-0.025em',
    textAlign: 'center',
    mb: '12px',
  },
  descriptionStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
    fontWeight: '300',
  },
  priceStyle: {
    as: 'span',
    display: 'inline-block',
    fontSize: ['36px', '36px', '40px', '40px', '40px'],
    color: '#fff',
    textAlign: 'center',
    mb: '5px',
    letterSpacing: '-0.025em',
  },
  priceLabelStyle: {
    fontSize: ['13px', '14px', '14px', '14px', '14px'],
    color: '#fff',
    lineHeight: '1.75',
    textAlign: 'center',
    mb: '0',
  },
  buttonStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primary',
    width: '222px',
    maxWidth: '100%',
  },
  buttonFillStyle: {
    type: 'button',
    fontSize: '14px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '10px',
    pr: '10px',
    colors: 'primaryWithBg',
    width: '200px',
    maxWidth: '100%',
  },
  listContentStyle: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    mb: '0',
  },
};

export default PricingSection;
