import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {
  width,
  height,
  display,
  space,
  color,
  borders,
  boxShadow,
  borderRadius,
  position,
  top,
  left,
  right,
  bottom,
  alignItems,
  justifyContent,
  flexWrap,
} from 'styled-system';

// Glide wrapper style
const GlideWrapper = styled.div`
  ${width}
  ${height}
  ${space}
`;

// Glide slide wrapper style
const GlideSlideWrapper = styled.li`
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
  ${borderRadius}
`;

// Button wrapper style
const ButtonWrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  &.glide__prev--area {
    left: -1rem;
    @media (min-width: 767px) {
      left: -2.5%;
    }
    @media (min-width: 1500px) {
      left: -7.5%;
    }
  }
  &.glide__next--area {
    right: -1rem;
    @media (min-width: 767px) {
      right: -2.5%;
    }
    @media (min-width: 1500px) {
      right: -7.5%;
    }
  }
  ${display}
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
  ${borderRadius}
  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}
`;

// ButtonControlWrapper style
const ButtonControlWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${justifyContent}
  ${position}
  ${top}
  ${left}
  ${right}
  ${bottom}
`;

// BulletControlWrapper style
const BulletControlWrapper = styled.div`
  ${display}
  ${space}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
`;

// BulletButton style
const BulletButton = styled.button`
  cursor: pointer;
  width: 10px;
  height: 10px;
  margin: 4px;
  border: 0;
  padding: 0;
  outline: none;
  border-radius: 50%;
  background-color: #d6d6d6;

  &:hover,
  &.glide__bullet--active {
    background-color: #869791;
  }

  ${display}
  ${space}
  ${color}
  ${borders}
  ${boxShadow}
  ${borderRadius}
  ${width}
  ${height}
`;

// default button style
const DefaultBtnLeft = styled.button`
  padding: 0 10px;
  border: none;
  background: none;
  cursor: pointer;
  transform: rotate(180deg);
  &:before {
    content: '\f109';
    border-radius: 50%;
    color: ${themeGet('colors.primary', '#182b37')};
    font-size: 2rem;
    padding: 10px;
    @media (min-width: 767px) {
      font-size: 2.5rem;
    }
  }
`;

// default button style
const DefaultBtnRight = styled.button`
  padding: 0 10px;
  border: none;
  background: none;
  cursor: pointer;
  &:before {
    content: '\f109';
    border-radius: 50%;
    color: ${themeGet('colors.primary', '#182b37')};
    font-size: 2rem;
    padding: 10px;
    @media (min-width: 767px) {
      font-size: 2.5rem;
    }
  }
`;

export {
  GlideSlideWrapper,
  ButtonControlWrapper,
  ButtonWrapper,
  BulletControlWrapper,
  BulletButton,
  DefaultBtnLeft,
  DefaultBtnRight,
};
export default GlideWrapper;
