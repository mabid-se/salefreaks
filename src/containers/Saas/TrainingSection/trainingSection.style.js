import styled from 'styled-components';

const FeatureSectionWrapper = styled.section`
  padding: 80px 0;
  @media (max-width: 990px) {
    padding: 60px 0 60px 0;
  }
  @media (max-width: 767px) {
    padding: 60px 0 30px 0;
  }

  .feature__block {
    position: relative;
    height: 100%;
    transition: box-shadow 0.3s ease;
    @media (max-width: 500px) {
      padding: 30px 0;
    }
    .icon__wrapper {
      position: relative;
      border-bottom-left-radius: 6px;
      overflow: hidden;
      .flaticon-flask {
        &:before {
          margin-left: 8px;
        }
      }
    }
    &:hover {
      ${'' /* box-shadow: 0 40px 90px -30px rgba(39, 79, 117, 0.2); */}
    }
  }

  .row {
    > .col {
      &:nth-child(-n + 3) {
      }

      &:nth-child(3n + 3),
      &:last-child {
      }

      .feature__block {
        .icon__wrapper {
          background: #ebfff2;
          color: #29c05e;
        }
      }
    }
  }
`;

export default FeatureSectionWrapper;
