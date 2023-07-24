import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const PricingTable = styled.div`
  border: 2px solid #f2f4f7;
  border-radius: 5px;
  padding: 60px 45px;
  border-radius: 5px;
  margin-bottom: 30px;
  @media (max-width: 767px) {
    border: none;
    padding: 45px 35px;
  }

  &.pricing_table--ribbon {
    border: 3px solid ${themeGet('colors.primary')};
    position: relative;

    @media (max-width: 767px) {
      border: none;
    }

    .ribbon-wrapper {
      position: relative;
      padding: 7px 0;
      top: 35px;
      left: -42px;
      width: 200px;
      background-color: ${themeGet('colors.primary')};
      color: #fff;
      text-align: center;
      transform: rotate(-45deg);
    }
  }
`;

const PricingRibbon = styled.div`
  width: auto;
  height: 200px;
  overflow: hidden;
  position: absolute;
  top: -3px;
  left: -3px;
`;

const PricingHead = styled.div`
  margin-bottom: 40px;
`;

const PricingPrice = styled.div`
  margin-bottom: 30px;
  text-align: center;
  
  span {
    color: #fff;
  }
`;

const PricingButton = styled.div`
  text-align: center;
  margin-bottom: 55px;
`;

const PricingList = styled.div``;

const ListItem = styled.div`
  display: flex;
  margin-bottom: 19px;
  &:last-child {
    margin-bottom: 0;
  }
  .price_list_icon {
    color: #18d379;
    margin-right: 10px;
  }
`;

const SwitchWrapper = styled.div`
  text-align: center;
  margin-top: 20px;
  .reusecore__switch {
    .reusecore__field-label {
      font-size: 16px;
      font-weight: 400;
      color: #5c636c;
      cursor: pointer;
    }
    input[type='checkbox'] {
      &:checked {
        + div {
          width: 40px !important;
          background-color: ${themeGet('colors.primary')};
          > div {
            left: 17px !important;
          }
        }
      }
      + div {
        background-color: #f0f0f0;
        background-color: #f0f0f0;
        border: 0;
        width: 40px;
        height: 25px;
        > div {
          background-color: #fff;
          box-shadow: 0px 2px 3px 0.24px rgba(31, 64, 104, 0.25);
          width: 21px;
          height: 21px;
          top: 2px;
          left: 2px;
        }
      }
    }
  }
`;

const PricingButtonWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  .reusecore__button {
    font-size: 16px;
    font-weight: 400;
    color: #6f7a87;
    background: transparent;
    height: 50px;
    width: 165px;
    border: 1px solid #e4e9ee;
    &:nth-child(1) {
      border-top-left-radius: 5px;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom-left-radius: 5px;
      border-right-color: transparent;
    }
    &:nth-child(2) {
      border-top-left-radius: 0;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-left-color: transparent;
    }
    &.active-item {
      color: ${themeGet('colors.white')};
      border-color: ${themeGet('colors.primary')};
    }
    @media (max-width: 575px) {
      font-size: 14px;
      height: 44px;
      width: 120px;
      padding: 0 5px;
    }
  }
`;

export {
  PricingRibbon,
  PricingHead,
  PricingPrice,
  PricingButton,
  PricingList,
  ListItem,
  SwitchWrapper,
  PricingButtonWrapper,
};
export default PricingTable;
