import styled, { createGlobalStyle } from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Roboto', sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Roboto', sans-serif;
  }

  section {
    position: relative;
  }

  .drawer-content-wrapper{
    background-color: ${themeGet('colors.secondary', '#182b37')} !important;

    @media (max-width: 767px) {
      width: 300px!important;
    }
    .drawer-content {
      padding: 60px;    
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      @media (max-width: 767px) {
        padding: 50px 40px 30px 40px;
      }
      .mobile_menu {
        margin-bottom: 40px;
        flex-grow: 1;
        @media (max-width: 767px) {
          margin-bottom: 30px;
        }
        li{
          margin-bottom: 35px;
          @media (max-width: 767px) {
            margin-bottom: 25px;
          }
          a{
            font-size: 20px;
            font-weight: 400;
            color: ${themeGet('colors.white', '#ffffff')};
            position: relative;
            transition: 0.15s ease-in-out;
            @media (max-width: 767px) {
              font-size: 18px;
            }
            &:hover {
              color: ${themeGet('colors.primary', '#adf8af')};
            }
            &:before{
              content: '';
              width: 7px;
              height: 7px;
              background: ${themeGet('colors.primary', '#adf8af')};
              border-radius: 50%;
              position: absolute;
              top: 50%;
              left: -15px;
              transform: translateY(-50%);
              opacity: 0;
            }
          }
          &.is-current {
            a {
              color: ${themeGet('colors.primary', '#adf8af')};
              &:before{
                opacity: 1;
              }
            }
          }
        }
      }
      .navbar_drawer_button button{
        width: 100%;
      }
    }

    .reusecore-drawer__close{
      width: 34px;
      height: 34px;
      position: absolute;
      top: 20px;
      right: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      @media (max-width: 767px) {
        top: 15px;
        right: 15px;
      }
      &:before{
        content: '\f10b';
        font-family: Flaticon;
        font-size: 26px;
        color: ${themeGet('colors.primary', '#ffffff')};
        transform: rotate(45deg);
        display: block;
      }
    }
  }

  /* Modal default style */
  button.modalCloseBtn {
    color: ${themeGet('colors.white', '#ffffff')} !important;

    &.alt {
      background-color: ${themeGet('colors.primary', '#182b37')} !important;
      box-shadow: 0px 9px 20px -5px rgba(82, 104, 219, 0.57) !important;
    }   
  }
`;

export const ContentWrapper = styled.div`
  position: relative;
  overflow: hidden;
  a:-webkit-any-link {
    text-decoration: none;
  }
  .sticky-nav-active {
    .hosting_navbar {
      background-color: ${themeGet('colors.secondary', '#182b37')};
      box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
      padding: 15px 0;
    }
  }

  .hosting_navbar {
    background-color: ${themeGet('colors.secondary', '#182b37')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    transition: 0.35s ease-in-out;
    padding: 30px 0;
    .main_menu {
      li {
        display: inline-block;
        padding-left: 13px;
        padding-right: 13px;
        &:first-child {
          padding-left: 0;
        }
        &:last-child {
          padding-right: 0;
        }
        &.is-current {
          a {
            color: ${themeGet('colors.primary', '#adf8af')};
          }
        }
        a {
          color: ${themeGet('colors.white', '#ffffff')};
          font-size: 16px;
          font-weight: 400;
          padding: 5px;
          transition: 0.15s ease-in-out;
          &:hover {
            color: ${themeGet('colors.primary', '#adf8af')};
          }
        }
      }
      @media (max-width: 990px) {
        display: none;
      }
    }
    .navbar_button {
      @media (max-width: 990px) {
        display: none;
      }
    }
    .reusecore-drawer__handler {
      @media (min-width: 991px) {
        display: none !important;
      }
      .hamburgMenu__bar {
        > span {
        }
      }
    }
  }

  .trial-section {
    background: linear-gradient(to bottom, #fafbff 0%, #f7f8fd 100%);

    .button_group {
      text-align: center;
    }
  }

  @media (max-width: 990px) {
    .glide__slide--active .pricing_table {
      box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.05);
      border: 2px solid #e4e9ee;
    }

    .glide__slide--active .pricing_table--ribbon {
      border: 3px solid ${themeGet('colors.primary')} !important;
    }
  }

  // pricing slider bullets
  #pricing-carousel .glide__bullets {
    display: none;
    @media (max-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export const ButtonGroup = styled.div``;
