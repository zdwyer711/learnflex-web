import React, { useState, useEffect } from 'react';
import { FooterWrapper, FooterText, FooterGridWrapper } from './Footer.styled';

function Footer() {
  const mediaMatch = window.matchMedia('(min-width: 1200px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  
  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });

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
