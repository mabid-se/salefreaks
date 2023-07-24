import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import { Features2 } from 'common/data/Saas';
import Container from 'common/components/UI/Container';
import VisitorSectionWrapper, { SectionObject } from './featuresDetailed.style';

import ImageBg from 'common/assets/image/saas/visitor_bg.png';
import FeatureMainImage1 from 'common/assets/image/saas/feature1_Locator.jpg';
import FeatureMainImage2 from 'common/assets/image/saas/feature2_ProductImport_LG.jpg';
import FeatureMainImage3 from 'common/assets/image/saas/feature3_AutoOrder.jpg';
import FeatureMainImage4 from 'common/assets/image/saas/feature4_Repricing.jpg';
import FeatureMainImage5 from 'common/assets/image/saas/feature5_Vero.jpg';
import FeatureMainImage6 from 'common/assets/image/saas/feature6_Shield.jpg';
import FeatureMainImage7 from 'common/assets/image/saas/feature7_APIPro.jpg';
import FeatureMainImage8 from 'common/assets/image/saas/feature8_BulkImport.jpg';

const VisitorSection = ({
  sectionHeader,
  sectionTitle,
  title,
  description,
  textAreaLeft,
  textAreaRight,
  imageWrapper,
  btnStyle,
}) => {
  return (
    <section id="visitorSection">
      <Container>
        <Box {...sectionHeader}>
          <Heading className="features_title" {...sectionTitle} content="SaleFreaks Features" />
        </Box>
      </Container>
      <VisitorSectionWrapper>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={FeatureMainImage1?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaRight}>
              <FeatureBlock
                title={
                  <Heading
                  content="Profit Seeking Product Locator & Hot Seller Research Tool"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="Scan 10's of thousands of Amazon results comparing against Ebay automatically to find profitable, fast-selling & trending products. You can filter by multiple criteria in seconds including - most profitable, eBay rank (coldest to hottest sellers), Amazon star rating, review count, profit percentage, number of competitors selling same item, Amazon Prime shipping or not, profit % and £ or $ and more."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject className="feature-image__wrapper">
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade right>
                  <Image src={FeatureMainImage2?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaLeft}>
              <FeatureBlock
                title={
                  <Heading
                  content="High Conversion Amazon Product Importer & eBay Listing Generator"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="The Salefreaks Product Importer & eBay Listing Generator extracts all the information including photos, description, titles and more from your supplier and automatically fills in the gaps to make sure you have all the specifics required for listing to eBay even if the source listing doesn't!"
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={FeatureMainImage3?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaRight}>
              <FeatureBlock
                title={
                  <Heading
                  content="Fully Automated, Hands Free, Order & Fulfillment Tool"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="When you make sales to your eBay customers you'll need to fulfill those orders. This can be time consuming and mistake prone if you try to do it yourself. Instead, let SaleFreaks 'auto-order' feature do it for you. Unlike other dropshipping software, we don't sting you with huge auto-order bills. We include a significant amount of 'free orders' in every package knowing your costs are under control and how much you're making."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject className="feature-image__wrapper">
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade right>
                  <Image src={FeatureMainImage4?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaLeft}>
              <FeatureBlock
                title={
                  <Heading
                  content="Stock Price Monitoring & Repricing Engine"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="One of the keys to managing a profitable dropshipping business is making sure your prices are monitored and changed to maintain profit margins across platforms and look for 'out of stock' issues. SaleFreaks does this for you. All day every day across all your listings without you having to 'do' anything!"
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={FeatureMainImage5?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaRight}>
              <FeatureBlock
                title={
                  <Heading
                  content="VeRO Notification Tool & VeRO Shredder"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="SaleFreaks has been powering dropshipping stores for well over a decade now and no other tool has built up the VeRO database that we have including ASINS, brand names and keywords that are known to cause problems for you. Our VeRO account safety tool protects your account and prevents the listing of items that infringe the intellectual property rights of others using a traffic light system (red, amber, green) meaning you have little to NO trouble with eBay suspensions or other account issues."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject className="feature-image__wrapper">
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade right>
                  <Image src={FeatureMainImage6?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaLeft}>
              <FeatureBlock
                title={
                  <Heading
                  content="SaleFreaks Shield (Non-API Solution)"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="For new accounts that have never been connected to dropshipping software before, our Non-API solution is the most powerful in the market. It works by making you appear to be a normal Ebay user and NOT a dropshipper using software meaning you get MORE visibility in the best match algorithm, MUCH higher sales and more overall profit."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject>
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade left>
                  <Image src={FeatureMainImage7?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaRight}>
              <FeatureBlock
                title={
                  <Heading
                  content="SaleFreaks API-PRO Solution"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="For accounts that have been connected to dropshipping before or flagged eBay accounts, our API-PRO fully automated dropshipping software will power your entire business, easily at scale."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <VisitorSectionWrapper>
          <SectionObject className="feature-image__wrapper">
            <Card className="objectWrapper" {...imageWrapper}>
              <Zoom>
                <Image src={ImageBg?.src} alt="BgImage" />
              </Zoom>
              <Card className="dashboardWrapper" {...imageWrapper}>
                <Fade right>
                  <Image src={FeatureMainImage8?.src} alt="VisitorDashboard1" />
                </Fade>
              </Card>
            </Card>
          </SectionObject>
          <Container>
            <Box {...textAreaLeft}>
              <FeatureBlock
                title={
                  <Heading
                  content="Bulk Importing Tool"
                    {...title}
                  />
                }
                description={
                  <Text
                  content="Easily migrate products & accounts from one store to another, or from another software tool to SaleFreaks. You can also find hot selling items from other stores, make a CSV file of it and upload them to your store."
                    {...description}
                  />
                }
                // button={
                //   <Link href="#">
                //     <a>
                //       <Button title="HOW IT WORKS" {...btnStyle} />
                //     </a>
                //   </Link>
                // }
              />
            </Box>
          </Container>
      </VisitorSectionWrapper>
      <Container>
        <Box {...sectionHeader}>
          <Heading className="features_title" {...sectionTitle} content="And much, much more..." />
        </Box>
      </Container>
    </section>
  );
};

VisitorSection.propTypes = {
  sectionHeader: PropTypes.object,
  sectionTitle: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  btnStyle: PropTypes.object,
};

VisitorSection.defaultProps = {
  // section header default style
  sectionHeader: {
    mb: ['40px', '40px', '40px', '80px'],
  },
  // section title default style
  sectionTitle: {
    textAlign: 'center',
    fontSize: ['24px', '30px'],
    fontWeight: '700',
    color: '#182b37',
    letterSpacing: '-0.025em',
    mb: '0',
    mt: '80px',
  },
  textAreaLeft: {
    width: ['100%', '100%', '45%'],
    mr: [0, 0, '58%'],
  },
  textAreaRight: {
    width: ['100%', '100%', '45%'],
    ml: [0, 0, '58%'],
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  title: {
    fontSize: ['20px', '26px', '26px', '36px', '48px'],
    fontWeight: '400',
    color: '#182b37',
    letterSpacing: '-0.010em',
    mb: '20px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
    lineHeight: '1.5',
  },
  description: {
    fontSize: '16px',
    color: '#343d48cc',
    lineHeight: '1.75',
    mb: '33px',
    maxWidth: ['100%', '100%', '100%', '440px', '440px'],
  },
  btnStyle: {
    minWidth: '156px',
    fontSize: '14px',
    fontWeight: '500',
    color: '#fff',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'primaryWithBg',
  },
};

export default VisitorSection;
