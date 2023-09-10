import React, { useState, useEffect, useRef } from 'react';
import { GridWrapper, Row, Column,
   RegisterEmailInput, RegisterForm, SignUpButton,
   RegisterEmailInputErrorMessage, EmailConfirmationMessage } from './Register.styled';
import Header from '../Header';
import Footer from '../Footer';

function Register(){
   const mediaMatch = window.matchMedia('(min-width: 1200px)');
   const [matches, setMatches] = useState(mediaMatch.matches);
   const [email, setEmail ] = useState('');
   const [isEmailValid, setIsEmailValid ] = useState(true); 
   const [isEmailConfirmed, setIsEmailConfirmed ] = useState(false);
   const ref = useRef(null);

   useEffect(() => {
      const handler = e => setMatches(e.matches);
      mediaMatch.addListener(handler);
      return () => mediaMatch.removeListener(handler);
    });

    const handleOnFocus = (e) => {
      e.preventDefault();
      setIsEmailValid(true);
      setEmail('');
    }

    const handleFormSubmit = (e) => {{
      e.preventDefault();
      if (email.length === 0) {
         setEmail('');
      } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
         setIsEmailValid(false);
      } else {
         setIsEmailConfirmed(true);
         const formData = {
            email: email
         }
         
         fetch('http://localhost:8080/v1/emailFormSubmit', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               'Accept': 'application/json'
            },
            body: JSON.stringify(formData), 
         }).then(response => console.log(response)).catch(error => {
            console.log('ERROR: ' + error);
         });
      }
    }}
 
   return(
   <>
      <Header/>
         <GridWrapper style={styles.container(matches)}>
            <Row>
               <Column>
                  <h2>Swing into Success with 
                     <br/> Your Perfect Swing!</h2>
                  <p>
                  Discover the ultimate golfing experience with 
                  our app that connects you to a diverse range of 
                  skilled golf instructors right in your area. 
                  Easily browse through profiles of experienced golfers, 
                  each offering personalized lessons tailored to your 
                  skill level. Choose a time that suits your schedule,
                  and if it's a public lesson, effortlessly join their
                  allocated session. Track your progress as you embark
                  on your golfing journey, empowering both beginners and
                  seasoned players to improve their game and enjoy the
                  sport to the fullest. Elevate your golfing adventure
                  with us – where progress and passion unite.
                  </p>
               </Column>
               <Column>
                  <img src="rectangle-background_taller.png" alt='form_background_rectangle'/>
                  <RegisterForm>
                  <h2>Get Early Access</h2>
                  <h3>Join our waitlist and get access to <br/>
                   LearnFlex as an early bird member</h3>
                   <RegisterEmailInputErrorMessage  isEmailValid={isEmailValid}>Invalid Email Address. Please try again.</RegisterEmailInputErrorMessage>
                     <RegisterEmailInput 
                        type="text"
                        placeholder='Email'
                        ref={ref}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        onFocus={handleOnFocus}
                        style={styles.emailErrorInput(isEmailValid)}
                        isEmailConfirmed={isEmailConfirmed}
                     />
                     <SignUpButton onClick={handleFormSubmit} style={styles.emailErrorButton(isEmailValid)} isEmailValid={isEmailValid} isEmailConfirmed={isEmailConfirmed}>
                        Sign Up</SignUpButton>
                     <div style={styles.emailConfirmation(isEmailConfirmed)}>
                        <img src='email.png' alt='email_confirmation_icon'/>
                        <EmailConfirmationMessage>Successfully registered!</EmailConfirmationMessage>
                     </div>
                  </RegisterForm>
                  
                  
               </Column>
            </Row>
         </GridWrapper>
      <Footer />
   </>
   );
}

const styles = {
   container: isExpandMargin => ({
      marginRight: isExpandMargin ? '28.4%' : '0%',
      marginLeft: isExpandMargin ? '20%' : '0%'
   }),
   emailErrorInput: isEmailValid => ({
      border: isEmailValid ? '2px solid #2e3612' : '2px solid #d11124'
   }),
   emailErrorButton: isEmailValid => ({
      border: isEmailValid ? '2px solid #2e3612' : '2px solid #d11124'
   }),
   emailConfirmation: isEmailConfirmed => ({
      display: !isEmailConfirmed ? 'none' : ''
   })
 };

Register.propTypes = {};

Register.defaultProps = {};

export default Register;
