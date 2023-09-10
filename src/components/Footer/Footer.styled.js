import styled from 'styled-components';

export const FooterText = styled.p`
    color: #ffffff;
    font-family: initial;
    opacity: 90%;
`;

export const FooterWrapper = styled.div`
    z-index: 30;
    position: fixed;
    background-color: #171815;
    width: 100%;
    height: 50px;
    bottom: 0;
    text-align: center;
`;

export const FooterGridWrapper = styled.div`
    background-color: #171815;
    margin-right: 28.4%;
    margin-left: 20%;
    min-height: 56px;
    display: grid;

    @media screen and (max-width: 1200px) {
      margin-right: 0% !important;
      margin-left: 0% !important;
    }
`;