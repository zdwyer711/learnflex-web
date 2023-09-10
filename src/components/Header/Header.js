//Header.js
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DefaultButton, HeaderWrapper, HeaderGridWrapper, 
  HeaderRow, HeaderColumn, } from './Header.styled';

function Header(){
  const mediaMatch = window.matchMedia('(min-width: 1200px)');
  const [matches, setMatches] = useState(mediaMatch.matches);
  const navigate = useNavigate();
  useEffect(() => {
    const handler = e => setMatches(e.matches);
    mediaMatch.addListener(handler);
    return () => mediaMatch.removeListener(handler);
  });
  
  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <HeaderWrapper>
         <HeaderGridWrapper style={styles.container(matches)}>
            <HeaderRow>
               <HeaderColumn>
               <a href='/'>
                  <img src="logo-learnflex.png" style={{ paddingTop: '6px'}}/></a>
               <a href='/' style={{ textDecoration: 'none' }}>
                  <h3 style={{ paddingTop: '8px', color: 'white' }}>LearnFlex</h3> 
               </a>
               </HeaderColumn>
               <HeaderColumn>
                  <DefaultButton onClick={navigateRegister}>Sign Up</DefaultButton>
               </HeaderColumn>
            </HeaderRow>
         </HeaderGridWrapper>
      </HeaderWrapper>
  );
}

const styles = {
  container: isExpandMargin => ({
     marginRight: isExpandMargin ? '28.4%' : '0%',
     marginLeft: isExpandMargin ? '20%' : '0%'
  })
};

export default Header;