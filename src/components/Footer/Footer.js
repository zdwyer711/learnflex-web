import React from 'react';
import { FooterWrapper, FooterText, FooterGridWrapper } from './Footer.styled';

function Footer() {

  return(
    <FooterWrapper>
      <FooterGridWrapper>
        <FooterText>
            &copy; 2023 Your Company. All rights reserved.
        </FooterText>
      </FooterGridWrapper>
    </FooterWrapper>
  );
}

export default Footer;
