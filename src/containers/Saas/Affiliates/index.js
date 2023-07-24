import React from 'react';
import PropTypes from 'prop-types';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Container from 'common/components/UI/Container';
import AffiliateSectionWrapper, { List, ListItem } from './affiliatesection.style';
import Button from 'common/components/Button';

const TermSection = ({
    sectionHeader,
    pageTitle,
    sectionParagraph,
    pageSubTitle,
    btnStyle,
    description,
    row,
}) => {

    return (
        <AffiliateSectionWrapper>
            <Container>
                <Box {...sectionHeader}>
                    <Heading
                        content="Affiliates: Earn A Passive 20% Recurring Monthly Income For The Lifetime Of The Client By Promoting SaleFreaks"
                        {...pageTitle}
                    />

                    <Text
                        content="SalesFreaks Is A Fully-Automated, All-In-One Dropshipping Tool That Helps You Build Your Dropshipping Business On Auto-Pilot Without The Need For Any Other Tools"
                        {...description}
                    />
                </Box>


                <Box {...sectionHeader}>
                    <Text
                        content="SalesFreaks pays 20% per month recurring commissions for the LIFETIME of the client!"
                        {...sectionParagraph} />

                    <Text
                        content="...Other dropshipping software pays as little as just 5-15% and aim to 'cap' your payments to a few months or maybe a year!"
                        {...sectionParagraph} />

                    <Text
                        content="You simply signup below - for FREE - and then recommend SaleFreaks to your friends, family and followers using a unique affiliate link that we send you... Then, when somebody purchases, we send you money!"
                        {...sectionParagraph} />

                    <Text
                        content="Every month they remain a customer, we send you MORE money... until the END OF TIME! (...or they cancel lol...)"
                        {...sectionParagraph} />

                    <Text
                        content="We have super high conversion rates, and because our software is all in one, they tend to stick around for longer! Making you MORE money!"
                        {...sectionParagraph} />

                    <Text
                        content="With world class customer support and great software that makes our clients MORE money, it’s a no-brainer, a true win-win for YOU and the clients you send!"
                        {...sectionParagraph} />
                </Box>


                <Box {...sectionHeader}>
                    <Heading
                        content="Here's What You Really Want To Know:"
                        {...pageSubTitle}
                    />
                    <List>
                        <ListItem>
                            <a className="ListItem">
                                20% Monthly Recurring Income - Send Once Get Paid Again & Again!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Tracked By Tapfiliate - Highly Accurate Tracking!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Very High Retention Rate - Low Attrition Meaning You Get Paid More!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Software Constantly Evolving & Being Updated - Happy Long-Term Customers
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                High Converting Sales Funnel - More Of Your Traffic Will Buy!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Monthly Payouts Via Paypal - On Time Every Time!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                We Will Work Directly With Affiliates With Audiences To Help Pre-Sell Or Demo SaleFreaks - Webinars Interviews, Video Content, Launches
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Benefit From Our Selling Experience!
                            </a>
                        </ListItem>

                        <ListItem>
                            <a className="ListItem">
                                Great Software That Becomes Essential To Your Customer - They Will THANK You For Sending Them To SaleFreaks!
                            </a>
                        </ListItem>
                    </List>
                </Box>


                <Box {...row}>
                    {/* <ButtonGroup className="button_group"> */}
                        <a href="https://salefreaks.tapfiliate.com/" >
                            <Button title="Become A SaleFreaks Affiliate Today" {...btnStyle} />
                        </a>
                    {/* </ButtonGroup> */}
                </Box>
            </Container >
        </AffiliateSectionWrapper >
    );
};

// TrainingSection style props
TermSection.propTypes = {
    sectionHeader: PropTypes.object,
    pageTitle: PropTypes.object,
    description: PropTypes.object,
    sectionParagraph: PropTypes.object,
    pageSubTitle: PropTypes.object,
    row: PropTypes.object,
    btnStyle: PropTypes.object,
};

TermSection.defaultProps = {
    sectionHeader: {
        ml: 'auto',
        mr: 'auto',
        width: ['100%', '100%', '100%', '100%'],
        mb: ['40px', '40px', '40px', '80px'],
    },

    pageTitle: {
        fontSize: ['22px', '34px', '30px', '55px'],
        fontWeight: '700',
        color: '#182b37',
        letterSpacing: '-0.025em',
        mb: ['20px', '25px'],
        lineHeight: '1.5',
    },

    pageSubTitle: {
        fontSize: ['24px', '30px'],
        fontWeight: '700',
        color: '#182b37',
        letterSpacing: '-0.025em',
        mb: '0',
    },

    sectionParagraph: {
        mt: '5px',
        mb: '0',
        textAlign: "justify",
        fontSize: '18px',
        lineHeight: '1.75',
    },

    btnStyle: {
        minWidth: ['120px', '120px', '120px', '156px'],
        fontSize: ['13px', '14px'],
        fontWeight: '500',
        colors: 'primaryWithBg',
    },

    description: {
        fontSize: '16px',
        color: '#343d48cc',
        lineHeight: '1.75',
        mb: '0',
    },

    row: {
        flexBox: true,
        flexWrap: 'wrap',
        flexDirection: 'column',
        alignItems: 'center',
    },
};

export default TermSection;
