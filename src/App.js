import React from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import { Header } from './components';

function App() {
  const navigate = useNavigate();
  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <>
      <Header />
      <div className='gridWrapper'>
        <div className='row'>
          <div className='column'>
            <h3 style={{ color: '#ffffff', opacity: '80%'}}>
                Master Golf Techniques
                Affordably, Anytime, and Anywhere.
              </h3>
              <p style={{ color: '#ffffff', opacity: '80%'}}>
                Welcome to the future of golfing! Our app connects you with experienced golf mentors 
                who offer personalized lessons to help you master the game. Whether you're a beginner 
                or looking to refine your skills, our mentors are here for you. If you're an experienced 
                golfer, you can turn your passion into extra cash by teaching others. Each mentor is 
                rated by users, ensuring quality instruction. Join our golfing community, book lessons 
                at your convenience, and elevate your game, one swing at a time. Download now and take 
                the first step towards golfing excellence! ⛳
              </p>
              <button className='registerButton' onClick={navigateRegister}>Register</button>
          </div>
          <div className='column'>
            <img src="landing_page_3.png" alt="landing_page_img"/>
          </div>
        </div>
      </div>
      <div className='footerWrapper'>
         <p className='footerText'>&copy; 2023 LearnFlex Inc. All rights reserved.</p>
      </div>
    </>
    );
  }
  
  export default App;
  